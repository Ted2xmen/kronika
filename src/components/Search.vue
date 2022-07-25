<template>
  <input
    v-model="this.$store.state.searchInput"
    type="text"
    class="form-control py-3 rounded-pill border border-primary"
    placeholder="Yazara veya başlığa göre ara..."
    aria-label="Yazara veya başlığa göre ara..."
    aria-describedby="button-addon2"
  />
</template>