<template>
  <v-app v-cloak>
    <v-app-bar app color="#343a3f" style="color: white">
      <v-app-bar-nav-icon　color="white" @click="drawer = true"/>
      <v-toolbar-title>
        KIM BYUNG SOO's Portfolio
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--accent-4"
        >
          <nuxt-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                profile
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/histories">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-history</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                history
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/skills">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-hammer</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                skills
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/projects">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                projects
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link to="/contact">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                contact
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer app color="#343a3f">
      <v-spacer />
      <span style="color: white"
        >&copy; 2021 KimByungSoo. All Rights Reserved.</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: 0
    };
  }
};
</script>
<style>
[v-cloak] {
  display: none;
}
.v-application a {
  color: black;
  text-decoration: none;
}
.theme--light.v-btn:hover::before {
  opacity: 0.2;
}

#jumbo-card {
  background-color: rgba(0, 0, 0, 0);
  height: none;
}

</style>
