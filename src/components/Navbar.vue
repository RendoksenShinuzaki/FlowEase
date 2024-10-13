<template>
  <nav class="bg-[#fdfbec] py-4 px-8 font-raleway">
    <div class="flex justify-between items-center">
      <!-- Hamburger Menu (visible on mobile) -->
      <button
        @click="toggleMenu"
        class="md:hidden text-teal-600 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Left side navigation links -->
      <div class="hidden md:flex space-x-6 text-teal-600 font-semibold">
        <a href="#" class="hover:text-teal-400">Home</a>
        <a href="#" class="hover:text-teal-400">Features</a>
        <a href="#" class="hover:text-teal-400">Pricing</a>
        <a href="#" class="hover:text-teal-400">About</a>
        <a href="#" class="hover:text-teal-400">Contact</a>
      </div>

      <!-- Right side buttons (hidden on mobile, visible on md and larger screens) -->
      <div class="hidden md:flex space-x-4">
        <button
          class="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Log In
        </button>
        <button
          class="border border-teal-500 text-teal-500 px-4 py-2 rounded hover:bg-teal-50"
        >
          Sign Up
        </button>
      </div>
    </div>

    <!-- Mobile Menu (visible on mobile when toggled) -->
    <div v-if="isMenuOpen" class="md:hidden mt-4">
      <a href="#" class="block py-2 text-teal-600 hover:text-teal-400">Home</a>
      <a href="#" class="block py-2 text-teal-600 hover:text-teal-400"
        >Features</a
      >
      <a href="#" class="block py-2 text-teal-600 hover:text-teal-400"
        >Pricing</a
      >
      <a href="#" class="block py-2 text-teal-600 hover:text-teal-400">About</a>
      <a href="#" class="block py-2 text-teal-600 hover:text-teal-400"
        >Contact</a
      >
      <div class="mt-4 space-y-4">
        <button
          class="bg-teal-500 text-white w-full py-2 rounded hover:bg-teal-600"
        >
          Log In
        </button>
        <button
          class="border border-teal-500 text-teal-500 w-full py-2 rounded hover:bg-teal-50"
        >
          Sign Up
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.font-raleway {
  font-family: "Raleway", sans-serif;
}
</style>
