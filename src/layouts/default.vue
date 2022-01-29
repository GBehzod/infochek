<template>
  <div id="default" >
    <div id="layout">
      <Navbar />
      <router-view class="router-view" />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/nav-bar/index.vue";
  import Footer from '../components/footer/index.vue';

  export default {
    name: "Default-layout",
    components: {
      Navbar,
      Footer
    },
    mounted() {
      window.addEventListener('scroll', () => {
        console.log(window.scrollY);
      })
    },
  }
</script>