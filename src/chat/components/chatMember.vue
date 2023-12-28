<template>
  <div class="memberBox">
    <div class="content" v-for="item in arr" @click="selectMem(item)">
      <div class="imgBox">
        <img src="@/assets/gyw.jpg" width="30" height="30" >
      </div>
      <div class="nameBox">
        {{ item}}
      </div>
    </div>
  </div>
</template>

<script>
import { computed,onMounted,inject } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    let arr = computed(() => store.state.member)
    let axios = inject('axios')
    async function selectMem(target){
      store.commit('selectMem',target)
      let result = await axios.get('/Message/getMessage?name='+target)
      store.commit('updateMessage',result.data.data)
    }
    onMounted(async()=>{
      let result = await axios.get('/trailer/getAllTrailers')
      let member = []
      result.data.data.forEach(val => {
        member.push(val.trailer_ID)
      });
      store.commit('updateMem',member)
    })
      

    return{
      arr,selectMem
    }
  }
}
</script>

<style scoped>
.content{
  display: flex;
  height: 50px;
  margin: 1px;
  user-select: none;
}
.content:hover{
  background-color: #c8c9cc;
  margin: 1px;
}
.imgBox{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  flex-shrink: 0;
}
.nameBox{
  flex: 1;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.timeBox{
  flex-shrink: 0;
  width: 40px;
  text-align: center;
  font-size: 12px;
  color: #b1b3b8;
}
.memberBox{
  background-color: #f4f4f5;
  overflow-y: auto;
  flex: 1;
}
.memberBox::-webkit-scrollbar{
    width: 5px;
}

.memberBox::-webkit-scrollbar-thumb {
    background: #ccc; 
    border-radius: 5px; 
}

.memberBox::-webkit-scrollbar-thumb:hover {
    background: #73767a; 
}

</style>
