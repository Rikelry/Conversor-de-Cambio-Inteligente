import type { ICardRenderer, IQuote, ICurrencyFormatter } from "../types/index.js";

/**
 * Abstract base for all DOM renderers.
 * Provides safe element lookup helpers — subclasses focus on render logic only.
 */
export abstract class BaseRenderer {
  protected el(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  protected require(id: string): HTMLElement {
    const elem = document.getElementById(id);
    if (!elem) throw new Error(`[Renderer] Element #${id} not found in DOM`);
    return elem;
  }
}

// ─── QuoteCardRenderer ────────────────────────────────────────────────────────

/**
 * Renders a single currency card.
 * Handles price flash animations when value changes.
 */
export class QuoteCardRenderer extends BaseRenderer implements ICardRenderer {
  constructor(
    private readonly code: string,
    private readonly formatter: ICurrencyFormatter,
  ) {
    super();
  }

  render(quote: IQuote, previous?: IQuote): void {
    this.renderPrice(quote, previous);
    this.renderBidAsk(quote);
    this.renderBadge(quote);
  }

  private renderPrice(quote: IQuote, previous?: IQuote): void {
    const elem = this.el(`price-${this.code}`);
    if (!elem) return;

    const formatted = this.formatter.format(quote.bid, "BRL");
    elem.textContent = formatted;

    if (previous && previous.bid !== quote.bid) {
      this.flashPrice(elem, quote.bid > previous.bid);
    }
  }

  private renderBidAsk(quote: IQuote): void {
    const bidEl = this.el(`bid-${this.code}`);
    const askEl = this.el(`ask-${this.code}`);
    if (bidEl) bidEl.textContent = this.formatter.format(quote.bid, "BRL");
    if (askEl) askEl.textContent = this.formatter.format(quote.ask, "BRL");
  }

  private renderBadge(quote: IQuote): void {
    const elem = this.el(`badge-${this.code}`);
    if (!elem) return;

    const arrow = quote.isPositive ? "▲" : "▼";
    elem.textContent  = `${arrow} ${quote.formattedPctChange}`;
    elem.className    = `badge ${quote.isPositive ? "up" : "down"}`;
  }

  private flashPrice(elem: HTMLElement, isUp: boolean): void {
    const cls = isUp ? "flash-up" : "flash-down";
    elem.classList.add(cls);
    setTimeout(() => elem.classList.remove(cls), 700);
  }
}
