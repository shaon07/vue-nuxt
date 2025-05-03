<template>
  <div class="main-wrapper">
    <div class="relative w-full title-wrapper">
      <Title title="Are you absolute_ Beginner?" isLinearBg="true" />
      <img
        src="~/assets/images/circle.svg"
        alt="circle"
        class="absolute top-0 -left-72"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />

      <img
        src="~/assets/images/rocket.png"
        alt="rocket"
        class="absolute top-0 -right-72"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
    </div>

    <div class="w-full content-wrapper">
      <div class="content">
        <MobileContent />
      </div>
    </div>
  </div>
</template>

<script setup>
import MobileContent from "@/components/UI/MobileContent.vue";
import Title from "@/components/UI/Title.vue";
</script>

<style lang="scss" scoped>
.main-wrapper {
  .title-wrapper {
    width: max-content;
    margin: auto;
  }

  .content-wrapper {
    margin-top: 8rem;
    padding-bottom: 8rem;
    background: url("~/assets/images/globe.png") no-repeat center center scroll;
    background-size: cover;
  }
}
</style>
