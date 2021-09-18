<template>
  <div>






    <div class="container-fluid">







   <div class="col-md-8 fixed">
<div class="input-group mb-1">
  <input v-model="searchInput" type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-danger" type="button" id="button-addon2">Button</button>
</div>
</div>

      <div class="row py-2">








        
        <div
          class="col-md-3 mt-4 py-4"
          v-for="(item, index) in filteredBooks"
          :key="index"
        >
          <div class="card profile-card-5">
            <div class="card-img-block">
              <img
                class="card-img-top box-1"
                src="https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg"
                alt="Card image cap"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.baslik }}</h5>
              <h6 class="card-title">
                {{ item.yazar }}
              </h6>
              <span>{{ item.tarih }}</span>
              <span class="ms-2 badge bg-warning text-dark">{{
                item.kategori
              }}</span>
              <span class="ms-2 badge bg-warning text-dark">Warning</span>
              <p class="card-text my-4">
                {{ item.ozet.slice(0,180) }}...
              </p>
              <span><img src="src\assets\archive.png" alt=""></span>
              <a :href="item.url1" class="btn btn-info">Link</a>
              <button
                type="button"
                class="btn btn-primary"
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
                  {{ modals.baslik }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="card profile-card-5">
                  <div class="card-img-block">
                    <img
                      class="card-img-top box-1"
                      src="https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg"
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{{ modals.baslik }}</h5>
                    <h6 class="card-title">
                      {{ modals.yazar }}
                      <span class="badge bg-danger">PDF</span>
                    </h6>
                    <span>{{ modals.tarih }}</span>
                    <span class="ms-2 badge bg-warning text-dark">Warning</span>
                    <span class="ms-2 badge bg-warning text-dark">Warning</span>
                    <p class="card-text">
                     {{ modals.ozet }}
                    </p>
                    
                    <a :href="modals.url1" class="btn btn-info">PDF</a>
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
  
      return this.$store.state.kronikler.filter((item) => {
        return item.baslik.toLowerCase().includes(this.searchInput.toLowerCase());
           
      });

    }
  },
};
</script>

<style scoped>
/*Profile Card 5*/
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
  top: -20px;
}
.profile-card-5 .card-img-block img {
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.63);
}
.profile-card-5 h5 {
  color: #4e5e30;
  font-weight: 600;
}
.profile-card-5 p {
  font-size: 14px;
  font-weight: 300;
}
.profile-card-5 .btn-primary {
  background-color: #4e5e30;
  border-color: #4e5e30;
}
</style>