<template>
  <footer
    class="w-full bg-gradient-to-br from-[#0F172A] to-[#0B1120] text-white footer"
  >
    <div class="footer-top grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Info -->
      <div class="footer-left">
        <div class="address">
          <p class="mb-2">Level-4, 34, Awal Centre, Banani, Dhaka</p>
          <p class="mb-2">
            Support:
            <a href="mailto:web@programming-hero.com" class="text-blue-400"
              >web@programming-hero.com</a
            >
          </p>
          <p>(Available: 10:00am to 07:00pm)</p>
        </div>
        <div class="mt-6 payment flex flex-col gap-4">
          <p class="font-semibold mb-2">Pay with</p>
          <img
            src="~/assets/images/ssl-logo.png"
            alt="SSLCommerz"
            class="w-fit object-cover h-6 mb-3"
          />
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-col gap-4 links">
        <a href="/" class="block hover:text-blue-400">Home</a>
        <a href="/about" class="block hover:text-blue-400">About Us</a>
        <a href="/success" class="block hover:text-blue-400">Success Page</a>
        <a href="/terms" class="block hover:text-blue-400"
          >Terms And Condition</a
        >
        <a href="/privacy" class="block hover:text-blue-400">Privacy Policy</a>
      </div>

      <!-- Social Links -->
      <div>
        <p class="font-semibold mb-4" style="margin-bottom: 1rem">Follow Us</p>
        <div class="flex gap-6">
          <a href="#" aria-label="Facebook" class="hover:text-blue-400"
            ><FontAwesomeIcon
              :icon="['fab', 'facebook-f']"
              class="text-white text-xl"
          /></a>

          <a href="#" aria-label="Instagram" class="hover:text-pink-400"
            ><FontAwesomeIcon
              :icon="['fab', 'instagram']"
              class="text-white text-xl"
          /></a>

          <a href="#" aria-label="Instagram" class="hover:text-pink-400"
            ><FontAwesomeIcon
              :icon="['fab', 'youtube']"
              class="text-white text-xl"
          /></a>

          <a href="#" aria-label="YouTube" class="hover:text-red-500"
            ><FontAwesomeIcon
              :icon="['fab', 'linkedin-in']"
              class="text-white text-xl"
          /></a>
        </div>
      </div>
    </div>

    <div
      class="w-full flex justify-between items-center text-center text-sm text-gray-400"
    >
      <img
        src="~/assets/images/SSL-commerz.png"
        alt="Payment Methods"
        class="w-[30rem] h-auto"
      />
      <h3 class="text-xl">@Programming Hero 2024</h3>
    </div>
  </footer>
</template>

<script setup>
// No script logic needed for now
</script>

<style scoped>
.footer {
  padding: 8rem 4rem 4rem;
  background: url("~/assets/images/footer-bg.png") no-repeat top center scroll;
  background-size: contain;
  background-blend-mode: overlay;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80rem;
    height: 37rem;
    background: linear-gradient(180deg, #1f3844 0%, #203b60 100%);
    filter: blur(200px);
    border-radius: 50%;
    z-index: -1;
  }
}

.address {
  p {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 2;
    text-transform: unset;
    color: #eee0ff;
    text-align: start;
    z-index: 9;
  }
}

.links {
  color: #eee0ff;
}

.payment {
  margin-top: 6rem;
}
</style>
