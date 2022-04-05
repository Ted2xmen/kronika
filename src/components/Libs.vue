<template>
  <div class="row mx-auto d-flex justify-items-center mx-auto gap-2 py-4">
    <div class="col  p-4">
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
              >Yeni Eklenenler</a
            >
            <a
              class="list-group-item  list-group-item-action"
              id="list-profile-list"
              data-bs-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="list-profile"
              >Podcast</a
            >
              <a
              class="list-group-item  list-group-item-action"
              id="apps-lists"
              data-bs-toggle="list"
              href="#list-apps"
              role="tab"
              aria-controls="lists-apps"
              >Uygulamalar</a
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
                  <div class="alert alert-light border shadow-sm" role="alert">
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
            >

  <div class="row row-cols-5">
    <div class="colm-md-3 pt-1 hover" v-for="item in 4" :key="item"  >
   <img src="https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/0f/c5/5f/0fc55f70-094a-990a-a5ef-2ac34d8f457a/mza_5502973513603401216.jpg/1000x1000bb.jpg"   class="img-thumbnail shadow-sm"   alt="">
    </div>
  </div>

            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
            
            
            
               <div class="row row-cols-3" >
                <div class="col pt-1" v-for="item in 6" :key="item">
                  <div class="alert alert-light border shadow-sm" role="alert">
                   <img src="https://arastirmanv4.vercel.app/assets/images/logos/luggat.png" width="25" class="rounded" alt=""> Luggat
                  </div>
                </div>
              </div>
            
            </div>

   <div
              class="tab-pane fade"
              id="list-apps"
              role="tabpanel"
              aria-labelledby="lists-apps"
            >
            
            
        <div class="row row-cols-3" >
                <div class="col pt-1" v-for="item in 6" :key="item">
                  <div class="alert alert-light border shadow-sm" role="alert">
                   <img src="https://www.zotero.org/support/_media/logo/zotero_512x512x32.png" width="25" class="rounded" alt=""> Zotero
                  </div>
               
                </div>
              </div>
            
            
            </div>

            <!-- <div
              class="tab-pane fade"
              id="list-settings"
              role="tabpanel"
              aria-labelledby="list-settings-list"
            >haritalarar</div> -->
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
  border-color: transparent !important;
}
</style>

