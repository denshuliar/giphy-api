<template>
  <div id="app">
    <div class="container">
      <div class="top-line">
        <a href="https://giphy.com/">
          <img src="https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif" class="logo" />
        </a>
        <search v-on:SearchRequested="handleSearch"></search>
      </div>
      <p class="not-found" v-if="isLoading">
        <img src="https://media.giphy.com/media/3AMRa6DRUhMli/giphy.gif" />
      </p>
      <p class="not-found" v-if="isNotSearch">
        <img src="https://media.giphy.com/media/YyKPbc5OOTSQE/giphy.gif" alt />
      </p>
      <div class="wrapper" id="wrapper" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <preview :gifs="gifs"></preview>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Preview from "./components/Preview.vue";

export default {
  name: "app",
  components: { Search, Preview },
  data() {
    return {
      busy: false,
      data: [],
      isLoading: true,
      isNotSearch: false,
      gifs: []
    };
  },
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    },
    onScroll(event) {
      var wrapper = event.target,
        list = wrapper.firstElementChild;

      var scrollTop = wrapper.scrollTop,
        wrapperHeight = wrapper.offsetHeight,
        listHeight = list.offsetHeight;

      var diffHeight = listHeight - wrapperHeight;
      console.log(wrapperHeight + " / " + scrollTop);
      if (diffHeight <= scrollTop) {
        this.doQuery(urlSc);
      }
    },
    doQuery(url) {
      fetch(url)
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.gifs = res.data;
          this.isLoading = false;
          this.isNotSearch = false;
          if (this.gifs.length < 1) {
            this.isNotSearch = true;
          }
        });
    },
    handleSearch(query) {
      this.gifs = [];
      this.isLoading = true;
      this.isNotSearch = false;
      const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=GAJgUzskIH0MeIsl98o27oL1rGwBg3pc`;
      this.doQuery(url);
    }
  },
  created() {
    const url =
      "http://api.giphy.com/v1/gifs/trending?api_key=GAJgUzskIH0MeIsl98o27oL1rGwBg3pc";
    this.doQuery(url);
  },
  computed: {
    webShareApiSupported() {
      return navigator.share;
    }
  },
  shareViaWebShare() {
    navigator.share({
      title: "Название для совместного использования",
      текст: "Text для совместного использования",
      url: "URL для совместного использования"
    });
  }
};
</script>







<style>
body {
  background-color: rgb(18, 18, 18);
  color: rgb(255, 255, 255);
  font-family: interface, "Helvetica Neue", helvetica, sans-serif;
  font-size: 16px;
  font-weight: normal;
  height: 100%;
  letter-spacing: 0px;
  min-height: 500px;
  overflow-y: scroll;
  text-align: left;
  min-width: 1040px;
  vertical-align: baseline;
  line-height: unset;
  margin: 0px auto;
  padding: 0px;
  border-width: 0px;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  width: 1100px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  overflow: hidden;
}
.container ul {
  overflow: hidden;
  padding: 0;
  margin-left: -20px;
  margin-right: -20px;
}
.container ul li {
  padding-left: 0;
}
.top-line img {
  width: 200px;
  height: 80px;
}
.top-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.not-found {
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
}
</style>
