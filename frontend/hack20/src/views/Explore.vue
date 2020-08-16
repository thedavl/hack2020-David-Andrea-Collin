<template>
    <div class="workouts-page">
        <h2 class="savedWorkoutsTitle">Explore Workouts</h2>
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
            </div>
            <div class="detail-description-container">
              {{ selectedWorkout.description }}
            </div>
          </div>
          <div class="detail-container" v-else></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Explore",
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
    mounted() {
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
    methods: {
        switchSelectedWorkout(workout) {
            this.selectedWorkout = workout;
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
        },
        toCreate() {
            this.$router.push('/create');
        },
        toHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style>
.timeOptions {
    display: flex;
}
.typeOptions {
    display: flex;
}

.timeOptions button {
    margin: 5px;
    border-radius: 15px;
}

.typeOptions button {
    margin: 5px;
    border-radius: 15px;
}
.workout-card-container {
    height: 70vh;
    width: 40vw;
    overflow-y: scroll;
    max-width: 570px;
    margin-right: 20px;
}
.tag-bubble {
    margin: 3px;
    background: #3f3f3f;
    padding: 0 10px 0 10px;
    border-radius: 20px;
    color: white;
}
.tag-flex {
    display: flex;
    max-width: 65%;
    margin-right: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
}
.workout-card-title {
    font-size: 22px;
    margin: 0 20px 0 0;
}
.workout-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.workouts-page {
    text-align: left;
    margin: 0 auto;
    max-width: 1000px;
}
.workout-card {
    background: #C4C4C4;
    border-radius: 6px;
    padding: 5px 0px 5px 20px;
    margin-bottom: 20px;
    margin-right: -5px;
    max-width: 550px;
    cursor: pointer;
}
</style>