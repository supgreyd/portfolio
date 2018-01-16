<template>
    <div class="promo">
      <div class="promo__mask"></div>
      <div class="container">
        <h1 class="promo__title" :class="{ 'promo__button_active' : activeButton }">{{ title }}</h1>
        <button @click="activeButton = !activeButton" :class="{ 'promo__button_active' : activeButton }" class="promo__button"><span>Work with me</span></button>
      </div>
      <Contact-form :class="{ 'contactForm_active' : activeButton }" @close="activeButton = false" :closeBtn = 'true'></Contact-form>
    </div>
</template>
<script>
  import ContactForm from './contactForm.vue'

  export default {
    data: () => ({
      title: 'Hi, I\'m Kosta, front-end developer',
      activeButton: false
    }),
    components: {
      ContactForm
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/variables";

  .promo{
    width: 100%;
    height: 582px;
    background-image: url("../../assets/images/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 20px;
    font-size: 0;
    .promo__mask{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 2;
    }
    .promo__title{
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%) scale(1);
      color: $white;
    }
    .promo__button{
      position: absolute;
      z-index: 5;
      left: 50%;
      transform: translateX(-50%) scale(1);
      bottom: 30%;
      transition: all .5s;
      @include button();
    }
    .promo__button_active{
      transition: all .5s;
      transform: translateX(-50%) scale(0);
      animation: formButton;
    }
    @keyframes formActive{

    }
    .contactForm{
      z-index: 3;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scale(0);
      transition: all .5s;
    }
    .contactForm_active{
      transform: translateX(-50%) scale(1);
      transition: all .5s;
    }
  }

</style>
