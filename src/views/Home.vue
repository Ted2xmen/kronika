<template>
  <TheNavbar />
  <TheHero />
  <div class="home container-fluid pb-3">
    <div class="row p-5">
      <div class="col-md-8 align-self-center">
        <TheCardRow />
      </div>
      <div class="col-md-4">
        <TheMain />
      </div>
    </div>
    <hr class="bg-info" />
    <Cards />

    <TheBooks />

    <TheFooter />
  </div>
</template>





<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHero from "@/components/TheHero.vue";
import TheBooks from "@/components/TheBooks.vue";
import TheMain from "@/components/TheMain.vue";
import TheCardRow from "@/components/TheCardRow.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    TheBooks,
    TheFooter,
    TheNavbar,
    TheHero,
    TheMain,
    TheCardRow,
    Cards,
  },
};
</script>


