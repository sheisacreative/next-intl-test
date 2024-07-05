# About my choices

## Why I prefer Domain-Based

1. I already use a domain-based website, and I wouldn't need to create all the redirects to tell Google I was changing my strategy.
2. I have both domains [sheisacreative.com](sheisacreative.com) and [sheisacreative.com.br](sheisacreative.com.br).
3. I find path based a little ugly. 🙊

## Why now

I am creating a [new website](https://sheisacreative.vercel.app/) and after I launch it I will starting to focus more on the english audience.

# Requirements

## 1. I need

By order of importance:

1. `(next-intl supports)` Be able to use the same codebase to maintain both languages.
2. `(next-intl does not support)` Be able to handle different languages MDX files correctly.
3. `(next-intl supports)` Change metadata based on the location.

## 2. I would love

1. `(next-intl does not support)` An easy way to manage content in different files (e.g.: one content file per page). This is important for a growing website.
2. `(next-intl supports)` To have good SEO for both languages.
3. `(next-intl supports)` To keep using a domain-based website.
4. `(next-intl supports)` In case I use path based localization, that the default locale doesn't have the language on the path (e.g.: instead of `sheiscreative.com/en` it should be `sheiscreative.com`)

# The problem

## Following the next-intl documentation

1. `branch: minimum-setup-path-based` I followed the [App Router setup with i18n](https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing) routing guide. By following it I could create a path based localized website.
2. After that I used the search to find the [Domain-based routing section](https://next-intl-docs.vercel.app/docs/routing/middleware#location-detection-domain).

- "To retrieve the domain, the host is read from the x-forwarded-host header, with a fallback to host.": I have no idea what this thing means and if it has any impact at all on the way I will implement the domain-based website.

3. I checked the [Domains sections](https://next-intl-docs.vercel.app/docs/routing#domains) I tried to configure the domains.

- It says to add a list of mappings to the domains settings, but it is not clear where I should put it.
- The file says `config.ts` but I guess I shouldn't create a new configuration file.

4. `branch: domain-based-setup` I searched for `config.ts` and found the [Shared configuration](https://next-intl-docs.vercel.app/docs/routing#shared-configuration) section.

- I created the `config.ts` file and linked it to the `middleware.ts`.
- I added the domain based code from the [Domains sections](https://next-intl-docs.vercel.app/docs/routing#domains).
- I got a typescript problem I didn't know how to solve as next-intl says it has typescript integration out of the box. The error: "Cannot find name 'DomainsConfig'".

## Next-intl documentation issues I faced

- The current localization shows a straightforward way to implement with path based but almost no guided on how to achieve the same with a domain based website.
- It was not clear how I could have the two domains using the same codebase. I assumed it was by deploying on Vercel and setting up the two domains there.

## I need to solve

- How can I setup a NextJs project to work domain-base?
- How can I test locally if I use a domain-based approach?
- How does Vercel tells Google which page they should prioritize in terms of SEO? Or how can I set that?
- How to correctly redirect the user based on a button click?

## Other comments

- Almost all next js localization tutorials are path based and not domain based.
