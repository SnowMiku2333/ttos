<template>
  <div class="infoBox">
    <div class="selectBox">
      <div class="numberBox">
        拖车号：
        <div>
          <el-input v-model="carNumber" placeholder="请输入拖车号" />
        </div>
      </div>
      <div>
        <el-button type="danger" @click="reset">重置</el-button>
        <el-button type="primary" @click="search">搜索</el-button>
      </div>
    </div>
    <div class="listBox">
      <div class="listTitle">
        <span>拖车信息表</span>
        <div>

        </div>
      </div>
      <div class="listHead">
        <div style="flex:3;">拖车号</div>
        <div style="flex:1;">状态</div>
        <div style="flex:2;">正在执行指令</div>
        <div style="flex:2;">开始时间</div>
        <div style="flex:1;">在线时长</div>
        <div style="flex:1;"></div>
      </div>
      <div class="listContent" v-for="(item, index) in arr"
        :style="{ backgroundColor: index % 2 == 0 ? 'white' : '#f4f4f5' }">
        <div class="icon">{{ index + 1 }}</div>
        <div style="flex:3;">{{ item.trailer_ID }}</div>
        <div style="flex:1;">{{ item.state == 2 ? '在线':'离线' }}</div>
        <div style="flex:2;">{{ item.command || '***' }}</div>
        <div style="flex:2;">{{ item.start_time || '***' }}</div>
        <div style="flex:1;">{{ item.total_time || '***' }}</div>
        <div style="flex:1;"><el-button type="primary" text bg @click="showInfo(item)">查看</el-button></div>
      </div>
      <div class="pagination">
        <el-pagination :pager-count="9" layout="total,prev, pager, next,sizes" :total="array.data.length"
          v-model:current-page="listIndex" :page-sizes="[5, 10, 20]" v-model:page-size="pageSize" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, inject, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    let carNumber = ref('')
    let axios = inject('axios')
    let list = reactive({data:[]})
    let array = reactive({ data: [] })
    let pageSize = ref(5)
    let listIndex = ref(1)
    const store = useStore()
    let arr = computed(() => array.data.slice((listIndex.value - 1) * pageSize.value, listIndex.value * pageSize.value))
    onMounted(async () => {
      let result = await axios.get('/trailer/getAllTrailers')
      array.data = result.data.data
      list.data = result.data.data
      let member = []
      result.data.data.forEach(val => {
        member.push(val.trailer_ID)
      });
      store.commit('updateMem',member)
    })
    function reset() {
      carNumber.value = ''
      array.data = list.data
    }
    function search() {
      if (carNumber.value == '') array.data = list.data
      else array.data = array.data.filter(item => item.trailer_ID.includes(carNumber.value))
    }
    async function showInfo(item){
      let result = await axios.get('/trailer/getTrailer?trailer_ID='+item.trailer_ID)
      let data = result.data.data
      if( !data ){
        data = {start_time:'无',total_time:'无',command:'无'}
      }else{
        data = data[0]
      }
      
      item.start_time = data.start_time
      item.total_time = data.total_time
      item.command= data.command
    }
    return {
      carNumber, reset, search, arr, listIndex, pageSize, array,showInfo
    }
  }
}
</script>

<style scoped>
.infoBox {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1px 1px 1px 0;
  background-color: white;
}

.selectBox {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  border-bottom: 1px solid #e9e9eb;
  justify-content: space-between;
}

.listBox {
  flex: 1;
  overflow-y: auto;
}

.numberBox {
  display: flex;
  align-items: center;
}

.listTitle {
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding: 0 20px;
}

.listHead {
  display: flex;
  height: 40px;
  margin: 0 20px;
  padding: 0 30px;
  background-color: #f4f4f5;
  align-items: center;
  font-size: 15px;
  color: #303133;
}

.listContent {
  display: flex;
  margin: 0 20px;
  padding: 0 30px;
  align-items: center;
  height: 40px;
  position: relative;
}

.icon {
  position: absolute;
  left: 7px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #73767a;
  color: white;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
</style>
