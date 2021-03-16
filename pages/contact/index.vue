<template>
    <v-img
    :src="require(`~/assets/background/first_step.gif`)"
      gradient="to top right, rgba(0,0,0,.33), rgba(20,20,20,.7)"
      fill-height
    >
        <Contact />
    </v-img>
</template>

<script>
import Contact from '~/components/contact'
export default {
    components : {
        Contact
    }
}
</script>

<style>

</style>