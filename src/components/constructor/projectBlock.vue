<template>
    <div class="projectBlock">
      <div class="overlay" :class="{'overlay_active' : projectActive}"></div>
      <div class="container">
        <h2>My projects</h2>
        <div v-for="project in projects" class="project" :class="{'project__active' : project.active === true}">
          <div class="project__image"><img :src="project.image" alt=""></div>
          <div class="project__info" :class="{'project__info_active' : project.active === true}">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <ul>
              <li v-for="item in project.tech">
                {{ item }}
              </li>
            </ul>
            <span>{{ project.text }}</span>
            <a :href = project.link>Visit web site</a>
            <!--<button class="btn__readMore" @click="project.active = !project.active; popupActive()">Read more</button>-->
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      projectActive: false,
      projects: [
        {
          name: 'VVLEN',
          description: 'Online store',
          tech: ['Vue.js', 'Node.js', 'MongoDB', 'Webpack'],
          image: require('../../assets/images/vvlen.png'),
          text: 'osad uvbuy vbuy vfy vcuy vlvyv uyv',
          active: false,
          link: 'https://vvlen.com/'
        },
        {
          name: 'Air One',
          description: 'Landing page, not commercial project',
          tech: ['jQuery', 'HTML', 'SASS', 'Bootstrap'],
          image: require('../../assets/images/airOne.png'),
          text: 'Sample one page website. Here I use Bootstrap grid, jQuery to make the page more dinamic and I also use Google Maps API to costumize the map',
          active: false,
          link: 'https://supgreyd.github.io/air-one-page/'
        },
        {
          name: 'Hotel',
          description: 'Landing page, not commercial project',
          tech: ['jQuery', 'HTML', 'SASS', 'Gulp'],
          image: require('../../assets/images/hotel.png'),
          text: 'Made this page responsive for any type of screen and I use Gulp to build a project',
          active: false,
          link: 'https://supgreyd.github.io/hotel/app/'
        },
        {
          name: 'Hospital',
          description: 'Landing page, not commercial project',
          tech: ['jQuery', 'HTML', 'SASS', 'Gulp', 'Bootstrap'],
          image: require('../../assets/images/medic.png'),
          text: 'Sample one page website. Here I was learning how to use SASS and how to build project with Gulp',
          active: false,
          link: 'https://supgreyd.github.io/medic/dist'
        }
      ]
    }),
    methods: {
      popupActive () {
        this.projectActive = !this.projectActive
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/variables";

  .projectBlock{
    padding: 20px 0;
    h2{
      text-align: center;
    }
    .project{
      padding: 50px 15px;
      transform: scale(1);
      background-color: rgba(256, 256, 256, 0);
      transition: transform .5s;
      position: relative;
      border:  3px solid transparent;
      z-index: 0;
      font-size: 0;
      .project__image{
        z-index: 2;
        width: 50%;
        display: inline-block;
        img{
          /*height: 300px;*/
          /*max-height: 370px;*/
          width: 100%;
        }
      }
      .project__info{
        z-index: 2;
        display: inline-block;
        vertical-align: top;
        width: calc(50% - 30px);
        padding-left: 30px;
        transform: scale(1);
        transition: all .5s;
        font-size: 1rem;
        h3{
          text-decoration: underline;
          text-decoration-color: $accent-color;
        }
        p{
          padding-bottom: 10px;
        }
        ul{
          color: $accent-color;
          li{
            display: inline-block;
            padding: 5px;
            border: 1px solid $accent-color;
            border-radius: 40%;
            margin: 0 5px;
          }
        }
        .btn__readMore{
          @include button();
          margin-top: 50px;
        }
        span{
          display: block;
          margin-top: 15px;
          margin-bottom: 30px;
          line-height: 24px;
        }
        a{
          color: $accent-color;
          font-weight: bold;
          &:hover{
            text-decoration: none;
          }
        }
      }
      .project__info_active{
        transform-origin: top left;
        transform: scale(0.7);
        transition: all .5s;
      }
    }
    .project__active{
      transform: scale(1.5);
      background-color: rgba(256, 256, 256, 1);
      transition: all .5s;
      z-index: 2;
      border:  3px solid black;
    }
    .overlay{
      z-index: -1;
      transform: scale(0.6);
      background-color: rgba(0, 0, 0, 0);
      /*position: relative;*/
      transition: all .5s;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    .overlay_active{
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.7);
      transform: scale(1);
      transition: all .5s;
    }
  }
  @media (max-width: 767px) {
    .projectBlock{
      .project{
        .project__info,
        .project__image{
          width: 100%;
        }
        .project__info{
          padding-left: 0;
          .btn__readMore{
            width: 100%;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
