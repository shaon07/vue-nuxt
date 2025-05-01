<template>
  <div class="layout w-full">
    <Header />
    <main class="content w-full">
      <slot></slot>
    </main>
    <footer class="footer">
      <h1>This is footer</h1>
    </footer>
  </div>
</template>

<script setup>
// no logic needed
import Header from "../components/shared/Header.vue";
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

  .footer {
    background-color: #2d006e;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.6;
  }
}
</style>
