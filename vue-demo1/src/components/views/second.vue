<template>
  <div class="second">
    <h1>{{ msg }}</h1>
    <button @click="gohome" >【跳转主页Helloworld】</button>
    <button @click="backtofirst" >【跳转First页面】</button>
    <div>
      <h2>{{msgfromfirst}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      msg: 'Welcome to second App',
      msgfromfirst : ''
    }
  },
  mounted : function(){
    this.msgfromfirst = this.$route.params.id;
  },
  methods : {
    gohome(){
      this.$router.push("/");
    },
    backtofirst(){
      this.$router.push("/first");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
