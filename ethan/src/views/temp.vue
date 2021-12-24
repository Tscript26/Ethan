<template>
<div id='Links'>
  <ul>
    <li v-for="item of hits" :key="item.objectID">
      <a :href="item.url">{{ item.title }}</a>
    </li>
  </ul>
</div>
</template>

<script>
import { reactive, onMounted } from "vue";
export default {
  name: "temp",
  setup() {
    const state = reactive({
      hits: [],
    });
    onMounted(async () => {
      const data = await fetch(
        "https://hn.algolia.com/api/v1/search?query=vue"
      ).then((rsp) => rsp.json());
      state.hits = data.hits;
    });
    return state;
  },
};
</script>

<style scoped>
div#Links {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding-left: 5%;
  color: #2c3e50;
}
</style>
