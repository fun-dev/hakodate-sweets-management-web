<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon> </v-toolbar-side-icon>
      <v-img
        :src="require('./assets/amahako_bar.png')"
        height="50"
        contain
      ></v-img>
    </v-toolbar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      //
    };
  },
};
</script>
