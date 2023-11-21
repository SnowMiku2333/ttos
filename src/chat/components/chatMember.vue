<template>
  <div class="memberBox">
    <div class="content" v-for="item in arr">
      <div class="imgBox">
        <img src="@/assets/gyw.jpg" width="30" height="30" >
      </div>
      <div class="nameBox">
        {{ item }}
      </div>
      <div class="timeBox">
        {{ getTime() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    let arr = ['gyw','gyw','gyw','gyw','gyw','gyw','gyw','gyw','gyw']
    function getTime(){
      let date = new Date()
      let hour = date.getHours()
      let minutes = date.getMinutes()  
      minutes = minutes >= 10 ? minutes : '0' + minutes
      return hour + ':' + minutes 
    }
    return{
      arr,getTime
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
