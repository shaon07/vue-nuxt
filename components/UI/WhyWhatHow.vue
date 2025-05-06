<template>
  <div
    class="bg-[#0A0615] text-white px-4 py-10 md:px-16 flex flex-col lg:flex-row items-center justify-center gap-10"
  >
    <!-- Left: Image -->
    <div class="flex-shrink-0 w-full lg:w-1/2">
      <img
        :src="imgSrc"
        alt="Group Photo"
        class="rounded-3xl w-full object-cover shadow-lg h-[350px] cursor-pointer"
        @click="show = true"
      />

      <VueEasyLightbox :visible="show" :imgs="[imgSrc]" @hide="show = false" />
    </div>

    <!-- Right: Text content -->
    <div class="w-full flex flex-col gap-4">
      <div class="flex items-start gap-1">
        <h2 class="font-medium text-lg">
          <span class="text-pink-400 font-semibold">Why: </span>
          <span class="first-text"></span>
        </h2>
      </div>

      <div class="flex items-start gap-1">
        <h2 class="font-medium text-lg">
          <span class="text-pink-400 font-semibold">Why: </span
          ><span class="second-text"></span>
        </h2>
      </div>

      <div class="flex items-start gap-1">
        <h2 class="font-medium text-lg">
          <span class="text-pink-400 font-semibold">Why: </span
          ><span class="third-text"></span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import Typed from "typed.js";
import { onMounted, ref } from "vue";

const imgSrc = "/images/team.jpg";
const show = ref(false);

onMounted(() => {
  new Typed(".first-text", {
    strings: [
      "We are passionate about empowering individuals to transform their lives through the power of coding. We believe that everyone should have access to high-quality, affordable coding education, regardless of their background or experience.",
    ],
    typeSpeed: 30,
  });

  new Typed(".second-text", {
    strings: [
      "We are passionate about empowering individuals to transform their lives through the power of coding. We believe that everyone should have access to high-quality, affordable coding education, regardless of their background or experience.",
    ],
    typeSpeed: 30,
  });

  new Typed(".third-text", {
    strings: [
      "We are passionate about empowering individuals to transform their lives through the power of coding. We believe that everyone should have access to high-quality, affordable coding education, regardless of their background or experience.",
    ],
    typeSpeed: 30,
  });
});
</script>

<style scoped>
/* Optional: customize scrollbar or animations here if needed */
</style>
