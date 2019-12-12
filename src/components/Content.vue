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
      <div v-for="day in day" v-bind:key="day" class="day flex-fluid">
          <h1 class="item-1">{{day}}</h1>
        <div v-for="(i, index) in arr[day]" v-bind:key="i.day" class="item-1">
          <h4>{{meal[index]}}</h4>
          <div v-for="t in i" v-bind:key="t.j">
            <p>{{t.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
        methods: {

            getData() {
              this.arr = testSemaine.weekMap
            },

            toggleContent() {
                console.log('test',testSemaine.weekMap)
                this.getData()
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

  .day {
    width: 100%;
  }

  .item-1 {
    flex-basis: calc(((0.2%)*100) - 32px);
    height: auto;
  }
</style>
