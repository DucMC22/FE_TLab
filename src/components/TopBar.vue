<template>
    <v-app-bar elevation="0">
        <div>
          <p class="ml-12" style="font-family: Public Sans,sans-serif; font-size: 24px; line-height: 24px; font-weight: 600;">Danh sách sản phẩm</p>
      </div>
        <v-spacer></v-spacer>
        <v-toolbar-item>
            <v-btn>
                <v-icon style="width: 26px; height: 26px; top: 5.5px;">mdi mdi-bell-outline</v-icon>
                <v-badge content="4" color="#EA5455">
                </v-badge>
            </v-btn>
            <v-menu >
                <template v-slot:activator="{ props }">
                        <v-avatar style="cursor: pointer; width: 38px; height: 38px; top: -0.5px; border-radius: 100px;" class="mr-5" v-bind="props">
                            <v-img src="https://alltop.vn/backend/media/images/posts/467/Tim_goc_chup_phu_hop-17057.jpg"
                                alt="Duc" style="width: 38px; height: 38px; top: -0.5px; border-radius: 100px;">
                            </v-img>
                        </v-avatar>
                </template>
                <v-list>
                    <v-list-item><v-list-item-title>
                        <button>Xem hồ sơ</button>
                        <v-spacer></v-spacer>
                        <router-link style="text-decoration: none; color: black;" to="/login">Đăng xuất <i class="fas fa-sign-out-alt"></i></router-link>
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