<template>
  <div id="mui-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUrl: `${location.host}/view.html`
    };
  },
};
</script>
