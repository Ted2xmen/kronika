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
    <div class="container-md">
      <MobilPanel />
      <Panel class="d-sm-none d-md-block d-none d-sm-block" />
      <Organizasyon />
      <Siteler class="my-2" />
      <Koleksiyonlar class="px-2 py-3 my-6" />
      <Yazmalar class="my-3" />
      <Qua class="py-2 my-5" />
      <Kronikler class="py-5 my-4 shadow" />
    </div>
    <div id="footer">
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
import Organizasyon from "../components/sections/Organizasyon.vue";
import MobilPanel from "../components/sections/MobilPanel.vue";

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
    MobilPanel,
    Organizasyon,
  },
};
</script>


