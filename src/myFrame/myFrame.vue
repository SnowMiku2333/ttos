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

<style>
.box{
  height: 100%;
  display: flex;
  flex-direction:column;
}
.content{
  display: flex;
  flex: 1;
}
</style>
