<template>
  <div class="mt-4">

     <div class="hover hover-4 text-white rounded"><img src="https://images.nypl.org/index.php?id=81530&t=w" class="w-100" alt="">
        <div class="hover-overlay"></div>
        <div class="hover-4-content">
          <h3 class="hover-4-title text-uppercase font-weight-bold mb-0 text-white"><span class="font-weight-light"> Galeri</span></h3>
          <p class="hover-4-description text-uppercase mb-0 small">Road over the Balkan Mountain</p>
        </div>
      </div>
 
<div class="card my-2 box-1 ">
  <div class="card-body ">
    Faydalı Siteler <span class="badge bg-dark">{{ this.$store.getters.justWeb.length }} </span>
  </div>
</div>

<div class="card my-2 box-1">
  <div class="card-body ">
    İndirilebilir Osmanlı Kronikleri <span class="badge bg-dark">{{ this.$store.getters.justKronik.length }} </span>
  </div>
</div>

<div class="card my-2 box-1 ">
  <div class="card-body">
    Biyografiler <span class="badge bg-dark">2</span>
  </div>
</div>


  </div>
</template>




<style scoped>

.img1 {
  object-fit: cover;

  transform: scale(1.125);
}
.img1:hover{
  transition: .1s step-start ease-in-out;
     transform: scale(0.125);
}


    .hover {
        overflow: hidden;
        position: relative;
        padding-bottom: 60%;
    }
    
    .hover-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 90;
        transition: all 0.4s;
    }
    
    .hover img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
    }
    
    .hover-content {
        position: relative;
        z-index: 99;
    }
    
    .hover-4 img {
        width: 110%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .hover-4 .hover-overlay {
        background: rgba(0, 0, 0, 0.4);
        z-index: 90;
    }
    
    .hover-4-title {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 3rem;
        z-index: 99;
    }
    
    .hover-4-description {
        position: absolute;
        top: 2rem;
        left: 2rem;
        text-align: right;
        border-right: 3px solid #fff;
        padding: 0 1rem;
        z-index: 99;
        transform: translateX(-1.5rem);
        opacity: 0;
        transition: all 0.3s;
    }
    
    @media (min-width: 992px) {
        .hover-4-description {
            width: 50%;
        }
    }
    
    .hover-4:hover img {
        width: 100%;
    }
    
    .hover-4:hover::after {
        opacity: 1;
        transform: none;
    }
    
    .hover-4:hover .hover-4-description {
        opacity: 1;
        transform: none;
    }
    
    .hover-4:hover .hover-overlay {
        background: rgba(0, 0, 0, 0.8);
    }

</style>