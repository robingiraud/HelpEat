<template>
  <header class="flex-fluid" v-bind:class="{headerRed: headerRed}">
    <div class="menuContainer">
      <img  src='../assets/logo_white.png'>
      <nav>
        <ul>
          <li @click="toto"><i class="fas fa-check-circle"></i> Recommandations OMS</li>
          <li><i class="fas fa-utensils"></i> Mes menus</li>
        </ul>
      </nav>
    </div>
    <div class="iconContainer">
      <i class="fas fa-cog" name="Paramètres"></i><span> Paramètres</span>
    </div>
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

<style lang='scss' scoped>
  .headerRed {
    background-color: red;
  }
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
      flex-basis: 75%;
      img {
        margin-left: 2%;
        margin-right: 2%;
        height:50px;
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
      flex-basis: 25%;
      text-align: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
