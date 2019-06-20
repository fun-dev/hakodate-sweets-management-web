<template>
  <v-container fluid>
    <v-layout wrap align-center>
      <v-flex xs12>
        <v-card class="ma-2">
          <v-card-text>
            <v-text-field
              v-model="sweet[id].name"
              label="商品名"
              required
              disabled
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="sweet[id].price"
              label="商品価格"
              required
              disabled
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="sweet[id].description"
              label="商品説明"
              required
              disabled
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-select :items="categorys" label="カテゴリ"></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" dark @click="saveItem">SAVE</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import sweetsSampleResponse from '@/demodatas/SweetsDemodatasample';
import SweetsModel from '../models/SweetsModel';

@Component
export default class ItemEdit extends Vue {
  public sweet: SweetsModel[] = sweetsSampleResponse;
  public categorys: string[] = [
    '大福',
    '団子',
    'どら焼き',
    'モナカ',
    '羊かん',
    'アイス',
    'ケーキ',
    'ロール',
    'シュークリーム',
    'チョコ',
    'パイ',
    'パン',
    '未分類',
  ];

  @Prop()
  public id!: number;

  public saveItem() {}
}
</script>
