<template>
  <div class="main">
    <section>
      <TheNavbar id="top" />
      <TheHero />
      <NavRow />
      <TheInfo />
    </section>

    <section id="bigsection" class="container-lg">
      <section id="suggested" class="my-4">
        <div class="p-2 m-2">
          <Title
            sectionTitle="Önerilen Kaynaklar"
            :arrayLength="this.$store.getters.justWeb.length"
          />
          <TheSuggested />
        </div>
      </section>

      <section>
        <Qua />
      </section>

      <section id="usefulsites" class="">
        <div class="p-2 m-2 my-4">
          <Title
            sectionTitle="Literatür Taraması"
            :arrayLength="this.$store.getters.justWeb.length"
          />
          <SiteCards />
        </div>
      </section>

      <section id="kronikler">
        <div class="p-2 m-2">
          <Title
            sectionTitle="Osmanlı Kronikleri"
            :arrayLength="this.$store.getters.justWeb.length"
          />
          <TheBooks />
        </div>
      </section>
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
import TheSuggested from "@/components/TheSuggested.vue";
import SiteCards from "@/components/SiteCards.vue";
import TheBooks from "@/components/TheBooks.vue";
import Qua from "@/components/Qua.vue";


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
    TheBooks,
    Title,
    Qua,
  },
};
</script>

