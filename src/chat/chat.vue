<template>
  <div class="chatBox">
    <div class="asideBox">
      <chatTitle />
      <chatMember />
    </div>
    <chatContent />
  </div>
</template>

<script>
import chatContent from './components/chatContent.vue';
import chatMember from './components/chatMember.vue';
import chatTitle from './components/chatTitle.vue';

export default {
  components: {
    chatContent,
    chatMember,
    chatTitle
  },
}
</script>

<style scoped>
.chatBox {
  flex: 1;
  display: flex;
  margin: 1px 1px 1px 0;
  background-color: white;
}
.asideBox{
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e9e9eb;
}
</style>
