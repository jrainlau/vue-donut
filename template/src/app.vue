<template>
  <div id="app">
    <my-title></my-title>
    <my-content></my-content>
    <my-link></my-link>
  </div>
</template>

<style lang="less">
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Microsoft Yahei;
  }
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url('~assets/donut.jpg') no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
