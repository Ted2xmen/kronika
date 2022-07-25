<template>
  <div>
<nav id="nav" class="navbar navbar-expand-lg bg-dark py-3 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">KRONIKA</a>
    <button class="navbar-toggler bg-light text-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">=</span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav" v-for="nav in this.$store.state.navLinks" :key="nav.href">
        <li class="nav-item">
             <router-link class="nav-link" :to="nav.href">{{nav.title}}</router-link>
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
