<template>
  <div class="row mx-auto d-flex justify-items-center gap-1">
    <div class="col-sm-3 hover" v-for="item in 3" :key="item">
      <div  class="card box-4 my-1 pt-1 bg-dark text-white">
        <div class="card-body">
          <h6 class="card-title">Special title treatment</h6>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary btn-sm">Kronik Arama Bölümü</a>
        </div>
      </div>
    </div>
  </div>
</template>






<style scoped>
img {
  width: 50%;
  /* height: 300px */
}
.container {
  margin: 5px auto;
}

.image {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.image .overlay {
  position: absolute;
  bottom: 0;
  padding-left: 25px;
  padding-top: 15px;
  width: 70%;
  color: white;
  font-size: 20px;
  z-index: 5;
}

.image .overlay::before {
  content: "";
  background: rgb(34, 30, 30);
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  bottom: -150px;
  z-index: -2;
  opacity: 0.5;
  transition: all 0.3s ease-out;
}

.image:hover .overlay {
  color: black;
}

.image:hover .overlay::before {
  bottom: 0px;
}
</style>