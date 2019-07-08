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
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-show="!miniVariant">
            <span>商品一覧</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
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
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public miniVariant: boolean = true;
}
</script>
