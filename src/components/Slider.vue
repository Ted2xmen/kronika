<template>
  <div class="row d-flex align-items-center">
    <div class="col-md-8 d-sm-none d-md-block d-none d-sm-block">
      <Carousel :itemsToShow="4" :autoplay="3000" :wrapAround="true">
        <Slide v-for="slide in this.$store.state.sliderBooks" :key="slide">
          <div class="carousel__item">
            <a href="http://ekitap.yek.gov.tr/default.aspx" target="_blank">
              <img :src="slide.img" width="100" alt="" />
            </a>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="col ">
      <a href="http://ekitap.yek.gov.tr/default.aspx" target="_blank">
        <img
          src="http://ekitap.yek.gov.tr/uploads/banner_002.jpg"
          class="img-fluid"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>

