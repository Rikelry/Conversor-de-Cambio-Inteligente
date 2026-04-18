// ─── Raw API shape ───────────────────────────────────────────────────────────
export interface RawQuote {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  bid: string;
  ask: string;
  varBid: string;
  pctChange: string;
  timestamp: string;
  create_date: string;
}

export type RawApiResponse = Record<string, RawQuote>;

// ─── Domain model ────────────────────────────────────────────────────────────
export interface IQuote {
  readonly code: string;
  readonly name: string;
  readonly bid: number;
  readonly ask: number;
  readonly high: number;
  readonly low: number;
  readonly pctChange: number;
  readonly varBid: number;
  readonly timestamp: Date;
  readonly isPositive: boolean;
  readonly formattedPctChange: string;
}

// ─── Repository contract (Dependency Inversion) ──────────────────────────────
export interface IQuoteRepository {
  fetchAll(codes: string[]): Promise<IQuote[]>;
}

// ─── Store contract ──────────────────────────────────────────────────────────
export interface IQuoteStore {
  update(quotes: IQuote[]): void;
  get(code: string): IQuote | undefined;
  getAll(): Map<string, IQuote>;
}

// ─── Formatter contract ──────────────────────────────────────────────────────
export interface ICurrencyFormatter {
  format(value: number, currencyCode: string): string;
}

// ─── Converter contract ──────────────────────────────────────────────────────
export interface IConverter {
  convert(amount: number, from: string, to: string): number | null;
}

// ─── Renderer contracts (Interface Segregation) ──────────────────────────────
export interface ICardRenderer {
  render(quote: IQuote, previous?: IQuote): void;
}

export interface IConverterRenderer {
  renderResult(input: string, output: string | null): void;
}

export interface IStatusRenderer {
  setLoading(): void;
  setOnline(updatedAt: Date): void;
  setError(): void;
}

// ─── Currency meta ───────────────────────────────────────────────────────────
export interface CurrencyMeta {
  code: string;
  label: string;
  flag: string;
  accentVar: string;
}
