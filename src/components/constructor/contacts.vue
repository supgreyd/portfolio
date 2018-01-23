<template>
  <div class="contact">
    <h2>Contact me</h2>
    <Contact-form></Contact-form>
  </div>
</template>
<script>
  import ContactForm from './contactForm.vue'
  export default {
    data: () => ({
    }),
    components: {
      ContactForm
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/variables";

  .contact{
    background: url("http://res.cloudinary.com/dlcpvepa5/image/upload/q_10/v1516716564/pexels-photo-326311_gjo1xb.jpg") center center no-repeat fixed;
    background-size: cover;
    padding: 20px 0;
    font-size: 0;
    /*height: 582px;*/
    h2{
      text-align: center;
      color: $white;
    }
    .btn__send{
      bottom: 0;
    }
  }
</style>
