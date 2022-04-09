<template>
  <router-view />
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getLocalData() { // firefox
      axios
        .get("firefox.json")
        .then((response) => {
          var data = response.data;
        
          for (let key in data.children) {
            var n = data.children[key].children;
            this.$store.state.localData.push(n);
            console.log(n[0]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getBookData() { // firebase
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
