import Vue from './vue.js'

new Vue({
  el: "#app",
  data: {
    boxShow1: true,
    boxShow2: false,
    boxShow3: false,
    boxShow4: true,
  },
  methods: {
    showBox1() {
      console.log('click 1');
      this.boxShow1 = !this.showBox1
    },
    showBox2() {
      console.log('click 2');
      this.boxShow2 = !this.showBox2
    },
    showBox3() {
      console.log('click 3');
      this.boxShow3 = !this.showBox3
    },
    showBox4() {
      console.log('click 4');
      this.boxShow4 = !this.showBox4
    },
  }
})
