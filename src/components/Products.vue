<template>
	<div class="md-content-conatiner">
	<div class="scrollable-container" v-html="renderedMarkdownIt"></div>
	</div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import markdownit from "markdown-it";

export default {
  name: "Products",
  props: {
    mdContentPath: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const md = markdownit({ html: true })
    const markdownRaw = ref("");

    const renderedMarkdownIt = computed(() => md.render(markdownRaw.value));

    const loadMarkdown = async (path) => {
    try {
      const response = await fetch(path);
      markdownRaw.value = await response.text();
    } catch (error) {
      console.error("Error loading markdown file:", error);
      markdownRaw.value = "Error loading content.";
    }
    };

    onMounted(() => { 
      loadMarkdown(props.mdContentPath).catch(console.error);
    }
    );
    watch(
      () => props.mdContentPath,
      (newPath) => {
        loadMarkdown(newPath).catch(console.error);
      },
      {immediate: true}
    );
   return { renderedMarkdownIt };
  },
};
</script>

<style>
/* Ensure the content takes the full height of the carousel */
.md-content-conatiner {
	height: 100%;
  backdrop-filter: blur(5px); /* Applies a blur effect */
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent dark background */
  -webkit-backdrop-filter: blur(5px); /* Safari support */
  border-radius: 6px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visuals */
  color: #fff; /* Text color for readability */
  overflow: hidden; /* Disable horizontal scrolling */
}
/* The scrollable container */
.scrollable-container {
	height: 100%;
	margin: 20px;
  padding-right: 40px;
  padding-bottom: 20px;
  overflow-y: auto; 
  overflow-x: hidden; /* Disable horizontal scrolling */
}

/* Links styling */
blockquote a {
  color: #48c774; /* Link color */
  text-decoration: none; /* Remove underline */
}

blockquote a:hover {
  color: #F5B041; /* Change color on hover */
}
</style>
