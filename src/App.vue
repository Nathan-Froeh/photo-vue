<template>
  <div id="App">
    <Form 
      v-bind:searchType="searchType" v-bind:changeSearch="changeSearch"
      v-bind:callSearch="callSearch"
    />
  </div>
</template>

<script>
import Form from './components/Form'
export default {
  name: 'App',
  components: {
    Form
  },
  data() {
    return{
      searchType: ''
    }
  },
  methods: {
    changeSearch(e) {
      this.searchType=e.target.value
      console.log('searchType', this.searchType)
    },
    callSearch(e) {
      e.preventDefault()
      this.searchType=''
      console.log('callSearch', this.searchType)
    }
  }
}
</script>

<style>
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
