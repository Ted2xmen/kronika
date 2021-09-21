<template>



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
                {{ modals.reklamTwo }}x
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
</template>


<script>
export default {
    data () {
        return{
        modals: this.$store.state.modalData
        }
    }
}
</script>