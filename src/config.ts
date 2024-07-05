export const locales = ["en", "pt"] as const;

export const domains: DomainsConfig<typeof locales> = [
  {
    domain: "sheisacreative.com",
    defaultLocale: "en",
    // Optionally restrict the locales available on this domain
    locales: ["en"],
  },
  {
    domain: "sheisacreative.com.br",
    defaultLocale: "en",
    // If there are no `locales` specified on a domain,
    // all available locales will be supported here
  },
];
