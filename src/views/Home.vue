<template>
  <TheNavbar id="top" />
  <TheHero />
  <div class="home container-fluid pb-3">
    <div class="row p-1">
      <div class="col-md-8 align-self-center">
        <!-- <button
          class="btn btn-outline-primary btn-xs"
          href="#kronik"
          @click.prevent="scrollTo('#kronik')"
        >
        Kronikler
        </button> -->
        
        <!-- <TheCardRow /> -->
      </div>
      <div class="col-md-4">
        <!-- <TheMain /> -->
      </div>
    </div>
    <hr class="bg-info" />
    <Cards />

    <div id="kronik">
      <TheBooks />
    </div>
    <TheFooter />
    <!-- <button
      class="btn btn-outline-primary btn-xs"
      href="#top"
      @click.prevent="scrollTo('#top')"
    >
      <span class="material-icons"> arrow_upward </span>
    </button> -->
  </div>
</template>





<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheHero from "@/components/TheHero.vue";
import TheBooks from "@/components/TheBooks.vue";
// import TheMain from "@/components/TheMain.vue";
// import TheCardRow from "@/components/TheCardRow.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    TheBooks,
    TheFooter,
    TheNavbar,
    TheHero,
    // TheMain,
    // TheCardRow,
    Cards,
  },

  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>


