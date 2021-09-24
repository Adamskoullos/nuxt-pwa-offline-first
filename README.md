# Nuxt PWA

The aim of this project is to learn how to work with Nuxt as a PWA and take advantage of service workers to create native-like, cross device applications that can be used offline.

Nuxt has a first-party module for this that uses Workbox and also handles much of the configuration.

## Project Plan Overview

Create a four page app that has an `error page`, `list one`, `list two` and a `dynamic page` to show an individual item.

- All HTML, CSS and JS files to be saved and loaded from the cache
- Content to be saved and loaded from the cache into the store
- The app to attempt to get updated data on initial load and update the state if any changes
- Post requests to be queued if offline to execute once there is a network

## Research Tasks

- Setting up and configuring a Nuxt PWA project
- Understanding how to interact with workbox and the patterns used integrate workbox and vuex

## Build Tasks

- [x] Create `PWA`, `static` to be hosted on Netlify, add `Vuetify` and `axios`
- [] Add `mdi` to project (if not already available in Vuetify)
- [x] Layouts: `default` & `empty`
- [x] **Error page**:
  - Empty layout
  - Error layout/page
- [] **ListOne page**:
  - `AddPost` component
  - `List` component
- [] **ListTwo page**:
  - `AddPost` component
  - `List` component
- [] **SingleItem page**:

### Redirects

- [] **Middleware** to redirect from the `home` page to `ListOne` as there is no home page.

### Store modules

- [] `ListOne` (state = `tasks`)
- [] `ListTwo` (state = `tasks`)
- [] Initial load of data from `nuxtServerInit`

### Workflows

- [] **GET**: List of Tasks
- [] **GET**: Single Task
- [] **POST**: New Task
- [] **PATCH**: Update Task

### Plugins

- [] Refactor `get` and `use` logic into a `requests.js` plugin to extract asynchronous code out of the store.

### Adding PWA Provisions

- []
