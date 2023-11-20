<template>
  <div class="asideBox">
    <div v-for="item in infoList" class="itemBox" 
      @click="()=>selectTab(item)"
      :class="tabIndex == item.name ? 'focusBox' : ''"
    >
      <img :src="item.img" width="20" height="20">
      <div class="itemTitle">
        {{item.title}}
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router'

export default {
  setup(){
    let store = useStore()
    let tabIndex = computed(()=>store.state.tabIndex) 
    let router = useRouter()
    let infoList = [
    {
      title:'拖车信息展示',
      img:require('../../assets/info.svg'),
      path:'/info',
      name:'info',
    },{
      title:'拖车轨迹监控',
      img:require('../../assets/position.svg'),
      path:'/position',
      name:'position',
    },{
      title:'实时信息',
      img:require('../../assets/chat.svg'),
      path:'/chat',
      name:'chat',
    }]
    function selectTab(event){
      store.commit('selectTab',event)
      router.push(event.path)
    }
    return {
      infoList,selectTab,tabIndex
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
  border-radius: 10px;
  margin: 5px 5px;
}
.itemBox:hover{
  background-color: #ecf5ff;
  color: #66ccff;
}
.focusBox{
  background-color: #ecf5ff;
  color: #66ccff;
}
.itemTitle{
  font-size: 15px;
  margin-left: 10px;
}
</style>
