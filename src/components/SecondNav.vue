<template>
  <div class="col">
    <Button
      v-for="item in this.$store.state.secondNav"
      :key="item.href"
      :buttonTitle="item.title"
      :divId="item.href"
    />
  </div>
</template>

<script>
import Button from "@/components/shared/Button.vue";

export default {
  name: "SecondNav",
  components: {
    Button,
  },
};
</script>