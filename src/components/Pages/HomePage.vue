<template>
    <div class="homePage">
        <section class="titleWrapper">
            <h1>Préparez de meilleurs repas pour vos enfants avec HelpEat!</h1>
        </section>
        <div class="imgContainer">
            <section>
                <img src="/src/assets/plateau.svg" alt="boxImage">
            </section>
            <section>
                <img src="/src/assets/enfant.svg" alt="childImage">
                <button @click="displayForm">C'est parti!</button>
            </section>
            <section>
                <img src="/src/assets/laitue.svg" alt="saladImage">
            </section>
        </div>
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
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;

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
        .imgContainer {
            display: flex;
            flex-grow: 1;
            justify-content: space-between;
            section {
                display: flex;
                &:first-child {
                    width: 33.33%;
                    align-items: flex-end;
                }
                &:nth-child(0n+2) {
                    flex-direction: column;
                    button {
                        background-color: #C83E3E;
                        color: white;
                        padding: 10px;
                        font-size: 18px;
                        border-radius: 10px;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
                &:last-child {
                    align-items: flex-end;
                    justify-content: flex-end;
                    width: 33.33%;
                }
            }
        }
    }

    @media screen and (max-width: 950px) {
        .homePage {
            .titleWrapper {
                padding: 5vh 0 0 0 !important;
                h1 {
                    padding-left: 10% !important;
                    padding-right: 10% !important;
                }
            }
        }
        .imgContainer {
            section {
                &:first-child {
                    display: none;
                }
                &:nth-child(0n+2) {
                    width: 100%;
                    padding: 5vh 20vw;
                }
                &:last-child {
                    display: none;
                }
            }
        }
    }
</style>
