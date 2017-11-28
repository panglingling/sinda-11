<template>
  <div >
    <ohead></ohead>
    <h3>这是系统外部</h3>
    <router-view/>
  </div>
</template>

<script>
import ohead from './ohead'
export default {
  data () {
    return {
      
    }
  },
  components: {ohead}
}
</script>


<style scoped lang="less">

</style>
