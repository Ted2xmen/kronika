<template>
        <section id="kronikler">
        <div class="p-1 m-1">
          <Title
            icon="book"
            sectionTitle="Osmanlı Kronikleri"
            :arrayLength="this.$store.getters.justWeb.length"
          />
          <TheBooks />
        </div>
      </section>
</template>


<script>
import Title from "@/components/shared/Title.vue";
import TheBooks from "@/components/TheBooks.vue";

export default {
    components: {
        Title, 
        TheBooks
    }
    
}
</script>