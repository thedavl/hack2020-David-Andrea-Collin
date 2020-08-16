<template>
  <div class="home-page">
    <button type="button" class="btn btn-outline-dark" @click="toExplore">To Explore Page</button>
    <div id="savedWorkouts">
      <h2 class="savedWorkoutsTitle">Saved Workouts</h2>
      
      <div class="typeOptions">
        <button class="btn btn-outline-dark" id="all" @click="updateSelectedTypes('clear')" :class="{ active: clearAll }">Clear</button>

        <div v-for="type in workoutTypes" :key="type">
          <button class="btn btn-outline-dark" :id="type" @click="updateSelectedTypes(type)" :class="{ active: selectedTypes.includes(type) }">{{ type }}</button>
        </div>
      </div>
      <div class="timeOptions">
        <div v-for="time in workoutTimes" :key="time">
          <button class="btn btn-outline-dark" :id="time" @click="updateSelectedTime(time)" :class="{ active: selectedTime == time }">{{ time }}</button>
        </div>
      </div>
      <br>
      <p class="workouts-header">
        Workouts
      </p>
      <div class="workout-card-container">
        <div class="workout-card" v-for="workout in displayedWorkouts" :key="workout.title">
          <div class="workout-card-header">
            <p class="workout-card-title">{{ workout.title }}</p>
            <div class="tag-flex">
              <p class="tag-bubble" v-for="tag in workout.tags" :key="tag">
                {{ tag }}
              </p>
            </div>
          </div>
          <p>{{ workout.description }}</p>
          <p>Duration: {{ workout.duration }}</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {
    this.getAllWorkouts();
    // var that = this;
    // this.workoutTypes.forEach(function (workout) {
    //   that.selectedTypes.push(workout);
    // });
    // this.workoutTimes.forEach(function (time) {
    //   that.selectedTimes.push(time);
    // });
  },
  data() {
    return {
      workoutTypes: [
        "full-body",
        "calisthenics",
        "core",
        "hiit",
        "strength",
        "upper-body",
        "lower-body",
        "arms",
        "legs"
      ],
      workoutTimes: [
        5,
        10,
        15,
        20,
        25,
        30,
        45,
        60,
        120
      ],
      allWorkouts: [],
      displayedWorkouts: [],
      selectedTypes: [],
      selectedTime: null,
      clearAll: true
    }
  },
  methods: {
    toExplore() {
      this.$router.push('/explore');
    },
    getAllWorkouts() {
      fetch('https://hack-2020-backend.uc.r.appspot.com/workouts',
          {
              method: 'GET', // *GET, POST, PUT, DELETE, etc.
              headers: {
              'Content-Type': 'application/json'
          },
          // body: JSON.stringify(data) 
      })
      .then(res => res.json())
      .then(res => {
          console.log(res);
          this.allWorkouts = res.workouts;
          this.displayedWorkouts = res.workouts;
      })
      .catch(err => {
          console.log(err);
      });
    },
    updateSelectedTime(time) {
      if (this.selectedTime == time) {
        this.selectedTime = null;
      } else {
        this.selectedTime = time;
        this.clearAll = false;
      }
      this.updateDisplayed();
    },
    updateSelectedTypes(type) {

      if (type == 'clear') {
        console.log("ALL IS PRESSED")
        this.selectedTypes = [];
        this.selectedTime = null;
        this.clearAll = true;
        this.displayedWorkouts = this.allWorkouts;
        return;
      }
      this.clearAll = false;
      console.log("typeee", type);
      if (this.selectedTypes.includes(type)) {
        this.remove(this.selectedTypes, type);
      } else {
        this.selectedTypes.push(type);
      }
      this.updateDisplayed();
    },
    updateDisplayed() {
      if (this.selectedTime == null && this.selectedTypes == 0) {
        this.clearAll = true;
      }
      this.displayedWorkouts = [];

      var that = this;

      if (this.clearAll) {
        this.selectedTypes = [];
      }
      console.log("updating display")
      this.allWorkouts.forEach(function (workout) {
          var hasAllSelectedTags = true;
          that.selectedTypes.forEach(function (tag) {
            if (!workout.tags.includes(tag)) {
              hasAllSelectedTags = false;
            };
          });
          console.log("that.selectedTime == workout.duration", that.selectedTime == workout.duration);
          if (hasAllSelectedTags && (that.selectedTime == workout.duration || that.selectedTime == null)) {
            that.displayedWorkouts.push(workout);
          }
      });
    },
    remove(array, type) {
      for (var i = 0; i < array.length; i++) {
          if (array[i] == type) {
              array.splice(i, 1);
          }
      }
    }
  }
};
</script>

<style scoped>
.workout-card {
    background: #C4C4C4;
    border-radius: 20px;
    padding: 5px 0px 5px 20px;
    margin-bottom: 20px;
    margin-right: 5px;
}
.home-page {
  text-align: left;
  margin-left: 30vw;
}
</style>
