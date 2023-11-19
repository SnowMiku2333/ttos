<template>
    <div class="Box">
      <div class="titleBox">
        
      </div>
      <div class="mainBox">
        <RouterView></RouterView>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.Box{
  display: flex;
  flex-direction: column;
  flex:1;
}
.titleBox{
  height: 40px;
}
.mainBox{
  background-color: #e9e9eb;
  flex:1;
}
</style>
