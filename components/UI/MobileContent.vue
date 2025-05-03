<template>
  <section class="bg-transparent py-16 px-4 text-white">
    <div class="flex items-center gap-40 content">
      <!-- Left Side: Mobile Mockup -->
      <div class="flex justify-center">
        <img
          src="~/assets/images/mobile.png"
          alt="App Mockup"
          class="max-w-[300px] rounded-3xl shadow-2xl border border-purple-600"
          data-aos="fade-up"
        />
      </div>

      <!-- Right Side: Text Content -->
      <div class="text-center flex flex-col gap-8 items-start">
        <h2 class="text-6xl font-bold" data-aos="fade-up">Our Mobile App</h2>

        <!-- Stats -->
        <div
          data-aos="fade-up"
          class="flex flex-wrap justify-center md:justify-start gap-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl stats"
        >
          <div class="text-center border-r-2" style="padding-right: 16px">
            <p class="text-5xl font-bold">1.5M+</p>
            <p class="text-xl">Worldwide Learners!</p>
          </div>

          <div class="text-center border-r-2" style="padding-right: 16px">
            <p
              class="text-5xl font-bold flex justify-center items-center gap-1"
            >
              4.7 <span>⭐</span>
            </p>
            <p class="text-xl">Positive Reviews</p>
          </div>

          <div class="text-center">
            <p class="text-5xl font-bold">12+</p>
            <p class="text-xl">Skill based Courses</p>
          </div>
        </div>

        <!-- Description -->
        <p class="text-xl text-start" data-aos="fade-up">
          Learn programming the fun way with the Programming Hero app!
          <br />
          Download now on the App Store or Google Play.
        </p>

        <!-- Store Buttons -->
        <div
          class="flex justify-center md:justify-start gap-8"
          data-aos="fade-up"
        >
          <a
            href="#"
            class="px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80"
          >
            <img
              src="~/assets/images/appStore.svg"
              alt="Apple"
              class="w-[200px] h-auto"
            />
          </a>

          <a
            href="#"
            class="px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80"
          >
            <img
              src="~/assets/images/googlePlay.svg"
              alt="Google Play"
              class="w-[200px] h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static layout
</script>

<style scoped>
.content {
  max-width: max-content;
  margin: auto;
  padding: 5rem 0;
}

.stats {
  padding: 4rem;
}
</style>
