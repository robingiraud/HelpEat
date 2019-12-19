<template>
    <div class="homePage">
        <section class="titleWrapper">
            <h1>Préparez de meilleurs repas pour vos enfants avec HelpEat!</h1>
        </section>
        <section>
            <p>ImagePlateau</p>
        </section>
        <section>
            <p>ImageEnfant</p>
            <button @click="displayForm">C'est parti!</button>
        </section>
        <section>
            <p>ImageSalade</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        methods: {
            displayForm () {
                this.$emit('clicked', 'displayForm')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .homePage {
        .titleWrapper {
            max-height: 46vh;
            padding: 50px;

            h1 {
                margin: 0;
                padding-left: 20%;
                padding-right: 20%;
                display: flex;
                align-items: center;
                text-align: center;
                font-size: 35px;
                font-weight: normal;
            }
        }
    }
</style>