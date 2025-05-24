<template>
  <div>
    <Title/> 
    <div class="language-switcher" style="display: flex; justify-content: flex-start; padding-left: 20px;">
      <a href="#" :class="{ active: language === 'ru' }" @click="switchLanguage('ru')">RU</a>/
      <a href="#" :class="{ active: language === 'en' }" @click="switchLanguage('en')">EN</a>
 
    </div>

    <b-carousel
      id="carousel-1"
      :interval="0"
      indicators
      controls
			fade
      background="#ababab"
      class="responsive-carousel"
      style="margin: 20px; text-shadow: 1px 1px 2px #333;margin-top: 0px;"
    >
      <b-carousel-slide img-src="./bg/bath_cropped.jpg" img-width="1024" img-height="480">
        <Products :mdContentPath="getPath('Products')" />	App
      </b-carousel-slide>
      
      <b-carousel-slide img-src="./bg/bath_cropped.jpg">
        <Products :mdContentPath="getPath('Teamlead')" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="./bg/bath_cropped.jpg">
        <Products :mdContentPath="getPath('Techlead')" />	
      </b-carousel-slide>
      <b-carousel-slide img-src="./bg/ihouse_cropped.jpg">
        <Products :mdContentPath="getPath('Contacts')" />	
      </b-carousel-slide>
		</b-carousel>
    <RandomFact />
  </div>
</template>

<script>
import {ref, provide} from 'vue';  
import Products from './components/Products.vue';
import RandomFact from './components/RandomFact.vue';
import Title from './components/Title.vue';

export default {
  name: 'App',
  components: {
    Products,
    RandomFact,
    Title,
  },
  setup() {
    const language = ref('en');
    const switchLanguage = (lang) => {
      language.value = lang;
    }
    const getPath = (fileName) => {
      return `./md/${language.value}/${fileName}.md`;
    }

    provide('language', language);

    return {
      language,
      switchLanguage,
      getPath,
    };
  },
};
</script>

<style scoped>
>>>.carousel-control-prev {
	width: 5%;
}

>>>.carousel-control-next {
	width: 5%;
}

>>>.carousel-caption {
  height: 90%; 
	overflow: hidden;
  color: white; 
  border-radius: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	top: 0px;
	bottom: 0px;
	left: 5%;
	right: 5%;
}
	>>>.carousel-item.active {
		position: relative;
		max-height: 70vh;/*why relative parent height not working??? so duplicate Viewport height of parent, kind of hack?*/
	}
	
	>>>.carousel-item{
		position: relative;
		max-height: 70vh;/*why relative parent height not working??? so duplicate Viewport height of parent, kind of hack?*/
	}

	>>>.carousel-inner {
		position: relative;
		overflow: hidden;
		max-height: 70vh;
	}
/*
@media (max-width: 200px) {
	>>>.carousel-caption {
		max-height: calc(45vh - 80px);
		min-height: 50%;
	}
}*/
	/* Links styling */
a {
  color: #48c774; /* Link color */
  text-decoration: none; /* Remove underline */
}

a:hover {
  color: #F5B041; /* Change color on hover */
}

</style>

<style>
/* General styling */
strong {
  font-family: 'FiraCode-Bold';
  font-size: 15px;
}

blockquote {
  font-family: 'FiraCode';
  font-size: 14px;
  text-align: left;
}

/* Responsive carousel container */
.responsive-carousel {
  max-width: 100%;
  max-height: 70vh; /* Half of the viewport height */
  overflow: hidden;
	border-radius: 6px;
}

/* Adjust images to fit within the carousel */
.responsive-carousel img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Ensure images cover the space without distortion */
}
/* Links styling */
a {
  font-family: 'FiraCode-Bold';
  color: #48C9B0; /* Link color */
  text-decoration: none; /* Remove underline */
}

a:hover {
  color: #F5B041; /* Change color on hover */
}

body {
  background-color: #EFF1F4;
}
/* @media screen and (max-width: 768px) {
  .responsive-carousel {
    max-height: 60vh; 
	} 
}*/
</style>

