<template>
  <div>
    <div class="container-fluid glass-1 px-5 py-4 my-3 mx-auto">
      <h1>Osmanlı Kronikleri</h1>
      <div class="col-6 mx-auto">
        <div class="input-group mb-1 mt-3 pt-4">
          <input
            v-model="searchInput"
            type="text"
            class="form-control"
            placeholder="Yazara veya başlığa göre ara..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>

        <div
          class="alert alert-info py-3 my-3"
          role="alert"
          v-if="searchInput.length > 0"
        >
          Kayıtlı toplam {{ this.$store.state.bookData.length }} adet eser var.
          <br />
          {{ filteredBooks.length }} tanesi listeleniyor.
        </div>

        <div class="container" v-if="filteredBooks.length === 0">
          <div class="alert alert-danger py-5 my-5" role="alert">
            Aradığınız eser bulunamadı.
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-3 mt-4 py-4"
          v-for="(item, index) in filteredBooks"
          :key="index"
        >
          <div
            class="card profile-card-5 book-color"
            style="border-radius: 25px"
          >
            <div class="card-img-block">
              <img
                class="img-fluid card-img-top box-1"
                :src="item.imageUrl"
                :alt="item.title"
                style="
                  width: 280px !important;
                  height: 380px !important;
                  object-fit: cover;
                  object-position: 1px 1px;
                  border-radius: 25px;
                  margin-left: 10%;
                "
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">{{ item.title }}</h4>
              <h5 class="card-title">
                {{ item.author }}
              </h5>

              <h6>{{ item.year }}</h6>

              <div class="d-flex justify-content-start pt-1">
                <span class="ms-2 badge bg-info text-dark">{{
                  item.category[1]
                }}</span>
                <span class="ms-2 badge bg-light text-dark">{{
                  item.category[0]
                }}</span>
              </div>

              <p class="card-text my-4">{{ item.summary.slice(0, 150) }}...</p>
              <span><img src="src\assets\archive.png" alt="" /></span>
              <a :href="item.downloadUrl" target="_href" class="btn btn-warning"
                >İndir</a
              >
              <button
                type="button"
                class="btn btn-success ms-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="showModal(item)"
              >
                Detaylı Bilgi
              </button>
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
                {{ this.$store.state.reklamTwo }}
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
                          :href="modals.sourceUrl"
                          class="btn btn-danger btn-sm"
                        >
                          Kaynak</a
                        >
                        <a
                          :href="modals.downloadUrl"
                          class="btn btn-warning ms-2 btn-sm"
                          >PDF</a
                        >
                      </span>
                    </h6>
                    <span>{{ modals.year }}</span>
                    <!-- <span class="ms-2 badge bg-info text-dark">{{modals.category[1]}}</span>
                <span class="ms-2 badge bg-light text-dark">{{modals.category[0]}}</span> -->

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
export default {
  name: "TheBooks",
  data() {
    return {
      deneme: "ted",
      modals: {},
      filteredK: [],
      searchInput: "",
    };
  },
  methods: {
    showModal(item) {
      this.modals = item;
      console.log(item);
    },
  },

  computed: {
    filteredBooks() {
      return this.$store.state.bookData.filter((item) => {
        const birlestirdim = item.author + item.title;
        return birlestirdim
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.profile-card-5 {
  margin-top: 20px;
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