<template>
  <div class="comp-nav">
   <group title="Introduction">
     <item view="/">About</item>
   </group>
    <group title="Components">
      <item v-for="route in navRoute" :key="route.id" :view="route">
        {{route}}
      </item>
    </group>
  </div>
</template>

<script>
import bus from '~docComps/bus';
import group from './group';
import item from './item';
import routeList from '~src/route-list';

export default {
  data() {
    return {
      navRoute: routeList
    };
  },
  computed: {
    view() {
      return bus.$data.selectedView;
    }
  },
  watch: {
    view(val) {
      this.$router.push(val);
    }
  },
  components: {
    group,
    item
  }
};
</script>

<style lang="less">
.comp-nav {
  height: 100%;
  overflow: scroll;
  background: #f3f3f3;
  &-wrapper {
    background-color: inherit;
    &-item {
      height: 36px;
      line-height: 36px;
    }
  }
}
</style>

