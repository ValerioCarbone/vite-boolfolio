<script >
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <main class="page">
    <div class="wrapper">
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
  </main>
</template>

<style lang="scss">
@use "./style/general.scss";

.wrapper {
  background-color: #17c1dc;
  background-image: linear-gradient(180deg, #17c1dc 0%, #ffcefe 100%);


  height: 100vh;
  overflow-y: auto;
}

.page {
  overflow: hidden;
}
</style>
