<template>
  <div>
    <Title/> 
    <div class="cv-grid">
      <webcv :mdContentPath="getPath('Products')" />	
      <webcv :mdContentPath="getPath('Teamlead')" />	
      <webcv :mdContentPath="getPath('Techlead')" />	
    </div>
    <div class="contact-block">
  <div class="contact-info">
    <p><strong>Telegram:</strong> <a href="https://t.me/arsengizer">@arsengizer</a></p>
    <p><strong>Email:</strong> <a href="mailto:arsentiy.karpov@gmail.com">arsentiy.karpov@gmail.com</a></p>
    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/arsentiy-karpov-4171a859"
           title="https://www.linkedin.com/in/arsentiy-karpov-4171a859">https://www.linkedin.com/in/arsentiy-karpov-4171a859</a></p>
  </div>
  <div class="qr-pair">
    <div class="qr">
      <img src="telegram_qr.png" alt="Telegram QR" loading="lazy">
      <div class="label">Telegram</div>
    </div>
    <div class="qr">
      <img src="email_qr.png" alt="Email QR" loading="lazy">
      <div class="label">Email</div>
    </div>
    <div class="qr">
      <img src="linkedin_qr.png" alt="LinkedIn QR" loading="lazy">
      <div class="label">LinkedIn</div>
    </div>
  </div>
</div>
    <RandomFact />
  </div>
</template>

<script>
import {ref, provide} from 'vue';  
import webcv from './components/webcv.vue';
import RandomFact from './components/RandomFact.vue';
import Title from './components/Title.vue';

export default {
  name: 'App',
  components: {
    webcv,
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
.cv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns on wide screens */
  gap: 16px;               /* space between cards */
  height: 80vh;
  padding: 0 20px;         /* optional: align with your contact block margins */
}

/* Mobile: stack into 1 column (=> 3 rows) */
@media (max-width: 768px) {
  .cv-grid {
    grid-template-columns: 1fr;
  }
}

.cv-grid > * {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  overflow-y: hidden; /* prevents layout jumps if inner content is wider */
}

a:hover {
  color: #F5B041; /* Change color on hover */
}

.contact-block {
  display: grid;
  grid-template-columns: 1fr max-content; /* left grows, right fits QR width */
  gap: 16px 32px;
  align-items: center;                    /* or: start */
  margin: 20px 20px 0;
  padding: 20px 30px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #ddd;
}

/* Left side: labels + links */
.contact-info { min-width: 0; }

.contact-info p{
  display:grid;
  grid-template-columns: max-content 1fr; /* label auto, link fills */
  column-gap:.6rem;
  align-items:baseline;
  white-space:nowrap;
}
.contact-info strong{ margin:0; text-align:left; }
.contact-info a{
  min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}

/* Right side: QR group */
.qr-pair { display: grid; grid-auto-flow: column; gap: 20px; }
.qr-pair .qr {
  text-align: center;
}
.qr-pair img {
  display: block;
  width: 100px; height: 100px; object-fit: contain;
  border: 1px solid #ccc; border-radius: 4px;
}
.qr-pair .label { margin-top: 6px; font-size: 0.9rem; }

/* Mobile */
@media (max-width: 768px) {
  .contact-info strong { flex: 0 0 auto; width: auto; text-align: left; padding-right: .5rem; }
  .contact-block { grid-template-columns: 1fr; }
  .qr-pair { justify-content: start; }
}
</style>

