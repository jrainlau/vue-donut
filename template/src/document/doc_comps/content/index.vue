<template>
  <div class="comp-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    mdContent: resolve => require(['~components/loan/README.md'], resolve)
  }
};
</script>

<style lang="less">
.comp-content {
  padding: 30px 0 30px 30px;
  height: 100%;
  box-sizing: border-box;
  overflow: scroll;
}
</style>

