<template>
  <div id="App">
    <Form 
      v-bind:searchType="searchType" v-bind:changeSearch="changeSearch"
      v-bind:callSearch="callSearch"
    />
    <imageContainer/>
  </div>
</template>

<script>
import Form from './components/Form';
import {getSearch} from './assets/APICalls';
import imageContainer from './components/imageContainer'
export default {
  name: 'App',
  components: {
    Form,
    imageContainer
  },
  data() {
    return{
      searchType: '',
      searchResults: {}
    }
  },
  methods: {
    changeSearch(e) {
      this.searchType=e.target.value
      console.log('searchType', this.searchType)
    },
    async callSearch() {
      this.searchResults = await getSearch(this.searchType)
      console.log(this.searchResults)
      this.searchType=''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
}
</style>
