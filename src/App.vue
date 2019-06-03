<template>
  <v-app>
    <v-navigation-drawer
      permanent
      clipped
      :floating="false"
      :mini-variant="miniVariant"
      absolute
      overflow
      app
    >
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>view_list</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>商品一覧 </v-list-tile-title>
      </v-list-tile>
    </v-navigation-drawer>

    <v-toolbar app clipped-left>
      <v-toolbar-side-icon
        @click.stop="miniVariant = !miniVariant"
      ></v-toolbar-side-icon>
      <v-img
        :src="require('./assets/amahako_bar.png')"
        height="50"
        contain
      ></v-img>
    </v-toolbar>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public miniVariant: boolean = true;
}
</script>
