<template>
  <div class="row row-cols-1 row-cols-md-3 g-3">




    <div class="col" v-for="item in 6" :key="item">
      <div class="card hover morder">
        <div class="row">
          <div class="col-md-3">
            <img
              src="https://arastirmanv4.vercel.app/assets/images/logos/archive.png"
              style="width: 75px"
              class="card-img-top blur m-1 ml-5"
              alt="archive"
            />
          </div>
          <div class="col-md-9">
            <h5 class="card-title text-warning pt-4">Internet Archive</h5>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text text-muted">
            a non-profit library of millions of free books, movies, software,
            music, websites, and more
          </p>
          <span class="text-muted"
            ><span class="badge bg-primary">Primary</span>&nbsp;<span
              class="badge bg-success"
              >Success</span
            >&nbsp;<span class="badge bg-info text-light">Info</span
            >&nbsp;</span
          >
        </div>
      </div>
    </div>



  </div>
</template>


<style scoped>

.containerx {
     padding: 100px 0;
}

.avatar {
  width: 30px;
  border-radius: 50%;
}
.avatar-bordered {
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  border: white 1px solid;
}
.avatar-large {
  width: 50px;
}
</style>

