<template>
  <div>
    <h2 class="text-info">{{ sectionTitle }}  
        <span class="badge bg-dark">
        {{ arrayLength }}
        </span></h2>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["sectionTitle", 'arrayLength'],
};
</script>