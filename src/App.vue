<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="pl-8">
      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-twitter"
        size="x-large"
        color="blue-lighten-2"
      />

      <NavigationMenu />
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
import NavigationMenu from '@/components/NavigationMenu'

export default {
  data: () => ({
    drawer: null,
  }),
  components: { NavigationMenu },
}
</script>
