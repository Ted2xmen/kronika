<template>
  <div>
<nav id="nav" class="navbar navbar-expand-lg   bg-nav py-4 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KRONIKA</a>
    <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
             <router-link class="nav-link" to="/">Anasayfa</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/about">Hakkında</router-link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',

}
</script>
