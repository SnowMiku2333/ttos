<template>
  <div class="box">
    <Head/>
    <div class="content">
      <Aside/>
      <Slot/>
    </div>
  </div>
</template>

<script>
import Aside from './components/aside.vue';
import Head from './components/head.vue';
import Slot from './components/slot.vue';
export default {
  components:{
    Aside,
    Head,
    Slot
  }
}
</script>

<style>
.box{
  display: flex;
  flex-direction:column;
}
.content{
  display: flex;
  flex: 1;
}
</style>
