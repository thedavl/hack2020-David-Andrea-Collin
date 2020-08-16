<template>
  <div class="home">
    <p>THIS IS HOME</p>
    <button @click="toExplore">Go To Explore Page</button>
    <div id="savedWorkouts">
      <h2 class="savedWorkoutsTitle">Saved Workouts</h2>
      
      <div class="typeOptions">
        <button id="all" @click="updateActiveTypes('all')" :class="{ active: showAll }">all</button>
        <button id="none" @click="updateActiveTypes('none')" :class="{ active: showNone }">none</button>

        <li v-for="type in workoutTypes" :key="type">
          <button :id="type" @click="updateActiveTypes(type)" :class="{ active: activeTypes.includes(type) }">{{ type }}</button>
        </li>
      </div>

      <div class="timeOptions">
        <li v-for="time in workoutTimes" :key="time">
          <button :id="time" @click="updateActiveTimes(time)" :class="{ active: activeTimes.includes(time) }">{{ time }}</button>
        </li>
      </div>

      <div class="savedWorkouts">
          <li v-for="workout in displayedWorkouts" :key="workout.title">
            <div class=displayedWorkout>
              <div class="displayedWorkoutHeader">
                <p>{{ workout.title }}</p>
                <p>by {{ workout.user }}</p>
                <p>{{ workout.duration }}</p>
                <p>{{ workout.tags }}</p>
              </div>
              <p>{{ workout.description }}</p>
            </div>
          </li>
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
      that.activeTypes.push(workout);
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
      activeTypes: [],
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
    updateActiveTypes(type) {
      var that = this;

      if (type == 'none') {
        this.activeTypes = [];
        this.displayedWorkouts = [];
        this.showNone = true;
        this.showAll = false;
        return;
      }

      if (type == 'all') {
        this.allWorkouts.forEach(function (workout) {
          workout.tags.forEach(function (tag) {
            if (!that.activeTypes.includes(tag)) {
              that.activeTypes.push(tag);
            };
          });
        });
        this.showAll = true;
        this.showNone = false;
        this.displayedWorkouts = this.allWorkouts;
        return;
      }

      if (this.activeTypes.includes(type)) {
        this.remove(this.activeTypes, type);
      } else {
        this.activeTypes.push(type);
      }

      // if 'none' is clicked, only color none button
      if (this.activeTypes.length == 0) {
        this.showNone = true;
        this.showAll = false;
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

      var that = this;

      if (this.showAll) {
        this.allWorkouts.forEach(function (workout) {
          that.displayedWorkouts.push(workout);
        });
        return;
      }

      if (this.showNone) {
        return;
      }

      this.allWorkouts.forEach(function (workout) {
        var containsAllTypes = true;
        that.activeTypes.forEach(function (type) {
          if (!workout.tags.includes(type)) {
            containsAllTypes = false;
          }
        });
        if (containsAllTypes) {
          that.displayedWorkouts.push(workout);
        }
      });

      var tempWorkouts = [];
      this.displayedWorkouts.forEach(function (workout) {
        if (that.activeTimes.includes(workout.duration)) {
          tempWorkouts.push(workout);
        }
      });

      this.displayedWorkouts = tempWorkouts;
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
