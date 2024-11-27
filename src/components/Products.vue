<template>
	<div class="scrollable-container" v-html="renderedMarkdownIt"></div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import markdownit from "markdown-it";
import deflist from "markdown-it-deflist";

export default {
  name: "Products",
  props: {
    mdContentPath: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const md = markdownit({ html: true }).use(deflist);
    const markdownRaw = ref("");

    const renderedMarkdownIt = computed(() => md.render(markdownRaw.value));

    const loadMarkdown = async () => {
      try {
        const response = await fetch(props.mdContentPath);
        markdownRaw.value = await response.text();
      } catch (error) {
        console.error("Error loading markdown file:", error);
        markdownRaw.value = "Error loading content.";
      }
    };

    onMounted(loadMarkdown);

    return { renderedMarkdownIt };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollable-container {
height: 90%;	
  overflow-y: auto; /* Makes the container scrollable */
  border: 0px solid #ccc; /* Optional styling */
  padding: 10px; /* Optionail styling */
  box-sizing: border-box; /* Include padding and border in the width/height */
	backdrop-filter: blur(10px); /* Applies the blur effect */
	background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(10px); /* For Safari support */
  border-radius: 10px; /* Optional, for rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional, for better visuals */
  padding: 20px;
}

blockquote {
  font-family: 'FiraCode';
  font-size: 10px; 
	text-align: left;
}


</style>
