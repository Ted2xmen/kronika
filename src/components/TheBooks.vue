<template>
  <div>
    <div class="container-fluid glass-1 px-5 py-4 my-3 mx-auto">
      <h1>Osmanlı Kronikleri</h1>
      <div class="col-6 mx-auto">
           <TheInfo/>
        <div class="input-group mb-1 mt-3 pt-4">
           <Search/>
          
        </div>

        <div
          class=" py-3 my-3"
          v-if="this.$store.state.searchInput.length > 0">
          <h3 class="text-white">Listeleniyor <span class="badge bg-dark">{{ filteredBooks.length }}</span></h3>
        </div>
        <div class="container" v-if="filteredBooks.length === 0">
          <div class="alert alert-danger py-5 my-5" role="alert">
            <b>Aradığınız eser bulunamadı.</b>
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
                  width: 200px !important;
                  height: 300px !important;
                  object-fit: cover;
                  object-position: 1px 1px;
                  border-radius: 25px;
                  
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
        <span class="text-info"> {{modals}} </span>
<span class="text-warning"> {{this.$store.state.modalData}} </span>
        <!-- modal -->

         <Modals/>
       
        <!-- modal -->
      </div>
    </div>
  </div>

</template>

<script>
import TheInfo from "./TheInfo.vue";
import Search from "./Search.vue";
import Modals from "./Modals.vue";


export default {
  name: "TheBooks",
  components: {
    TheInfo,
    Search,
    Modals
  },
  data() {
    return {

      modals: {},
     

    };
  },
  methods: {
   showModal(item) {
   this.modals = item
    this.$store.state.modalData.push(item);
    console.log(item);
    },





  },

  computed: {

 



    filteredBooks() {
      return this.$store.state.bookData.filter((item) => {
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