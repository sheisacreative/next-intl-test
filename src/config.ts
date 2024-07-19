import { DomainsConfig, LocalePrefix } from "next-intl/routing";

export const locales = ["en", "pt"] as const;

export const localePrefix = "never" satisfies LocalePrefix;

export const domains: DomainsConfig<typeof locales> = [
  {
    domain: "sheisacreative.com",
    defaultLocale: "en",
  },
  {
    domain: "sheisacreative.com.br",
    defaultLocale: "pt",
    locales: ["pt"],
  },
];
