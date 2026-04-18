import type { IConverter, IQuoteStore } from "../types/index.js";

/**
 * Converts amounts between any two currencies using the BRL pivot strategy.
 * Depends on IQuoteStore via constructor injection (Dependency Inversion).
 */
export class CurrencyConverter implements IConverter {
  constructor(private readonly store: IQuoteStore) {}

  /**
   * Returns the converted amount or null if a required quote is missing.
   *
   * Strategy:
   *   - same → identity
   *   - BRL → X : amount / X.bid
   *   - X → BRL : amount * X.bid
   *   - X → Y   : (amount * X.bid) / Y.bid  (via BRL pivot)
   */
  convert(amount: number, from: string, to: string): number | null {
    if (!Number.isFinite(amount) || amount <= 0) return null;
    if (from === to) return amount;

    if (from === "BRL") return this.fromBrl(amount, to);
    if (to   === "BRL") return this.toBrl(amount, from);
    return this.crossRate(amount, from, to);
  }

  private fromBrl(amount: number, to: string): number | null {
    const quote = this.store.get(to);
    if (!quote) return null;
    return amount / quote.bid;
  }

  private toBrl(amount: number, from: string): number | null {
    const quote = this.store.get(from);
    if (!quote) return null;
    return amount * quote.bid;
  }

  private crossRate(amount: number, from: string, to: string): number | null {
    const fromQ = this.store.get(from);
    const toQ   = this.store.get(to);
    if (!fromQ || !toQ) return null;
    return (amount * fromQ.bid) / toQ.bid;
  }
}
