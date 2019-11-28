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
    h1 {
      margin:0;
      height: 300px;
      padding-left: 30%;
      padding-right: 30%;
      display: flex;
      align-items: center;
      background-color: #A64444;;
      text-align: center;
      color: white;
      font-size: 64px;
      font-weight: normal;
    }
  }
</style>
