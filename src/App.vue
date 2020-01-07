<template>
  <div id="app">
    <!-- Menu -->
    <header id="headerDesktop">
        <div class="menuContainer">
          <img  src='/src/assets/logo_white.png' @click="display='displayHomePage'">
          <nav>
            <ul>
              <li @click="toggleMenu('displayReco')"><i class="fas fa-check-circle"></i> Recommandations OMS</li>
              <li @click="toggleMenu('displayHistory')"><i class="fas fa-utensils"></i> Mes menus</li>
            </ul>
          </nav>
        </div>
        <div class="menuContainer menuContainerRight">
          <nav>
            <ul>
              <li @click="display='displaySettings'"><i class="fas fa-cog" name="Paramètres"></i> Paramètres</li>
              <li><i class="fas fa-user"></i> Login</li>
            </ul>
          </nav>
        </div>
    </header>
    <header id="headerMobile">
      <img  src='/src/assets/logo_white.png' @click="display='displayHomePage'">
      <i class="fas fa-bars" @click="isActive = !isActive"></i>
    </header>
     <nav v-bind:class="[isActive ? 'side-menu active': 'side-menu']">
        <ul>
          <li @click="toggleMenu('displayReco')"><i class="fas fa-check-circle"></i>Recommandations OMS</li>
          <li @click="toggleMenu('displayHistory')"><i class="fas fa-utensils"></i>Mes menus</li>
          <li @click="display='displaySettings'"><i class="fas fa-cog" name="Paramètres"></i>Paramètres</li>
          <li><i class="fas fa-user"></i>Login</li>
        </ul>
      </nav>
    <!-- Content -->
    <HomePage v-if="display === 'displayHomePage'" @clicked="toggleDisplay" />
    <FormMenu v-if="display === 'displayForm'"  @clicked="toggleDisplay" @results="getMenuData" />
    <SettingsPage v-if="display === 'displaySettings'" @clicked="toggleDisplay" />
    <ResultBoard v-if="display === 'displayResult'" @clicked="toggleDisplay" :dataMenu="dataMenu" />
    <HistoryPage v-if="display === 'displayHistory'" />
    <RecommandationsOMS v-if="display === 'displayReco'" />
  </div>
</template>

<script>
    import HomePage from "./components/Pages/HomePage";
    import FormMenu from "./components/Pages/FormMenu";
    import ResultBoard from "./components/Pages/ResultBoard";
    import SettingsPage from "./components/Pages/SettingsPage";
    import HistoryPage from "./components/Pages/HistoryPage";
    import RecommandationsOMS from "./components/Pages/RecommandationsOMS";

    export default {
        name: "App",
        components: {
          RecommandationsOMS,
          SettingsPage,
          HomePage,
          FormMenu,
          ResultBoard,
          HistoryPage,
          ResultBoard
        },
        data() {
          return {
            display: 'displayHomePage',
            show: true,
            dataMenu: {},
            isActive: false
          }
        },
        methods: {
          toggleDisplay(value) {
            this.display = value
          },
          toggleMenu(value) {
            this.display = value
          },
          getMenuData(data) {
            this.dataMenu = data
          }
        }
    };
</script>

<style lang="scss">
  @import "../css_framework/stylesheets/main.css";
  #app {
    margin: 0;
    padding: 0;

    .side-menu {
      display: none;
    }
    
    #headerMobile {
      display: none;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100px;
      justify-content: space-between;
      align-items: center;
      background-color: #C83E3E;
      img {
        margin-left: 2%;
        margin-right: 2%;
        height:50px;
        &:hover {
          cursor: pointer;
        }
      }
      i {
        color: white;
        font-size: 32px;
        margin-right: 5vw;
        &:hover {
          cursor: pointer;
        }
      }
    }
    #headerDesktop {
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

  @media screen and (max-width: 965px) {
    #app {
      #headerMobile {
        display: flex !important;
        position: relative;
        z-index: 1;
      }
      .side-menu {
          background-color: rgb(206, 206, 206);
          position: absolute;
          top: -256px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 0;
          transition: top 0.7s ease-in-out;

        i {
          color: white;
          font-size: 32px;
          margin-right: 5vw;
          &:hover {
            cursor: pointer;
          }
        }
          ul {
            list-style: none;

            li {
              margin: 20px 0;
              color: white;
            }
          }
        }

        .active {
          top: 100px !important;
        }
      #headerDesktop {
        display: none !important;
      }
    }
  }

</style>
