<template>
   <div
            class="card border border-danger bg-dark text-white rounded mb-3"
            style="max-width: 540px"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  width="120"
                  height="170"
                  :src="image"
                  :alt="title"
                  class="hover rounded"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ author }}</h5>
                  <h6 class="card-title">{{ title }}</h6>
                  <a
                    class="btn btn-sm btn-outline-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    @click="modal"
                  >
                    Detay
                  </a>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: "BookCard",
  props: ["title", "author", "image"],
  
};
</script>