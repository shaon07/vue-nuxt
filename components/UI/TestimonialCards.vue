<template>
  <Swiper
    :spaceBetween="30"
    :slides-per-view="4"
    :modules="modules"
    :loop="true"
    class="mySwiper"
    :autoplay="true"
  >
    <SwiperSlide v-for="(card, index) in cards" :key="index">
      <UserCard
        :name="card.name"
        :title="card.title"
        :quote="card.quote"
        :image="card.image"
        :rating="card.rating"
        :type="card.type"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import UserCard from "@/components/UI/UserCard.vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const modules = [Autoplay, Pagination, Navigation];

type type = "pink" | "blue" | "green" | "yellow";

const cards = [
  {
    name: "Jane Doe",
    title: "Frontend Developer",
    quote: "This app completely changed the way I learn programming.",
    rating: "5.0",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "pink" as type,
  },
  {
    name: "John Smith",
    title: "Backend Engineer",
    quote: "Simple, fun, and effective. Totally worth it!",
    rating: "4.8",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    type: "blue" as type,
  },
  {
    name: "Aisha Khan",
    title: "Full Stack Developer",
    quote: "The courses are very engaging and well-structured.",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    type: "green" as type,
  },
  {
    name: "Rahul Patel",
    title: "DevOps Engineer",
    quote: "Well-curated content with real-world use cases!",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    type: "yellow" as type,
  },
  {
    name: "Rahul Patel",
    title: "DevOps Engineer",
    quote: "Well-curated content with real-world use cases!",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    type: "green" as type,
  },
  {
    name: "Rahul Patel",
    title: "DevOps Engineer",
    quote: "Well-curated content with real-world use cases!",
    rating: "4.7",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    type: "blue" as type,
  },
];
</script>

<style scoped>
.mySwiper {
  padding: 0 1rem;
}
</style>
