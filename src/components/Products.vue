<template>
  <div 
    v-html="renderedMarkdown" 
    class="markdown-preview">
  </div>
</template>

<script>
import {ref, computed} from "vue"
import {marked} from "marked"

export default {
	setup() {
		const markdownRaw = ref(require('../assets/md/Продукты.md').default)
		const renderedMarkdown = computed(()=>marked(markdownRaw.value))
		return {renderedMarkdown}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
