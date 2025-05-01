<template>
  <header class="header">
    <div class="container">
      <!-- Logo + Title -->
      <div class="logo">
        <img
          src="~/assets/images/ph_logo.svg"
          alt="Logo"
          width="66"
          height="66"
        />
        <span class="title">Programming Hero</span>
      </div>

      <!-- Navigation -->
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Success</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
// No script logic needed
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: blur(5px);
  color: #ffffff;

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 66px;
      height: 66px;
    }

    .title {
      font-size: 1.125rem;
      font-weight: 600;
    }
  }

  .nav {
    display: flex;
    gap: 2rem;

    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s;

      &:hover {
        color: #d8b4fe; // light purple hover effect
      }
    }
  }
}
</style>
