<template>
    <div class="row  mx-auto d-flex justify-items-center gap-0 py-2">

  <!-- <div class="col-sm-6 py-2 hover" v-for="item in 1" :key="item">
    <div class="card box-4  my-1 pt-1 bg-dark text-white ">
      <div class="card-body  ">
        <h6 class="card-title">Special title treatment</h6>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <a href="#" class="btn btn-primary btn-sm">Kronik Arama Bölümü</a> 
      </div>
    </div>
  </div> -->

          <div class="  col-lg-4 col-md-6 col-sm-10 py-1" v-for="i in 6" :key="i">
            <div class="image  "> <img src="https://pbs.twimg.com/profile_images/446268872031612929/F9WDwP7F_400x400.jpeg" alt="">
                <div class="overlay ">
                    <p><a class="text-white" href="http://www.enginozendes.com/en/homepage/"> Engin Özendes</a>{{i}}</p>
                    <h6 class="text-white">Fotoğraf Tarihçisi, Küratör</h6>
                  
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
    margin: 5px auto
}

.image {
    position: relative;
    width: 100%;
    overflow: hidden
}

.image .overlay {
    position: absolute;
    bottom: 0;
    padding-left: 25px;
    padding-top: 15px;
    width: 70%;
    color: white;
    font-size: 20px;
    z-index: 5
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
    transition: all 0.3s ease-out
}

.image:hover .overlay {
    color: black
}



.image:hover .overlay::before {
    bottom: 0px
}



</style>