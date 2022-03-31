<template>
  <button
    class="btn btn-outline-dark m-2 btn-xs"
    :href="divId"
    @click.prevent="scrollTo(divId)">
    {{ buttonTitle }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonTitle", "divId"],
  methods: {
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>