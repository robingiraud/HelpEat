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
      <div class="menuContainer menuContainerRight">
        <nav>
          <ul>
            <li><i class="fas fa-cog" name="Paramètres"></i> Paramètres</li>
            <li><i class="fas fa-user"></i> Login</li>
          </ul>
        </nav>
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
        flex-basis: 50%;
        img {
          margin-left: 2%;
          margin-right: 2%;
          height:50px;
          &:hover {
            cursor: pointer;
          }
        }
        nav {
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
      .menuContainerRight {
        justify-content: flex-end;
        nav {
          margin-right: 2rem;
        }
      }
    }

  }

</style>
