<template>
    <div class="Box">
      <tabIndex/>
      <div class="mainBox">
        <RouterView name="main"></RouterView>
      </div>
    </div>
</template>

<script>
import tabIndex from './tabIndex.vue';
export default {
  components:{
    tabIndex
  }
}
</script>

<style scoped>
.Box{
  display: flex;
  flex-direction: column;
  flex:1;
}

.mainBox{
  display: flex;
  background-color: #e9e9eb;
  flex:1;
}
</style>
