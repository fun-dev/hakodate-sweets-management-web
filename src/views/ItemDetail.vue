<template>
  <v-container fluid>
    <v-layout wrap>
      ItemDetailPage
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import SweetsModel from '@/models/SweetsModel';
import ShopMode from '@/models/ShopModel';
import {
  SmallSweetsCategory,
  LargeSweetsCategory,
} from '@/models/SweetsCategoryModel';
import { sweetsSampleResponse } from '@/demodatas/Sweets';
import { smallCategorySampleResponse } from '@/demodatas/SmallCategory';
import { largeCategoriesSampleResponse } from '@/demodatas/LargeCategory';

@Component
export default class ItemDetail extends Vue {}
</script>
