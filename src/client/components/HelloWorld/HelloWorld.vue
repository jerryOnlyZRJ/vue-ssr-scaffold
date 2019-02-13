<template>
  <div class="helloworld">
    <h1>Hello World!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  asyncData ({ store, router }) {
    // asyncData将在node中执行，在后端进行拉取数据等等操作
    console.log("store：", store)
    console.log("router：", router)
  }
}
</script>

<style>
.helloworld {
   margin: 1rem 0 2rem;
   color: var(--mainColor);
}
</style>
