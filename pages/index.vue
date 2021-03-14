<template>
  <!-- <v-jumbotron :gradient="gradient" dark class="elevation-5" height="none"> -->
  <v-img
    src="https://img5.goodfon.com/original/2880x1800/f/b6/gradient-abstraktsiia-sinii-linii-background.jpg"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
  >
    <v-container fluid fill-height grid-list-xl>
      <v-layout row wrap align-center>
        <v-flex xs12 md4 text-center my-4>
          <transition>
            <v-avatar
              class="grey lighten-4"
              v-if="isAvatarVisible"
              :size="avatarSize"
            >
              <img src="~assets/img/profile.jpeg" />
            </v-avatar>
          </transition>
        </v-flex>
        <v-flex xs12 md8 text-center my-4>
          <v-card id="jumbo-card" flat>
            <h2 class="display-2 mb-3">Kim Byung Soo</h2>
            <h3 class="display-1 mb-3">Web Application Software Engineer</h3>
            <h3>
              2 years web development experience
              <br />
              <strong> - Vue.js, Vuetify, Bootstrap, PHP, Python, Django, Spring, MySQL, SQLite, etc.</strong>
            </h3>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  <!-- </v-jumbotron> -->
  </v-img>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      avatarSize: 250,
      gradient: "to right, #000004, #1CB5E0",
      isAvatarVisible: true,
    };
  },
  methods: {},
  mounted() {
    // To trigger animation
    this.isAvatarVisible = true;
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
.application {
  font-family: "Quicksand", sans-serif;
}

/* Remove background of card in v-jumbotron */
#jumbo-card {
  background-color: rgba(0, 0, 0, 0);
}
</style>