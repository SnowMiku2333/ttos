<template>
  <div class="positionBox">
    <div id="container">

    </div>
  </div>
</template>

<script>
import mapInit from './map'
export default {
  setup(){
    mapInit()
  }
}
</script>

<style scoped>
.positionBox {
  flex: 1;
  display: flex;
  margin: 1px 1px 1px 0;
  background-color: white;
}

#container {
  flex:1;
  margin: 20px;
}
</style>
