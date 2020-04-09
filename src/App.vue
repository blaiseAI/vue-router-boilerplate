<template>
  <div id="app" class="bg-gray-200 w-full h-screen">
    <Navigation/>
    <router-view class="container mx-auto"/>
    <Footer/>
  </div>
</template>


<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer
  }
};
</script>