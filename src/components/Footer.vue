<template>
  <footer class="bg-[#00AFB9] py-4">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between start text-white"
    >
      <!-- Footer Links -->
      <ul class="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
        <li><a href="#" class="hover:underline font-raleway">About</a></li>
        <li><a href="#" class="hover:underline font-raleway">Contact</a></li>
        <li>
          <a href="#" class="hover:underline font-raleway">Privacy Policy</a>
        </li>
      </ul>
      <!-- Copyright -->
      <p class="text-md text-center md:text-right">
        &copy; 2024 Your Company. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.font-raleway {
  font-family: "Raleway", sans-serif;
}

.font-openSans {
  font-family: "Open Sans", sans-serif;
}
</style>
