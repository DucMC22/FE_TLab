<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-text-field style="background-color: white" density="compact" variant="outlined" label="Tìm kiếm"
            append-inner-icon="mdi mdi-magnify" single-line hide-details class="mr-2"></v-text-field>
        </v-col>
        <v-col cols="9" class="text-right">
          <v-btn @click="dialog = true" color="primary" prepend-icon="mdi mdi-plus" class="text-uppercase">Tạo mới</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-left" style="opacity: 0.5">Tên sản phẩm</th>
                  <th class="text-left" style="opacity: 0.5">Giá</th>
                  <th class="text-left" style="opacity: 0.5">Số lượng</th>
                  <th class="text-left" style="opacity: 0.5">Mô tả</th>
                  <th class="text-left" style="opacity: 0.5">Ảnh</th>
                  <th class="text-center" style="opacity: 0.5">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in products" :key="i">
                  <td>{{ i.name }}</td>
                  <td>$ {{ i.price }}</td>
                  <td>{{ i.quantity }}</td>
                  <td style="width: 250px" class="v-text-truncate">
                    {{ i.description }}
                  </td>
                  <td>
                    <v-img width="60" height="50" :src="i.imageUrl"></v-img>
                  </td>
                  <td class="text-center">
                    <v-btn variant="text"><v-icon style="opacity: 0.5">mdi mdi-square-edit-outline</v-icon></v-btn>
                    <v-btn variant="text" @click="deleteProduct()"><v-icon style="opacity: 0.5">mdi
                        mdi-trash-can-outline</v-icon></v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <v-row class="ma-2">
              <v-col cols="8">
                <v-row>
                  <p class="mt-5 opacity">Showing</p>
                  <v-col cols="2">
                    <v-select density="compact" :items="['10', '20', '25', '30', 'All']" variant="outlined"></v-select>
                  </v-col>
                  <p class="mt-5 opacity">of 50</p>
                </v-row>
              </v-col>
              <v-col cols="4" class="text-right">
                <v-pagination active-color="#0F60FF" variant="text" density="compact" :length="5"></v-pagination>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <DialogVue v-model="dialog" />
  </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import DialogVue from "../../../components//Admin/Product/DialogView.vue";
const dialog = ref(false)

import { useProduct } from '../Product/Product'
const { products, query, getAllProducts } = useProduct()
onMounted(async => {
  getData()
})


const getData = async () => {
  const res = await getAllProducts()
  console.log(res);
  products.value = res.data
}
</script>
  
<style></style>