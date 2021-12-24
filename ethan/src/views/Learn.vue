<template>
  <div>
    <router-link to="/home">Go to Home</router-link>
    <!-- <href @click="See('https://www.baidu.com')">百度</href> -->
    <br />
    <a href="https://www.baidu.com">百度</a>
    <br />
    <a href="https://macwk.com">mac软件下载</a>
    <br />
    <a href="https://www.antdv.com">ant-vue-design</a>
    <br />
    <a href="https://segmentfault.com/a/1190000037532776">组合api学习</a>
    <br />
    <p id="token">{{ this.token }}</p>
    <a @click="GetToken()"> 测试 </a>
    <!-- <router-link target="_blank" :to="{path:'/home', query:{id:'1'}}">新页面打开home页</router-link> -->
  </div>
</template>

    
<script>
export default {
  name: "temp",
  data() {
    return {
      token: null,
    };
  },
  methods: {
    See(e) {
      window.location.href = e;
    },
    async GetToken() {
      var data = await fetch("https://api-talent-beta.top3-talent.com/", {
        method: "GET",
      }).then((rsp) => {
        return rsp.json();
      });
      console.log(data);
      this.token = data;
    },
  },
};
</script>
