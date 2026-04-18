import type { IQuote, IQuoteStore } from "../types/index.js";

/**
 * In-memory store for the latest quotes.
 * Single source of truth; decoupled from fetch and render concerns.
 */
export class QuoteStore implements IQuoteStore {
  private readonly store = new Map<string, IQuote>();

  update(quotes: IQuote[]): void {
    for (const q of quotes) {
      this.store.set(q.code, q);
    }
  }

  get(code: string): IQuote | undefined {
    return this.store.get(code);
  }

  getAll(): Map<string, IQuote> {
    return new Map(this.store);
  }

  has(code: string): boolean {
    return this.store.has(code);
  }
}
