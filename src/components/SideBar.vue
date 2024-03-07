<template>
    <v-navigation-drawer>
      <v-toolbar style="background-color: white">
        <v-row>
          <v-col cols="8">
            <v-img 
              src="https://res.cloudinary.com/dgtjdhrnq/image/upload/v1705460127/logo1_adshdl.png"
              style="max-width: 150px; max-height: 28px;"
            ></v-img>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-icon style="opacity: 0.5; width: 4px; height: 8px; border: 1.74px; ">mdi mdi-backburger</v-icon>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-list>
        <v-list-subheader  style="font-family: Public Sans,sans-serif; font-weight: 400; font-size: 11px; line-height: 14px;">QUẢN LÝ SẢN PHẨM</v-list-subheader>
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :value="item"
          color="black"
          :to="item.route"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
  
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: "SideBar",
    data() {
      return {
        links: [
          { icon: " mdi mdi-sale", text: "Sản Phẩm", route: "product" },
          {
            icon: "mdi mdi-account-multiple",
            text: "Users",
            route: "users",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  </style>