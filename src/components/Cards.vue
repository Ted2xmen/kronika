<template>
  <div class="container-fluid px-5 py-4 my-3">
    <h1>Faydalı Siteler <span class="badge bg-dark">{{ this.$store.getters.justWeb.length }} </span></h1> 
 
    <div
      class="
        row
        gap-0
        row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-4">
      
      <div class="col p-1 my-1" v-for="item in this.$store.getters.justWeb" :key="item">
        <div class="col">
<a :href="item.downloadUrl" class="link" target="_blank">
          <div class="card bg-glass hover" style="border-radius: 5px;">
            <div class="row">
              <div class="col-md-2 pe-5">
                <img
                  :src="item.imageUrl"
                  style="width: 35px; height: 40px; border-radius: 5px;"
                  class="card-img-top ms-0"
                  :alt="item.title"
                />
              </div>
              <div class="col-md-10 ps-0">
                <h6 class="card-title text-warning ms-1 ps-0 pt-3">
                {{item.title}}
                </h6>
              </div>
            </div>
            <div class="card-body pt-1">
              <p class="card-text card-font mt-2">
               {{item.summary.slice(0,120)}}...
               
              </p>
            </div>
          </div>
</a>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  name: "Cards",

}
</script>