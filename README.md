![pwa1](https://user-images.githubusercontent.com/73107656/134801990-c9ca25c0-1005-4d01-b6f4-7ac9a4cc52a1.png)
![pwa2](https://user-images.githubusercontent.com/73107656/134801997-f3a2d4df-ecc2-4fa0-96f1-fa0c72a56b1d.png)
![pwa3](https://user-images.githubusercontent.com/73107656/134802000-24dba743-c1ec-446c-a0d0-c4f9a2bdb170.png)

# Nuxt PWA

The aim of this project is to learn how to work with Nuxt as a PWA and take advantage of service workers to create native-like, cross device applications that can be used offline.

Nuxt has a first-party module for this that uses Workbox and also handles much of the configuration.

## Project Plan Overview

Create a five page app that has an `error page`, `list one`, `list one dynamic page`, `list two` and `list two dynamic page`.

- All HTML, CSS and JS files to be saved and loaded from the cache
- Content to be saved and loaded from the cache into the store
- The app to attempt to get updated data on initial load and update the state if any changes
- Post requests to be queued if offline to execute once there is a network

## Research Tasks

- Setting up and configuring a Nuxt PWA project
- Understanding how to interact with workbox and the patterns used to integrate workbox and vuex

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

- []
