<template>
  <section id="usefulsites" class="">
    <div class="p-2 m-2 my-4">
      <Title
        icon="search"
        sectionTitle="Literatür Taraması"
      />
      <SiteCards />
    </div>
  </section>
</template>


<script>
import Title from "@/components/shared/Title.vue";
import SiteCards from "@/components/SiteCards.vue";

export default {
  components: {
    Title,
    SiteCards,
  },
};
</script>