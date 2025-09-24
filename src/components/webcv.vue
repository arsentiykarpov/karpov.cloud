<template>
	<div class="md-content-conatiner">
	<div class="scrollable-container" v-html="renderedMarkdownIt"></div>
	</div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import markdownit from "markdown-it";

export default {
  name: "webcv",
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
/* Card container */
.md-content-container {
  overflow: hidden;         /* keep rounded corners clean */
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
}

/* Inner scroller */
.scrollable-container {
  height: 100%;
  margin: 0;                                /* was 20px — move spacing to padding */
  padding: 20px 40px 40px 20px;             /* consistent inner spacing */
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}

/* Links styling */
blockquote a,
p a,
li a{
  color: #2e7d32; /* Link color */
  text-decoration: none; /* Remove underline */
}

p a:hover,
blockquote a:hover,
li a:hover {
  color: #1b5e20;/* Change color on hover */
}
</style>
