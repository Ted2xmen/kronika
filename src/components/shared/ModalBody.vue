<template>
  <div class="modal-body bg-glass">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ author }}</h3>
        <h5 class="card-title ml-5">
          {{ title }}
        </h5>
        <span>{{ year }}</span>

        <div>
          <a :href="url" target="_blank" class="btn btn-danger btn-sm">
            Dosyaya Git</a
          >
        </div>

        <p class="card-text">
          {{ summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBody",
  props: ["title", "author", "url", "summary"],
};
</script>