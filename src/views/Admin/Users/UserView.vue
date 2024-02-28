<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-text-field
              style="
                background-color: white;
                font-size: 15px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              "
              density="compact"
              variant="outlined"
              label="Tìm kiếm"
              append-inner-icon="mdi mdi-magnify"
              single-line
              hide-details
              class="mr-2"
            ></v-text-field>
          </v-col>
          <v-col cols="9" class="text-right">
            <v-btn
              @click="dialog = true"
              color="primary"
              prepend-icon="mdi mdi-plus"
              class="text-uppercase"
              >Tạo mới</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th
                      class="text-left"
                      style="opacity: 0.5"
                      width="96px"
                      height="15px"
                    >
                      Avatar
                    </th>
                    <th
                      class="text-center"
                      style="opacity: 0.5"
                      width="96px"
                      height="15px"
                    >
                      Tên người dùng
                    </th>
                    <th
                      class="text-center"
                      style="opacity: 0.5"
                      width="96px"
                      height="15px"
                    >
                      Email
                    </th>
                    <th
                      class="text-left"
                      style="opacity: 0.5"
                      width="96px"
                      height="15px"
                    >
                      Ngày sinh
                    </th>
                    <th
                      class="text-left"
                      style="opacity: 0.5"
                      width="96px"
                      height="15px"
                    >
                      Số điện thoại
                    </th>
                    <th
                      class="text-left"
                      style="opacity: 0.5"
                      width="96px"
                      height="15px"
                    >
                      <p class="">Hành động</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="i in users" :key="i">
                    <td>
                      <v-img
                        width="60"
                        height="50"
                        :src=i.imageUrl
                      ></v-img>
                    </td>
                    <td class="text-center"> {{ i.name }}</td>
                    <td class="text-center">{{ i.email }}</td>
                    <td>{{ i.birthday }}</td>
                    <td>{{ i.phonenumber }}</td>
                    <td class="text-left">
                      <div style="display: flex">
                        <v-icon class="mr-3" style="opacity: 0.5; cursor: pointer;"
                          >mdi mdi-square-edit-outline</v-icon
                        >
                        <v-btn variant="text" @click="idDelete=i.id;dialogDelete=true"><v-icon style="opacity: 0.5">
                      mdi mdi-trash-can-outline</v-icon></v-btn>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
              <v-row class="ma-2">
                <v-col cols="8">
                  <v-row>
                    <p class="mt-5 opacity">Showing</p>
                    <v-col cols="2">
                      <v-select
                        density="compact"
                        :items="['10', '20', '25', '30', 'All']"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                    <p class="mt-5 opacity">of 50</p>
                  </v-row>
                </v-col>
                <v-col cols="4" class="text-right">
                  <v-pagination
                    active-color="#0F60FF"
                    variant="text"
                    density="compact"
                    :length="5"
                  ></v-pagination>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <DialogVue v-model="dialog" />
      <DeleteVue v-model="dialogDelete" :idDelete="idDelete" @delete="DeleteUserById" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import DeleteVue from '@/components/Confirm/IndexView.vue'
  import DialogVue from "../../../components/Admin/User/DialogView.vue";
  const dialog=ref(false)
  const dialogDelete = ref(false)
  const idDelete=ref(null)


import { userServiceApi } from "@/service/user.api"
import {useUsers} from '../Users/Users'
import { showSuccessNotification } from "@/common/helper/helpers";
const {users,query,getAllUsers}=useUsers()
onMounted(async=>{
  getData()
})


const getData=async ()=>{
  const res=await getAllUsers()
  console.log(res);
  users.value=res.data
}

const DeleteUserById=async(id)=>{
  const res=await userServiceApi._delete(id)
  if(res.success)
  {
    dialogDelete.value=false
    showSuccessNotification("Xóa thành công")
    getData()
  }
  else
  {
    alert(res.message)
  }
}
  </script>
  
  <style>
  </style>