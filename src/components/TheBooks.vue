<template>
  <div>
    <div class="container px-5 py-4 my-3 mx-auto">
      <div class="col-6 mx-auto">
        <div class="input-group mb-1 mt-2 pt-3">
          <Search />
        </div>
        <Alert
          v-if="this.$store.state.searchInput.length > 0"
          :length="filteredBooks.length"
          msg="Listeleniyor"
        />
        <Alert
          v-if="filteredBooks.length === 0"
          msg="Aradığınız Eser Bulunamadı"
        />
      </div>

      <div class="row py-5">
        <div
          class="col-md-4"
          v-for="(item, index) in filteredBooks"
          :key="index"
        >
          <a
            class="link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="showModal(item)"
          >
            <BookCard
              :title="item.title"
              :image="item.imageUrl"
              :author="item.author"
            />
          </a>
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

              <ModalBody
                :author="modals.author"
                :title="modals.title"
                :year="modals.year"
                :url="modals.downloadUrl"
                :summary="modals.summary"
              />
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
import BookCard from "./shared/BookCard.vue";
import Alert from "./shared/Alert.vue";
import ModalBody from "./shared/ModalBody.vue";

export default {
  name: "TheBooks",
  components: {
    Search,
    BookCard,
    Alert,
    ModalBody,
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
        const newSearchInput = item.author + item.title;
        return newSearchInput
          .toLowerCase()
          .includes(this.$store.state.searchInput.toLowerCase());
      });
    },
  },
};
</script>


