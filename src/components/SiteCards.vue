<template>
  <div class="container">
    <div
      class="
        row
        gap-0
        row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3
      "
    >
      <div
        class="mx-auto p-1 my-1"
        v-for="item in this.$store.getters.library"
        :key="item"
      >
        <li
          class="
            hover
            rounded
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          {{ item.title }}
          <img :src="item.iconuri" width="30" class="rounded" alt="" />
        </li>

        <!-- <img :src="item.iconuri" width="30" class="rounded me-2" alt="" />
        <span>
          {{ item.title }}
        </span> -->
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "SiteCards",
};
</script>