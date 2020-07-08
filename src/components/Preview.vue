<template>
  <div>
    <ul>
      <li v-for="gif in gifs">
        <img :src="gif.images.fixed_height.url" />
        <div class="share" v-if="webShareApiSupported">
          <button class="share_text" @:click="shareViaWebShare">Share it</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["gifs"]
};
</script>


<style>
li {
  list-style: none;
  float: left;
  margin: 20px;
}
.share {
  text-align: center;
  background-color: transparent;
  position: relative;
  bottom: 31px;
  width: 40%;
  z-index: 3;
  margin: 0;
}
.share_text {
  width: 100%;
  height: 100%;
  outline: none;
  background-color: #48a9c5;
  border: none;
  padding: 6px 8px;
}
.share_text:hover {
  background-color: #005670;
  color: white;
  transition: 0.3s all ease;
}
</style>
