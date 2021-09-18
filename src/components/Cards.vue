<template>
  <div class="container-fluid card  py-2 box-2 my-3">
    <div class="row gap-0 row-cols-2 row-cols-md-1 row-cols-sm-1 row-cols-lg-3">
      <div class="col my-1" v-for="item in 9" :key="item">
        <div class="col">
          <div class="card hover glass box-2">
            <div class="row">
              <div class="col-md-3">
                <img
                  src="https://arastirmanv4.vercel.app/assets/images/logos/canadian.png"
                  style="width: 55px"
                  class="card-img-top ml-5 "
                  alt="duke"
                />
              </div>
              <div class="col-md-9">
                <h5 class="card-title text-warning pt-4">
                  Duke University Libraries
                </h5>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text text-muted">
                Duke University Libraries, Ottoman-Turkish Literature
              </p>
              <span class="text-muted"
                ><span class="badge bg-primary">Primary</span>&nbsp;<span
                  class="badge bg-success"
                  >Success</span
                >&nbsp;<span class="badge bg-info text-light">Info</span>
                &nbsp;</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="col-4 col-lg-2">Column</div>
    <div class="col-4 col-lg-2">Column</div>
    <div class="col-4 col-lg-2">Column</div>
    <div class="col-4 col-lg-2">Column</div>
    <div class="col-4 col-lg-2">Column</div>
    <div class="col-4 col-lg-2">Column</div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>



<style scoped>
</style>