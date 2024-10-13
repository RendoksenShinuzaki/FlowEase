<template>
  <div>
    <Navbar />
    <div class="bg-[#fdfbec] w-full h-[38rem]">
      <div
        class="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 md:px-14"
      >
        <div class="py-28 md:py-32">
          <h1 class="font-raleway text-3xl 2xl:text-6xl font-bold">
            Boost Your Team's Productivity with
            <span class="text-[#00AFB9] font-bold">FLOWEASE</span>
          </h1>
          <p class="font-raleway lg:w-3/5 font-medium py-4">
            Streamline workflows, automate tasks, and collaborate seamlessly
            with our all-in-one SaaS solution.
          </p>
          <div class="pt-14">
            <button
              class="bg-[#00AFB9] text-white p-4 rounded-lg hover:bg-white hover:text-[#00AFB9] hover:border-[#00AFB9] hover:border transition-colors duration-300"
            >
              Get Started for Free
            </button>
          </div>
        </div>
        <div
          class="flex items-end max-w-screen-2xl hidden lg:block overflow-hidden"
        >
          <img :src="Banner" alt="Banner" class="object-cover lg:h-[40rem]" />
        </div>
      </div>
    </div>
    <div class="container mx-auto py-14">
      <div class="flex justify-center">
        <h1 class="text-3xl font-bold font-raleway">FEATURES</h1>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-14 py-4 px-4 md:px-44">
          <div data-aos="fade-up" data-aos-duration="700">
            <img :src="Feature1" alt="" class="w-full h-auto" />
            <h1
              class="text-center py-2 font-semibold text-xl text-[#0081A7] font-raleway"
            >
              Automate Tasks
            </h1>
            <p class="text-center font-raleway">
              Save time and reduce manual work with our powerful automation
              tools.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="900">
            <img :src="Feature2" alt="" class="w-full h-auto" />
            <h1
              class="text-center py-2 font-semibold text-xl text-[#0081A7] font-raleway"
            >
              Gain Insights Analytics
            </h1>
            <p class="text-center font-raleway">
              Work together in real-time with a collaborative workspace designed
              for teams.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <img :src="Feature3" alt="" class="w-full h-auto" />
            <h1
              class="text-center py-2 font-semibold text-xl text-[#0081A7] font-raleway"
            >
              Collaborate Seamlessly
            </h1>
            <p class="text-center font-raleway">
              Make data-driven decisions with comprehensive analytics and
              reporting.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#0081A7] w-full h-full">
      <div class="container mx-auto">
        <div class="flex justify-center w-full h-full py-16">
          <h1
            class="text-lg md:text-3xl text-white font-semibold uppercase font-raleway"
          >
            A Word From Our Client
          </h1>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div
            class="md:px-32 md:py-14 hidden lg:block"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <img :src="Client" alt="" class="hidden lg:block" />
          </div>
          <div>
            <div class="grid grid-rows-1 lg:grid-rows-2 text-white">
              <div class="lg:py-14">
                <h1
                  class="font-bold text-3xl font-raleway text-center md:text-start"
                >
                  John Smith
                </h1>
                <p
                  class="font-extralight font-raleway text-center md:text-start"
                >
                  Project Manager at InnovateCorp
                </p>
              </div>
              <div>
                <h1 class="text-4xl font-raleway">""</h1>
                <h1
                  class="px-14 text-lg text-center md:text-start md:text-2xl lg:py-14 font-raleway"
                >
                  FlowEase has transformed our team's workflow, making us more
                  efficient and productive than ever!
                </h1>
                <h1 class="text-4xl flex justify-end items-end font-raleway">
                  ""
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <h1 class="text-center py-8 text-4xl font-bold font-raleway">
        Pricing Plans
      </h1>
      <div class="grid grid-cols-1 xl:grid-cols-3 py-14 px-4 md:px-36 gap-4">
        <!-- Basic Plan -->
        <div
          class="border-2 border-black bg-white shadow-md px-8 md:px-14 py-14 rounded-2xl"
        >
          <h1 class="py-4 text-xl font-semibold font-raleway">Basic Plan</h1>
          <h1 class="text-[#0081A7] font-bold text-2xl py-2 font-raleway">
            Free
          </h1>
          <p class="py-2 text-lg font-raleway">
            Essential features to get started with workflow automation and
            collaboration.
          </p>
          <div class="pt-8">
            <button
              class="bg-[#0081A7] text-white px-14 py-2 font-raleway w-full font-bold hover:bg-white hover:text-[#00AFB9] hover:border-[#00AFB9] hover:border transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        <!-- Pro Plan -->
        <div
          class="border-2 border-black bg-white shadow-md px-8 md:px-14 py-14 rounded-2xl"
        >
          <h1 class="py-4 text-xl font-semibold font-raleway">Pro Plan</h1>
          <h1 class="text-[#0081A7] font-bold text-2xl py-2 font-raleway">
            $29/month
          </h1>
          <p class="py-2 text-lg font-raleway">
            Advanced features for growing teams, including enhanced analytics
            and integrations.
          </p>
          <div class="pt-8">
            <button
              class="bg-[#0081A7] text-white px-14 py-2 font-raleway w-full font-bold hover:bg-white hover:text-[#00AFB9] hover:border-[#00AFB9] hover:border transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        <!-- Enterprise Plan -->
        <div
          class="border-2 border-black bg-[#00AFB9] shadow-md px-8 md:px-14 py-14 rounded-2xl relative"
        >
          <h1 class="py-4 text-xl font-semibold font-raleway text-white">
            Enterprise Plan
          </h1>
          <h1 class="text-white font-bold text-2xl py-2 font-raleway">
            Custom Pricing
          </h1>
          <p class="py-2 text-lg font-raleway text-white w-full">
            Tailored solutions and dedicated support for large organizations.
          </p>
          <div class="pt-[4rem]">
            <button
              class="bg-[#0081A7] text-white px-14 py-2 font-raleway w-full font-bold hover:bg-white hover:text-[#00AFB9] hover:border-[#00AFB9] hover:border transition-colors duration-300"
            >
              Talk To Us!
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#F8F8EC]">
      <div class="container mx-auto">
        <div class="py-32 w-full h-full">
          <h1 class="text-4xl font-raleway font-bold">
            About <span class="text-[#00AFB9]">FlowEase</span>
          </h1>
          <p class="w-1/2 font-raleway py-2">
            At FlowEase, we are dedicated to helping teams achieve their goals
            by providing innovative workflow management solutions. Our mission
            is to simplify and enhance the way you work, so you can focus on
            what matters most.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Banner from "@/assets/img/Main-Banner.png";
import Feature1 from "@/assets/img/Feature-1.png";
import Feature2 from "@/assets/img/Feature-2.png";
import Feature3 from "@/assets/img/Feature-3.png";
import Client from "@/assets/img/Client.png";
</script>

<style scoped>
.font-raleway {
  font-family: "Raleway", sans-serif;
}

.font-openSans {
  font-family: "Open Sans", sans-serif;
}
</style>
