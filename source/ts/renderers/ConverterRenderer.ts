import type { IConverterRenderer } from "../types/index.js";
import { BaseRenderer } from "./QuoteCardRenderer.js";

/**
 * Renders the converter output area.
 * Separated from converter logic (Single Responsibility).
 */
export class ConverterRenderer extends BaseRenderer implements IConverterRenderer {
  private readonly outputId = "conv-output";

  renderResult(input: string, output: string | null): void {
    const elem = this.el(this.outputId);
    if (!elem) return;

    if (output === null) {
      elem.innerHTML = `<span class="placeholder">Cotação indisponível — aguarde o carregamento…</span>`;
      return;
    }

    elem.innerHTML =
      `<span class="from-val">${input}</span>` +
      `<span class="eq">&nbsp;=&nbsp;</span>` +
      `<span class="to-val">${output}</span>`;
  }

  renderEmpty(): void {
    const elem = this.el(this.outputId);
    if (elem) elem.innerHTML = `<span class="placeholder">Digite um valor para converter…</span>`;
  }
}
