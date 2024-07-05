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

- I am following the [App Router setup with i18n](https://next-intl-docs.vercel.app/docs/getting-started/app-router/with-i18n-routing) routing guide

## I need to solve

- How can I setup a NextJs project to work domain-base?
- How can I test locally if I use a domain-based approach?
- How does Vercel tells Google which page they should prioritize in terms of SEO? Or how can I set that?
- How to correctly redirect the user based on a button click?

## Other questions
