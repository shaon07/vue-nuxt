<template>
  <div class="w-full">
    <center class="relative title-wrapper">
      <h1 class="mx-auto title">Our Courses_</h1>
      <div class="tiles"></div>
    </center>

    <div class="card-wrapper">
      <Card variant="primary" />
      <Card variant="secondary" />
    </div>
  </div>
</template>

<script setup>
import Card from "../UI/Card.vue";
</script>

<style lang="scss" scoped>
.title-wrapper {
  margin: 12px 0;
  .title {
    background: #fce6fa;
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
    margin-top: 2rem;
  }
}

.card-wrapper {
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
</style>
