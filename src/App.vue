<template>
  <div id="app">
    <div class="scrollable-container">
			<Products/>
    </div>
  </div>
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    Products
  }
} 

</script>

<style>

@font-face {
  font-family: 'Monoid';
  src: url('assets/fonts/Monoisome-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Monoid-Bold';
  src: url('assets/fonts/Monoid-Bold-HalfTight-Small-Dollar-0-1-l-NoCalt.ttf') format('truetype');
  font-weight: normal;
  font-style: normal; 
}

@font-face {
  font-family: 'FiraCode'; 
  src: url('assets/fonts/FiraCode/woff/FiraCode-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'FiraCode-Bold';
  src: url('assets/fonts/FiraCode/woff/FiraCode-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


strong {
	font-family: 'FiraCode-Bold';
	font-size: 12px;
	
}

blockquote {
  font-family: 'FiraCode';
  font-size: 10px; 
}

.scrollable-container {
  height: 50vh; /* 50% of the viewport height */
  width: 50vw; /* 50% of the viewport width */
  overflow-y: auto; /* Makes the container scrollable */
  border: 1px solid #ccc; /* Optional styling */
  padding: 10px; /* Optional styling */
  box-sizing: border-box; /* Include padding and border in the width/height */
}
</style>
