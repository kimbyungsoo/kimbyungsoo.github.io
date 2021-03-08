<template>
    <v-container>
        <div id="component-profile" class="d-flex flex-column justify-center align-center">
            <img src="~assets/img/me.jpeg" />
            <h1>{{ name }}</h1>
            <p>{{ description }}</p>
            <div class="d-flex">
                <a href="https://github.com/kimbyungsoo" target="_blank" title="Github"><i class="fab fa-github mx-2"></i></a>
                <a href="https://www.instagram.com/zzzkbs/" target="_blank" title="Instagram"><i class="fab fa-instagram mx-2"></i></a>
                <a href="mailto:xfo5712@naver.com" target="_blank" title="mail"><i class="far fa-envelope mx-2"></i></a>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name : "Kim Byung Soo",
            description: 'I am a full stack developer.'
        }
    }
}
</script>

<style scoped lang="scss">
#component-profile{
    height: 100vh;
    img {
        max-height: 100px;
        border-radius: 100px;
    }
    i {
        font-size: 44px;
        color : ivory;
    }
}
</style>