<template>
  <div>
    <Title/> 
    <div class="cv-grid">
      <webcv :mdContentPath="getPath('Products')" />	
      <webcv :mdContentPath="getPath('Teamlead')" />	
      <webcv :mdContentPath="getPath('Techlead')" />	
    </div>
    <div class="contact-block" >
      <div class="contact-info">
        <p><strong>Telegram:</strong> <a href="https://t.me/arsengizer" style="color: #2d8f2d;">@arsengizer</a></p>
        <p><strong>Email:</strong> <a href="mailto:arsentiy.karpov@gmail.com" style="color: #2d8f2d;">arsentiy.karpov@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/arsentiy-karpov-4171a859" style="color: #2d8f2d;">https://www.linkedin.com/in/arsentiy-karpov-4171a859</a></p>
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
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 20px 0;
  padding: 20px 30px 20px 30px;
  border-radius: 12px;
  background: #f9f9f9;
  border: 1px solid #ddd;
}

/* Left side: labels + links */
.contact-info {
  flex: 1 1 360px;   /* can grow & shrink */
  min-width: 0;      /* <-- required so the link can shrink/ellipsis in flex */
}

.contact-info p {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 6px 0;
  white-space: nowrap;  /* keep everything on one line */
}

.contact-info strong {
  flex: 0 0 auto;       /* label stays fixed width */
}

/* The link takes remaining width and truncates */
.contact-info a {
  flex: 1 1 auto;
  min-width: 0;         /* <-- critical for ellipsis */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: #2d8f2d;
}

/* Right side: QR group */
.qr-pair {
  display: flex;
  gap: 20px;
  padding-right: 30px;
}

/* Mobile: stack nicely */
@media (max-width: 768px) {
  .contact-block { gap: 16px; }
  .qr-pair { padding-right: 0; width: 100%; justify-content: flex-start; }
}
</style>

