# Vue-Donut
`Vue-Donut` is a template work with `vue-cli`, it helps you build your own VueJS basic UI component library in an easy way.

## Usage
```
vue init jrainlau/vue-donut <your-project>
```

## Commands
- `yarn run dev`: Development mode
  - Is similar to [vue-webpack-boilerplate](https://github.com/vuejs-templates/webpack#whats-included) 

- `yarn run build`: Pack and publish mode
  - Using `src/components/index.js` as the entry file, pack it by `webpack`, then output to `dist` folder.
  - `dist/index.js` is the library you will publish to `npm`.
  -   You should be familiar with [how to write a vue.js plugin](https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin)
  - `src/components/index.js` should be like this: 
    ```
    import myComponent from './my-component.vue'

    const install = (Vue) => {
      Vue.component('my-componen', myComponent)
    }

    export default install

    ```
- `yarn run doc`: Building document mode
  - By running `yarn run dev`, you are building a normal SPA application. After all things being done, you could use this command to build your SPA. `app.[hash].js`, `vendor.[hash].js` and `manifest.[hash].js` and extract css files would be outputted to the `docs` folder.
  - Source maps `*.[hash].map` would be created automatically.
  - Use `docs` folder as the source of `github pages`.

## Lisence
MIT