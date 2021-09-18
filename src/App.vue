<template>
<div class="container-fluid">
  <router-view />
  </div>
</template>





<style lang="scss">


.home {
  background-color: #ffffff;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.box-2 {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.box-1 {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

  cursor: pointer;
}

.box-1:hover {
  transform: scale(1.03);
}
</style>
