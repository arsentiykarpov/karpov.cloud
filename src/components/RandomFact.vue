<template>
	<div style="margin:20px">
 		<b-card border-variant="info" class="text-center" title="Самое важное">
  <b-card-text>
		{{ randomFact }}
		{{ debugIndex }}
  </b-card-text>
  <b-button @click="generateRandomFact" variant="primary">ещё</b-button>
	</b-card>
	</div>
</template>


<script>
import { getCurrentScope, ref } from 'vue' 

export default {
	setup() {
		const facts = [
			"12 лет музыкальной школы. Фортепиано и ударные инструменты. Люблю поиграть и пописать музыку.",
			"Полтора года поддерживал j2me (Java 1.2) приложение и разрабатывал на его основе приложение-обертку под девайс Nokia Asha",
			"Возбуждаюсь от NeoVim, Arch Linux, Hyprlane.",
			"Был домашний питомец -- попугай Ара (огромный такой)",
			"Есть рабочий телефон Jolla на Sailfish OS от финской компании. Два Blackberry. Два Samsung Fold.",
			"Женат, дочка 1 год:) На свадьбу написал мобильное приложение, с 2015 года лежит в открытом репозитории, но код лучше не смотреть.",
			"Cертификат MBA от PwC 2022 года.", 
			"Сертификат Domain Driven Design от Luxsoft 2019 года."
		]

		var usedIndeces = new Set()
		const randomFact = ref("")
		const debugIndex = ref("")
		const generateRandomFact = () => {
			if (usedIndeces.size === facts.length) {
					usedIndeces.clear(); // Reset when all facts have been used
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
			generateRandomFact,
			debugIndex
		} 
	},
	mounted() {
		this.generateRandomFact()
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
