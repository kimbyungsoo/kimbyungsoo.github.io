<template>
  <v-container fluid class="background" fill-height>
    <v-card id="jumbo-card" width="100vw" class="pa-4">
      <v-card-title class="justify-center display-1 font-italic mb-auto">
        Projects
      </v-card-title>
      <v-container fluid>
        <h1 style="text-align:center;">작업중</h1>
        <!-- <v-row>
          <v-col
            v-for="(item, index) in skills"
            :key="index"
            xl="3"
            lg="4"
            md="6"
            sm="12"
            cols="12"
          >
            <skill
              :title="item.title"
              :name="item.name"
              :summary="item.summary"
              :experimentYear="item.experimentYear"
              :projectCount="item.projectCount"
            ></skill
          ></v-col>
        </v-row> -->
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import skill from "@/components/skill";
export default {
  components: {
    skill
  },
  data() {
    return {
      skills: [
        {
          title: "Django, ML, Data Crawiling",
          name: "Python",
          summary: "Web Develope, Machin Learing, Toy project, Web crawler.",
          experimentYear: 3,
          projectCount: 4
        },
        {
          title: "Spring framework",
          name: "Java",
          summary: "Web Develope",
          experimentYear: 1,
          projectCount: 2
        },
        {
          title: "Nuxt.js",
          name: "Node.js",
          summary: "Web Develope",
          experimentYear: 1,
          projectCount: 2
        },
        {
          title: "MySQL, Oracle DB, SQLite",
          name: "Database",
          summary: "Realational DB",
          experimentYear: 3,
          projectCount: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
.background {
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.33),
      rgba(20, 20, 20, 0.7)
    ),
    url("~/assets/background/dancing.gif");
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}
</style>