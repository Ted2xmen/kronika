<template>
  <div>
    <h3 class="text-dark text-center py-2">
      <!-- <vue-feather :type="icon"></vue-feather> -->
      {{ sectionTitle }}  
        <span class="badge bg-dark">
        {{ arrayLength }}
        </span>
        </h3>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["sectionTitle", 'arrayLength', 'icon'],
};
</script>