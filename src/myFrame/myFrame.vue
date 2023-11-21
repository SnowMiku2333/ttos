<template>
  <div class="box">
    <Head/>
    <div class="content">
      <Aside/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Aside from './components/aside.vue';
import Head from './components/head.vue';
import Main from './components/main.vue';
export default {
  components:{
    Aside,
    Head,
    Main
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction:column;
  height: 100%;
}
.content{
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
