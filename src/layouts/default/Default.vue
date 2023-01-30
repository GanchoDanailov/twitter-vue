<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="pl-8">
      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-twitter"
        size="x-large"
        color="blue-lighten-2"
      ></v-btn>

      <div class="d-flex flex-column">
        <router-link to="/" class="d-flex align-center text-black mb-3">
          <v-icon size="x-large" icon="mdi-home-heart"></v-icon>
          <span class="ml-5 text-h6">Home</span>
        </router-link>

        <!-- <router-link to="/about" class="d-flex align-center text-black mb-3">
          <v-icon size="x-large" icon="mdi-pound"></v-icon>
          <span class="ml-5 text-h6">Explore</span>
        </router-link> -->

        <router-link to="/login" class="d-flex align-center text-black mb-3">
          <v-icon size="x-large" icon="mdi-login-variant"></v-icon>
          <span class="ml-5 text-h6">Login</span>
        </router-link>

        <router-link to="/register" class="d-flex align-center text-black mb-3">
          <v-icon size="x-large" icon="mdi-account-plus-outline"></v-icon>
          <span class="ml-5 text-h6">Register</span>
        </router-link>
      </div>
    </v-navigation-drawer>

    <v-app-bar>
      <v-toolbar-title @click="drawer = !drawer">Twitter</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.router-link-exact-active {
  span {
    font-weight: 900;
  }
}
</style>