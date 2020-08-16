<template>
    <div class="workouts-page">
        <button type="button" class="btn btn-outline-dark" @click="toCreate()">To Create Page</button>
        <button type="button" class="btn btn-outline-dark" @click="toHome()">To Home Page</button>
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
}
.tag-bubble {
    margin: 0 10px 5px 10px;
    background: #3f3f3f;
    padding: 0 20px 0 20px;
    border-radius: 20px;
    color: white;
}
.tag-flex {
    display: flex;
    max-width: 60%;
    margin-right: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
}
.workout-card-title {
    font-size: 26px;
    margin: 0 20px 0 0;
}
.workout-card-header {
    display: flex;
    align-items: center;
    margin-top: 5px;
    justify-content: space-between;
}
.workouts-page {
    text-align: left;
    margin-left: 30vw;
}
.workout-card {
    background: #C4C4C4;
    border-radius: 20px;
    padding: 5px 0px 5px 20px;
    margin-bottom: 20px;
    margin-right: 5px;
}
</style>