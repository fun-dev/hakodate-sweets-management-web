<template>
  <v-layout row justify-center>
    <v-card>
      <v-img
        :src="require('@/assets/amahako_bar.png')"
        aspect-ratio="3"
      ></v-img>
      <v-card-title primary-title>
        <v-layout row>
          <v-layout column>
            <span class="display-2">{{ sweet_name }}</span>
            <span class="headline">{{ sweet_category }}</span>
          </v-layout>
          <v-spacer></v-spacer>
          <span class="headline">{{ sweet_price }}</span>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row>
          <span class="body-2">{{ sweet_description }}</span>
          <v-spacer></v-spacer>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="blue" @click="modalClose()">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class ItemDetailModal extends Vue {
  @Emit()
  public modalClose() {
    this.$emit('modalClose');
  }

  @Prop()
  public sweet_name?: string;
  public sweet_category?: string;
  public sweet_description?: string;
  public sweet_price?: string;
  public shop_name?: string;
}
</script>
