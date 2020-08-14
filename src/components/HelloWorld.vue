/* eslint-disable no-debugger */
<template>
  <div class="hello">
    <button type="default"  @click="longin"> 登录</button>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default{

methods:{


  longin(){
    get('/api/mes/say',{}).then(res=>{
       console.info(res)
    })
  } 
}
}





</script>

<style scoped>

</style>
