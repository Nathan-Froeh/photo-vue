<template>
  <div id="Form">
    <form v-on:submit.prevent v-on:submit="callSearch" >
      <input 
        type="text" 
        placeholder="Search for images"
        v-on:change="changeSearch"  
        :value="searchType"
      >
      <input type="submit" value="Search">
    </form>

  </div>
</template>

<script>
export default {
  name: 'Form',
  props: ["searchType", "changeSearch", "callSearch"],
}
</script>

<style scoped>
  input {
    border-radius: 10px
  }
</style>