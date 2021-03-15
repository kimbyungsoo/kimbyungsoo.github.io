<template>
  <div id="history">
    <v-img 
    :src="require(`~/assets/background/space.jpg`)"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="none">
      <v-container fluid>
        <v-card id="jumbo-card" width="100vw" class="pa-4">
          <v-card-title class="justify-center display-1 font-italic">
            History
          </v-card-title>

          <v-timeline style="margin: 0 auto; max-width: 900px">
            <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
            >
              <template v-slot:opposite>
                <span
                  :class="`title font-weight-bold ${year.color}--text`"
                  v-text="year.year"
                ></span>
              </template>
              <div class="py-4">
                <h2 :class="`title font-italic mb-4 ${year.color}--text`">
                  {{ year.title }}
                </h2>
                <div v-html="year.content"></div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-container>
    </v-img>
  </div>
</template>
<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2009~16",
        title: "Catholic Univ.",
        content: "computer science information engineering.",
      },
      {
        color: "amber",
        year: "2011~13",
        title: "Republic of Korea Army.",
        content: "병장 만기전역.",
      },
      {
        color: "green",
        year: "2017~19",
        title: "Catholic Univ. Master course.",
        content:
          "Graduation thesis : Improving real-time link quality measurement for wireless networks at long distance remote sites.",
      },
      {
        color: "pink",
        year: "2019~2021",
        title: "Techflux corperation.",
        content: "Data Web Engineering.",
      },
      {
        color: "orange",
        year: "2021~",
        title: "Looking for a job.",
        content: "contact to me.",
      },
    ],
  }),
};
</script>

<style scoped>
/* Remove background of card in v-jumbotron */
#jumbo-card {
  background-color: rgba(0, 0, 0, 0);
}
</style>