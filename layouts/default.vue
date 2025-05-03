<template>
  <div class="layout w-full">
    <Header />
    <main class="content w-full">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// no logic needed
import Footer from "@components/shared/Footer.vue";
import Header from "@components/shared/Header.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1;
    margin: 0 auto;
  }
}
</style>
