<template>
  <label class="doc-nav-item" :for="radioId">
    <input type="radio" :id="radioId" name="doc-nav-item" :value="view" @click="selecteIt" :checked="checkIt">
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
import bus from '~docComps/bus';

export default {
  props: ['view'],
  data() {
    return {
      radioId: (Math.random() * 100000).toFixed(0)
    };
  },
  computed: {
    checkIt() {
      const currentPath = this.$route.path;
      let isCurrent = false;
      if (currentPath === this.view || currentPath === `/${this.view}`) {
        isCurrent = true;
      }
      return isCurrent;
    }
  },
  methods: {
    selecteIt() {
      bus.update('selectedView', this.view);
    }
  }
};
</script>

<style lang="less">
.doc-nav-item {
  display: block;
  height: 30px;
  line-height: 30px;
  cursor: default;
  input {
    display: none;
    &:checked + span {
      color: lightblue;
    }
  }
  &:hover {
    color: lightblue;
  }
}
</style>

