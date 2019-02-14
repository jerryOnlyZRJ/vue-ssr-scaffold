<template>
  <div class="helloworld">
    <h1>Hello World!</h1>
    <span>Welcome {{ username }}</span>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  asyncData({ store, router }) {
    // asyncData将在node中执行，在后端进行拉取数据等等操作
    console.log("store：", store);
    console.log("router：", router);
    return this.loadUsername()
  },
  computed: {
    ...mapState([
      'username'  // 映射 this.username 为 store.state.username
    ])
  },
  mounted(){
    this.loadUsername()
  },
  methods: {
    ...mapActions([
      'loadUsername'  // 将 `this.loadUsername()` 映射为 `this.$store.dispatch('loadUsername')`
    ])
  }
};
</script>

<style>
.helloworld {
  margin: 1rem 0 2rem;
  color: var(--mainColor);
}
</style>
