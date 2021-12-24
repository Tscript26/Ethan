<template>
  <div class="main">   
    <!-- 头部 -->
    <div class="header">     
      <div class="cue_time">{{currentDate}}</div>
    </div>
  </div>
</template>

<script>
  import utils from '../utils/timer.js' 
  export default {
    name:"tranin",
    data () {
      return{       
        currentDate: utils.formatDate(new Date()),
        currentDateTimer:null,//头部当前时间
      }
       
    },
    methods:{
      // 刷新头部时间
      refreashCurrentTime(){
        this.currentDate = utils.formatDate(new Date())
      }
  
    },
    mounted(){
      // 定时刷新时间
      this.currentDateTimer = setInterval(this.refreashCurrentTime,1000)
  
    }
  }
</script>


<style scoped>
div.cue_time{
    text-align: right;
}
</style>