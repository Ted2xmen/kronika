<template>
  <TheNavbar id="top" />
  <Button buttonTitle="Kronikler" divId="#kronik" />
    <Button buttonTitle="Internet Siteleri" divId="#websites" />

  <TheHero />
  <div class="home container-fluid pb-3">
    <div class="row p-1">
      <div class="col-md-8 align-self-center">
        <TheCardRow />
      </div>
     
    </div>
    <SiteCards />

    <div id="kronik">
      <Title sectionTitle="Kronikler" :arrayLength="this.$store.getters.justKronik.length" />
      <TheBooks />
    </div>
    <div id="websites">
      <Title sectionTitle="Internet Siteleri" :arrayLength="this.$store.getters.justWeb.length" />
      <TheBooks />
    </div>
    <TheFooter />
    <Button buttonTitle="Yukarı" divId="#top" />
  </div>
</template>





<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHero from "@/components/TheHero.vue";
import TheBooks from "@/components/TheBooks.vue";
import SiteCards from "@/components/SiteCards.vue";
// SHARED
import Button from "@/components/shared/Button.vue";
import Title from "@/components/shared/Title.vue";

export default {
  name: "Home",
  components: {
    TheBooks,
    TheFooter,
    TheNavbar,
    TheHero,
    Button,
    SiteCards,
    Title,
  },
};
</script>


