<template>
  <div class="container">
    <div
      class="
        row
        gap-0
        row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3
      "
    >
      <div
        class="mx-auto p-1 my-1"
        v-for="item in this.$store.getters.library"
        :key="item"
      >
        <PanelCard :url="item.uri" :title="item.title" :icon="item.iconuri" />
      </div>
    </div>
  </div>
</template>




<script>
import PanelCard from "@/components/shared/PanelCard.vue";
export default {
  name: "Libs",
  components: {
    PanelCard,
  },
};
</script>



