<template>
  <a :href="url" target="_blank" class="link rounded-3">
    <li
      class="
      bg-primary bg-opacity-75
        text-white
        hover
        rounded-4
        list-group-item
        d-flex
        justify-content-start
        align-items-center">
      <img :src="icon" width="40" height="40" class="rounded-3 me-2" :alt="title" />
      {{ title }}
    </li>
  </a>
</template>

<script>
export default {
  name: "PanelCard",
  props: ["title", "icon", "url"],
};
</script>