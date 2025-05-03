<template>
  <div
    data-aos="fade-up"
    class="rounded-3xl p-6 sm:p-10 md:p-12 flex gap-12 items-center shadow-lg"
    :class="props.variant === 'primary' ? 'flex-row' : 'flex-row-reverse'"
  >
    <!-- Left Section -->

    <div
      class="relative w-full md:w-1/2 card-image"
      :class="props.variant === 'primary' ? 'bg-primary' : 'bg-secondary'"
    >
      <img
        src="~/assets/images/web-thumbnail.png"
        alt="Web Dev Promo"
        class="rounded-xl w-full h-auto object-cover"
      />

      <div class="absolute inset-0 flex justify-center items-center">
        <button
          class="bg-white bg-opacity-30 backdrop-blur-md text-white w-16 h-16 rounded-full flex justify-center items-center text-4xl"
        >
          ▶
        </button>
      </div>

      <div class="title">
        <h2 class="text-white text-3xl font-bold">Complete Web Development</h2>
        <button
          :class="props.variant === 'primary' ? 'main-button' : 'main-button-2'"
        >
          Let’s Code
        </button>
      </div>
    </div>

    <!-- Right Section -->
    <div
      :class="props.variant === 'primary' ? 'text-left' : 'text-right'"
      class="w-full md:w-1/2 text-white flex flex-col gap-4"
    >
      <h1
        class="text-3xl md:text-4xl font-bol mb-4"
        :class="
          props.variant === 'primary' ? 'text-purple-400' : 'text-blue-400'
        "
      >
        Kickstart your journey in <br />
        <span class="text-white">Web Development</span>
      </h1>
      <p class="text-gray-300 mb-6">
        Welcome to Programming Hero! Dive into the world of modern web
        development with a focus on MERN stack - MongoDB, Express.js, React, and
        Node.js. This course takes you from beginner to job-ready!
      </p>
      <div
        class="flex gap-4"
        :class="props.variant === 'primary' ? 'justify-start' : 'justify-end'"
      >
        <button
          :class="props.variant === 'primary' ? 'main-button' : 'main-button-2'"
        >
          Explore
        </button>

        <button
          :class="
            props.variant === 'primary'
              ? 'secondary-button'
              : 'secondary-button-2'
          "
        >
          Success
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss" scoped>
.card-image {
  border-radius: 14px;
  padding: 2rem;

  .title {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
