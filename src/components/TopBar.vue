<template>
    <v-app-bar elevation="0">
        <div>
          <p class="ml-12" style="font-family: Public Sans,sans-serif; font-size: 24px; line-height: 24px; font-weight: 600;">Danh sách sản phẩm</p>
      </div>
        <v-spacer></v-spacer>
        <v-toolbar-item>
            <v-btn>
                <v-icon>mdi mdi-bell</v-icon>
                <v-badge content="5+" color="red">
                </v-badge>
            </v-btn>
            <v-menu >
                <template v-slot:activator="{ props }">
                        <v-avatar style="cursor: pointer;" class="mr-5" v-bind="props">
                            <v-img src="https://alltop.vn/backend/media/images/posts/467/Tim_goc_chup_phu_hop-17057.jpg"
                                alt="Duc" layout="width: 38px; height: 38px;">
                            </v-img>
                        </v-avatar>
                </template>
                <v-list>
                    <v-list-item><v-list-item-title>
                        <button>Xem hồ sơ</button>
                        <v-spacer></v-spacer>
                        <router-link style="text-decoration: none; color: black;" to="/login">Đăng xuất</router-link> 
                    </v-list-item-title></v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-item>
    </v-app-bar>
</template>
  
<script>
export default {
    name: 'TopBar'
}
</script>
  
<style></style>