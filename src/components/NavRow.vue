<template>
  <div class="col">
    <Button
      v-for="item in nawRow"
      :key="item.href"
      :buttonTitle="item.title"
      divId="#footer"
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
        { title: "#kronikler", href: "#kronik" },
        { title: "#internetsiteleri", href: "#footer" },
        { title: "#koleksiyonlar", href: "#5" },
        { title: "#yazmaeserler", href: "#13" },
        { title: "#kitaplar", href: "#s3uggest" },
        { title: "#müzeler", href: "#foo6ter" },
      ],
    };
  },
};
</script>