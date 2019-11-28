<template>
  <div id="app">
    <Menu />
    <Content></Content>
  </div>
</template>

<script>
    import Menu from "./components/Menu";
    import Content from "./components/Content";

    export default {
        name: "App",
        components: {
            Content,
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
