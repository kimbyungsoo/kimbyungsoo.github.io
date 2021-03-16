<template>
  <div id="history">
    <v-img
    :src="require(`~/assets/background/jerry.gif`)"
      gradient="to top right, rgba(0,0,0,.33), rgba(20,20,20,.7)"
      fill-height
    >
      <v-card id="jumbo-card" width="100vw" class="pa-4">
        <v-card-title class="justify-center display-1 font-italic mb-auto">
          Skills
        </v-card-title>
        <v-container fluid>
          <v-layout wrap row>
            <v-flex 
              v-for="(item, index) in skills" :key="index"
              xs12 sm6 md4 class="pa-2 ">
              <skill
                :title=item.title
                :name=item.name
                :summary=item.summary
                :experimentYear=item.experimentYear
                :projectCount=item.projectCount
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
  },
  data(){
    return {
      skills : [
        {
          title:"Django, ML, Data Crawiling",
          name:"Python",
          summary:"Web Develope, Machin Learing, Toy project, Web crawler.",
          experimentYear:3,
          projectCount:4
        },
        {
          title:"Spring framework",
          name:"Java",
          summary:"Web Develope",
          experimentYear:1,
          projectCount:2
        },
        {
          title:"Nuxt.js",
          name:"Node.js",
          summary:"Web Develope",
          experimentYear:1,
          projectCount:2
        },
        {
          title:"MySQL, Oracle DB, SQLite",
          name:"Database",
          summary:"Realational DB",
          experimentYear:3,
          projectCount:4
        }
      ]
    }
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