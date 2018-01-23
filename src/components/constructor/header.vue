<template>
    <div class="header">
      <menu class="header__menu" id = "headerMenu">
        <a class="menu__link" v-for="link in headerMenu" @click="anchor(link.name)">{{ link.name }}</a>
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
    }),
    beforeMount () {
      window.onscroll = function () {
        let promoHeight = document.getElementById('promo').offsetHeight
        const menu = document.getElementById('headerMenu')
        pageYOffset > promoHeight ? menu.classList.add('header__menu_changed') : menu.classList.remove('header__menu_changed')
      }
    },
    methods: {
      anchor (a) {
        let projectsCords = document.getElementById('projects').offsetTop
        let contactsCords = document.getElementById('contacts').offsetTop
        const step = 50
        if (a === 'Projects') {
          if (projectsCords > window.pageYOffset) {
            let timer = setInterval(function () {
              window.scrollBy(0, step)
              if (window.pageYOffset + step >= projectsCords - 20) {
                clearInterval(timer)
              }
            }, 1)
          }
          if (projectsCords < window.pageYOffset) {
            let timer = setInterval(function () {
              window.scrollBy(0, -step)
              if (window.pageYOffset + step <= projectsCords) {
                clearInterval(timer)
              }
            }, 1)
          }
        }
        if (a === 'Contacts') {
          if (contactsCords > window.pageYOffset) {
            let timer = setInterval(function () {
              window.scrollBy(0, step)
              if (document.body.scrollHeight <= window.pageYOffset + document.documentElement.clientHeight || window.pageYOffset + step >= contactsCords) {
                clearInterval(timer)
              }
            }, 1)
          }
        }
        if (a === 'Home') {
          let timer = setInterval(function () {
            window.scrollBy(0, -step)
            if (window.pageYOffset <= 0) {
              clearInterval(timer)
            }
          }, 1)
        }
      }
    }
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
      transition: all .3s;
      .menu__link{
        padding: 10px 20px;
        font-size: 1.25rem;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    .header__menu_changed{
      background-color: white;
      color: black;
      transition: all .3s;
    }
  }
</style>
