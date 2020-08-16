<template>
    <div>
        <p class="createTitle">Create Your Own Workout!</p>
        <input name="workout_name" placeholder="workout name...">
        <p> Type (select all that apply)</p>

        <!--display types here -->
        <div class = "typeOptions">
            <li v-for="type in workoutTypes" :key="type">
                <button :id="type" @click="updateSelectedTypes(type)" :class="{ active: selectedTypes.includes(type) }">{{ type }}</button>
            </li>
        </div>
        <!--display times here -->
        <div class = "timeOptions">
            <li v-for="time in workoutTimes" :key="time">
                <button :id="time" @click="updateSelectedTime(time)" :class="{ active: selectedTime == time }">{{ time }}</button>
            </li>
        </div>
        <div>
            <p> "{{selectedTypes}}</p>
            <p> "{{selectedTime}}</p>
        </div>
        <div> 
            <p> Workout </p>
            <input name="set_name" placeholder="set name...">
            <button :id="setNum" @click="incrementNumber()">{{setNum + "x"}}</button>
            
        </div>
        <div> <button @click="addMove()"> Add Move! </button> </div>
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
      setNum: 1
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
        addMove() {

        }
    }
}
</script>

<style scoped>
    p{  font-size: 14pt;
        color:blue; }
    /*
    button:focus {
        color: green;
    }
    button{
        color: black;
    }
    */
</style>