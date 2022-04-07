<template>
  <div class="about">
    <TheNavbar />

    <div class="container py-5">
      <h2>Kronika.org</h2>
      <h4 class="gradient">Kronika</h4>
      <p class="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi
        animi, reiciendis vitae labore fuga neque quos, asperiores commodi
        accusantium voluptatibus aperiam dolorem nihil aliquid distinctio
        adipisci eos cum facere nam rerum rem! Eum omnis minima repudiandae nam
        atque deleniti.
             </p>
          <div>
            <ul>
              <li v-for="(item, i) in this.$store.getters.justLib" :key="i">
                <p> {{item.title}} </p>
                <a :href="item.uri">URL</a>
                <img :src="item.iconuri" width="30" alt="">

              </li>
            </ul>
          </div>

 
    </div>
    <TheFooter v-if="false" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "About",
  components: {
    TheNavbar,
    TheFooter,
  },
};
</script>