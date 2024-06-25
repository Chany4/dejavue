<template>
    <div id="friend">

        <div v-for="friend in friendsData()" :key="friend" class="friend">
            <h1>{{ friend.lastName }}</h1>
            <p>{{ friend.firstName }}</p>
            <p>{{ friend.gender }}</p>
            <p>{{ friend.profile }}</p>
            <p>{{ friend.contactDetails }}</p>
            
        </div>
    </div>
    
    <div class="contactDetails">
        <h1>Contact Details</h1>

        <div v-for="friend in friendsData()" :key="friend" >
            <p>{{ friend.contactDetails }}</p>
        </div>
    </div>

  <CardComp/>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    components: {
        CardComp
    },
    methods:{
        friendsData(){
            return this.$store.state.friends
    },
    computed: {
        getFriendsData(){
            return this.$store.state.friends
        }
    },
    mounted() {
        this.getFriendsData
    }
}
}
</script>
<style>
    .friend{
        background-color: pink;
        border: 2px solid black;
        width: 400px;
        height: 300px;
        margin: 2%;
    }
    #friend{
        display: flex;
        flex-wrap: wrap;
    }
    .contactDetails{
        background-color: pink;
        border: 2px solid black;
        width: 400px;
        height: 300px;
        margin: 2%;
    }
</style>