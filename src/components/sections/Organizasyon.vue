<template>
    <section id="logos">
  <div>
    <Title icon="book" class="py-2" sectionTitle="Siteler" />
    <Logos />
  </div>
</section>
</template>

<script>
import Title from "@/components/shared/Title.vue";
import Logos from "@/components/Logos.vue";

export default {
    components: {
        Title, 
        Logos
    }
    
}
</script>