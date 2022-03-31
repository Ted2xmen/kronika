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
        { title: "#öneriler", href: "#suggest" },
        { title: "#iletişim", href: "#footer" },
        { title: "#kronikler", href: "#3" },
        { title: "#öneriler", href: "#5" },
        { title: "#iletişimasdasdasd", href: "#13" },
        { title: "#kronikler", href: "#kro5nik" },
        { title: "#önerilerasdasdsada", href: "#s3uggest" },
        { title: "#iletişim", href: "#foo6ter" },
      ],
    };
  },
};
</script>