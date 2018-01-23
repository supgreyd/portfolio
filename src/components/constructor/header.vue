<template>
    <div class="header">
      <menu class="header__menu" ref="headeMenu">
        <a class="menu__link" v-for="link in headerMenu">{{ link.name }}</a>
      </menu>
    </div>
</template>
<script>
  export default {
    data: () => ({
      headerMenu: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Projects',
          link: '/'
        },
        {
          name: 'Contacts',
          link: '/'
        }
      ]
    })
  }
</script>
<style lang="scss">
  @import "../../assets/scss/variables";

  .header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 50;
    .header__menu{
      text-align: center;
      padding: 16px 0;
      margin: 0;
      border-bottom: 1px solid gray;
      background-color: black;
      color: $white;
      .menu__link{
        padding: 10px 20px;
        font-size: 1.25rem;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
</style>
