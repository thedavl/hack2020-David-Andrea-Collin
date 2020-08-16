<template>
    <div class="workouts-page">
        <button type="button" class="btn btn-outline-dark" @click="toCreate()">To Create Page</button>
        <button type="button" class="btn btn-outline-dark" @click="toHome()">To Home Page</button>
        <p>Tags</p>
        <!-- tag buttons -->
        <div class="flex">
            <br><br><br>
        </div>
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
            allWorkouts: [],
            displayedWorkouts: []
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
        toCreate() {
            this.$router.push('/create');
        },
        toHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.workout-card-container {
    height: 70vh;
    width: 40vw;
    overflow-y: scroll;
}
.tag-bubble {
    margin: 0 10px 0 10px;
    background: #3f3f3f;
    padding: 0 20px 0 20px;
    border-radius: 20px;
    color: white;
}
.tag-flex {
    display: flex;
}
.workout-card-title {
    font-size: 26px;
    margin: 0 20px 0 0;
}
.workout-card-header {
    display: flex;
    align-items: center;
    margin-top: 5px;
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