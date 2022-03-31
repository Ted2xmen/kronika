<template>
  <div>
    <section>
      <TheNavbar id="top" />
      <TheHero />
      <NavRow />
    </section>

    <section id="suggested">
      <div class="container p-2 m-2">
        <Title
          sectionTitle="Önerilen Kaynaklar"
          :arrayLength="this.$store.getters.justWeb.length"
        />
        <TheSuggested />
      </div>
    </section>

    <section id="usefulsites">
      <div class="container p-2 m-2">
        <Title
          sectionTitle="Faydalı Siteler"
          :arrayLength="this.$store.getters.justWeb.length"
        />
        <SiteCards />
      </div>
    </section>

    <section id="kronikler">
      <div class="container p-2 m-2">
        <Title
          sectionTitle="Osmanlı Kronikleri"
          :arrayLength="this.$store.getters.justWeb.length"
        />
        <TheBooks />
      </div>
    </section>

    <section id="footer" v-if="true" class="py-4">
      <TheFooter />
      <Button buttonTitle="Yukarı" divId="#top" />
    </section>
  </div>
</template>

<script>
// base
import TheNavbar from "@/components/TheNavbar.vue";
import TheHero from "@/components/TheHero.vue";
import TheFooter from "@/components/TheFooter.vue";
import NavRow from "@/components/NavRow.vue";

// components
import TheSuggested from "@/components/TheSuggested.vue";
import SiteCards from "@/components/SiteCards.vue";
import TheBooks from "@/components/TheBooks.vue";

// shared
import Button from "@/components/shared/Button.vue";
import Title from "@/components/shared/Title.vue";

export default {
  name: "NewHome",
  components: {
    TheFooter,
    NavRow,
    TheNavbar,
    TheHero,
    Button,
    TheSuggested,
    SiteCards,
    TheBooks,
    Title,
  },
};
</script>

