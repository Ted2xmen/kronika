<template>
  <div class="row d-flex align-items-center">
    <div class="col">
      <a href="http://ekitap.yek.gov.tr/default.aspx">
        <img
          src="http://www.kadisicilleri.org/images/resim1.jpg"
          class="img-fluid rounded-3 shadow"
          width="300"
          alt=""
        />
      </a>
      <!-- <img src="http://yazmalar.gov.tr/public/theme/img/logo.png" alt=""> -->
    </div>
    <div class="col-md-9 d-sm-none d-md-block d-none d-sm-block">
      <Carousel :itemsToShow="4" :autoplay="3000" :wrapAround="true">
        <Slide v-for="slide in siteData" :key="slide.name">
          <div class="carousel__item">
            <a href="">
              <img
                :src="slide.image"
                width="140"
                height="100"
                class="customImage rounded p-2 m-2"
                alt=""
              />
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
  data() {
    return {
      siteData: [
        {
          name: "Sites",
          image:
            "https://pbs.twimg.com/profile_images/1453270151000993802/gc1A2qi3_400x400.jpg",
          url: "sadasd",
        },
        {
          name: "Sites",
          image:
            "https://kutuphane.omu.edu.tr/wp-content/uploads/sites/23/2020/09/lex-736x414.jpg",
          url: "sadasd",
        },
          {
          name: "Turuz",
          image:
            "https://1.bp.blogspot.com/-gSrO4twL8uo/XNWgvDgVEOI/AAAAAAAAIaA/u81yNmmXeroDLKx4OvhlEYXpwH75aOhygCK4BGAYYCw/s1600/turuz.png",
          url: "sadasd",
        },
          {
          name: "Salt Araştırma",
          image:
            "http://gtutto.com/wp-content/uploads/2021/01/salt-2.png",
          url: "sadasd",
        },
        {
          name: "Tübitak ULAKBİM",
          image:
            "https://4.bp.blogspot.com/-igiw5wY5T44/XNXGh9I5JkI/AAAAAAAAIbY/wZAYxq-lX3oJgoexZfizHq2mZP5-eez7wCK4BGAYYCw/s1600/ulakbim_1.png",
          url: "sadasd",
        },
      ],
    };
  },
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
