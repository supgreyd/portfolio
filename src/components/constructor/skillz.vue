<template>
    <div class="psycho">
      <canvas style="transition: all .5s"
              ref="canvas" id="canvas"></canvas>
      <!--<div class="controlPanel">-->
        <!--<ul>-->
          <!--<li><span>Radius:</span>-->
            <!--<input type="range" min="1" max="500" v-model="radius">-->
          <!--</li>-->
          <!--<li><span>Line width</span>-->
            <!--<input type="range" min="1" max="500" v-model="strokeWidth">-->
          <!--</li>-->
        <!--</ul>-->
        <!--<button class="startPsycho__btn" @click="spmaCircles"><span>Start</span></button>-->
      <!--</div>-->
    </div>
</template>
<script>
  export default {
    data: () => ({
      radius: 50,
      strokeWidth: 20,
      x: undefined,
      y: undefined,
      vx: 1,
      vy: 1,
      lx: 0,
      timer: undefined
    }),
    methods: {
      getGolor () {
        let letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)]
        }
        return color
      },
      getWindow () {
        this.x = Math.abs(Math.random() * this.$refs.canvas.clientWidth)
        this.y = Math.abs(Math.random() * this.$refs.canvas.clientHeight)
      },
      drawCircle () {
        let c = this.$refs.canvas.getContext('2d')
        c.beginPath()
        let x = Math.random() * c.canvas.width
        let y = Math.random() * c.canvas.height
        let radius = Math.abs(Math.random() * this.radius)
        c.arc(x, y, radius, 0, Math.PI * 2, false)
        c.lineWidth = Math.abs(Math.random() * this.strokeWidth)
        c.strokeStyle = this.getGolor()
        c.stroke()
      },
      spmaCircles () {
        requestAnimationFrame(this.spmaCircles)
        this.drawCircle()
      },
      moveCircle () {
        requestAnimationFrame(this.moveCircle)
        let c = this.$refs.canvas.getContext('2d')
        c.beginPath()
        let radius = 30
        c.arc(this.x, this.y, radius, 0, Math.PI * 2, false)
        c.strokeStyle = this.getGolor()
        c.stroke()
        if (this.x + radius > innerWidth || this.x - radius < 0) {
          this.vx = -this.vx
        }
        if (this.y + radius > innerHeight || this.y - radius < 0) {
          this.vy = -this.vy
        }
        this.x += this.vx
        this.y += this.vy
      }
    },
    mounted () {
      this.$refs.canvas.getContext('2d').canvas.height = document.documentElement.clientHeight
      this.$refs.canvas.getContext('2d').canvas.width = document.documentElement.clientWidth
      this.moveCircle()
      this.getWindow()
    }
  }
</script>
<style lang="scss">
  .psycho{
    position: relative;
    .controlPanel{
      position: absolute;
      height: 300px;
      width: 300px;
      background: red;
      padding: 15px;
      top: 0;
      right: 0;
      span{
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      input{
        position: relative;
        top: 4px;
        margin-left: 20px;
      }
      .startPsycho__btn{
        position: absolute;
        bottom: 15px;
      }
    }
  }
</style>
