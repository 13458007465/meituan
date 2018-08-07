<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {      
    }
  },
  components:{
    
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-size: 14px;
  cursor: pointer;
}
.container{
  height: 100%;
  cursor: pointer;
}
.content{
  height: calc(100% - 49px - 64px);
  overflow-y: scroll;
}
</style>
