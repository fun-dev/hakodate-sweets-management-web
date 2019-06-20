<template>
  <v-card class="ma-2">
    <v-card-title>
      商品一覧
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="商品名を検索"
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
          <span class="caption">{{ shops[props.item.shop_id - 1].name }}</span>
        </td>
        <td>
          <span class="caption">{{ props.item.price }}</span>
        </td>
        <td>
          <span class="caption">{{
            new Date(props.item.updated_at).toLocaleString()
          }}</span>
        </td>
        <td class="text-xs-center">
          <span v-show="props.item.small_category_id != null">
            <v-icon color="success" @click="switchShowModal()"
              >check_circle</v-icon
            >
          </span>
          <span v-show="props.item.small_category_id == null" class="caption">
            {{ props.item.small_category_id }}
          </span>
        </td>
        <td>
          <v-dialog width="650">
            <template v-slot:activator="{ on }">
              <v-btn icon dark color="primary">
                <v-icon v-on="on">visibility</v-icon>
              </v-btn>
            </template>
            <ItemDetailModal
              @modalClose="switchShowModal"
              :sweet="props.item"
            ></ItemDetailModal>
          </v-dialog>
          <v-btn
            icon
            dark
            color="grey"
            :to="{ name: 'itemEdit', params: { id: props.item.id - 1 } }"
          >
            <v-icon @click="editItem(props.item)">edit</v-icon>
          </v-btn>
          <v-btn icon dark color="red">
            <v-icon @click="deleteItem(props.item)">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning"
          >"{{ search }}"の検索結果はありませんでした。</v-alert
        >
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import sweetsSampleResponse from '@/demodatas/SweetsDemodatasample';
import shopSampleResponse from '@/demodatas/ShopDemodatasample';
import SweetsModel from '../models/SweetsModel';
import ShopModel from '../models/ShopModel';
import ItemDetailModal from '@/components/ItemDetailModal.vue';

@Component({
  components: {
    ItemDetailModal,
  },
})
export default class Home extends Vue {
  public dialog: boolean = false;
  public search: string = '';
  public sweets: SweetsModel[] = sweetsSampleResponse;
  public shops: ShopModel[] = shopSampleResponse;
  public headers: object[] = [
    { text: '', sortable: false, value: 'name' },
    { text: '商品名', sortable: false, value: 'name', align: 'left' },
    { text: '販売店舗', sortable: false, value: 'shop_id', align: 'left' },
    { text: '商品価格', value: 'price' },
    { text: '最終更新日', value: 'updated_at' },
    {
      text: 'ステータス',
      sortable: false,
      value: 'small_category_id',
      align: 'left',
    },
    { text: 'アクション', sortable: false, align: 'left' },
  ];

  public switchShowModal() {
    this.dialog = !this.dialog;
  }
  public editItem(item: SweetsModel) {}
  public deleteItem(item: SweetsModel) {}
}
</script>
