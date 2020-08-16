<template>
  <div class="home">
    <p>THIS IS HOME</p>
    <button @click="toExplore">Go To Explore Page</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
    }
  },
  methods: {
    toExplore() {
      this.$router.push('/explore');
    }
  }
};
</script>
