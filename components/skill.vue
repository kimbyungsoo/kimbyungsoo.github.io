<template>
  <v-card class="skill-card neumorphism">
    <v-container pa-1>
      <v-layout wrap row>
        <v-flex xs12>
          <v-card-title primary-title>
            <div>
              <h3 class="headline font-weight-bold" style="text-shadow: rgb(0 0 0 / 75%) 1px 2px 0px;">{{ name }}</h3>
              <div class="font-weight-bold" style=" color:#b0b0b0; text-shadow: rgb(35 35 35) 0px 2px 4px;">{{ title }}</div>
              <p class="caption font-weight-thin mb-0">
                <span class="font-weight-bold experiment-year">{{ experimentYear }} yearss</span>
                <span class="font-weight-bold project-count">{{ projectCount }} projects</span>
              </p>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-2">
        <span
          class="caption experiment-year-bar"
          v-for="i in parseInt(experimentYear)"
          :key="`experiment-${i}`"
          >&nbsp; &nbsp;
        </span>
        <span
          class="caption project-count-bar"
          v-for="j in parseInt(projectCount)"
          :key="`project-${j}`"
          >&nbsp; &nbsp;
        </span>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    title: String,
    name: String,
    summary: String,
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
  text-shadow: 0px 1px 0px #3c2700;
}
.project-count {
  color: #a9f5b3;
  text-shadow: 0px 1px 0px #004408;
}
.experiment-year-bar {
  background-image: linear-gradient(to bottom, #fbcac9, #ffa600);
}
.project-count-bar {
  background-image: linear-gradient(to bottom, #c9fbe6, #187024);
}
.neumorphism {
  background: rgba( 255, 255, 255, 0.20 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  /* border: 1px solid rgba( 255, 255, 255, 0.20 ); */
}
</style>
