<template>
        <section id="yazmaeserler" class="">
          <div class="py-4">
            <Title class=""  sectionTitle="Yazma Eserler" />
            <Slider />
          </div>
      </section>
</template>

<script>
import Title from "@/components/shared/Title.vue";
import Slider from "@/components/Slider.vue";

export default {
    components: {
        Title, 
        Slider
    }
    
}
</script>