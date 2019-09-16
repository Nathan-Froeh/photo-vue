<template>
  <div class='Picture' v-bind:style="{backgroundImage: `url(${background})`}">
  </div>
</template>

<script>
export default {
  name: 'Picture',
  props: ['image'],
  computed: {
      background() {
        return this.image.urls.full
      }
    },
}
</script>

<style scoped>
  .Picture {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
</style>