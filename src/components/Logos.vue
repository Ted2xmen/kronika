<template>
  <div class="row">
        <div class="col">
      <a href="http://ekitap.yek.gov.tr/default.aspx">
        <img
          src="http://www.kadisicilleri.org/images/resim1.jpg"
          class="img-fluid"
          width="300"
          alt=""
        />
      </a>
      <!-- <img src="http://yazmalar.gov.tr/public/theme/img/logo.png" alt=""> -->
    </div>
    <div class="col-md-9 d-sm-none d-md-block d-none d-sm-block">
      <Carousel :itemsToShow="5" :autoplay="3000" :wrapAround="true">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            <a href="">
              <img src="https://library.ircica.org/images/logo.png" width="190" alt="" />
            </a>
          </div>
        </Slide>

        ...
      </Carousel>
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

