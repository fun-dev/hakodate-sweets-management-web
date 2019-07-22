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
              v-model="selectedLargeCategory"
              :items="largeCategories"
              item-text="name"
              item-value="id"
              label="大カテゴリ"
              return-object
            ></v-select>
          </v-card-text>
          <v-card-text>
            <v-select
              v-model="selectedSmallCategory1"
              :items="filteredSmallCategories"
              item-text="name"
              item-value="id"
              label="小カテゴリ1"
              return-object
            ></v-select>
          </v-card-text>
          <v-card-text>
            <v-select
              v-model="selectSweetsCategory2"
              :items="filteredSmallCategories"
              item-text="name"
              item-value="id"
              label="小カテゴリ2"
              return-object
            ></v-select>
          </v-card-text>
          <v-card-text>
            <v-select
              v-model="selectSweetsCategory3"
              :items="filteredSmallCategories"
              item-text="name"
              item-value="id"
              label="小カテゴリ3"
              return-object
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" dark to="/">保存</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { sweetsSampleResponse } from '@/demodatas/Sweets';
import { smallCategorySampleResponse } from '@/demodatas/SmallCategory';
import SweetsModel from '@/models/SweetsModel';
import { SmallSweetsCategory } from '@/models/SweetsCategoryModel';
import { LargeSweetsCategory } from '@/models/SweetsCategoryModel';
import { largeCategoriesSampleResponse } from '@/demodatas/LargeCategory';

@Component
export default class ItemEdit extends Vue {
  @Prop()
  public id!: number;

  public sweets: SweetsModel[] = sweetsSampleResponse;
  public sweetsCategory: SmallSweetsCategory[] = smallCategorySampleResponse;
  private largeCategories = largeCategoriesSampleResponse;

  private selectedLargeCategory = {
    id: 1,
  };

  public selectedSmallCategory1: object = {
    id: this.sweets[this.id].small_category_ids[0],
  };
  public selectedSmallCategory2: object = {
    id: 14,
  };
  public selectedSmallCategory3: object = {
    id: 14,
  };
  public saveItem(category: string) {
    // console.log(category);
  }

  private get filteredSmallCategories() {
    return [
      ...this.sweetsCategory.filter(
        smallCategory =>
          smallCategory.large_category_id === this.selectedLargeCategory.id
      ),
      { id: 999, name: 'なし' },
    ];
  }
}
</script>
