<template>
    <div id="create-page">
        <h2 id="createWorkoutTitle">Create Workout</h2>
        <div id="create-page-body">
            <div id="left-create">
                <input name="workout_name" placeholder="workout name" v-model="title">
                <br> <br>

                <p>Workout Type (select all that apply)</p>

                <div class = "typeOptions">
                    <div v-for="type in workoutTypes" :key="type">
                        <button :id="type" @click="updateSelectedTypes(type)" :class="{ active: selectedTypes.includes(type) }" class="btn btn-outline-dark">{{ type }}</button>
                    </div>
                </div>

                <br>

                <p>Total Time</p>
                <div class = "timeOptions">
                    <div v-for="time in workoutTimes" :key="time">
                        <button :id="time" @click="updateSelectedTime(time)" :class="{ active: selectedTime == time }" class="btn btn-secondary">{{ time }}</button>
                    </div>
                </div>
            </div>
            
            <div id="right-create">
                <div> 
                    <p> Workout Description</p>
                    <textarea class="enter-description" v-model="description" rows=15 cols=50 placeholder="Write about your reps, sets, resting time, overall tips" />
                    <!-- <button @click="addMove()"> Add Set! </button>
                    <input name="set_name" placeholder="set name...">
                    <button :id="setNum" @click="incrementNumber()">{{setNum + "x"}}</button>  -->
                </div>

                <!-- <div> <button @click="addMove()"> Add Rep! </button> </div>

                <div class="new set">
                    <label for="duration">:</label>
                    <input type="text" required placeholder="set name">
                </div> -->
            </div>
        </div>
        <button class="btn btn-success" @click="create()" >Create</button>
    </div>
</template>

<script>
export default {
    name: "Create",
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
            selectedTime: 0,
            selectedTypes: [],
            setNum: 1,
            setName: "",
            numOfSets: 0,
            repName: "",
            numOfReps: 0,
            description: null,
            title: null
            //set: [ {setName, numOfSets, rep: []}],
            //rep: [ {repName, numOfReps}]
        }
    },
    methods: {
        async create() {
            const body = await JSON.stringify({
                title: this.title,
                description: this.description,
                user: "5f387cc2cd4be563940f57de", // hard coded the user Andrea dang,
                duration: Number(this.selectedTime),
                tags: this.selectedTypes
            });
            fetch("https://hack-2020-backend.uc.r.appspot.com/workouts", {
                method: "POST",
                headers: { 'Content-Type':'application/json' },
                body: body
            })
            .then(res => {
                console.log(res);
                alert("workout successfully created!")
                this.$router.push('/explore');
            })
            .catch(err => {
                console.log(err);
            })
        },
        updateSelectedTypes(type) {
            if (this.selectedTypes.includes(type)) {
                this.remove(this.selectedTypes, type);
            } else {
                this.selectedTypes.push(type);
            }
        },
        updateSelectedTime(time) {
            this.selectedTime = time;
        },
        remove(array, type) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] == type) {
                    array.splice(i, 1);
                }
            }
        },
        incrementNumber() {
            if (this.setNum <= 4){
                this.setNum++;
            } else {
                this.setNum = 1;
            }
            
        },
        addSet(){
            this.applicants.push({
            previous:'',
            expiration: ''
            })
        },
        deleteSet(counter){
            this.applicants.splice(counter,1);
        }
    }
}
</script>

<style scoped>
.enter-description {
    resize: none;
    max-width: 100%;
    max-height: 100%;    
}

#create-page {
  text-align: left;
  margin: 0 auto;
  max-width: 1000px;
}

#create-page-body {
    display: flex;
    flex-direction: row;
}

.typeOptions {
    display: flex;
    flex-direction: row;
    margin: 5px;
    align-content: center;
    width: 75%;
    flex-wrap: wrap;
}

.timeOptions {
    display: flex;
    flex-direction: row;
    margin: 5px;
    align-content: center;
    width: 75%;
    flex-wrap: wrap;
}

button {
    margin: 5px;;
}

span{
  width: 30px;
  float: right;
  cursor: pointer;
}
span:hover {
  color: brown;
}

.previous {
  border: 1.5px solid;
  padding:5px;
  margin-bottom: 10px;
}
</style>