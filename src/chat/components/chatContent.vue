<template>
  <div v-if="Member != ''" class="chatBox">
    <div class="titleBox">
      {{ Member }}
    </div>
    <div class="contentBox" ref="scrollDiv">
      <div v-for="item in message" class="messageBox">
        <div :class="item.sender == 'zhk001' ? 'right' : 'left'">
          <div class="img">
            <img :src="item.sender == 'zhk001' ? rat : happy" class="image">
          </div>
          <span class="message">{{ item.message_content }}</span>
        </div>
      </div>
    </div>
    <div class="inputBox">
      <textarea class="textBox" v-model="input">

      </textarea>
      <div class="buttonBox">
        <el-button color="#626aef" size="small" @click="submit">提交</el-button>
        <el-button color="#626aef" plain size="small" @click="clear">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref, onMounted, watch, nextTick, inject } from 'vue';
import { io } from "socket.io-client";
export default {
  setup() {
    const store = useStore()
    let Member = computed(() => store.state.MemChating)
    let message = computed(() => store.state.message)
    let input = ref('输入......')
    let rat = require('@/assets/rat.jpg')
    let happy = require('@/assets/happy.jpg')
    let axios = inject('axios')
    var socket
    const scrollDiv = ref(null)
    function submit() {
      if (input.value) {
        socket.emit('frontConnect', {
          trailer_ID: Member.value,
          user_ID: 'zhk001',
        });
        socket.emit('frontText', {
          trailer_ID: Member.value,
          user_ID: 'zhk001',
          message_content: input.value,
        });
        setTimeout(() => {
          axios.get('/Message/getMessage?name=' + Member.value).then(val =>
            store.commit('updateMessage', val.data.data)
          )
        }, 3000)
        input.value = ''
      }
    }
    function clear() {
      input.value = ''
    }
    onMounted(() => {
      if (socket) {
        socket.disconnect();
        socket = undefined;
      }
      socket = io("http://127.0.0.1:81");
      socket.on('toFrontMessage', (data) => {
        axios.get('/Message/getMessage?name=' + Member.value).then(val =>
          store.commit('updateMessage', val.data.data)
        )
      });
    })
    return {
      Member, message, input, rat, happy, submit, clear, scrollDiv
    }
  }
}
</script>

<style scoped>
.chatBox {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.titleBox {
  height: 30px;
  display: flex;
  justify-content: center;
  line-height: 30px;
  font-size: 16px;
  align-items: center;
  border-bottom: 1px solid #e9e9eb;
}

.contentBox {
  background-color: #e9e9eb;
  height: 80%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.messageBox {
  margin: 5px 0;
}

.left {
  display: flex;
  justify-content: left;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  align-items: center;
}

.img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 10px;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.message {
  max-width: 50%;
  padding: 8px 8px;
  border-radius: 5px;
  background-color: #FAFAFA;
}

.inputBox {
  flex: 1;
  display: flex;
}

.textBox {
  width: 80%;
  height: 100%;
  resize: none;
  border: none;
  border-right: 1px solid #e9e9eb;
}

.textBox:focus {
  border: none;
  outline: none;
  border-right: 1px solid #e9e9eb;
}

.buttonBox {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
