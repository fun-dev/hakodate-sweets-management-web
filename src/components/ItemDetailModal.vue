<template>
  <v-container>
    <v-layout column>
      <v-flex xs6>
        <v-dialog v-model="dialog">
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
              <v-btn flat color="blue" @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ItemDetailModal extends Vue {
  private sweet_name: string = 'test_sweet_name';
  private sweet_category: string = 'test_sweet_category';
  private sweet_description: string = 'test_sweet_description';
  private sweet_price: string = '1000円';
  private shop_name: string = 'test_shop_name';
  private dialog: boolean = true;
}
</script>
