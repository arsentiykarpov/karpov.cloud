<template>
  <div>
    <Title/> 
    <b-carousel
      id="carousel-1"
      :interval="5000"
      indicators
      controls
			fade
      background="#ababab"
      class="responsive-carousel"
      style="margin: 20px; text-shadow: 1px 1px 2px #333;margin-top: 0px;"
    >
      <b-carousel-slide img-src="./bg/drums_cropped.jpg" img-width="1024" img-height="480">
        <Products :mdContentPath="getPath('Products')" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="./bg/drums_cropped.jpg">
        <Products :mdContentPath="getPath('Teamlead')" />	
      </b-carousel-slide>
      
      <b-carousel-slide img-src="./bg/drums_cropped.jpg">
        <Products :mdContentPath="getPath('Techlead')" />	
      </b-carousel-slide>
		</b-carousel>

    <div class="contact-block" style="display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; margin-top: 0px; padding-left: 30px;padding-top: 20px; margin-left: 20px; margin-right:20px; border-radius: 12px; background-color: #f9f9f9; border: 1px solid #ddd;">
      <div class="contact-info">
        <p style="font-size: 1.1em;"><strong>Telegram:</strong> <a href="https://t.me/arsengizer" style="color: #2d8f2d;">@arsengizer</a></p>
        <p style="font-size: 1.1em;"><strong>Email:</strong> <a href="mailto:arsentiy.karpov@gmail.com" style="color: #2d8f2d;">arsentiy.karpov@gmail.com</a></p>
        <p style="font-size: 1.1em;"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/arsentiy-karpov-4171a859" style="color: #2d8f2d;">https://www.linkedin.com/in/arsentiy-karpov-4171a859</a></p>
      </div>

      <div class="qr-pair" style="display: flex; gap: 20px;padding-right: 30px;">
        <div style="text-align: center;">
          <img src="telegram_qr.png" alt="Telegram QR" width="100" height="100" style="border: 1px solid #ccc; border-radius: 0px;">
          <div>Telegram</div>
        </div>
        <div style="text-align: center;">
          <img src="email_qr.png" alt="Email QR" width="100" height="100" style="border: 1px solid #ccc; border-radius: 0px;">
          <div> Email</div>
        </div>
        <div style="text-align: center;">
          <img src="linkedin_qr.png" alt="LinkedIn QR" width="100" height="100" style="border: 1px solid #ccc; border-radius: 0px;">
          <div>LinkedIn</div>
        </div>
      </div>
    </div>
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
    const getPath = (fileName) => {
      return `./md/${language.value}/${fileName}.md`;
    }

    provide('language', language);

    return {
      language,
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
  height: 85%; 
	overflow: hidden;
  color: white; 
  border-radius: 10px;
	padding-top: 10px;
	padding-bottom: 40px;
	top: 0px;
	bottom: 0px;
	left: 5%;
	right: 5%;
  text-align: left;
  font-family: FiraCode;
}

>>>.carousel-caption h5 {
  font-family:FiraCode-Bold;
}
	>>>.carousel-item.active {
		position: relative;
		max-height: 70vh;/*why relative parent height not working??? so duplicate Viewport height of parent, kind of hack?*/
	}
	
	>>>.carousel-item{
		position: relative;
		max-height: 70vh;/*why relative parent height not working??? so duplicate Viewport height of parent, kind of hack?*/
	}

  >>>.carousel-item img {
    opacity: 0.5;
  }

	>>>.carousel-inner {
		position: relative;
		overflow: hidden;
		max-height: 70vh;
	}
 
  >>>.carousel-indicators {
    margin-top: 20px;
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
    .contact-info {
      flex: 1;
    }
    .contact-info strong {
      font-family: FiraCode;
      font-size: 14px;
    }
    .qr-codes {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: FiraCode;
      font-size: 12px;
    }
.qr-pair div div {
  font-family: 'Fira Code', monospace;
  font-size: 12px;
}
</style>

<style>
/* General styling */
strong {
  font-family: 'FiraCode-Bold';
  font-size: 16px;
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

