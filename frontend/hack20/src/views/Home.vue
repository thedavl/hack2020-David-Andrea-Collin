<template>
  <div class="home-page">
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
      <div class="main-flex">
          <div class="workout-card-container">
            <div class="workout-card" v-for="workout in displayedWorkouts" :key="workout.title" @click="switchSelectedWorkout(workout)">
              <div class="workout-card-header">
                <p class="workout-card-title">{{ workout.title }}</p>
                <div class="tag-flex">
                  <p class="tag-bubble" v-for="tag in workout.tags" :id="'static-' + tag" :key="tag">
                    {{ tag }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-container" v-if="selectedWorkout != null">
            <div class="detail-header-flex">
              <p class="detail-title">{{ selectedWorkout.title }}</p>
              <p class="duration">{{ selectedWorkout.duration }} Minutes</p>
            </div>
            <div class="detail-tag-flex">
              <p class="tag-bubble" v-for="tag in selectedWorkout.tags" :key="tag" :id="'static-' + tag">
                {{ tag }}
              </p>
              <p>By: {{ selectedWorkout.user }}</p>
            </div>
            <div class="detail-description-container">
              {{ selectedWorkout.description }}
            </div>
          </div>
          <div class="detail-container" v-else></div>
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
        "legs",
        "cardio"
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
      clearAll: true,
      selectedWorkout: null
    }
  },
  methods: {
    switchSelectedWorkout(workout) {
      this.selectedWorkout = workout;
    },
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

      if (!this.displayedWorkouts.includes(this.selectedWorkout)) {
        if (this.displayedWorkouts.length > 0) {
          this.selectedWorkout = this.displayedWorkouts[0];
        } else {
          this.selectedWorkout = null;
        }
      } 
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

<style>
.detail-description-container {
  width: 93%;
  height: 50%;
  background: #DEDEDE;
  border-radius: 6px;
  padding: 10px 15px 10px 15px;
  margin: 10px 0 0 10px;
}
.detail-header-flex{
  display: flex;
  justify-content: space-between;
  margin: 5px 8px 0 8px;
}
.detail-tag-flex {
  display: flex;
  max-width: 65%;
  margin: -9px 10px 0 6px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.main-flex {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
}
.detail-container {
  padding: 10px 15px 10px 15px;
  box-shadow: 0px 2px 6px rgb(116, 116, 116);
  min-width: 350px;
  max-width: 400px;
  max-height: 450px;
}
.home-page {
  text-align: left;
  margin: 0 auto;
  max-width: 1000px;
}
#full-body:hover, #full-body:active, #full-body.active, #static-full-body {
  color: black;
  background-color: #7BB8FF;
  border: 1px solid #7BB8FF !important; 
}
#calisthenics:hover, #calisthenics:active, #calisthenics.active, #static-calisthenics {
  color: black;
  background-color: #FF74D0;
  border: 1px solid #FF74D0 !important; 
}
#core:hover, #core:active, #core.active, #static-core {
  color: black;
  background-color: #78FFFF;
  border: 1px solid #78FFFF !important; 
}
#hiit:hover, #hiit:active, #hiit.active, #static-hiit {
  color: black;
  background-color: #B191F5;
  border: 1px solid #B191F5 !important; 
}
#strength:hover, #strength:active, #strength.active, #static-strength {
  color: black;
  background-color: #F4F900;
  border: 1px solid #F4F900 !important; 
}
#upper-body:hover, #upper-body:active, #upper-body.active, #static-upper-body {
  color: black;
  background-color: #FF6A73;
  border: 1px solid #FF6A73 !important; 
}
#lower-body:hover, #lower-body:active, #lower-body.active, #static-lower-body {
  color: black;
  background-color: #E0E400;
  border: 1px solid #E0E400 !important; 
}
#arms:hover, #arms:active, #arms.active, #static-arms {
  color: black;
  background-color: #95FF70;
  border: 1px solid #95FF70 !important; 
}
#legs:hover, #legs:active, #legs.active, #static-legs {
  color: black;
  background-color: #7896FF;
  border: 1px solid #7896FF !important; 
}


</style>
