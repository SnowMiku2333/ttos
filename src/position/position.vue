<template>
  <div class="positionBox">
    <div class="selectBox">
      选择拖车:
      <el-select v-model="number" class="m-2 select" placeholder="Select" @change="selectNumber">
        <el-option v-for="item in member" :key="item" :label="item" :value="item" />
      </el-select>
    </div>
    <div id="container">

    </div>
  </div>
</template>
<script>
import axios from 'axios';
import mapInit from './map'
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore()
    let member = computed(() => store.state.member)
    let Amap, map
    var polyline
    let number = ref('')
    async function selectNumber(val) {
      if (polyline) {
        map.remove(polyline);
      }
      let result = await axios.get('/Path/getPath?id=' + val)
      let arr = result.data.data
      let path = []
      let x = 114.333786
      let y = 30.510638
      arr.forEach(val => {
        let newX = x + val.start_position / 200000
        let newY = y + val.end_position / 200000
        path.push([newX, newY])
      });
      polyline = new AMap.Polyline({
        path: path, //设置线覆盖物路径
        strokeColor: "#3366FF", //线颜色
        strokeWeight: 5, //线宽
        strokeStyle: "solid", //线样式
      });
      map.add(polyline);
    }
    onMounted(async () => {
      let obj = await mapInit()
      Amap = obj.Amap
      map = obj.map
      let result = await axios.get('/trailer/getAllTrailers')
      let member = []
      result.data.data.forEach(val => {
        member.push(val.trailer_ID)
      });
      store.commit('updateMem',member)
    })
    return {
      member, number, selectNumber
    }
  }
}
</script>

<style scoped>
.positionBox {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1px 1px 1px 0;
  background-color: white;
}

.selectBox {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid #e9e9eb;
}

.select {
  margin-left: 20px;
}

#container {
  flex: 1;
  margin: 20px;
}
</style>
