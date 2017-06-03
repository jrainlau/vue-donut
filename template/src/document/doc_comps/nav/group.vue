<template>
  <div class="doc-nav-group">
    <h4>{{title}}</h4>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style lang="less">
.doc-nav-group {
  padding: 0px 15px;
  box-sizing: border-box;
  h4 {
    color: #aaa;
    margin: 30px 0 15px 0;
  }
  div {
    padding-left: 15px;
    margin: 0;
  }
}
</style>

