<template>
  <div id="app">
    <div id="nav">
      <div id="logo-area">
        <p id="logo-title">FitFriends</p>
        <img src="../public/logo.jpg" alt="logo">
      </div>
      <div id="nav-links-and-profile">
        <button type="button" class="btn btn-outline-dark" @click="toHome()">Home</button>
        <button type="button" class="btn btn-outline-dark" @click="toExplore()">Explore</button>
        <button type="button" class="btn btn-outline-dark" @click="toCreate()">Create</button>
        <p>Welcome {{ loggedUser }}</p>
        <img src="../public/arrow.png" alt="drop down arrow" @click="showUsers()">
      </div>
      <div id="user-menu" v-if="showDropDown">
        <button type="button" class="btn btn-outline-dark" @click="switchUsers('5f387cc2cd4be563940f57de')">Andrea</button>
        <button type="button" class="btn btn-outline-dark" @click="switchUsers('5f391d85cda06e001f39cca6')">David</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropDown: false,
      loggedUser: null
    }
  },
  mounted() {
    this.loggedUser = localStorage.getItem('userId');
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toCreate() {
      this.$router.push('/create');
    },
    toExplore() {
      this.$router.push('/explore');
    },
    showUsers() {
      this.showDropDown = !this.showDropDown;
    },
    switchUsers(id) {
      localStorage.setItem('userId', id);
      this.showDropDown = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo-title {
  font-size: 30px;
  margin: 20px 0 10px 60px;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#logo-area {
  display: flex;
  flex-direction: row;
}

#logo-area img {
  height: 50px;
  margin-top: 10px;
}

#nav-links-and-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
}

#nav-links-and-profile button {
  height: min-content;
  margin: 0px 5px 5px 5px;
}

#nav-links-and-profile img:hover {
  height: 18px;
  margin-left: 7px;
}

#nav-links-and-profile img {
  height: 15px;
  margin-left: 10px;
  margin-top: 8px;
}

#nav-links-and-profile p {
  height: 20px;
  margin-left: 15px;
  margin-top: 5px;
}

#user-menu {
  position: absolute;
  top: 60px;
  right: 20px;
}

#user-menu button {
  margin-left: 5px;
  margin-right: 5px;
}

::-webkit-scrollbar {
  width: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #c2c2c2; 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a3a3a3; 
}
</style>
