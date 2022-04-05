<template>
  <div class="main">
    <section id="head">
      <TheNavbar id="top" />
      <TheHero />
    </section>

    <div class="container">
      <TheInfo />
      <NavRow />
    </div>

    <div class="container">
      <Panel />
      <Yazmalar class="" />
      <Siteler class="border border-danger rounded my-2 shadow" />
      <Koleksiyonlar class="px-5 py-3 my-6" />
      <Qua class="py-2 my-5" />
      <Kronikler class="border border-danger rounded my-4 shadow" />
    </div>

    <div id="footer" class="">
      <TheFooter />
    </div>
  </div>
</template>





<script>
// base
import TheNavbar from "@/components/TheNavbar.vue";
import TheHero from "@/components/TheHero.vue";
import TheFooter from "@/components/TheFooter.vue";
import NavRow from "@/components/NavRow.vue";
import TheInfo from "@/components/TheInfo.vue";

// sections
import Yazmalar from "@/components/sections/Yazmalar.vue";
import Koleksiyonlar from "@/components/sections/Koleksiyonlar.vue";
import Kronikler from "@/components/sections/Kronikler.vue";
import Siteler from "@/components/sections/Siteler.vue";
import Panel from "@/components/sections/Panel.vue";

import Qua from "@/components/Qua.vue";

export default {
  name: "Home",
  components: {
    Yazmalar,
    Koleksiyonlar,
    Kronikler,
    TheNavbar,
    TheHero,
    NavRow,
    TheInfo,
    TheFooter,
    Siteler,
    Panel,
    Qua,
  },
};
</script>


