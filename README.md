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

1. `🟢 supports` Be able to use the same codebase to maintain both languages.
2. `🟡 supports - I didn't test` Be able to handle different languages MDX files correctly. I didn't test this yet, but apparently, the [docs about MDX](https://next-intl-docs-git-docs-thanks-maiane-next-intl.vercel.app/docs/environments/mdx) are pretty clear.
3. `🟢 supports` Change metadata based on the location.

## 2. I would love

1. `🔴 does not support` Easy way to manage content in different files (e.g.: one content file per page). This is important for a growing website.
2. `🟢 supports` To have good SEO for both languages.
3. `🟡 supports - Couldn't make it work` To use domain-based website.
4. `🟢 supports` In case I use path based localization, that the default locale doesn't have the language on the path (e.g.: instead of `sheiscreative.com/en` it should be `sheiscreative.com`)

# The problem

## Following the next-intl documentation

1. `🟢 Everything ok.` I followed the [App Router setup with i18n](https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing) routing guide. By following it I could create a path based localized website.
2. `🟢 Everything ok.` After that I used the search to find the [Domain-based routing section](https://next-intl-docs.vercel.app/docs/routing/middleware#location-detection-domain).

   - `🔴 Still have no idea about what this means.` "To retrieve the domain, the host is read from the x-forwarded-host header, with a fallback to host.": I have no idea what this thing means and if it has any impact at all on the way I will implement the domain-based website.
   - `🔴 Still not clear for me.` I start to understand that the key to correct redirection between domains is correctly setting up the config file. I imagine the locales should match the domains, but:
     - `🔴` the [documentation example](https://next-intl-docs.vercel.app/docs/routing#domains) is not clear.
     - `🔴` at first I assumed that locales was directed related to the HTML lang attribute, but now I am not sure if this is just a way to redirect the user or if this will actually affect the lang attribute. Because in Brazil we speak Portuguese, so the lang should be pt, but my domain is a brazilian domain, which includes `.br` instead of `.pt`.

3. `🟢 Everything ok.` I checked the [Domains sections](https://next-intl-docs.vercel.app/docs/routing#domains) I tried to configure the domains.

   - `🟢 I know where to put the settings.` It says to add a list of mappings to the domains settings, but it is not clear where I should put it.
   - `💡 Suggestion:` add a link in this section pointing to [Shared Configuration](https://next-intl-docs-git-docs-thanks-maiane-next-intl.vercel.app/docs/routing#shared-configuration).

4. `🟢 Everything ok.` I searched for `config.ts` and found the [Shared configuration](https://next-intl-docs.vercel.app/docs/routing#shared-configuration) section.

- `🟢 Everything ok.` I created the `config.ts` file and linked it to the `middleware.ts`.
- `🟡 I am not sure I added the correct configuration as I don't understand how this is working.` I added the domain based code from the [Domains sections](https://next-intl-docs.vercel.app/docs/routing#domains).
- `🟢 Solved` DomainsConfig: I got a typescript problem I didn't know how to solve as next-intl says it has typescript integration out of the box. The error: "Cannot find name 'DomainsConfig'".

5. `🔴 I am still frozen :(` After that I froze. :P

## Next-intl documentation issues I faced

- The current localization shows a straightforward way to implement with path based but almost no guided on how to achieve the same with a domain based website.
- It was not clear how I could have the two domains using the same codebase. I assumed it was by deploying on Vercel and setting up the two domains there.

## I need to solve

- `🔴 Still didn't figure it out` How can I setup a NextJs project to work domain-based?
- What happens after I made all the configurations I could find on the documentation?
- `🟡 I could add the header, but it's not clear what I should do with ti.` How can I test locally if I use a domain-based approach?
  - `🔴 Suspicious Chrome Tool` The [documentation](https://next-intl-docs-git-docs-thanks-maiane-next-intl.vercel.app/docs/routing/middleware#location-detection-domain) suggests using Modheader but there are some comments saying this is a malware on chrome store.
  - `🟢 Modify Header Value` I used the [Modify Header Value](https://chromewebstore.google.com/detail/cbdibdfhahmknbkkojljfncpnhmacdek) extension to add the header.
- `🟡 I have no idea, but this is more on Vercel side than next-intl` How does Vercel tells Google which page they should prioritize in terms of SEO? Or how can I set that?
- `🟢 I can solve` How to correctly redirect the user based on a button click?

## Other comments

- Almost all next js localization tutorials are path based and not domain based.

# How I will probably work around it

- I will probably try to implement localization by myself as next-intl doesn't support markdown and separate files and those are really important for me.
- Even when implementing by myself I will probably go with path based, because:
  1. I don't know how to test locally otherwise;
  2. I don't like that Vercel duplicates all the paths on both domains, which may hurt SEO.
