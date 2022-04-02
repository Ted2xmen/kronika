<template>

  
    <div class="row mx-auto d-flex justify-items-center mx-auto gap-2 py-4">
    <div class="col-md-4 border">
      Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, molestias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quaerat temporibus cupiditate dolorum quia esse libero, culpa eius sed expedita nihil dolore eaque aut laboriosam aliquid quis hic quam?    
    </div>
   <div class="col-md-7 border">
      Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, molestias! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quaerat temporibus cupiditate dolorum quia esse libero, culpa eius sed expedita nihil dolore eaque aut laboriosam aliquid quis hic quam?    
    </div>

    
  </div>
</template>

<script>

export default {
  name: "TheSuggested",
  components: { 
  }
}
</script>


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