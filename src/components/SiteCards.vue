<template>
  <div class="container-fluid">
    <div
      class="
        row
        gap-0
        row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-4
      ">
      <div
        class="col p-1 my-1"
        v-for="item in this.$store.getters.justWeb"
        :key="item">
        <div class="col">
          <div class="card hover morder radius">
            <div class="row">
              <div class="col-md-3">
                <img
                  :src="item.imageUrl"
                  style="width: 55px"
                  class="m-1 radius card-img-top ml-5"
                  alt="..."
                />
              </div>
              <div class="col-md-9">
                <a
                  :href="item.downloadUrl"
                  class="card-title text-warning pt-4"
                >
                  {{ item.title }}</a
                >
              </div>
            </div>
            <div class="card-body">
              <p class="card-text text-muted">
                {{ item.summary.slice(0, 100) }}...
              </p>
              <span class="text-muted"
                ><span class="badge bg-primary">Primary</span>&nbsp;<span
                  class="badge bg-success"
                  >Success</span
                >&nbsp;<span class="badge bg-info text-light">Info minfo</span>
                &nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "SiteCards",
};
</script>