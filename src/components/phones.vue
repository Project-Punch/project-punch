<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex md6 xs12 v-for="phone in phones" :key="phone.name">
        <v-card hover @click="" :to="phone.link">
          <v-card-media
           class="white--text"
           height="300px"
           :src="phone.image"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ phone.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      phones: [
        { image: '/static/oneplus5.webp', name: 'OnePlus 5/5T', link: '/phones/oneplus5' },
        { image: '/static/oneplus6.webp', name: 'OnePlus 6', link: '/oneplus6' }
      ]
    }
  }
}
</script>
