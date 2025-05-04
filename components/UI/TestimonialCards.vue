<template>
  <Swiper
    :spaceBetween="30"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    slides-per-view="4"
    :modules="modules"
    loop="true"
    class="mySwiper"
  >
    <SwiperSlide v-for="(card, index) in cards" :key="index">
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
            class="w-32 h-auto rounded-full mr-4"
          />
          <div>
            <h3 class="font-semibold">{{ card.name }}</h3>
            <p class="text-lg text-gray-300">{{ card.title }}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
// Swiper imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Autoplay, Pagination, Navigation];

const cards = [
  {
    name: "Jane Doe",
    title: "Frontend Developer",
    quote: "This app completely changed the way I learn programming.",
    rating: "5.0",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    title: "Backend Engineer",
    quote: "Simple, fun, and effective. Totally worth it!",
    rating: "4.8",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Aisha Khan",
    title: "Full Stack Developer",
    quote: "The courses are very engaging and well-structured.",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Patel",
    title: "DevOps Engineer",
    quote: "Well-curated content with real-world use cases!",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Rahul Patel",
    title: "DevOps Engineer",
    quote: "Well-curated content with real-world use cases!",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Rahul Patel",
    title: "DevOps Engineer",
    quote: "Well-curated content with real-world use cases!",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];
</script>

<style scoped>
.mySwiper {
  padding: 0 1rem;
}
.card {
  padding: 2rem;
  margin: auto;
}
.image-wrapper {
  margin-top: 3rem;
}
</style>
