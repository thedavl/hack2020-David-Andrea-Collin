<template>
    <div>
        <!-- title and field to insert name -->
        <p class="createTitle">Create Your Own Workout!</p>
        <input name="workout_name" placeholder="workout name...">
        <p> Type (select all that apply)</p>

        <!--display types here -->
        <div class = "typeOptions">
            <div v-for="type in workoutTypes" :key="type">
                <button :id="type" @click="updateSelectedTypes(type)" :class="{ active: selectedTypes.includes(type) }" class="btn btn-success">{{ type }}</button>
            </div>
        </div>
        <!--display times here -->
        <div class = "timeOptions">
            <div v-for="time in workoutTimes" :key="time">
                <button :id="time" @click="updateSelectedTime(time)" :class="{ active: selectedTime == time }" class="btn btn-secondary">{{ time }}</button>
            </div>
        </div>
        <!-- displays selected types and times for debugging purposes -->
        <div>
            <p> "{{selectedTypes}}</p>
            <p> "{{selectedTime}}</p>
        </div>
        <!-- add sets and reps of new workout -->
        <div> 
            <p> Workout </p>
            <div> <button @click="addMove()"> Add Set! </button> </div>
            <input name="set_name" placeholder="set name...">
            <button :id="setNum" @click="incrementNumber()">{{setNum + "x"}}</button> 
        </div>

        <div> <button @click="addMove()"> Add Rep! </button> </div>

        <div class="new set">
        <label for="duration">:</label>
        <input type="text" required placeholder="set name">
        </div>
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
            selectedTime: 0,
            selectedTypes: [],
            setNum: 1,
            setName: "",
            numOfSets: 0,
            repName: "",
            numOfReps: 0,
            //set: [ {setName, numOfSets, rep: []}],
            //rep: [ {repName, numOfReps}]
        }
    },
    methods: {
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
    p {
        font-size: 14pt;
        color:blue;
    }
    .typeOptions {
        display: flex;
        flex-direction: row;
        margin: 5px;
        align-content: center;
        margin-left: 30vw;
    }
    .timeOptions {
        display: flex;
        flex-direction: row;
        margin: 5px;
        align-content: center;
        margin-left: 30vw;
    }
    button {
        margin: 5px;;
    }
    span{
  width: 30px;
  float: right;
  cursor: pointer;
}
span:hover{
  color: brown;
}
.previous{
  border: 1.5px solid;
  padding:5px;
  margin-bottom: 10px;
}
</style>