<template>
  <div>
    <div class="container-fluid px-5 py-4 my-3 mx-auto">
      <div class="col-6 mx-auto">
        <div class="input-group mb-1 mt-2 pt-3">
          <Search />
        </div>
        <div class="py-3 my-3" v-if="this.$store.state.searchInput.length > 0">
          <h3 class="text-dark text-center">
            Listeleniyor
            <span class="badge bg-dark">{{ filteredBooks.length }}</span>
          </h3>
        </div>
        <div class="container" v-if="filteredBooks.length === 0">
          <div class="alert alert-danger py-2 my-2" role="alert">
            <b>Aradığınız eser bulunamadı.</b>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-4 mt-4 py-4"
          v-for="(item, index) in filteredBooks"
          :key="index"
        >
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-3">
                <img
                  width="150"
                  :src="item.imageUrl"
                  :alt="item.title"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ item.author }}
                    <small class="text-muted"> {{ item.year }}</small>
                  </h5>

                  <h6 class="card-title">{{ item.title }}</h6>
                  <p class="card-text">{{ item.summary.slice(0, 120) }}...</p>
                  <p class="card-text"></p>
                  <a
                    class="btn btn-sm btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    @click="showModal(item)"
                  >
                    Detay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal -->

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <b>Kronika.org</b> : {{ modals.title }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body bg-glass">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">{{ modals.author }}</h3>
                    <h5 class="card-title ml-5">
                      {{ modals.title }}
                    </h5>
                    <span>{{ modals.year }}</span>

                    <div>
                      <a
                        :href="modals.downloadUrl"
                        target="_blank"
                        class="btn btn-danger btn-sm"
                      >
                        Dosyaya Git</a
                      >
                    </div>

                    <p class="card-text">
                      {{ modals.summary }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- modal -->
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "TheBooks",
  components: {
    Search,
  },
  data() {
    return {
      modals: {},
    };
  },
  methods: {
    showModal(item) {
      this.modals = item;
    },
  },

  computed: {
    filteredBooks() {
      return this.$store.getters.justKronik.filter((item) => {
        const birlestirdim = item.author + item.title;
        return birlestirdim
          .toLowerCase()
          .includes(this.$store.state.searchInput.toLowerCase());
      });
    },
  },
};
</script>


