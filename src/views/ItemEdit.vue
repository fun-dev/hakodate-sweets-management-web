<template>
  <v-container fluid>
    <v-layout wrap align-center>
      <v-flex xs12>
        <v-card class="ma-2">
          <v-card-text>
            <v-text-field
              v-model="sweets[id].name"
              label="商品名"
              required
              disabled
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="sweets[id].price"
              label="商品価格"
              required
              disabled
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="sweets[id].description"
              label="商品説明"
              required
              disabled
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-select
              v-model="selectSweetsCategory"
              :items="sweetsCategory"
              item-text="name"
              item-value="id"
              label="カテゴリ"
              return-object
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" dark @click="saveItem(selectSweetsCategory.id)"
              >SAVE</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import sweetsSampleResponse from '@/demodatas/SweetsDemodatasample';
import sweetsCategorySampleResponse from '@/demodatas/SweetsCategoryDemodatasmaple';
import SweetsModel from '@/models/SweetsModel';
import SweetsCategoryModel from '@/models/SweetsCategoryModel';

@Component
export default class ItemEdit extends Vue {
  @Prop()
  public id!: number;

  public sweets: SweetsModel[] = sweetsSampleResponse;
  public sweetsCategory: SweetsCategoryModel[] = sweetsCategorySampleResponse;
  public selectSweetsCategory: object = {
    id: this.sweets[this.id].small_category_id,
  };
  public saveItem(category: string) {
    console.log(category);
  }
}
</script>
