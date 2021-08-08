<template>
  <v-container fluid class="background" fill-height>
    <v-card id="jumbo-card" width="100vw" class="pa-4" elevation="0">
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
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "2009~16",
        title: "Catholic Univ.",
        content: "computer science information engineering."
      },
      {
        color: "amber",
        year: "2011~13",
        title: "Republic of Korea Army.",
        content: "병장 만기전역."
      },
      {
        color: "green",
        year: "2017~19",
        title: "Catholic Univ. Master course.",
        content:
          "Graduation thesis : Improving real-time link quality measurement for wireless networks at long distance remote sites."
      },
      {
        color: "pink",
        year: "2019~2021",
        title: "Techflux corperation.",
        content: "Data Web Engineering."
      },
      {
        color: "orange",
        year: "2021~",
        title: "Lambda256 corporation",
        content: "BaaS Web Engineering."
      }
    ]
  })
};
</script>

<style scoped>
.background {
  background: linear-gradient(
      to right,
      rgba(100, 115, 201, 0.33),
      rgba(25, 32, 72, 0.7)
    ),
    url("~/assets/background/space.jpg");
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}
</style>
