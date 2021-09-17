import { createStore } from "vuex";

export default createStore({
  state: {
    kronikler: [
 
      {
        id: 1,
        baslik: "Tevarih-i Ali Osman",
        yazar: "Lütfi Paşa",
        kategori: "Kronik",
        etiket: "",
        isVar: false,
        tarih: "1500",
        aciklama:
          "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
        img:
          "https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg",
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
        aciklama:
          "Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae velit voluptatem nostrum similique quae sunt totam explicabo! Eos accusamus dolorum fugiat maiores.",
        img:
          "https://cdn.islamansiklopedisi.org.tr/gorsel/Belge%20-%20Sahife/tevarih-i-al-i-osman-1.jpg",
          url1: "https://archive.org/details/evliyaelebisey01evliuoft",
          url2: "",
          url3: "",
      }
  
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
