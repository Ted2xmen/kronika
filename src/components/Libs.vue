<template>
  <div class="row mx-auto d-flex justify-items-center mx-auto gap-2 py-4">
    <div class="col">
      <div class="row">
        <div class="col-3 ">
          <div class="list-group list-group-flush  " id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action " 
              id="list-home-list"
              data-bs-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="list-home"
              >Dijital Kütüphaneler</a
            >
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
              >Archive.org</a
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
            <a
              class="list-group-item list-group-item-action"
              id="list-settings-list"
              data-bs-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="list-settings"
              >Haritalar</a
            >
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active "
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div class="row row-cols-3" >
                <div class="col pt-1" v-for="item in 6" :key="item">
                  <div class="alert alert-primary" role="alert">
                   <img src="https://arastirmanv4.vercel.app/assets/images/logos/canadian.png" width="25" class="rounded" alt=""> World Digital Library
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            ></div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >ss</div>
            <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.active {
  background-color: white !important;
  color: black !important;
}

.show {
  background-color: white !important;
}

.list-group-item {
  border-color: green !important;
}
</style>

