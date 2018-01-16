<template>
  <div id="app" ref="app">
    <App-header></App-header>
    <Promo-block></Promo-block>
    <!--<Skillz></Skillz>-->
    <Project-block></Project-block>
    <Contacts></Contacts>
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from './components/constructor/header.vue'
  import PromoBlock from './components/constructor/promoBlock.vue'
  import ProjectBlock from './components/constructor/projectBlock.vue'
  import Contacts from './components/constructor/contacts.vue'
  import Skillz from './components/constructor/skillz.vue'

export default {
    name: 'app',
    data: () => ({}),
    components: {
      AppHeader,
      PromoBlock,
      ProjectBlock,
      Contacts,
      Skillz
    }
}
</script>

<style lang="scss">
  @import "../static/scss/fonts.css";
  @import './assets/scss/main.scss';

  body{
    font-family: 'Open Sans Condensed', sans-serif;
  }
</style>
