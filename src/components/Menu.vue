<template>
  <header class="flex-fluid" v-bind:class="{headerRed: headerRed}">
    <img  src='../assets/logo_black.png'>
    <nav>
      <ul>
        <li @click="toto">Recommandations OMS</li>
        <li>Mes menus</li>
        <li>A propos</li>
      </ul>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "Menu",
        data () {
            return {
                test: 'Bonjour',
                headerRed: false
            }
        },
        methods: {
            toto () {
                console.log(this.test)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .headerRed {
    background-color: red;
  }
  header {
    margin: 0;
    padding: 0;
    font-family: "Avenir";
    width: 100%;
    height: 100px;
    align-items: center;

    img {
      margin-left: 2%;
      margin-right: 2%;
      height:50px;
    }
    nav {
      margin-left: 0%;
      ul {
         list-style-type: none;
         padding: 0;
       }
      li {
        display: inline-block;
        margin: 0 10px;
      }
      a {
        color: #42b983;
      }
    }
  }
</style>
