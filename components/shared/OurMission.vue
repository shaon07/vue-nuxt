<template>
  <div class="w-full relative h-[300px]">
    <img
      src="~/assets/images/triangle.svg"
      alt="triangle"
      class="absolute top-0 left-0"
      data-aos="fade-right"
      data-aos-duration="1000"
    />
    <img
      src="~/assets/images/blue-square.svg"
      alt="blue"
      class="absolute top-0 right-0"
      data-aos="fade-left"
      data-aos-duration="1000"
    />
  </div>

  <div class="content">
    <Title :isLinearBg="true" title="Our Mission_" />
    <WhyWhatHow />
  </div>
</template>

<script setup>
import Title from "@/components/UI/Title.vue";
import WhyWhatHow from "@/components/UI/WhyWhatHow.vue";
</script>

<style lang="scss" scoped>
.content {
  width: 1400px;
  margin: 4rem auto 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
