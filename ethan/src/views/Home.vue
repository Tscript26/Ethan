<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Timer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Timer from '@/components/Time.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Timer
  }
}
</script>
