<template>
  <div class="w-full main-wrapper">
    <Title title="Success_ Story" :isLinearBg="true" />
    <div class="card-wrapper">
      <TestimonialCards />
    </div>
  </div>
</template>

<script setup>
import TestimonialCards from "@/components/UI/TestimonialCards.vue";
import Title from "@/components/UI/Title.vue";
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 4rem 0;

  .card-wrapper {
    margin: 4rem 0;
  }
}
</style>
