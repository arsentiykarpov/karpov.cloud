<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="0"
      indicators
      controls
			fade
      background="#ababab"
      img-width="1024"
      img-height="480"
      class="responsive-carousel"
      style="margin: 20px; text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <Products mdContentPath="./md/Products.md" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <Products mdContentPath="./md/Teamlead.md" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <Products mdContentPath="./md/Techlead.md" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <b-img src="./ars-playboy.png" style="height: 200px; bottom: 100px"></b-img>
			</b-carousel-slide>
		</b-carousel>
    <RandomFact />
  </div>
</template>

<script>
import Products from './components/Products.vue';
import RandomFact from './components/RandomFact.vue';

export default {
  name: 'App',
  components: {
    Products,
    RandomFact,
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
  color: #48C9B0; /* Link color */
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
  font-size: 13px;
}

blockquote {
  font-family: 'FiraCode';
  font-size: 12px;
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
  color: #48C9B0; /* Link color */
  text-decoration: none; /* Remove underline */
}

a:hover {
  color: #F5B041; /* Change color on hover */
}

/* @media screen and (max-width: 768px) {
  .responsive-carousel {
    max-height: 60vh; 
	} 
}*/
</style>

