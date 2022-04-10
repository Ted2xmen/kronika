<template>
  <a :href="url" target="_blank" class="link">
    <li
      class="
        bg-glass
        text-white
        border
        hover
        rounded
        list-group-item
        d-flex
        justify-content-start
        align-items-center">
      <img :src="icon" width="40" height="40" class="rounded me-2" alt="" />
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