<template>
  <v-layout column>
    <v-card sm3>
      <v-img :src="sweet.imagePath" aspect-ratio="2"></v-img>
      <v-card-title primary-title>
        <v-layout row>
          <v-layout column>
            <span class="display-1">{{ sweet.name }}</span>
            <span class="headline">{{ sweet.small_category_id }}</span>
          </v-layout>
          <v-spacer></v-spacer>
          <span class="display-1">{{ sweet.price }}</span>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout row>
          <span class="body-2">{{ sweet.description }}</span>
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
import SweetsModel from '../models/SweetsModel.vue';

@Component
export default class ItemDetailModal extends Vue {
  @Emit()
  public modalClose() {
    this.$emit('modalClose');
  }

  @Prop()
  public sweet!: SweetsModel;
}
</script>
