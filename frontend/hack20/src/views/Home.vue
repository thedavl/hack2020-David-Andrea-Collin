<template>
  <div class="home-page">
    <p>THIS IS HOME</p>
    <button @click="toExplore">Go To Explore Page</button>
    <div id="savedWorkouts">
      <h2 class="savedWorkoutsTitle">Saved Workouts</h2>
      
      <div class="typeOptions">
        <button class="btn btn-outline-dark" id="all" @click="updateSelectedTypes('all')" :class="{ active: showAll }">all</button>
        <button class="btn btn-outline-dark" id="none" @click="updateSelectedTypes('none')" :class="{ active: showNone }">none</button>

        <div v-for="type in workoutTypes" :key="type">
          <button class="btn btn-outline-dark" :id="type" @click="updateSelectedTypes(type)" :class="{ active: selectedTypes.includes(type) }">{{ type }}</button>
        </div>
      </div>

      <div class="timeOptions">
        <div v-for="time in workoutTimes" :key="time">
          <button class="btn btn-outline-dark" :id="time" @click="updateActiveTimes(time)" :class="{ active: selectedTypes.includes(time) }">{{ time }}</button>
        </div>
      </div>

      <div class="savedWorkouts">
          <div class="workout-card" v-for="workout in displayedWorkouts" :key="workout.title">
            <div class=displayedWorkout>
              <div class="displayedWorkoutHeader">
                <p>{{ workout.title }}</p>
                <p>by {{ workout.user }}</p>
                <p>{{ workout.duration }}</p>
                <p>{{ workout.tags }}</p>
              </div>
              <p>{{ workout.description }}</p>
            </div>
          </div>
      </div>
      <div id="workoutPreview"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {
    this.getAllWorkouts();
    var that = this;
    this.workoutTypes.forEach(function (workout) {
      that.selectedTypes.push(workout);
    });
    // this.workoutTimes.forEach(function (time) {
    //   that.activeTimes.push(workout);
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
      activeTimes: [],
      showAll: true,
      showNone: false
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
    updateSelectedTypes(type) {
      var that = this;

      if (type == 'none') {
        this.selectedTypes = [];
        this.displayedWorkouts = [];
        this.showNone = true;
        this.showAll = false;
        this.updateDisplayed();
        return;
      }

      if (type == 'all') {
        this.selectedTypes = [];
        this.allWorkouts.forEach(function (workout) {
          workout.tags.forEach(function (tag) {
            if (!that.selectedTypes.includes(tag)) {
              that.selectedTypes.push(tag);
            };
          });
        });
        this.showAll = true;
        this.showNone = false;
        this.displayedWorkouts = this.allWorkouts;
        this.updateDisplayed();
        return;
      }
      this.showNone = false;
      console.log("typeee", type);
      if (this.selectedTypes.includes(type)) {
        this.remove(this.selectedTypes, type);
      } else {
        this.selectedTypes.push(type);
      }
      if (this.selectedTypes.length == 0) {
        this.showNone = true;
      }
      this.updateDisplayed();
    },
    updateActiveTimes(time) {
      if (this.activeTime.includes(time)) {
        this.remove(this.activeTimes, time);
      } else {
        this.activeTimes.push(time);
      }
      this.updateDisplayed();
    },
    updateDisplayed() {
      this.displayedWorkouts = [];

      if (this.showNone) {
        return;
      }

      var that = this;

      if (this.showAll) {
        for (var i = 0; i < this.workoutTypes.length; i++) {
          that.selectedTypes.push(that.workoutTypes[i]);
        }
        that.allWorkouts.forEach(function (workout) {
          that.displayedWorkouts.push(workout);
        });
        return;
      }
      console.log("updating display")
      this.allWorkouts.forEach(function (workout) {
          console.log("iterating over:", workout.tags);
          var hasAllSelectedTags = true;
          that.selectedTypes.forEach(function (tag) {
            if (!workout.tags.includes(tag)) {
              hasAllSelectedTags = false;
            };
          });
          if (hasAllSelectedTags) {
            console.log("adding: " + workout.title);
            that.displayedWorkouts.push(workout);
          }
      });

      // this.allWorkouts.forEach(function (workout) {
      //   var containsAllTypes = true;
      //   that.selectedTypes.forEach(function (type) {
      //     if (!workout.tags.includes(type)) {
      //       containsAllTypes = false;
      //     }
      //   });
      //   if (containsAllTypes) {
      //     that.displayedWorkouts.push(workout);
      //   }
      // });

      // var tempWorkouts = [];
      // this.displayedWorkouts.forEach(function (workout) {
      //   if (that.activeTimes.includes(workout.duration)) {
      //     tempWorkouts.push(workout);
      //   }
      // });

      // this.displayedWorkouts = tempWorkouts;
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
.timeOptions {
    display: flex;
}
.typeOptions {
    display: flex;
}
.home-page {
  text-align: left;
  margin-left: 30vw;
}
</style>
