import type {
  IQuoteRepository,
  IQuoteStore,
  IConverter,
  ICurrencyFormatter,
  CurrencyMeta,
} from "../types/index.js";
import { QuoteCardRenderer } from "../renderers/QuoteCardRenderer.js";
import { StatusRenderer }    from "../renderers/StatusRenderer.js";
import { ConverterRenderer } from "../renderers/ConverterRenderer.js";

const REFRESH_MS   = 60_000;
const DEBOUNCE_MS  = 400;

/**
 * Debounces a function call.
 */
function debounce<T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number,
): (...args: T) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Top-level application controller.
 * All dependencies are injected — fully testable, decoupled (DIP).
 */
export class AppController {
  private readonly cardRenderers: Map<string, QuoteCardRenderer>;
  private readonly statusRenderer   = new StatusRenderer();
  private readonly converterRenderer = new ConverterRenderer();

  constructor(
    private readonly repository: IQuoteRepository,
    private readonly store:      IQuoteStore,
    private readonly converter:  IConverter,
    private readonly formatter:  ICurrencyFormatter,
    private readonly currencies: CurrencyMeta[],
  ) {
    this.cardRenderers = new Map(
      currencies.map((c) => [
        c.code,
        new QuoteCardRenderer(c.code, formatter),
      ]),
    );
  }

  async init(): Promise<void> {
    this.statusRenderer.setLoading();
    this.bindConverterEvents();
    await this.refresh();
    setInterval(() => this.refresh(), REFRESH_MS);
  }

  // ─── Private ────────────────────────────────────────────────────────────────

  private async refresh(): Promise<void> {
    try {
      const codes    = this.currencies.map((c) => c.code);
      const previous = this.store.getAll();
      const quotes   = await this.repository.fetchAll(codes);

      this.store.update(quotes);

      for (const quote of quotes) {
        const renderer = this.cardRenderers.get(quote.code);
        renderer?.render(quote, previous.get(quote.code));
      }

      this.statusRenderer.setOnline(new Date());
    } catch (err) {
      console.error("[AppController] refresh failed:", err);
      this.statusRenderer.setError();
    }
  }

  private bindConverterEvents(): void {
    const amountInput  = document.getElementById("conv-amount")       as HTMLInputElement  | null;
    const fromSelect   = document.getElementById("conv-from-currency") as HTMLSelectElement | null;
    const toSelect     = document.getElementById("conv-to-currency")   as HTMLSelectElement | null;

    const debouncedConvert = debounce(() => this.handleConvert(), DEBOUNCE_MS);

    amountInput?.addEventListener("input",  debouncedConvert);
    fromSelect?.addEventListener("change",  debouncedConvert);
    toSelect?.addEventListener("change",    debouncedConvert);
  }

  private handleConvert(): void {
    const amountInput  = document.getElementById("conv-amount")        as HTMLInputElement  | null;
    const fromSelect   = document.getElementById("conv-from-currency") as HTMLSelectElement | null;
    const toSelect     = document.getElementById("conv-to-currency")   as HTMLSelectElement | null;

    if (!amountInput || !fromSelect || !toSelect) return;

    const raw  = amountInput.value.trim();
    const from = fromSelect.value;
    const to   = toSelect.value;

    if (!raw) {
      this.converterRenderer.renderEmpty();
      return;
    }

    const amount = parseFloat(raw);
    const result = this.converter.convert(amount, from, to);

    const inputFormatted  = this.formatter.format(amount, from);
    const outputFormatted = result !== null
      ? this.formatter.format(result, to)
      : null;

    this.converterRenderer.renderResult(inputFormatted, outputFormatted);
  }
}
