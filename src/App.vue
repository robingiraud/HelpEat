<template>
  <div id="app">
    <Menu />
    <FormMenu />
  </div>
</template>

<script>
    import Menu from "./components/Menu";
    import FormMenu from "./components/FormMenu";
    export default {
        name: "App",
        components: {
            FormMenu,
            Menu
        }
    };
</script>

<style>
  @import "../css_framework/stylesheets/main.css";
  #app {
    margin: 0;
    padding: 0;
  }
</style>
