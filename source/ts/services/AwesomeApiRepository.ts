import type { IQuoteRepository, RawApiResponse } from "../types/index.js";
import { Quote } from "../models/Quote.js";

/**
 * Abstract base class that handles common HTTP concerns.
 * Concrete subclasses implement the endpoint logic (Open/Closed Principle).
 */
abstract class BaseHttpService {
  protected abstract readonly baseUrl: string;

  protected async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

/**
 * Concrete repository that fetches currency quotes from AwesomeAPI.
 * Implements IQuoteRepository — can be swapped for any other provider.
 */
export class AwesomeApiRepository
  extends BaseHttpService
  implements IQuoteRepository
{
  protected readonly baseUrl = "https://economia.awesomeapi.com.br/json";

  async fetchAll(codes: string[]): Promise<Quote[]> {
    const pairs  = codes.map((c) => `${c}-BRL`).join(",");
    const data   = await this.get<RawApiResponse>(`/last/${pairs}`);

    return codes.map((code) => {
      const key = `${code}BRL`;
      const raw = data[key];

      if (!raw) throw new Error(`[AwesomeApiRepository] Par não encontrado: ${key}`);
      return Quote.fromRaw(raw);
    });
  }
}
