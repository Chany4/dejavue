<template>
    <h1>
        This is Consoles View
       </h1>
    <card-comp v-for="console in consolesData()" :key="console">
        <template #consoles>
         <div>
            <h1>{{ console.name }}</h1>
            <p>{{ console.manufacturer }}</p>
            <p>{{ console.release_year }}</p>
            <p>{{ console.storage }}</p>
            <p>{{ console.price }}</p>
            <p>{{ console.best_selling_game }}</p>
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
    methods:{
        consolesData(){
            return this.$store.state.gamingConsoles
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData
    }
}
</script>
<style lang="">
    
</style>