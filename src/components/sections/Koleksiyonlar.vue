<template>
  <section id="koleksiyonlar">
    <div>
      <Title icon="book" class="py-2" sectionTitle="Koleksiyonlar" />
      <Collections />
    </div>
  </section>
</template>

<script>
import Title from "@/components/shared/Title.vue";
import Collections from "@/components/Collections.vue";

export default {
  components: {
    Title,
    Collections,
  },
};
</script>