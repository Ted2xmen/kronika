<template>
       <input
            v-model="this.$store.state.searchInput"
            type="text"
            class="form-control"
            placeholder="Yazara veya başlığa göre ara..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
</template>