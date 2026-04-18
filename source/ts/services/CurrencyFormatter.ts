import type { ICurrencyFormatter } from "../types/index.js";

interface FormatConfig {
  locale: string;
  isCrypto: boolean;
  decimals: number;
}

const FORMAT_CONFIG: Record<string, FormatConfig> = {
  BRL: { locale: "pt-BR", isCrypto: false, decimals: 2 },
  USD: { locale: "en-US", isCrypto: false, decimals: 2 },
  EUR: { locale: "de-DE", isCrypto: false, decimals: 2 },
  BTC: { locale: "pt-BR", isCrypto: true,  decimals: 8 },
};

/**
 * Formats monetary values using Intl.NumberFormat.
 * Crypto currencies are handled separately (no ISO support).
 */
export class CurrencyFormatter implements ICurrencyFormatter {
  format(value: number, currencyCode: string): string {
    const config = FORMAT_CONFIG[currencyCode];

    if (!config) {
      return `${currencyCode} ${value.toFixed(2)}`;
    }

    if (config.isCrypto) {
      return `₿ ${value.toFixed(config.decimals)}`;
    }

    return new Intl.NumberFormat(config.locale, {
      style:                 "currency",
      currency:              currencyCode,
      minimumFractionDigits: config.decimals,
      maximumFractionDigits: config.decimals,
    }).format(value);
  }
}
