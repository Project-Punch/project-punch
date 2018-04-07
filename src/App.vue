<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
    >
      <v-list dense v-for="item in items" :key="item.text">
        <v-list-tile @click="" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      dark
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
    >
      <v-toolbar-title class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Project Punch</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { icon: 'smartphone', text: 'Phones', link: '/' },
        { icon: 'apps', text: 'Apps/Tools', link: 'apps' },
        { icon: 'web', text: 'Blog',  link: '/blog' },
        { icon: 'info_outline', text: 'About', link: '/about' }
      ]
    }
  }
}
</script>
