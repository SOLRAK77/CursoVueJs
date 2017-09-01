<template lang="pug">
#app
  img(src='./assets/logo.png')
  h1 Platzi Music SOLRAK
  select(v-model="selpais")
    option(v-for="pais in countries" v-bind:value="pais.value") {{ pais.name }}
  spinner(v-show="loading")
  ol
    artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")  
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists:[],
      countries:[
        {name: 'Argentina', value:'argentina'},
        {name: 'España', value:'spain'},
        {name: 'Mexico', value:'mexico'},
        {name: 'Chile', value:'chile'},
        {name: 'Colombia', value:'colombia'}
      ],
      selpais: 'mexico',
      loading: true
    }
  },
  components:{
    Artist,
    Spinner
  }
  ,
  methods: {
    actualizaArtista() {
        const self = this
        this.loading= true
        this.artists = []
    getArtists(this.selpais)
      .then(function (artists)  {
        self.loading = false
        self.artists = artists
       })
     }
   },     
  watch:{
    selpais () {
      this.actualizaArtista()
    }
  },
  mounted(){    
     this.actualizaArtista()
   }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
