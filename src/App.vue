<template>
  <div 
    id="App" 
    v-bind:style="{backgroundImage: `url(https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkxNTQxfQ)`}"
  >
    <button 
      v-on:click="nextPage"
      class="next"
    >Next image set</button>
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
      lastSearch: '',
      searchResults: [],
      pageNum: 1
    }
  },
  methods: {
    changeSearch(e) {
      this.searchType=e.target.value
    },
    async callSearch() {
      this.searchResults = await getSearch(this.searchType)
      console.log(this.searchResults)
      this.lastSearch = this.searchType
      this.searchType=''
    },
    async nextPage() {
      this.pageNum++
      this.searchResults = await getSearch(this.lastSearch, this.pageNum)
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
.next {
  position: absolute;
  z-index: 11;
  right: 0;
  margin: 10px;
  border-radius: 15px;
  height: 35px;
  width: 150px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, .3);
  margin: 10px;
  border: solid #D8D8D8 1px;
}
</style>
