<template>
  <div id="history">
    <v-img
      gradient="to top right, rgba(0,0,0,.33), rgba(20,20,20,.7)"
      height="none"
    >
      <v-card id="jumbo-card" width="100vw" class="pa-4">
        <v-card-title class="justify-center display-1 font-italic">
          Skills
        </v-card-title>
      </v-card>
      <v-container fluid>
          <v-layout wrap row>
            <v-flex xs12 sm6 md4 class="pa-2 ma-auto">
              <skill
                title="Skill 페이지 작성중"
                number="Test"
                tIcon="Django"
                tIconColor="success"
                bIcon="update"
                bIconColor="primary"
                bText="3시간 전"
              ></skill>
            </v-flex>
          </v-layout>
      </v-container>
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
</style>