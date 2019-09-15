<template>
  <div id="imageContainer">
    <Picture 
      v-bind:key='image.id' 
      v-bind:image='image'
      v-for='image in images'
    />
  </div>
</template>

<script>
import Picture from './Picture'
export default {
  name: 'imageContainer',
  props: ['images'],
  components: {
    Picture
  }
}
</script>

<style scoped>
  #imageContainer {
    height: 100%;
    width: 100%;
  }
</style>