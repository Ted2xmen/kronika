<template>
  <div>
    <div class="container-fluid glass-1 px-5 py-4 my-3 mx-auto">

      <div class="col-6 mx-auto">
        <TheInfo />
        <div class="input-group mb-1 mt-3 pt-4">
          <Search />
        </div>
        <div class="py-3 my-3" v-if="this.$store.state.searchInput.length > 0">
          <h3 class="text-white">
            Listeleniyor
            <span class="badge bg-dark">{{ filteredBooks.length }}</span>
          </h3>
        </div>
        <div class="container" v-if="filteredBooks.length === 0">
          <div class="alert alert-danger py-5 my-5" role="alert">
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

              <div class="alert alert-success" role="alert">
                {{ modals.reklamTwo }}
              </div>

              <div class="modal-body">
                <div class="card profile-card-5">
                  <div class="card-img-block">
                    <img
                      class="card-img-top box-1"
                      :src="modals.imageUrl"
                      alt="Card image cap"
                      style="
                        width: 280px !important;
                        height: 380px !important;
                        object-fit: cover;
                        object-position: 1px 1px;
                      "
                    />
                  </div>

                  <div class="card-body">
                    <h5 class="card-title">{{ modals.title }}</h5>
                    <h6 class="card-title">
                      {{ modals.author }}
                      <span>
                        <a
                          :href="modals.downloadUrl"
                          class="btn btn-danger btn-sm"
                        >
                          İndir</a
                        >

                        <!-- <a :href="modals.downloadUrl"
                          class="btn btn-warning ms-2 btn-sm"
                          >PDF</a> -->
                      </span>
                    </h6>

                    <span>{{ modals.year }}</span>

                    <p class="card-text">
                      {{ modals.summary }}
                    </p>
                    <div class="alert alert-primary" role="alert">
                      {{ this.$store.state.reklamOne }}
                    </div>
                    <p class="card-text">
                      {{ modals.description }}
                    </p>

                    <div class="alert alert-danger" role="alert">
                      {{ this.$store.state.reklamThree }}
                    </div>
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
import TheInfo from "./TheInfo.vue";
import Search from "./Search.vue";

export default {
  name: "TheBooks",
  components: {
    TheInfo,
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
      // console.log(item);
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

<style scoped>
.profile-card-5 {
  margin-top: 20px;
  padding-left: 20px;
}
.profile-card-5 .btn {
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 12px;
  padding: 7px 20px;
}
.profile-card-5 .card-img-block {
  width: 81%;
  margin: 0 auto;
  position: relative;
  top: -30px;
}
</style>