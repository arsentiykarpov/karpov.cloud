<template>
	<div class="scrollable-container" v-html="renderedMarkdownIt"></div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
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
<style>
/* Ensure the content takes the full height of the carousel */

/* The scrollable container */
.scrollable-container {
	height: 100%;
  overflow-y: auto; 
  padding: 14px;
  box-sizing: border-box;
  backdrop-filter: blur(10px); /* Applies a blur effect */
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  -webkit-backdrop-filter: blur(10px); /* Safari support */
  border-radius: 6px; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for better visuals */
  color: #fff; /* Text color for readability */
  overflow-x: hidden; /* Disable horizontal scrolling */
}

/* Links styling */
a {
  color: #48C9B0; /* Link color */
  text-decoration: none; /* Remove underline */
}

a:hover {
  color: #F5B041; /* Change color on hover */
}
</style>
