<template>
  <div
    data-aos="fade-up"
    data-aos-duration="1000"
    class="relative title-wrapper"
  >
    <h1 class="mx-auto title" :class="isLinearBg ? 'linear-bg' : 'title-bg'">
      {{ title }}
    </h1>
    <div class="tiles"></div>
  </div>
</template>

<script setup>
const { title, isLinearBg } = defineProps({
  title: {
    default: "your title",
    required: true,
    type: String,
  },
  isLinearBg: {
    default: false,
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.title-wrapper {
  margin: 20px 0;
  width: 100%;
  text-align: center;

  .title-bg {
    background: #fce6fa;
  }
  .title {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    position: relative;
  }

  .tiles {
    width: 100px;
    height: 12px;
    background: linear-gradient(90deg, #e855de 0.01%, #5400ee 100%);
    margin: 2rem auto 0;
  }
}
</style>
