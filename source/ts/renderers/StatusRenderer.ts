import type { IStatusRenderer } from "../types/index.js";
import { BaseRenderer } from "./QuoteCardRenderer.js";

/**
 * Manages the header status indicator: loading / online / error states.
 */
export class StatusRenderer extends BaseRenderer implements IStatusRenderer {
  setLoading(): void {
    this.setText("Carregando cotações…");
    this.setDotColor("var(--sub)");
  }

  setOnline(updatedAt: Date): void {
    const time = updatedAt.toLocaleTimeString("pt-BR");
    this.setText(`Atualizado às ${time}`);
    this.setDotColor("var(--usd)");
    this.hideError();
  }

  setError(): void {
    this.setText("Falha ao atualizar");
    this.setDotColor("var(--down)");
    this.showError();
  }

  private setText(text: string): void {
    const elem = this.el("last-update");
    if (elem) elem.textContent = text;
  }

  private setDotColor(color: string): void {
    const dot = this.el("live-dot") as HTMLElement | null;
    if (dot) dot.style.background = color;
  }

  private showError(): void {
    const banner = this.el("error-banner");
    if (banner) banner.classList.add("visible");
  }

  private hideError(): void {
    const banner = this.el("error-banner");
    if (banner) banner.classList.remove("visible");
  }
}
