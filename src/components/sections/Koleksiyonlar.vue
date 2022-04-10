<template>
  <section id="koleksiyonlar">
    <div>
      <Title icon="paperclip" class="py-2" sectionTitle="Koleksiyonlar" />
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