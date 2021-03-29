<template>
  <v-container fluid fill-height grid-list-xl class="background">
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
            <strong>
              - Vue.js, Vuetify, Bootstrap, PHP, Python, Django, Spring, MySQL,
              SQLite, etc.</strong
            >
          </h3>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      avatarSize: 250,
      gradient: "to right, #000004, #1CB5E0",
      isAvatarVisible: false
    };
  },
  methods: {},
  mounted() {
    this.isAvatarVisible = true;
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
    url("~/assets/background/space.gif");
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}
</style>
