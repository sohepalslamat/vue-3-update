<template>
  <h1>Doo</h1>
  <ul>
    <template v-for="i in x" :key="i">
      <li v-if="i !== 2">{{i}}</li>
    </template>
  </ul>
  <button @click="x.push(x.length+1)">X+1</button>
  <div>
    <div>
      <teleport to="#app">
        <h4>teleport</h4>
      </teleport>
    </div>
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
    x: {deep: true, handler(val) {
      console.log(val[0])
    }
    }
  }
}
</script>
