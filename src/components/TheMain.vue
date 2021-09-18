<template>
  <div class="mt-4">







<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://muslimheritage.com/wp-content/uploads/2019/05/muslimheritage-the-science-of-al-biruni-burini-320x198.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption bg-dark d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" v-for="(item, index) in 15" :key="index">
      <img src="https://muslimheritage.com/wp-content/uploads/2019/05/muslimheritage-the-science-of-al-biruni-burini-320x198.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption bg-dark d-none d-md-block">
        <h5>{{index}} slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  




  

  </div>
</template>