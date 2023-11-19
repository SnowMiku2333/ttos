<template>
  <div class="titleBox">
    <div class="logo">
      <img src="@/assets/taffy.jpg" class="image">
    </div>
    <span class="title">拖车管理系统-TTOS</span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.logo{
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
}
.image{
  object-fit: cover;
  width: 100%;
    height: 100%;
}
.titleBox{
  display: flex;
  align-items: center;
  background-color: black;
  height: 30px;
  user-select: none;
}
.title{
  line-height: 30px;
  color: white;
  letter-spacing: 1px;
  padding-left: 10px;
}
</style>
