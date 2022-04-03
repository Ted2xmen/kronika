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
        { title: "#internetsiteleri", href: "#footer" },
        { title: "#koleksiyonlar", href: "#koleksiyonlar" },
        { title: "#yazmaeserler", href: "#yazmaeserler" },
        { title: "#kitaplar", href: "#s3uggest" },
        { title: "#müzeler", href: "#foo6ter" },
      ],
    };
  },
};
</script>