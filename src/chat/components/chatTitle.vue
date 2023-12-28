<template>
  <div class="titleBox">
    <div class="searchBox">
      <div class="icon">🔍</div>
      <input type="text" class="searchInput" :value="searchText" @keyup.enter="search"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex'
export default {
  setup(){
    let searchText = ref('')
    const store = useStore()
    let search = function(){
      store.commit('searchMember',searchText)
    }
    return{
      searchText,search
    }
  }
}
</script>

<style scoped>
.titleBox {
  height: 50px;
  border-bottom: 1px solid #e9e9eb;
  display: flex;
}

.searchBox {
  margin: 13px 20px;
  height: 24px;
  position: relative;
}

.searchInput {
  height: 24px;
  border: 1px solid #e9e9eb;
  padding-left:20px;
  width: calc(100% - 20px);
  line-height: 24px;
}

.icon {
  position: absolute;
  left: 1px;
  z-index: 100;
}
</style>
