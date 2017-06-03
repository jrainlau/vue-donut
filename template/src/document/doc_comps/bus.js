import Vue from 'vue';

const eventBus = new Vue({
  data: {
    selectedView: ''
  },
  methods: {
    update(target, val) {
      this[target] = val;
    }
  }
});

export default eventBus;
