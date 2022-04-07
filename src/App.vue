<template>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      myData: {},
    };
  },

  methods: {



  getLocalData() {
      axios
        .get(
          "db.json"
        )
        .then((response) => {
          var data = response.data;
          console.log(data.children[1].children)
          this.$store.state.localData.push(data.children[1].children)

          // for (let key in data) {
          //   var n = data[key];
          //   this.$store.state.localData.push(n);
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getBookData() {
      axios
        .get(
          "https://json-5ff41-default-rtdb.europe-west1.firebasedatabase.app/users.json"
        )
        .then((response) => {
          var data = response.data;

          for (let key in data) {
            var newData = data[key];
            this.$store.state.bookData.push(newData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.getBookData();
        this.getLocalData();

  },
};
</script>





<style lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #d1d9e0;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
