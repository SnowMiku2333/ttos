<template>
  <div class="asideBox">
    <div v-for="item in infoList" class="itemBox" >
      <img :src="item.img" width="20" height="20">
      <div class="itemTitle">
        {{item.name}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(){
    let infoList = [
    {
        name:'拖车信息展示',
        img:require('../../assets/info.svg'),
        path:'',
    },{
        name:'拖车轨迹监控',
        img:require('../../assets/position.svg'),
        path:'',
    },{
        name:'实时信息',
        img:require('../../assets/chat.svg'),
        path:'',
    }]
    
    return {
      infoList
    }
  }
}
</script>

<style scoped>
.asideBox{
  min-width:  150px;
  cursor:default;
  user-select:none;
  border-right: 1px solid #e9e9eb;
}
.itemBox{
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 10px;
}
.itemBox:hover{
  background-color: #79bbff;
  color: #ecf5ff;
}
.itemBox:focus{
  background-color: #79bbff;
  color: #ecf5ff;
}
.itemTitle{
  font-size: 15px;
  margin-left: 10px;
}
</style>
