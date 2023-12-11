> 24 - Nov - 2023

## Udemy Clone | NextJs
- yarn cerate next-app
- yarn add @clerk/nextjs
- yarn add react-hook-form
- yarn add zod
- npx shadcn-ui@latest add sheet
- npx shadcn-ui@latest add button
- npx shadcn-ui@latest add input
- npx shadcn-ui@latest add form

```js
Learning Note:

* File & Folder structure system...

`page.tsx`    ==> hold `content` / ui text
`layout.tsx`  ==> hold `structure` / component position / style

`page.tsx`    ==> return --> JSX
`layout.tsx`  ==> wrap   --> {children} & can hold other components

* (group route) ==> can style the whole group using layout


* if use `/src/app` folder structure then for `clerk` auth system...
place `middleware.ts` file inside `/src` folder

* without auth - we can visit that page by config at `middleware.ts` file
pass an array of string of page name

* set background img at auth page

* all routing path control by a central place
```

- [Icon Resource](https://lucide.dev/icons)
