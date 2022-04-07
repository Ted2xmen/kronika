<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in collectionData" :key="slide.name">
      <div class="carousel__item my-2">
        <a href="#" class="link">
          <div class="col " >
            <div class="hover border border-dark box-3 mx-2">
              <div class="row">
                <div class="col-md-3">
                  <img
                    :src="slide.image"
                    width="40"
                    height="40"
                    class="card-img-top customImage ml-4"
                    alt="duke"
                  />
                </div>
                <div class="col-md-8">
                  <h6 class="card-title text-warning pt-2">
                    {{ slide.name }}
                  </h6>
                </div>
              </div>
              <div class="card-body">
               <p
                  class="
                    card-text
                    text-muted
                    d-sm-none d-md-block d-none d-sm-block
                  "
                >
{{slide.url}}                </p> 
              </div>
            </div>
          </div>
        </a>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>



<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    collectionData: [
      {
        name: "Duke University Libraries",
        image:
          "https://arastirmanv4.vercel.app/assets/images/logos/canadian.png",
        url: "The American Libraries collection includes material contributed from across the United States",
      },
       {
        name: "Avrupa Kütüphaneleri",
        image:
          "https://ia802604.us.archive.org/4/items/europeanlibraries/icon.gif",
        url: "The American Libraries collection includes material contributed from across the United States",
      },
        {
        name: "Duke University Libraries",
        image:
          "https://arastirmanv4.vercel.app/assets/images/logos/canadian.png",
        url: "The American Libraries collection includes material contributed from across the United States",
      },
       {
        name: "Avrupa Kütüphaneleri",
        image:
          "https://ia802604.us.archive.org/4/items/europeanlibraries/icon.gif",
        url: "The American Libraries collection includes material contributed from across the United States",
      },
       {
        name: "Amerikan Kütüphaneleri",
        image:
          "https://ia600209.us.archive.org/9/items/americana/icon.gif",
        url: "The American Libraries collection includes material contributed from across the United States",
      },
    ],

    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      400: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
});
</script>
