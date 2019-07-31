<template>
  <v-container fluid>
    <v-layout wrap column align-left>
      <v-flex xs12>
        <v-card-title class="display-1">
          商品詳細
        </v-card-title>
      </v-flex>
      <v-divider></v-divider>
      <v-flex xs12>
        <v-layout row align-center justify-center>
          <v-flex xs12 lg6>
            <v-container>
              <v-card class="ma2" flat color="tarnsparent">
                <v-img
                  :src="sweet.imagePath"
                  contain
                  height="500"
                  min-width="300"
                ></v-img>
              </v-card>
            </v-container>
          </v-flex>
          <v-flex xs12 lg6>
            <v-layout row>
              <v-container>
                <v-layout column>
                  <v-flex xs12>
                    <v-layout row align-start>
                      <v-flex xs2>
                        <v-card class="ma2" flat color="transparent">
                          <v-card-text class="title">商品名</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex xs10>
                        <v-card class="ma2" flat color="transparent">
                          <v-card-text>
                            <span class="display-2">
                              {{ sweet.name }}
                            </span>
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-layout row align-start>
                      <v-flex xs2>
                        <v-card class="ma2" flat color="transparent">
                          <v-card-text class="title">商品価格</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex xs10>
                        <v-card class="ma2" flat color="transparent">
                          <v-card-text>
                            <span class="display-1">
                              {{ sweet.price }}
                            </span>
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-layout row align-start>
                      <v-flex xs2>
                        <v-card class="ma2" flat color="transparent">
                          <v-card-text class="title">商品説明</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex xs10>
                        <v-card class="ma2" flat color="transparent">
                          <v-card-text>
                            <span class="body-1">
                              {{ sweet.description }}
                            </span>
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout column align-center justify-center>
          <v-pagination
            v-model="id"
            :length="sweets.length - 1"
            :total-visible="10"
          ></v-pagination>
        </v-layout>
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
  public propsId!: number;

  public sweets: SweetsModel[] = sweetsSampleResponse;
  public shops: ShopModel[] = shopSampleResponse;
  public sweetsCategory: SmallSweetsCategory[] = smallCategorySampleResponse;
  public largeCategories = largeCategoriesSampleResponse;
  public id: number = this.propsId;

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
