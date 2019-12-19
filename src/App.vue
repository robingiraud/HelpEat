<template>
  <div id="app">
    <!-- Menu -->
    <header class="flex-fluid">
      <div class="menuContainer">
        <img  src='/src/assets/logo_white.png' @click="display='displayHomePage'">
        <nav>
          <ul>
            <li><i class="fas fa-check-circle"></i> Recommandations OMS</li>
            <li><i class="fas fa-utensils"></i> Mes menus</li>
          </ul>
        </nav>
      </div>
      <div class="iconContainer">
        <div><i class="fas fa-cog" name="Paramètres"></i><span> Paramètres</span></div>
        <div><i class="fas fa-user"></i><span> Login</span></div>
      </div>
    </header>
    <!-- Content -->
    <HomePage v-if="display === 'displayHomePage'" @clicked="toggleDisplay" />
    <FormMenu v-if="display === 'displayForm'"  @clicked="toggleDisplay" />
    <ResultBoard v-if="display == 'displayResult'" />
  </div>
</template>

<script>
    import HomePage from "./components/HomePage";
    import FormMenu from "./components/FormMenu";
    import ResultBoard from "./components/ResultBoard";
    export default {
        name: "App",
        components: {
            HomePage,
            FormMenu,
            ResultBoard
        },
        data() {
          return {
            display: 'displayHomePage'
          }
        },
        methods: {
          toggleDisplay(value) {
            this.display = value
          }
        }
    };
</script>

<style lang="scss">
  @import "../css_framework/stylesheets/main.css";
  #app {
    margin: 0;
    padding: 0;

    header {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #C83E3E;
      color: white;
      .menuContainer {
        display: flex;
        flex-basis: 80%;
        img {
          margin-left: 2%;
          margin-right: 2%;
          height:50px;
          &:hover {
            cursor: pointer;
          }
        }
        nav {
          margin-left: 0%;
          ul {
            cursor: default;
            list-style-type: none;
            padding: 0;
          }
          li {
            display: inline-block;
            margin: 0 10px;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
      .iconContainer {
        flex-basis: 20%;
        display: flex;
        justify-content: space-around;
        text-align: center;
        div:hover {
          cursor: pointer;
        }
      }
    }

  }

</style>
