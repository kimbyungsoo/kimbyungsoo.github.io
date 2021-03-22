<template>
  <v-container class="background" fluid fill-height>
    <Contact />
  </v-container>
</template>

<script>
import Contact from "~/components/contact";
export default {
  components: {
    Contact
  }
};
</script>

<style scoped>
.background {
  background: linear-gradient(
      to right,
      rgba(100, 115, 201, 0.33),
      rgba(25, 32, 72, 0.7)
    ),
    url("~/assets/background/first_step.gif");
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}
</style>
