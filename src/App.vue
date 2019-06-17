<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Vuetify</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
        <GitLab/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GitLab from './components/GitLab'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GitLab
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
    body {
      min-width: 300px;
    }
</style>