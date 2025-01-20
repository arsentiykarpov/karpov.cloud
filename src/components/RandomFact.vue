<template>
	<div style="margin:20px">
 		<b-card border-variant="info" class="text-center" title="...">
  <b-card-text>
		{{ randomFact }}
  </b-card-text>
  <b-button @click="generate" variant="outline-info">{{moreText}}</b-button>
	</b-card>
	</div>
</template>

<script>
import { computed, watch, inject, ref } from 'vue' 

export default {

	setup() {
		const factsRu = [
    "12 лет музыкальной школы. Фортепиано и ударные инструменты. Люблю поиграть и пописать музыку.",
    "Полтора года поддерживал j2me (Java 1.2) приложение и разрабатывал на его основе приложение-обертку под девайс Nokia Asha",
    "Возбуждаюсь от NeoVim, Arch Linux, Hyprlane.",
    "Был домашний питомец -- попугай Ара (огромный такой)",
    "Есть рабочий телефон Jolla на Sailfish OS от финской компании. Два Blackberry. Два Samsung Fold.",
    "Женат, дочка 1 год:) На свадьбу написал мобильное приложение, с 2015 года лежит в открытом репозитории, но код лучше не смотреть.",
    "Cертификат MBA от PwC 2022 года.", 
    "Сертификат Domain Driven Design от Luxsoft 2019 года."
  ];

  const factsEn = [
    "Twelve years of music school in piano and percussions instruments. Love to play and write music.",
    "1.5 year of J2me (Java 1.2) app support and development of app-wrapper for Nokia Asha device based on it.",
    "Addicted to NeoVim, Arch Linux, Hyprlane.",
    "Had a big macaw bird as a pet",
    "I have a work phone Jolla on Sailfish OS from a Finnish company. Two Blackberrie. Two Samsung Fold.",
    "Married, raising one year-old daughter. Made the wedding app which is stored in an open repository since 2015 (but the code is better not to be revisioned:)).",
    "Got a PwC issued MBA certificate back in 2022.",
    "Gained Domain Driven Design certificate of Luxsoft 2019." ];

    const language = inject('language');

    watch(
      () => language.value,
      (newValue) => {
        console.log(`Change language to: ${language.value}`);
        generate();
      }
    );
  
    const moreText = computed(()=>{
        return language.value === 'en' 
        ? "more"
        : "ещё"
    });

    var usedIndeces = new Set()
		const randomFact = ref("")
    const generate = () => {
      if (language.value === 'en') {
        generateRandomFact(factsEn);
      } else {
        generateRandomFact(factsRu);
      }
    }

		const generateRandomFact = (facts) => {
			if (usedIndeces.size === facts.length) {
					usedIndeces.clear(); // Reset when all factsRu have been used
			}

			let randomIndex;
			let safetyCounter = 0; // To prevent infinite loops in case of unforeseen issues

			do {
					randomIndex = Math.floor(Math.random() * facts.length);
					safetyCounter++;
			} while (usedIndeces.has(randomIndex) && safetyCounter < facts.length * 2); // Limit retries

			// Fallback: If safetyCounter exceeds, force a new random index
			if (safetyCounter >= facts.length * 2) {
					const remainingIndices = facts.map((_, i) => i).filter(i => !usedIndeces.has(i));
					randomIndex = remainingIndices[0]; // Pick the first available index
			}

			randomFact.value = facts[randomIndex];
			usedIndeces.add(randomIndex);
		}

		return {
			randomFact,
      generate,
      moreText,
		} 
	},
	mounted() {
		this.generate();
	}
}
</script>

<style scoped>
.card {
	font-family: FiraCode;
	font-size: 10pt;
	border: none;
	background-color: transparent;
	box-shadow: none;
}		
</style>
