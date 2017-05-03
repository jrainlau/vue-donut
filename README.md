# Vue-Donut

A template for building `VueJS` UI components library with `Vue-Cli`.

# Usage
```
vue init jrainlau/vue-donut <my-project>
```
In order to build a `VueJS` UI components library, first you should be familiar with the [officail guide](https://vuejs.org/v2/guide/plugins.html).

All the `*.vue` files as a component should be located at the `components` folder, and there should have an entry `index.js` file, for example:
```
import myComp from './myComp.vue'

const install = (Vue) => {
  Vue.component('my-comp', myComp)
}

export default install
```

# Commands
`Vue-Donut` allows you to build a `VueJS` UI components library with **3** command line:

## Development mode
After running `yarn`, you can run
```
yarn run dev
```
for development mode. Open `localhost:8080` and begin to build your UI components library.

## Document mode
The command above is in use to build your UI components library and "Document". After running the command below:
```
yarn run doc
```
`Vue-Donut` would create a `docs` folder in the root, it's very convenient for `github pages` to used.

## Build mode
```
yarn run build
```
means `Vue-Donut` using `components/index.js` as entry file, then build it and ouput to `dist` folder. There should be a `index.js` and a `index.js.map` file, then you can use `npm publish` to publish your UI components library to the `NPM`.

## License
MIT
