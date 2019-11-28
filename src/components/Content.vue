<template>
  <main>
    <div v-if="!displayContent" class="HomePage">
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
    <div v-if="displayContent">
      <p>form</p>
      <button @click="toggleContent">Revenir</button>
    </div>
  </main>
</template>

<script>
    export default {
        name: "Content",
        data () {
            return {
                displayContent: false
            }
        },
        methods: {
            toggleContent() {
                console.log('toto')
                this.displayContent = !this.displayContent
            }
        }
    };
</script>

<style lang='scss' scoped>
  .HomePage {
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
