import { createStore } from "vuex";

export default createStore({
  state: {


    randomImage : [
    
      {id: 3 , title: "Road over the Balkan Mountain", img: "https://images.nypl.org/index.php?id=81530&t=w"},
      {id: 4 , title: "Ottoman Empire, 1870s", img: "https://images.nypl.org/index.php?id=834264&t=w"},
      {id: 5 , title: "Road over the Balkan Mountain", img: "https://images.nypl.org/index.php?id=81530&t=w"},
      {id: 6 , title: "Deneme", img: "https://images.nypl.org/index.php?id=81520&t=w"},
      {id: 7 , title: "Road over the Balkan Mountain", img: "https://images.nypl.org/index.php?id=81530&t=w"},
      {id: 9 , title: "Dignitari della corte Ottomana", img: "https://images.nypl.org/index.php?id=812348&t=w"},
      {id: 8 , title: "Road over the Balkan Mountain", img: "https://images.nypl.org/index.php?id=81530&t=w"},
      {id: 11 , title: "Mosque of Sultan Achmet", img: "https://images.nypl.org/index.php?id=81514&t=w"},
      {id: 10 , title: "View near Bucharest", img: "https://images.nypl.org/index.php?id=81514&t=w"},

    ],


    kronikler: [
 
      
      {
        id: 1,
        baslik: "Tevarih-i Ali Osman",
        yazar: "Lütfi Paşa",
        kategori: "Kronik",
        etiket: "",
        isVar: false,
        tarih: "1500",
        ozet:
          "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
         aciklama: "", 
        img:
          "https://ia600205.us.archive.org/BookReader/BookReaderImages.php?zip=/10/items/tevarihiliosma00lutfuoft/tevarihiliosma00lutfuoft_jp2.zip&file=tevarihiliosma00lutfuoft_jp2/tevarihiliosma00lutfuoft_0468.jp2&id=tevarihiliosma00lutfuoft&scale=4&rotate=0",
          url1: "https://archive.org/details/tevarihiliosma00lutfuoft",
          url2: "",
          url3: "",
      },

      {
        id: 3,
        baslik: "Tarih-i Selaniki",
        yazar: "Selaniki Mustafa Efendi",
        kategori: "Kronik",
        etiket: "",
        isVar: false,
        tarih: "1500",
        ozet:
          "Selânikî Mustafa Efendi, memuriyetleri veya üstlendiği görevlerden ziyade Kanûnî Sultan Süleyman’ın saltanatının sonlarından III. Mehmed’in saltanatının ortalarına kadar olan dönemin (971-1008/1563-1600) olaylarını içine alan tarihiyle tanınır. Onun tamamen kendi müşahedelerine dayanarak kaleme aldığı bu eseri bir bakıma hâtırat niteliği taşır ve müellifin çeşitli olaylarla ilgili kendine has yorumlarını içerir. Selânikî tarihi klasik anlamda bir vekāyi‘nâme özelliği göstermez.",
          aciklama: "", 
        img:
          "https://ia800902.us.archive.org/BookReader/BookReaderImages.php?zip=/9/items/evliyaelebisey01evliuoft/evliyaelebisey01evliuoft_jp2.zip&file=evliyaelebisey01evliuoft_jp2/evliyaelebisey01evliuoft_0694.jp2&id=evliyaelebisey01evliuoft&scale=4&rotate=0",
          url1: "https://archive.org/details/tevarihiliosma00lutfuoft",
          url2: "",
          url3: "",
      },

      {
        id: 2,
        baslik: "Evliya Çelebi Seyahatnamesi",
        yazar: "Evliya Çelebi",
        kategori: "Seyahatname",
        etiket: "",
        isVar: false,
        tarih: "2000",
        ozet:
          "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
          aciklama: "", 
        img:
          "https://ia800902.us.archive.org/BookReader/BookReaderImages.php?zip=/9/items/evliyaelebisey01evliuoft/evliyaelebisey01evliuoft_jp2.zip&file=evliyaelebisey01evliuoft_jp2/evliyaelebisey01evliuoft_0694.jp2&id=evliyaelebisey01evliuoft&scale=4&rotate=0",
          url1: "https://archive.org/details/evliyaelebisey01evliuoft",
          url2: "",
          url3: "",
      },
      {
        id: 4,
        baslik: "Evliya Çelebi Seyahatnamesi",
        yazar: "Evliya Çelebi",
        kategori: "Seyahatname",
        etiket: "",
        isVar: false,
        tarih: "2000",
        ozet:
          "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
          aciklama: "", 
        img:
          "https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg",
          url1: "https://archive.org/details/evliyaelebisey01evliuoft",
          url2: "",
          url3: "",
      },

  
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
