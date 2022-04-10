import { createStore } from "vuex";
export default createStore({
  state: {
    navLinks: [
      { title: "Anasayfa", href: "/" },
      { title: "Hakkında", href: "/about" },
      // { title: "Blog", href: "/blog" },
    ],
    secondNav: [
      { title: "#kronikler", href: "#kronikler" },
      { title: "#literatür", href: "#usefulsites" },
      { title: "#koleksiyonlar", href: "#koleksiyonlar" },
      { title: "#yazmaeserler", href: "#yazmaeserler" },
    ],
    searchInput: "",
    localData: [],
    bookData: [], // from app.vue
    sliderBooks: [
      {
        img:
          "http://ekitap.yek.gov.tr/store/makethumb.aspx?file=2e7b9646-bee3-4e52-9ebd-48cb20b07b09.jpeg%20&intSize=250",
      },
      {
        img:
          "http://ekitap.yek.gov.tr/store/makethumb.aspx?file=35cd76ef92-7968-4257-ae7f-51ce9b96da22.jpg%20&intSize=250",
      },
      {
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/78fb5612-eaaa-472b-aad8-b37b2d71c4ef.jpg",
      },
      {
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/358f58d4-f7aa-4213-b1c1-47111ed55a33.jpeg",
      },
      {
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/358f58d4-f7aa-4213-b1c1-47111ed55a33.jpeg",
      },
    ],
  },

  getters: {
    // from firebase
    justKronik: (state) => {
      return state.bookData.filter((item) => item.category === "Kronik");
    },

    // from firefox bookmarks
    dictionary: (state) => {
      return state.localData[4];
    },
    blogs: (state) => {
      return state.localData[2];
    },
    library: (state) => {
      return state.localData[1];
    },
    literatur: (state) => {
      return state.localData[3];
    },
  },

  mutations: {},
  actions: {},
  modules: {},
});
