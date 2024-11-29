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
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <Products mdContentPath="./md/Products.md" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <Products mdContentPath="./md/Teamlead.md" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <Products mdContentPath="./md/Techlead.md" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
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
  max-height: calc(75vh - 60px); 
	min-height: 50%;
	max-width: 90%;
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

@media (max-width: 600px) {
	>>>.carousel-caption {
		max-height: calc(45vh - 80px);
		min-height: 50%;
	}
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

/* @media screen and (max-width: 768px) {
  .responsive-carousel {
    max-height: 60vh; 
	} 
}*/
</style>

