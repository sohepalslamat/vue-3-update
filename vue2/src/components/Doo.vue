<template>
  <div>
    <h1>Doo</h1>
    <ul>
      <li v-for="i in x" :key="i">{{i}}</li>
    </ul>
    <button @click="x.push(x.length+1)">X+1</button>    
  </div>
</template>

<script>
export default {
  name: 'Doo',
  data(){
    return{
      x:[1,2,3]
    }
  },
  watch:{
    x(val){
      console.log(val)
    }
  }
}
</script>
