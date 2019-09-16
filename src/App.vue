<template>
  <div id="App">
    <Form 
      v-bind:searchType="searchType" v-bind:changeSearch="changeSearch"
      v-bind:callSearch="callSearch"
    />
    <imageContainer v-bind:images='this.searchResults'/>
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
      searchResults: []
    }
  },
  methods: {
    changeSearch(e) {
      this.searchType=e.target.value
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
  background: red;
}
</style>
