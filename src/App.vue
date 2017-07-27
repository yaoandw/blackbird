<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    title: 'JOJO', // set a title
    titleTemplate: '%s - 随时随地,想买就买!', // title is now "My Example App - Yay!"
//    htmlAttrs: {
//      lang: 'en',
//      amp: undefined // "amp" has no value
//    }
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
    ],
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
//          { rel: 'favicon', href: 'favicon.ico' },
      { rel: 'shortcut icon', type: 'image/png', href: '/static/favicon.png' },
    ],
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
