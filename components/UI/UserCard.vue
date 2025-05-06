<template>
  <div class="relative text-white shadow-lg card">
    <div class="card-bg rounded-lg" :class="bgType[card.type]"></div>
    <div class="flex items-start justify-between mb-4">
      <span class="text-4xl">“</span>
      <button :class="buttonType[card.type]" style="padding: 8px">
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
  type: "green" | "yellow" | "blue" | "pink";
};
const show = ref(false);
const card = defineProps<Card>();
const bgType = {
  green: "bg-greenish",
  yellow: "bg-yellow",
  blue: "bg-bluish",
  pink: "bg-pinky",
};

const buttonType = {
  green: "main-button",
  yellow: "main-button-2",
  blue: "main-button",
  pink: "main-button-2",
};
</script>

<style lang="scss" scoped>
.card {
  padding: 2rem;
  margin: auto;

  .card-bg {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    z-index: -1;
  }

  .bg-bluish {
    background: linear-gradient(161deg, #371ce2 0%, rgba(37, 6, 77, 0) 100%);
  }

  .bg-greenish {
    background: linear-gradient(161deg, #1ce2bf 0%, rgba(6, 68, 77, 0) 100%);
  }

  .bg-pinky {
    background: linear-gradient(161deg, #e21ce2 0%, rgba(77, 6, 55, 0) 100%);
  }

  .bg-yellow {
    background: linear-gradient(161deg, #e2871c 0%, rgba(77, 65, 6, 0) 100%);
  }

  p {
    margin-top: 1rem;
  }
}
.image-wrapper {
  margin-top: 3rem;
}
</style>
