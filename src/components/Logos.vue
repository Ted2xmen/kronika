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
        <Slide v-for="slide in siteData" :key="slide.name">
          <div class="carousel__item">
            <a href="">
              <img
                :src="slide.image"
                width="180"
                height="120"
                class="customImage border border-dark p-2 m-2"
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
          name: "Ottoman History Podcast",
          image:
            "https://3.bp.blogspot.com/-RIHihVrogIA/Wnp1U_j6U_I/AAAAAAAAKQM/vp9wYPcNFfcMArjBe1sqG0-p5yQjOHt4ACLcBGAs/s1600/mustach%2Bmic%2B2%2Bx%2B1.jpg",
          url: "sadasd",
        },
          {
          name: "Salt Araştırma",
          image:
            "http://gtutto.com/wp-content/uploads/2021/01/salt-2.png",
          url: "sadasd",
        },
        {
          name: "Sites",
          image: "https://library.ircica.org/images/logo.png",
          url: "sadasd",
        },
        {
          name: "Sitew",
          image:
            "https://pro.europeana.eu/files/Europeana_Professional/Aggregation%20Landscape/Logo_pro_BnF%20Gallica.png",
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
