<template>
  <div class="home">
    <TheNavbar />
    <TheHero />

    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-md-8 align-self-center">
          <TheCardRow  />
          <TheCardRow  />
  
        </div>

        <div class="col-md-4  ">
          <TheMain />
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">

        </div>

        <div class="col-md-8"></div>
        <div class="col-md-2"></div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
        <div class="col-md-2"></div>
      </div>


         <TheSix />
    <TheTable />

  
    </div>

  <div class="container">
      <Cards />
  </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheHero from "@/components/TheHero.vue";
import TheSix from "@/components/TheSix.vue";
import TheMain from "@/components/TheMain.vue";
import TheTable from "@/components/TheTable.vue";
import TheCardRow from "@/components/TheCardRow.vue";
import Cards from "@/components/Cards.vue";


export default {
  name: "Home",
  components: {
    TheSix,
    TheNavbar,
    TheHero,
    TheMain,
    TheTable,
    TheCardRow,
    Cards
  },
};
</script>
