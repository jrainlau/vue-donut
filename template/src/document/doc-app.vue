<template>
  <div id="doc-root" class="doc">
    <section class="doc-nav">
      <navList></navList>
    </section>
    <section class="doc-content">
      <docContent></docContent>
    </section>
    <section class="doc-preview">
      <preview :currentUrl="currentUrl"></preview>
    </section>
  </div>
</template>

<script>
import navList from '~docComps/nav';
import docContent from '~docComps/content';
import preview from '~docComps/preview';

export default {
  computed: {
    currentUrl() {
      let path = ''
      if (/docs/.test(location.href)) {
        path = 'docs/'
      }
      return `${location.protocol}//${location.host}/${path}view.html#${this.$route.path}`;
    }
  },
  components: {
    navList,
    docContent,
    preview
  }
};
</script>

<style lang="less">
.doc {
  height: 100%;
  display: flex;
  justify-content: space-between;
  &-nav {
    width: 260px;
    max-width: 260px;
    min-width: 260px;
    height: 100%;
  }
  &-content {
    height: 100%;
    width: 100%;
  }
  &-preview {
    width: 460px;
    min-width: 460px;
    max-width: 460px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
