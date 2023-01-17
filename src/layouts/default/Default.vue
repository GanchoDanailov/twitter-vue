<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-card class="mx-auto" max-width="300">
        <v-list>

          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" variant="plain">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Tvvitter</v-toolbar-title>
    </v-app-bar>

    <v-main>


    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { text: 'Home', icon: 'mdi-account' },
      { text: 'Contact', icon: 'mdi-flag' },
    ],
  }),
}
</script>