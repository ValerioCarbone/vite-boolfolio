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
  background-color: #31ceff;
  background-image: linear-gradient(180deg, #31ceff 0%, #E0C3FC 70%);

  height: 100vh;
  overflow-y: auto;
}

.page {
  overflow: hidden;
}
</style>
