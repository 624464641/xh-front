/* eslint-disable no-debugger */
<template>
  <div class="hello">
    <button type="default"  @click="longin"> 登录</button>
  </div>
</template>

<script>
import { post } from '@/utils/request'
export default{

methods:{


  longin(){
    post('/say',{}).then(res=>{
       console.info(res)
    })
  } 
}
}





</script>

<style scoped>

</style>
