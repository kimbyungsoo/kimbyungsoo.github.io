<template>
  <v-card class="skill-card">
    <v-container pa-1>
      <v-layout wrap row>
        <v-flex xs12>
          <v-card-title primary-title>
            <div>
              <h3 class="headline font-weight-bold">{{ name }}</h3>
              <div class="grey--text">{{ title }}</div>
              <p class="caption font-weight-thin mb-0">
                <span class="experiment-year">{{ experimentYear }} years</span>
                <span class="project-count">{{ projectCount }} projects</span>
              </p>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-2">
        <img :src="require(`~/assets/img/me.jpeg`)" />
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    name: String,
    description: String,
    img: String,
    experimentYear: Number,
    projectCount: Number
  }
};
</script>

<style scoped>
.skill-card {
}
span {
  border-radius: 5px;
  margin: 0px 1px 0px 1px;
}
.experiment-year {
  color: #ffa600;
}
.project-count {
  color: #a9f5b3;
}
.experiment-year-bar {
  background-image: linear-gradient(to bottom, #fbcac9, #ffa600);
}
.project-count-bar {
  background-image: linear-gradient(to bottom, #c9fbe6, #187024);
}
</style>
