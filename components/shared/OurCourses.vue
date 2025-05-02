<template>
  <div class="w-full main-wrapper">
    <Title title="Our Courses_" />

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
import Title from "../UI/Title.vue";
</script>

<style lang="scss" scoped>
.main-wrapper {
  background: url("~/assets/images/grid-bg.png") no-repeat center center scroll;

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
