<template>
  <div class="row mx-auto d-flex justify-items-center mx-auto gap-1 py-4">
    <div class="col p-2">
      <div class="row">
        <div class="col-2">
          <div class="list-group list-group-flush" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action"
              id="apps-lists"
              data-bs-toggle="list"
              href="#list-apps"
              role="tab"
              aria-controls="lists-apps"
              >Literatür</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
              >Blog Siteleri</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
              >Podcast</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-bs-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="list-messages"
              >Sözlükler</a
            >
            <!-- <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-bs-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
              >Haritalar</a
            > -->
          </div>
        </div>
        <div class="col-10">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div class="row row-cols-3">
                <div
                  class="col hover pt-1"
                  v-for="item in this.$store.getters.blogs"
                  :key="item"
                >
                  <PanelCard :url="item.uri" :title="item.title" :icon="item.iconuri" />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <div class="row row-cols-5">
                <div class="colm-md-3 pt-1 hover" v-for="item in 4" :key="item">
                  <img
                    src="https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/0f/c5/5f/0fc55f70-094a-990a-a5ef-2ac34d8f457a/mza_5502973513603401216.jpg/1000x1000bb.jpg"
                    class="img-thumbnail shadow-sm"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <div class="row row-cols-3">
                <div
                  class="col pt-1"
                  v-for="item in this.$store.getters.dictionary"
                  :key="item"
                >
                  <PanelCard :url="item.uri" :title="item.title" :icon="item.iconuri" />
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade show active"
              id="list-apps"
              role="tabpanel"
              aria-labelledby="lists-apps"
            >
              <div class="row row-cols-3">
                <div
                  class="col pt-1"
                  v-for="item in this.$store.getters.literatur"
                  :key="item"
                >
                  <PanelCard :url="item.uri" :title="item.title" :icon="item.iconuri" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PanelCard from "@/components/shared/PanelCard.vue";
export default {
  name: "Libs",
  components: {
    PanelCard,
  },
};
</script>


<style scoped>
.active {
  background-color: white !important;
  color: black !important;
}

.show {
  background-color: white !important;
}

.list-group-item {
  border-color: transparent !important;
}
</style>

