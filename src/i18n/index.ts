import es from "./es.json";
import en from "./en.json";

export type Locale = "es" | "en";

const messages = { es, en };

export function t(locale: Locale) {
  return messages[locale];
}