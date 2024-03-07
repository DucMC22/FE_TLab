<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-text-field v-model="search" @keyup.enter="searchData()"
              style="
                background-color: white;
                font-size: 15px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1); 
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
            <v-btn @click="dialog = true" color="primary" prepend-icon="mdi mdi-plus" class="text-uppercase">
              <span style="text-transform: lowercase;">Tạo mới</span>
          </v-btn>
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
                      style="opacity: 0.5; font-family: Public Sans,sans-serif; font-weight: 500; font-size: 13px; line-height: 15.28px;"
                      width="96px"
                      height="15px"
                    >
                      AVATAR
                    </th>
                    <th
                      class="text-left"
                      style="opacity: 0.5; font-family: Public Sans,sans-serif; font-weight: 500; font-size: 13px; line-height: 15.28px;"
                      width="120px"
                      height="15px"
                    >
                      TÊN NGƯỜI DÙNG
                    </th>
                    <th
                      class="text-center"
                      style="opacity: 0.5; font-family: Public Sans,sans-serif; font-weight: 500; font-size: 13px; line-height: 15.28px;"
                      width="96px"
                      height="15px"
                    >
                      EMAIL
                    </th>
                    <th
                      class="text-left"
                      style="opacity: 0.5; font-family: Public Sans,sans-serif; font-weight: 500; font-size: 13px; line-height: 15.28px;"
                      width="96px"
                      height="15px"
                    >
                      NGÀY SINH
                    </th>
                    <th
                      class="text-left"
                      style="opacity: 0.5; font-family: Public Sans,sans-serif; font-weight: 500; font-size: 13px; line-height: 15.28px;"
                      width="96px"
                      height="15px"
                    >
                      SỐ ĐIỆN THOẠI
                    </th>
                    <th
                      class="tex-left"
                      style="opacity: 0.5; font-family: Public Sans,sans-serif; font-weight: 500; font-size: 13px; line-height: 15.28px;"
                      width="96px"
                      height="15px"
                    >
                      <p class="text-left ml-5">HÀNH ĐỘNG</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="font-family: Public Sans,sans-serif;" v-for="i in users" :key="i">
                    <td>
                      <v-img
                        style="width: 36px; height: 50px; border-radius: 2px; " 
                        :src=i.imageUrl
                      ></v-img>
                    </td>
                    <td style="font-weight: 600; font-family: Public Sans,sans-serif;"> {{ i.name }}</td>
                    <td style="font-family: Public Sans,sans-serif; font-weight: 400; font-size: 15px; line-height: 22px;" class="text-center">{{ i.email }}</td>
                    <td style="font-family: Public Sans,sans-serif; font-weight: 400; font-size: 15px; line-height: 22px;">{{ i.birthday }}</td>
                    <td style="font-family: Public Sans,sans-serif; font-weight: 400; font-size: 15px; line-height: 22px;">{{ i.phonenumber }}</td>
                    <td class="text-left">
                      <div style="display: flex">
                        <v-btn variant="text"><v-icon style="opacity: 0.5" @click="idEdit=i.id; dialog=true">mdi mdi-square-edit-outline</v-icon></v-btn>
                        
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
                    <p class="mt-5 opacity"  style="opacity: 0.5;">Showing</p>
                    <v-col cols="2">
                      <v-select v-model="Showing"
                        density="compact"
                        :items="['10', '20', '30', '40',]"
                        variant="outlined"
                      ></v-select>
                    </v-col>
                    <p class="mt-5 opacity" style="opacity: 0.5;">of 50</p>
                  </v-row>
                </v-col>
                <v-col cols="4" class="text-right">
                  <v-pagination v-model="page"
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
      <DialogVue v-model="dialog" @close="close()" :idEdit="idEdit"/>
      <DeleteVue v-model="dialogDelete" @close="close()" :idDelete="idDelete" @delete="DeleteUserById" />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from "vue";
  import DeleteVue from '@/components/Confirm/IndexView.vue'
  import DialogVue from "../../../components/Admin/User/DialogView.vue";
  const dialog=ref(false)
  const dialogDelete = ref(false)
  const idDelete=ref(null)
  const idEdit=ref(null)
  const search=ref(null)
  const page=ref(1)
  const Showing=ref(10)


import { userServiceApi } from "@/service/user.api"
import {useUsers} from '../Users/Users'
import { showSuccessNotification } from "@/common/helper/helpers";
const {users,query,getAllUsers}=useUsers()
onMounted(async=>{
  query.keyword=""
  query.page=1
  query.limit=10
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
const searchData=async()=>{
  query.keyword=search.value
  getData()
}
watch(page,(newvalue)=>{
  query.page=newvalue
  getData()
})

watch(Showing,(newvalue)=>{
  query.limit=newvalue
  getData()
})
const close=()=>
{
  dialog.value=false
  dialogDelete.value=false
}
  </script>
  
  <style>
  </style>