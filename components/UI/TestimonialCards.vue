<template>
  <div class="flex flex-wrap gap-12 justify-center">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-gradient-to-br from-purple-900 to-indigo-800 text-white rounded-lg p-6 shadow-lg card"
    >
      <div
        class="flex items-start justify-between mb-4"
        style="margin-bottom: 1rem"
      >
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
  </div>
</template>

<script setup>
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
    name: "Aisha Khan",
    title: "Full Stack Developer",
    quote: "The courses are very engaging and well-structured.",
    rating: "4.9",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];
</script>

<style scoped>
div[class*="w-64"]:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

.card {
  padding: 2rem;
  width: 100%;
  max-width: 340px;
}

.image-wrapper {
  margin-top: 3rem;
}
</style>
