<template>
  <div class="main">



    <section id="head">
      <TheNavbar id="top" />
      <TheHero />
      <NavRow />
      <TheInfo />
    </section>

  <section id="big" class="container-lg">

      <section id="suggested" class="my-4">
        <div class="p-2 m-2">
          <Title
            icon="star"
            sectionTitle="Önerilen Kaynaklar"
            :arrayLength="this.$store.getters.justWeb.length"
          />
          <TheSuggested />
         </div>
      </section>


          <section id="quo">
            <Qua class="py-5" />
          </section>


      <Yazmalar />


<section id="kutuphaneler">
  <div>
    <Title icon="book" class="py-2" sectionTitle="Kütüphaneler" />
    <Libs />
  </div>
</section>


  <Koleksiyonlar />


<section id="logos">
  <div>
    <Title icon="book" class="py-2" sectionTitle="Siteler" />
    <Logos />
  </div>
</section>



      <section id="usefulsites" class="">
        <div class="p-2 m-2 my-4">
          <Title
            icon="search"
            sectionTitle="Literatür Taraması"
            :arrayLength="this.$store.getters.justWeb.length"
          />
          <SiteCards />
        </div>
      </section>


  <Kronikler />


      <Yazmalar />

</section>

    <section id="footer" v-if="true" class="py-4">
      <TheFooter />
    </section>



  </div>
</template>

<script>
// base
import TheNavbar from "@/components/TheNavbar.vue";
import TheHero from "@/components/TheHero.vue";
import TheFooter from "@/components/TheFooter.vue";
import NavRow from "@/components/NavRow.vue";
import TheInfo from "@/components/TheInfo.vue";

// components
import Logos from "@/components/Logos.vue";
import Libs from "@/components/Libs.vue";
import TheSuggested from "@/components/TheSuggested.vue";
import SiteCards from "@/components/SiteCards.vue";
// import TheBooks from "@/components/TheBooks.vue";
import Qua from "@/components/Qua.vue";
// import Slider from "@/components/Slider.vue";
// import Collections from "@/components/Collections.vue";

// sections
import Yazmalar from "@/components/sections/Yazmalar.vue"
import Koleksiyonlar from "@/components/sections/Koleksiyonlar.vue"
import Kronikler from "@/components/sections/Kronikler.vue"



// shared
import Title from "@/components/shared/Title.vue";

export default {
  name: "NewHome",
  components: {
    TheInfo,
    TheFooter,
    NavRow,
    TheNavbar,
    TheHero,
    TheSuggested,
    SiteCards,
    // TheBooks,
    Kronikler,
    Title,
    Qua,
//    Collections,
    Koleksiyonlar,
    // Slider,
    Libs,
    Logos,
    Yazmalar
  },
};
</script>

