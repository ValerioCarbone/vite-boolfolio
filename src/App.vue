<script >
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div class="wrapper">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";

.wrapper {
  background-color: #8EC5FC;
  background-image: linear-gradient(180deg, #8EC5FC 0%, #E0C3FC 99%);
  height: 100vh;
}
</style>
