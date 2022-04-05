<template>
    <section id="kutuphaneler">
  <div>
    <Title icon="book" class="py-1" sectionTitle="" />
    <Libs />
  </div>
</section>
</template>


<script>
import Title from "@/components/shared/Title.vue";
import Libs from "@/components/Libs.vue";

export default {
    components: {
        Title, 
        Libs
    }
    
}
</script>