import type { IQuote, RawQuote } from "../types/index.js";

/**
 * Immutable domain model representing a single currency quote.
 * Encapsulates parsing and validation of raw API data.
 */
export class Quote implements IQuote {
  readonly code: string;
  readonly name: string;
  readonly bid: number;
  readonly ask: number;
  readonly high: number;
  readonly low: number;
  readonly pctChange: number;
  readonly varBid: number;
  readonly timestamp: Date;

  private constructor(raw: RawQuote) {
    this.code      = raw.code;
    this.name      = raw.name;
    this.bid       = parseFloat(raw.bid);
    this.ask       = parseFloat(raw.ask);
    this.high      = parseFloat(raw.high);
    this.low       = parseFloat(raw.low);
    this.pctChange = parseFloat(raw.pctChange);
    this.varBid    = parseFloat(raw.varBid);
    this.timestamp = new Date(parseInt(raw.timestamp) * 1000);
  }

  /** Factory — validates raw data before constructing */
  static fromRaw(raw: RawQuote): Quote {
    if (!raw.bid || !raw.ask || !raw.code) {
      throw new Error(`[Quote] Dados inválidos para ${raw.code ?? "?"}`);
    }
    return new Quote(raw);
  }

  get isPositive(): boolean {
    return this.pctChange >= 0;
  }

  get formattedPctChange(): string {
    const sign = this.pctChange >= 0 ? "+" : "";
    return `${sign}${this.pctChange.toFixed(2)}%`;
  }
}
