<template>
  <div>
    <h2 class="text-info">
      <vue-feather :type="icon"></vue-feather>
      {{ sectionTitle }}  
        <span class="badge bg-dark">
        {{ arrayLength }}
        </span>
        </h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["sectionTitle", 'arrayLength', 'icon'],
};
</script>