<template>
  <div id="Form">
    <form v-on:submit.prevent v-on:submit="callSearch" >
      <input 
        type="text" 
        placeholder="Search for images"
        v-on:change="changeSearch"  
        :value="searchType"
        class='search-box'
      >
      <input type="submit" value="Search" class='submit-button'>
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
  #Form {
    position: absolute;
    z-index: 10;
    margin-top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  input {
    border-radius: 15px;
    height: 35px;
    font-size: 18px;
    background-color: rgba(255, 255, 255, .3);
    margin: 10px;
    /* box-shadow: inset 3px 3px 3px 3px rgba(0, 0, 0, .4); */
    border: solid #D8D8D8 1px;
  }
  .search-box {
    width: 260px;
    padding-left: 10px;
  }
  .submit-button {
    width: 100px;
  }
  ::-webkit-input-placeholder { 
  color: black;
}
</style>