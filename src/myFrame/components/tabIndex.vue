<template>
  <div class="tabBox" >
    <el-tabs 
      v-model="tabIndex" v-if="tabArr.length"
      type="card" closable 
      class="demo-tabs"  
      @tab-remove = "removeTab" @tab-change="changeTab"
    >
      <el-tab-pane v-for="item in tabArr" 
        :key="item.name" 
        :label="item.title" 
        :name="item.name" 
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    let router = useRouter()
    let tabArr = computed(() => store.state.tab)
    let tabIndex = computed(() => store.state.tabIndex)
    function removeTab(target){
      store.commit('removeTab',target)
    }
    function changeTab(event){
      router.push('/'+event)
    }
    return {
      tabArr,tabIndex,removeTab,changeTab,
    }
  }
}
</script>

<style scoped>
.tabBox {
  height: 30px;
  padding-left: 20px;
  padding-top: 10px;
  overflow: hidden;
}

:deep(.el-tabs__item) {
  height: 29px;
  font-size: 12px;
  
}
</style>
