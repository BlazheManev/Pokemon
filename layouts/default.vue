<template>
  <v-app>
    <client-only>
      <v-app-bar :elevation="1" density="compact">
        <v-app-bar-nav-icon
          v-show="mobile"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title> Frontend Assignment </v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer
        :model-value="showDrawer"
        @update:model-value="drawer = !drawer"
      >
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-pokeball"
            title="Search"
            to="/"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-list-box"
            title="My Pokemons"
            to="/pokemons"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
    </client-only>
  </v-app>
</template>
<script setup lang="ts">
  import { useDisplay } from 'vuetify/lib/framework.mjs'

  const { mobile } = useDisplay()
  const drawer = ref(false)

  const showDrawer = computed(() => {
    return !mobile.value || drawer.value
  })
</script>
