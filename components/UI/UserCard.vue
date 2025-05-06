<template>
  <div
    class="bg-gradient-to-br from-purple-900 to-indigo-800 text-white rounded-lg shadow-lg card"
  >
    <div class="flex items-start justify-between mb-4">
      <span class="text-4xl">“</span>
      <button class="main-button" style="padding: 8px">
        {{ card.rating }}
      </button>
    </div>

    <p class="text-xl mb-4">
      {{ card.quote }} <a href="#" class="text-blue-300">...more</a>
    </p>

    <div class="flex items-center gap-4 image-wrapper">
      <img
        :src="card.image"
        alt="Profile"
        class="w-32 h-auto rounded-full mr-4 cursor-pointer"
        @click="show = true"
      />

      <VueEasyLightbox
        :visible="show"
        :imgs="[card.image]"
        @hide="show = false"
      />
      <div>
        <h3 class="font-semibold">{{ card.name }}</h3>
        <p class="text-lg text-gray-300">{{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

type Card = {
  name: string;
  title: string;
  rating: string;
  quote: string;
  image: string;
};
const show = ref(false);
const card = defineProps<Card>();
</script>

<style lang="scss" scoped>
.image-wrapper {
  margin-top: 3rem;
}
</style>
