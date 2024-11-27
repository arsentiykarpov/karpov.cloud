<template>
<div>
	<div v-html="renderedMarkdownIt"></div>
</div>
</template>

<script>
import { ref, computed } from "vue";
import markdownit from "markdown-it";
import MDContent from "../assets/md/Products.md";
import deflist from 'markdown-it-deflist';
 
export default {
  setup() {
    const md = markdownit({ html: true }).use(deflist)
    const markdownRaw = ref(MDContent);
    const renderedMarkdownIt = computed(() =>
      md.render(markdownRaw.value)
    );
    console.log("Rendered Markdown-it Output:", md.render(markdownRaw.value));
    return { renderedMarkdownIt };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown-list {
  font-family: Arial, sans-serif;
}

.dropdown-item {
  margin-bottom: 10px;
}

.dropdown-button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-button:hover {
  background-color: #45a049;
}

.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 5px;
}

.dropdown-content.active {
  display: block;
}
</style>
