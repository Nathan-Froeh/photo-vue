<template>
  <!-- <div id="imageContainer"> -->
    <carousel 
      id="imageContainer" 
      :per-page="1" 
      :adjustableHeight='false'
      :navigate-to="0" 
      :mouse-drag="false" 
      :autoplay='true'
      :autoplayTimeout='5000'
      :autoplayHoverPause='false'
      paginationPosition="bottom-overlay"
      :spacePadding='0'
      :spacePaddingMaxOffsetFactor='0'
      :paginationPadding='20'
    >
      <slide
      v-bind:data-index='index'
      v-bind:data-name='index'
      v-bind:key='index' 
      v-for='(image, index) in images'
      class='slide'>
    <!-- <Picture 
      v-bind:key='index' 
      v-bind:image='image'
    /> -->
    <div class='Picture' v-bind:style="{backgroundImage: `url(${image.urls.full})`}">
  </div>
    </slide>
  </carousel>
  <!-- </div> -->
</template>

<script>
// import Picture from './Picture';
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'imageContainer',
  props: ['images'],
  components: {
    // Picture,
    Carousel,
    Slide
  }
}
</script>

<style scoped>
  #imageContainer {
    height: 100vh;
    width: 100vw;
  }
  .slide {
    height: 100vh;
    width: 100vw;
  }
  .Picture {
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
</style>