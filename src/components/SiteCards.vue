<template>
  <div class="container-fluid">
    <div
      class="
        row
        gap-0
        row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-3
      ">
      <div
        class="col p-1 my-1"
        v-for="item in this.$store.getters.justLib"
        :key="item"
      >
        <a :href="item.downloadUrl" class="link text-dark">
          <div class="col hover pt-1">
            <div class="alert alert-light border border-dark" role="alert">
              <!-- <p>{{ item.summary.slice(0, 80) }}...</p> -->
              <img
                :src="item.iconuri"
                width="30"
                class="rounded me-2"
                alt=""
              />
              <span>
                {{ item.title }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "SiteCards",
};
</script>