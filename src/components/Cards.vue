<template>
  <div class="container-fluid px-5 py-4 my-3 ">
    <h1>Faydalı Siteler</h1>
    <div
      class="
        row
        gap-0
        
        row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 row-cols-xl-4
      "
    >
      <div class="col p-1 my-1  " v-for="item in 8" :key="item">
        <div class="col ">
          <div class="card bg-glass hover ">
            <div class="row">
              <div class="col-md-2">
                <img
                  src="https://arastirmanv4.vercel.app/assets/images/logos/canadian.png"
                  style="width: 45px"
                  class="card-img-top ml-5"
                  alt="duke"
                />
              </div>
              <div class="col-md-10">
                <h5 class="card-title text-warning pt-2">
                  Duke University Libraries 
             
                </h5>
              </div>
            </div>
            <div class="card-body pt-1">
              <p class="card-text card-font  pb-1">
                Duke University Libraries, Ottoman-Turkish 50karakter 
              </p>
           
            </div>
          </div>
        </div>
      </div>

     
    </div>
  </div>
</template>




