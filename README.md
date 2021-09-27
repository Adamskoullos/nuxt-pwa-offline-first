![pwa1](https://user-images.githubusercontent.com/73107656/134801990-c9ca25c0-1005-4d01-b6f4-7ac9a4cc52a1.png)
![pwa2](https://user-images.githubusercontent.com/73107656/134801997-f3a2d4df-ecc2-4fa0-96f1-fa0c72a56b1d.png)
![pwa3](https://user-images.githubusercontent.com/73107656/134802000-24dba743-c1ec-446c-a0d0-c4f9a2bdb170.png)

# Nuxt PWA | [Live Link](https://nuxt-pwa-todo.netlify.app/)

Mini project to play with Nuxt and the PWA module and see how workbox is integrated into a Nuxt project.

## Overview

A five page app that includes:

- Error page with separate layout
- Two different todo endpoints each with there own store module, page and dynamic page
- Reusable components, AddTask, FilterTabs, TaskList
- Reusable plugin functions extracting request logic out of actions to keep modules cleaner and easier to navigate
- Reusable error plugin function to help with debugging
- Basic middleware that has separate logic for both server and client, just to redirect from home page
- Some use of Vuetify

## Build Tasks

- [x] Create `PWA`, `static` to be hosted on Netlify, add `Vuetify` and `axios`
- [x] Add `mdi` to project (if not already available in Vuetify)
- [x] Layouts: `default` & `empty`
- [x] **Error page**:
  - Empty layout
  - Error layout/page
- [x] **ListOne page**:
  - `AddPost` component
  - `filterTabs` component
  - `List` component
  - Dymanic page
- [x] **ListTwo page**:
  - `AddPost` component
  - `filterTabs` component
  - `List` component
  - Dymanic page
- [x] Loader component

### Redirects

- [x] **Middleware** to redirect from the `home` page to `ListOne` as there is no home page.

### Store modules

- [x] `ListOne` (state = `todos`)
- [x] `ListTwo` (state = `todos`)
- [x] Initial load of data from `nuxtServerInit`

### Plugins

Refactor `use` and `get` logic from **actions** into plugins to be reused in each module and reduce the clutter.

- [x] `get-todos.js`: getAllTodos() (action: fetchTodo)
- [x] `use-todos.js`:
  - [x] postNewTodo (action: addTodo)
  - [x] removeTodo (action: deleteTodo)
  - [x] patchUpdatedTask (action: updateTodoText)
  - [x] toggleTick (action: toggleComplete)
- [x] `error-logging.js`: errorLogger (located within all `catch` blocks to log all kinds of info for debugging)

### Adding PWA Provisions

**Please note**: All of the below is just me trying some things out and may or may not be best practice.

- [x] Add: `display: 'standalone'` so the app can be opened in it's own window
- [x] Add endpoints to be cached and handle strategies to workbox object within the pwa object in `nuxt.config.js`
- [x] create workbox plugin so workbox registers post routes so offline requests can be queued and executed when back online:

```js
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
  "formQueue",
  {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
  }
);

workbox.routing.registerRoute(
  /https:\/\/dev\-test\-api\-one\.herokuapp\.com\/todos/,
  // /https:\/\/jsonplaceholder\.typicode\.com\/posts/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  "POST"
);

workbox.routing.registerRoute(
  /https:\/\/dev\-test\-api\-two\.herokuapp\.com\/todos/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  "POST"
);
```

- [x] Add config so workbox knows about the above plugin. Here is the total pwa config so far:

```js
pwa: {
    manifest: {
      lang: "en",
      display: "standalone"
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: "https://dev-test-api-one.herokuapp.com/todos/",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: "https://dev-test-api-two.herokuapp.com/todos/",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
      ],
      cachingExtensions: "@/plugins/workbox-sync.js"
    }
  },

```

## Deployment

Deployed as a `static` site on Netlify:

First generate the build locally to test the production build:

I had some issues here with server side middleware running code that was undefined. I simplified this and all good.

1. Confirm in `nuxt.config.js`: **target: static**
2. `npm run generate` creates the `dist` folder
3. `npm run start`

There were again some issues generating with Netlify, but these were ironed out.

I did however run into a bigger problem once workbox registered domains to cache data from. Once activated, for some reason the domains break....I think this is something to do with the domain regex when registering. This results in the endpoints being wrong and unreachable giving a 404. I am still working this out.

The live site can be used and can operate as a standalone application: [Live Link](https://nuxt-pwa-todo.netlify.app/)

Bugs:

1. The above domain issue with workbox
2. Need to handle a page reload if the user is on a dynamic page
3. In production when the page is initially loaded a forward slash is being added to the end of the url, this is breaking the internal link if the user goes straight to a dynamic page before hitting a navbar link
