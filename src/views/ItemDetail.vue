<template>
  <v-container fluid>
    <v-layout wrap column align-center>
      <v-flex xs12>
        <v-layout row align-center>
          <v-flex xs12 lg6>
            <v-card flat>
              <v-img :src="sweet.imagePath" aspect-ratio="1"></v-img>
            </v-card>
          </v-flex>
          <v-flex xs12 lg6>
            <v-layout column align-center justify-space-around fill-height>
              <v-flex xs12>
                <v-card class="ma2">
                  <v-card-text>
                    <span>商品の情報</span><br />
                    <span>{{ sweet }}</span>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12>
                <v-card>
                  <v-card-text>
                    <span>お店の情報</span><br />
                    <span>{{ shop }}</span>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-pagination
          v-model="id"
          :length="sweets.length - 1"
          :total-visible="10"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import SweetsModel from '@/models/SweetsModel';
import ShopModel from '@/models/ShopModel';
import {
  SmallSweetsCategory,
  LargeSweetsCategory,
} from '@/models/SweetsCategoryModel';
import { sweetsSampleResponse } from '@/demodatas/Sweets';
import { smallCategorySampleResponse } from '@/demodatas/SmallCategory';
import { largeCategoriesSampleResponse } from '@/demodatas/LargeCategory';
import { shopSampleResponse } from '@/demodatas/Shop';

@Component
export default class ItemDetail extends Vue {
  @Prop()
  public id!: number;

  public sweets: SweetsModel[] = sweetsSampleResponse;
  public shops: ShopModel[] = shopSampleResponse;
  public sweetsCategory: SmallSweetsCategory[] = smallCategorySampleResponse;
  public largeCategories = largeCategoriesSampleResponse;

  public sweet: SweetsModel = this.sweets[this.id - 1];
  public shop: ShopModel = this.shops[this.sweet.shop_id - 1];

  @Watch('id')
  public idChanged() {
    this.sweet = this.sweets[this.id - 1];
    this.shop = this.shops[this.sweet.shop_id - 1];
    window.history.pushState(null, '', String(this.id)); //url書き換え
  }
}
</script>
