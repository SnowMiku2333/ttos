import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      tab: [{ name: 'info', title: '拖车信息' }],
      tabIndex: 'info',
      searchMemText: '',
      MemChating: '',
      member: [],
      message:[],
    }
  },
  mutations: {
    removeTab(state, target) {
      state.tab = state.tab.filter(val => val.name != target)
    },
    selectTab(state, target) {
      if (!state.tab.find(val => val.name == target.name)) {
        state.tab.push(target)
      }
      state.tabIndex = target.name
    },
    searchMember(state, target) {
      state.searchMemText = target
    },
    selectMem(state, target){
      state.MemChating = target
    },
    updateMem(state, target){
      state.member = target
    },
    updateMessage(state, target){
      state.message = target
    },
    insertMessage(state, target){
      state.message=state.message.push(target)
    },
  }
})

export default store