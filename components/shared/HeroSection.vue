<template>
  <div class="wrapper">
    <div class="svg-wrapper absolute -left-40">
      <div class="animate-spin" style="animation-duration: 8s">
        <CircleRing />
      </div>
      <div class="left-ring-blur"></div>

      <div
        class="animate-spin-reverse left-small"
        style="animation-duration: 8s"
      >
        <CircleRing />
      </div>
    </div>

    <div class="svg-wrapper absolute -right-40">
      <div
        class="animate-spin-reverse left-small"
        style="animation-duration: 8s"
      >
        <CircleRing />
      </div>
      <div class="right-ring-blur"></div>

      <div class="animate-spin" style="animation-duration: 8s">
        <CircleRing />
      </div>
    </div>

    <div class="flex flex-col items-center gap-2 content-wrapper relative">
      <img
        src="~/assets/images/html.svg"
        alt="html"
        style="animation-duration: 4s"
        class="html animate-bounce"
      />

      <img
        src="~/assets/images/react.svg"
        alt="react"
        style="animation-duration: 4s"
        class="react animate-spin"
      />

      <img
        src="~/assets/images/js.svg"
        alt="js"
        style="animation-duration: 4s"
        class="js animate-pulse"
      />

      <img
        src="~/assets/images/tailwind.svg"
        alt="tailwind"
        style="animation-duration: 4s"
        class="tailwind animate-pulse"
      />

      <div class="relative">
        <h1 data-aos="fade-up" class="text-7xl font-bold">
          Let’s Code_Your Career
        </h1>
        <div class="absolute top-0 left-0 right-0 title-wrapper">
          <span class="title"></span>
        </div>
      </div>

      <p class="content text-xl">
        We're on a mission to provide personalized learning and empower
        individuals to kick-start their careers.
      </p>
      <button class="button">Explore</button>
    </div>

    <div class="w-full h-[185px] relative !mt-[50px]">
      <img
        src="~/assets/images/bottom-layer.png"
        alt="bottomLayer"
        class="bottomLayer"
      />
    </div>

    <div ref="citySection" class="w-full relative rellax" data-rellax-speed="7">
      <img src="~/assets/images/city.png" alt="city" class="w-full h-full" />
      <div class="city-footer-blur"></div>
    </div>
  </div>
</template>

<script setup>
import Rellax from "rellax";
import { onMounted, ref } from "vue";
import CircleRing from "../custom-icons/CircleRing.vue";

const citySection = ref(null);

onMounted(() => {
  new Rellax(citySection.value, {
    speed: -2, // Negative value to move slower than scroll
    center: true, // Starts from center
    wrapper: null, // Optional: apply within a wrapper
    round: true, // Round to whole pixel values
    vertical: true,
    horizontal: false,
  });
});
</script>

<style lang="scss" scoped>
.rellax {
  will-change: transform;
  transition: transform 0.2s ease-out;
}

.wrapper {
  margin: 10rem 0;
  position: relative;
  .content-wrapper {
    margin: 0 auto;
    width: max-content;
  }
  .content {
    background: linear-gradient(245.77deg, #eee6fd 10%, #bea2f7 90%);
    -webkit-background-clip: text;
    background-clip: text;
    fill: transparent;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    max-width: 700px;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .button {
    font-size: 18px;
    width: 270px;
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    font-weight: 600;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #1976d2;
    background-image: url(~/assets/images/explore-btn.svg);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    font-weight: 600;
    color: #fce6fa;
    text-transform: capitalize;
  }

  .html {
    position: absolute;
    top: -30px;
    left: -70px;
    width: 40px;
    height: 40px;
    scale: 4;
  }

  .react {
    @extend .html;
    left: unset;
    top: -50px;
    right: -10px;
    scale: 6;
  }

  .js {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    scale: 6;
  }

  .tailwind {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    scale: 6;
  }

  .bottomLayer {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    color: transparent;
  }

  .title-wrapper {
    width: 100%;
    height: 100px;
    background: transparent;
    z-index: -1;

    .title {
      display: block;
      width: 350px;
      height: 200px;
      background: #521262;
      margin: auto;
      filter: blur(50px);
      border-radius: 10rem;
      position: relative;
      top: -70px;
    }
  }

  .right-ring-blur {
    display: block;
    width: 300px;
    height: 250px;
    background: rgb(194 0 255);
    top: 0;
    bottom: 0;
    z-index: 2;
    position: absolute;
    filter: blur(200px);
  }

  .left-ring-blur {
    @extend .right-ring-blur;
  }

  .left-small {
    animation-duration: 8s;
    position: absolute;
    top: 0;
    scale: 0.65;
  }

  .city-footer-blur {
    position: absolute;
    bottom: -18px;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    background: black;
    filter: blur(10px);
  }
}
</style>
