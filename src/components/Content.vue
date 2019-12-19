<template>
  <main>
    <div v-if="!displayContent" class="homePage">
      <section class="titleWrapper">
        <h1>Préparez de meilleurs repas pour vos enfants avec HelpEat!</h1>
      </section>
      <section>
        <p>ImagePlateau</p>
      </section>
      <section>
        <p>ImageEnfant</p>
        <button v-on:click="toggleContent">C'est parti!</button>
      </section>
      <section>
        <p>ImageSalade</p>
      </section>
    </div>
    <div v-if="displayContent && !displayResult">
      <p>form</p>
      <button @click="toggleContent">Revenir</button>
      <button @click="toggleResult">Resultat</button>
    </div>
    <div v-if="displayResult" class="resultPage flex-fluid flex-column">
      <ResultBoard></ResultBoard>
    </div>
  </main>
</template>

<script>
  import ResultBoard from  './ResultBoard'
    export default {
        name: "Content",
        data () {
            return {
                displayContent: false,
                displayResult: false,
                meal: ["Petit Déjeuner", "Déjeuner","Gouter","Dîner"],
                day: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
                arr: []

            }
        },

        components: {
          ResultBoard
        },

        methods: {

            toggleContent() {
                this.displayContent = !this.displayContent
            },

            toggleResult() {
              this.displayResult = !this.displayResult
            }
        }
    };
</script>

<style lang='scss' scoped>
  .homePage {
    .titleWrapper {
      max-height: 46vh;
      background-color: #A64444;
      padding: 50px;

      h1 {
        margin:0;
        padding-left: 20%;
        padding-right: 20%;
        display: flex;
        align-items: center;
        text-align: center;
        color: white;
        font-size: 35px;
        font-weight: normal;
      }
    }
  }
</style>
