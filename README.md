<h1 align="center">Welcome to ReadyUp Widget Example 👋</h1>
<img src="https://pbs.twimg.com/profile_images/1259647812213628929/Eoy6C_fA_400x400.jpg" width="80px">
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg" />
</p>

## Project setup

Get started with installing project dependencies.
```
npm install
```

## Develop

Compiles and hot-reloads for development with Vue instant prototyping mode with just a single `./src/ReadyUpDiscover.vue` file. Requires global addon to be installed along with the Vue CLI. Make sure to first run `npm install -g @vue/cli @vue/cli-service-global`
```
npm run serve
```

## Build web component widget

Compiles and minifies for production with target set for `wc` (web component). Default settings are configured for flag of `--inline-vue` meaning the final build will contain the Vue library pre-packaged and included in the bundle. The output of this build can be found in `./dist` folder.
```
npm run build
```

## Demo example

Example demo will spawn the `./example/demo.html` to your local browser.
```
npm run example
```

## Web component usage
When you run `npm run build` the resulting artifacts will be found inside `./dist` folder. This folder will contain most importantly the `ready-up-discover.min.js`. This file should be included on any website that requires this widget via `<script>` include.

For example:

```html
<script src="ready-up-discover.min.js"></script>
```

Once the `ready-up-discover.min.js` script has been added to the site you will have access to a new web component. You can include the component anywhere on the website.

For example:

```html
<ready-up-discover />
```

Currently this widget exposes the following element attributes API: 

- ***organizer*** (`string`) Use this to filter the widget to a specific ReadyUp organizers events.

For example:

```html
<ready-up-discover organizer="ReadyUp Inc." />
```