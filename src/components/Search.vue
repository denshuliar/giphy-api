<template>
  <div class="search">
    <input type="text" v-model="query" @input="handleSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    handleSearch() {
      this.$emit("SearchRequested", this.query);
    }
  }
};
</script>


<style>
.search {
  display: flex;
  justify-content: space-between;
}
.search input {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
  outline: none;
  display: flex;
  position: absolute;
  left: 30%;
  top: 5%;
}
.search button {
  padding: 5px 15px;
  border: 1px solid #ccc;
  background-color: #4183c4;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
}
@media screen and (max-width: 721px) {
  .search input {
    width: 400px;
    margin-top: 50px;
  }
}
</style>
