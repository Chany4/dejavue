<template>

    <card-comp v-for="car in carsData()" :key="car">
        <template #cars>
        <div id="card">
        <div>
            <h1>Make: {{ car.make }}</h1>
            <p>Year : {{ car.year }}</p>
            <p>Color : {{ car.color }}</p>
            <p>Price : {{ car.price }}</p>
        </div>
    </div> 
        </template>
    </card-comp>
    

</template>
<script>
import CardComp from '../components/CardComp.vue' 
export default {
    components: {
        CardComp
    },
    methods: {
        carsData(){
            return this.$store.state.cars
        }
    },
    computed: {
        // computed is fetching the data
        getData(){
            return this.$store.dispatch('getData') 
        }
    },
    mounted() {
        // mounted stores the data in the div container
        // mounted is a FUNCTION !!
        this.getData
    }
}
    
</script>
<style scoped>
#card{
    background-color:turquoise ;
}
    
</style>