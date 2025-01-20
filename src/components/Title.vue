<template>
  <div>
    <strong style="display: block;
        font-family: FiraCode;
        font-size: 24px; 
        margin: 20px 0px 0px 0px;
        text-align:center;
        white-space: nowrap;"
        v-html="title">
      </strong>
      <div style="display: flex; justify-content: flex-end; padding-right: 28px;">
      <a :href="pdfLink" 
        style="display: block;
        color:#48c774;
        font-family: FiraCode-Bold;
        font-size: 18px; 
        margin: 0px 0px 0px 0px;
        text-align:center;
        white-space: nowrap;">{{dPdf}}</a>
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
          ? '<h2>Arsentii Karpov <i class="fas fa-battery-full"></i></h2><p>Android developer/Fullstack/Teamlead'
          : '<h2>Арсентий Карпов <i class="fas fa-battery-full"></i></h2><p>Android developer/Fullstack/Teamlead';
      });

      const dPdf = computed(() => {
        return language.value === 'en' 
        ? "*.pdf"
        : "*.pdf";
      });


    return {
      pdfLink,
      dPdf,
      title
      };
    },
  };
</script>

<style>

</style> 
