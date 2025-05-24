<template>
  <div>
    <strong style="display: block;
        font-family: FiraCode;
        font-size: 24px; 
        margin: 0px 0px 0px 0px;
        text-align:left;
        white-space: nowrap;"
        v-html="title">
      </strong>
      <div class="cv-lang-wrapper" target="_blank">
        <a class="cv-button" :href="pdfLink">{{dPdf}}</a>
       <div class="lang-toggle">
  <button
    :class="{ active: language.value === 'en' }"
    @click="toggleLang('en')"
  >
    🇬🇧
  </button>
  <span>|</span>
  <button
    :class="{ active: language.value === 'ru' }"
    @click="toggleLang('ru')"
  >
    🇷🇺
  </button>
</div>
      </div>
  </div>
</template>

<script>
  import {inject, watch, computed} from "vue" ;

  export default {
    setup() {
      const language = inject("language");
      const pdfLink = computed(() => {
        return language.value === 'en' 
        ? "./pdf/en/ArsentiiKarpov.pdf"
        : "./pdf/ru/ArsentiiKarpov.pdf";
      });

      const title = computed(() => {
        return language.value === 'en' 
          ? `<section class="intro">
  <h1>Arsentii Karpov <i class="fas fa-battery-full"></i></h1>
  <h2 class="roles">
    Android Developer <i class="fa-brands fa-android"></i>
    &nbsp;|&nbsp; Fullstack <i class="fa-solid fa-layer-group"></i>
    &nbsp;|&nbsp; Teamlead <i class="fa-solid fa-users-gear"></i>
  </h2>
</section>`
          : `<section class="intro">
  <h1>Арсентий Карпов<i class="fas fa-battery-full"></i></h1>
  <h2 class="roles">
    Android Разработчик <i class="fa-brands fa-android"></i>
    &nbsp;|&nbsp; Fullstack <i class="fa-solid fa-layer-group"></i>
    &nbsp;|&nbsp; Teamlead <i class="fa-solid fa-users-gear"></i>
  </h2>
</section>`;
      });

      const dPdf = computed(() => {
        return language.value === 'en' 
        ? "[*.pdf] Download CV"
        : "[*.pdf] Скачать Резюме";
      });

      const toggleLang = (lang) => {
        language.value = lang
      }

    return {
      pdfLink,
      dPdf,
      title,
      language,
      toggleLang
      };
    },
  };
</script>

<style>
.intro {
  text-align: center;
  margin-top: 2rem;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.intro h2.roles {
  font-size: 1.25rem;
  font-weight: normal;
  color: #444;
}

.intro i {
  margin-left: 0.3em;
  color: #2e7d32; /* акцент — зелёный/тёмный */
}

.cv-lang-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.cv-button {
  background-color: #2e7d32;
  color: white;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  font-family: FiraCode;
  transition: background 0.3s;
}

.cv-button:hover {
  background-color: #1b5e20;
}

.lang-toggle button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25em 0.5em;
  color: #333;
}

.lang-toggle button.active {
  color: #2e7d32;
  text-decoration: underline;
}

</style> 
