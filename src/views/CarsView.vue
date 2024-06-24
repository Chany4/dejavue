<template>
 <slot-comp>
            <template #cars>
              x
          </template>
          <template  #default>
          </template>
        </slot-comp>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    components: {
        CardComp
    }
}
    
</script>
<style lang="">
    
</style>