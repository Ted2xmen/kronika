<template>
       <input
            v-model="this.$store.state.searchInput"
            type="text"
            class="form-control py-3"
            placeholder="Yazara veya başlığa göre ara..."
            aria-label="Yazara veya başlığa göre ara..."
            aria-describedby="button-addon2"
          />
          <div class="card pe-3 mx-1">
           <span class="material-icons ps-3 pt-3">search</span> 
           </div>
</template>