<template>
  <div 
    id="App" 
    v-bind:style="{backgroundImage: `url(https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkxNTQxfQ)`}"
  >
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
  background-size: cover;
}
</style>
