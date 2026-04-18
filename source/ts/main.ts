import { AwesomeApiRepository } from "./services/AwesomeApiRepository.js";
import { QuoteStore }           from "./repositories/QuoteStore.js";
import { CurrencyConverter }    from "./services/CurrencyConverter.js";
import { CurrencyFormatter }    from "./services/CurrencyFormatter.js";
import { AppController }        from "./controllers/AppController.js";
import type { CurrencyMeta }    from "./types/index.js";

/**
 * Composition Root — the only place that knows about concrete implementations.
 * All other layers depend on abstractions (interfaces), not concretions.
 */
const CURRENCIES: CurrencyMeta[] = [
  { code: "USD", label: "Dólar Americano", flag: "🇺🇸", accentVar: "--usd" },
  { code: "EUR", label: "Euro",            flag: "🇪🇺", accentVar: "--eur" },
  { code: "BTC", label: "Bitcoin",         flag: "₿",   accentVar: "--btc" },
];

const repository = new AwesomeApiRepository();
const store      = new QuoteStore();
const formatter  = new CurrencyFormatter();
const converter  = new CurrencyConverter(store);

const app = new AppController(
  repository,
  store,
  converter,
  formatter,
  CURRENCIES,
);

document.addEventListener("DOMContentLoaded", () => app.init());
