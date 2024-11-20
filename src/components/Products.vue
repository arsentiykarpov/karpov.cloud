<template>
<div>
  <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">Collapse contents Here</p>
      <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card>Hello!</b-card>
      </b-collapse>
    </b-card>
  </b-collapse>
</div>
</template>

<script>
import { ref, computed } from "vue";
import markdownit from "markdown-it";
import MDContent from "../assets/md/test1.md";
import deflist from 'markdown-it-deflist';

export default {
  setup() {
    const md = markdownit({ html: true }).use(deflist)
    const markdownRaw = ref(MDContent);

    console.log("MD Content raw: ", MDContent);

    md.renderer.rules.text = (tokens, idx) => {
      const content = tokens[idx].content;
      console.log("Token type: ", tokens[idx].type);
      console.log("Token content: ", tokens[idx].content.value);
      return content;
    };
    const renderedMarkdownIt = computed(() =>
      md.render(markdownRaw.value)
    );
    console.log("Rendered Markdown-it Output:", md.render(markdownRaw.value));
    return { renderedMarkdownIt };
  },
};
window.toggleDropdown = function (index) {
  const content = document.querySelectorAll(".dropdown-content")[index];
  if (content) {
    content.classList.toggle("active");
  }
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
