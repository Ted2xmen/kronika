<template>
  <div class="col">
    <Button
      v-for="item in nawRow"
      :key="item.href"
      :buttonTitle="item.title"
      :divId="item.href"
    />
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";

export default {
  name: "NavRow",
  components: {
    Button,
  },
  data() {
    return {
      nawRow: [
        { title: "#kronikler", href: "#kronikler" },
        { title: "#literatür", href: "#usefulsites" },
        { title: "#koleksiyonlar", href: "#koleksiyonlar" },
        { title: "#yazmaeserler", href: "#yazmaeserler" }
      ],
    };
  },
};
</script>