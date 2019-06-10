<template>
  <v-container>
    <v-card>
      <v-card-title>
        商品一覧
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="sweets" :search="search">
        <template v-slot:items="props">
          <td>
            <v-avatar size="36px">
              <img :src="props.item.imagePath" />
            </v-avatar>
          </td>
          <td>
            <span class="caption">{{ props.item.name }}</span>
          </td>
          <td>
            <span class="caption">{{
              shops[props.item.shop_id - 1].name
            }}</span>
          </td>
          <td class="text-xs-right">
            <span class="caption">{{ props.item.price }}</span>
          </td>
          <td class="text-xs-right">
            <span class="caption">{{
              new Date(props.item.updated_at).toLocaleString()
            }}</span>
          </td>
          <td class="text-xs-center">
            <v-icon small class="mr-2" @click="showItem(props.item.id)"
              >visibility</v-icon
            >
            <v-icon small class="mr-2" @click="editItem(props.item.id)"
              >edit</v-icon
            >
            <v-icon small @click="deleteItem(props.item.id)">delete</v-icon>
          </td>
        </template>
        <template v-slot:no-results>
          <v-alert :value="true" color="error" icon="warning"
            >Your search for "{{ search }}" found no results.</v-alert
          >
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import sweetsSampleResponse from '@/demodatas/SweetsDemodatasample';
import shopSampleResponse from '@/demodatas/ShopDemodatasample';
import SweetsModel from '../models/SweetsModel';
import ShopModel from '../models/ShopModel';

@Component
export default class ItemList extends Vue {
  private search: string = '';
  private sweets: SweetsModel[] = sweetsSampleResponse;
  private shops: ShopModel[] = shopSampleResponse;
  private headers: object[] = [
    { text: '', sortable: false, value: 'name' },
    { text: '商品名', sortable: false, value: 'name', align: 'left' },
    { text: '販売店舗', sortable: false, value: 'shop_id', align: 'left' },
    { text: '商品価格', value: 'price' },
    { text: '最終更新日', value: 'updated_at' },
    { text: 'アクション', sortable: false, align: 'left' },
  ];

  public showItem(item: SweetsModel) {}
  public editItem(item: SweetsModel) {}
  public deleteItem(item: SweetsModel) {}
}
</script>
