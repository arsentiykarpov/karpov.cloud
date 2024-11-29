<template>
	<div>
    <b-carousel
      id="carousel-1"
      :interval="0"
	indicators
      controls
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="margin: 20px;text-shadow: 1px 1px 2px #333;"
    >

		<b-carousel-slide
			img-src="https://picsum.photos/1024/480/?image=52"
		>
		<Products mdContentPath="./md/Products.md" />	
		</b-carousel-slide>
		
		<b-carousel-slide
			img-src="https://picsum.photos/1024/480/?image=52"
		>
		<Products mdContentPath="./md/Teamlead.md" />	
		</b-carousel-slide>
		
		<b-carousel-slide
			img-src="https://picsum.photos/1024/480/?image=52"
		>
		<Products mdContentPath="./md/Techlead.md" />	
		</b-carousel-slide>
		<b-carousel-slide
			img-src="https://picsum.photos/1024/480/?image=52"
		>
		<b-img src="./ars-playboy.png" style="height: 200px; bottom: 100px"></b-img>

		</b-carousel-slide>
	</b-carousel>
	<RandomFact />
	    </div>
</template>

<script>
import Products from './components/Products.vue'
import RandomFact from './components/RandomFact.vue'

export default {
  name: 'App',
  components: {
    Products,
		RandomFact,
  },
} 

</script>
<style scoped>
/* Override default Bootstrap caption styles */
>>> .carousel-caption {
  top: 0px; /* Remove top offset */
}
</style>


<style>
strong {
	font-family: 'FiraCode-Bold';
	font-size: 12px;
	
}

blockquote {
  font-family: 'FiraCode';
  font-size: 10px; 
	text-align: left;
}

</style>
