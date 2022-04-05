<template>
  <footer class="px-5 py-4 bg-nav text-white">
    <div class="row">
      <div class="col-2">
        <h5>Menu</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
           <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">İletişim</a></li>
          
        </ul>
      </div>

      <div class="col-2">
        <ul class="nav flex-column">
          <li> <img
        src="https://2.bp.blogspot.com/-befed9Id8Ag/WFlWnD4fuqI/AAAAAAAAJHE/X9mI3KzPgY4rNMKb4QwQVD0y48BX1GccwCLcB/s1000/revolvingbanner4hamse7.png"
        alt="" class="img-fluid"
      /></li>
     
        </ul>
      </div>

      <div class="col-2">
   
        <ul class="nav flex-column">
        <li><img src="https://kutuphaneden.vercel.app/assets/oner.png"  class="img-fluid" alt=""></li>
        
        </ul>
      </div>

      <div class="col-4 offset-1">
      </div>
    </div>
    <div class="d-flex justify-content-between py-2 my-2 border-top">
      <p>&copy; 2021 KRONIKA, All rights reserved. </p>
          <Button buttonTitle="Yukarı" class="bg-light text-dark" divId="#top" />
    </div>
  </footer>
</template>

<script>
import Button from "@/components/shared/Button.vue";
export default {
  name: "TheFooter",
  components: {
  Button
  },
  
}
</script>