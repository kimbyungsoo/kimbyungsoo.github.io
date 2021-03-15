<template>
  <div id="history">
    <v-img
      gradient="to top right, rgba(0,0,0,.33), rgba(20,20,20,.7)"
      height="none"
    >
      <v-card id="jumbo-card" width="100vw" class="pa-4">
        <v-card-title class="justify-center display-1 font-italic mb-auto">
          Skills
        </v-card-title>
        <v-container fluid>
          <v-layout wrap row>
            <v-flex xs12 sm6 md4 class="pa-2 ma-auto">
              <skill
                title="Django, ML, Data Crawiling"
                name="Python"
                summary="Django"
                experimentYear=3
                projectCount=4
              ></skill>
            </v-flex>
          </v-layout>
      </v-container>
      </v-card>
    </v-img>
  </div>
</template>

<script>
import skill from '@/components/skill'
export default {
  components: {
    skill
  }
};
</script>

<style scoped>
/* Remove background of card in v-jumbotron */
#jumbo-card {
  background-color: rgba(0, 0, 0, 0);
  height: none;
}
</style>