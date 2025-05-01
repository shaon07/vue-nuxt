<template>
  <div class="w-full main-wrapper">
    <center class="relative title-wrapper">
      <h1 class="mx-auto title">Our Courses_</h1>
      <div class="tiles"></div>
    </center>

    <div class="card-wrapper">
      <Card variant="primary" />
      <Card variant="secondary" />

      <img
        src="~/assets/images/triangle.svg"
        alt="triangle"
        class="top-triangle"
      />
      <img
        src="~/assets/images/blue-square.svg"
        alt="bottom-blue-square"
        class="bottom-blue-square"
      />
    </div>
  </div>
</template>

<script setup>
import Card from "../UI/Card.vue";
</script>

<style lang="scss" scoped>
.main-wrapper {
  background: url("~/assets/images/grid-bg.png") no-repeat center center scroll;
  .title-wrapper {
    margin: 20px 0;
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
    position: relative;
    max-width: 1200px;
    margin: 8rem auto;
    display: flex;
    flex-direction: column;
    gap: 8rem;

    .top-triangle {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      scale: 5;
    }

    .bottom-blue-square {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 50px;
      scale: 5;
    }
  }
}
</style>
