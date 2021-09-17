<template>
  <div>
<div class="container-fluid">
    <div class="row py-4">

    <div class="col-md-3 mt-4 py-4" v-for="item in items" :key="item">
      <div class="card profile-card-5">
        <div class="card-img-block">
          <img
            class="card-img-top box-1"
            src="https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg"
            alt="Card image cap"
          />
        </div>
        <div class="card-body ">
          <h5 class="card-title">{{item.name}}</h5>
          <h6 class="card-title">Lütfi Paşa <span class="badge bg-danger">PDF</span></h6>  
          <span>{{item.yayinTarihi}}</span> 
          <span class="ms-2 badge bg-warning text-dark">Warning</span>
          <span class="ms-2 badge bg-warning text-dark">Warning</span>
          <p class="card-text my-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. 
          </p>
          <button class="btn btn-info me-2 ">sad</button>
           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Detaylı Bilgi
</button>
        </div>
      </div>




<!-- modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <div class="card-body ">
          <h5 class="card-title">{{item.name}}</h5>
          <h6 class="card-title">Lütfi Paşa <span class="badge bg-danger">PDF</span></h6>  
          <span>{{item.yayinTarihi}}</span> 
          <span class="ms-2 badge bg-warning text-dark">Warning</span>
          <span class="ms-2 badge bg-warning text-dark">Warning</span>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. 
          </p>
          <button class="btn btn-info me-2 ">sad</button>
        
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








<!-- Modal -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <div class="card-body ">
          <h5 class="card-title">Tevarih-i Ali Osman</h5>
          <h6 class="card-title">Lütfi Paşa <span class="badge bg-danger">PDF</span></h6>  
          <span>1922</span> 
          <span class="ms-2 badge bg-warning text-dark">Warning</span>
          <span class="ms-2 badge bg-warning text-dark">Warning</span>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores. 
          </p>
          <button class="btn btn-info me-2 ">sad</button>
           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Detaylı Bilgi
</button>
        </div>
      </div>


      </div>
      
    </div>
  </div>
</div> -->



















   </div>
</template>

<script>
export default {
  name: "TheSix",

  data () {
    return {


 items:[
        {
          name: "Tevarih-i Ali Osman",
          yazar: "Lütfi Paşa",
          yayinevi: "Teviri",
          yayinTarihi: "2000",
          aciklama: "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
          resim: "https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg"
          },
             {
          name: "Sagopa Kajmer",
          yazar: "Kötü İnsanları Tanıma Senesi",
          yayinevi: "Teviri",
          yayinTarihi: "1922",
          aciklama: "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
          resim: "https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg"
          },
             {
          name: "Evliya Çelebi Seyahatnam ",
          yazar: "Çelebi Paşa",
          yayinevi: "Teviri",
          yayinTarihi: "1500",
          aciklama: "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
          resim: "https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg"
          },
      ]


    }
  }














};




</script>

<style scoped>






/*Profile Card 5*/
.profile-card-5{
    margin-top:20px;
}
.profile-card-5 .btn{
    border-radius:2px;
    text-transform:uppercase;
    font-size:12px;
    padding:7px 20px;
}
.profile-card-5 .card-img-block {
    width: 81%;
  
    margin: 0 auto;
    position: relative;
    top: -20px;
    
}
.profile-card-5 .card-img-block img{
    border-radius:5px;
    box-shadow:0 0 10px rgba(0,0,0,0.63);
}
.profile-card-5 h5{
    color:#4E5E30;
    font-weight:600;
}
.profile-card-5 p{
    font-size:14px;
    font-weight:300;
}
.profile-card-5 .btn-primary{
    background-color:#4E5E30;
    border-color:#4E5E30;
}
</style>