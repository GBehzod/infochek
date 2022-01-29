<template>
  <div>
    <CarouselVue />
    <MainVue />
    <WhyVue />
    <PartnesVue />
    <ContactVue />
  </div>
</template>

<script>
  import CarouselVue from "./components/carousel.vue";
  import MainVue from "./components/main.vue";
  import WhyVue from "./components/why.vue";
  import PartnesVue from "./components/partnes.vue";
  import ContactVue from "./components/contact.vue";

  export default {
    name: "Home",
    components: {
      CarouselVue,
      MainVue,
      WhyVue,
      PartnesVue,
      ContactVue
    }

  }
</script>

<style lang="scss">

</style>