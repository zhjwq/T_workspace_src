<template>
  <div class="first">
    <h1>{{ msg }}</h1>
    <button @click="gohome" >【跳转主页Helloworld】</button>
    <button @click="gosecond" >【跳转Second页面】</button>

    <div>
      <span>姓名：</span>
        <input type="text" placeholder="请输入姓名" >
      <br>
      <span>年龄：</span>
        <input type="text" placeholder="请输入年龄" >
      <br>
      <span>性别：</span>
        <select v-model="sex">
          <option value = "0">男</option>
          <option value = "1">女</option>
        </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      msg: 'Welcome to first App'
    }
  },
  methods : {
    gohome(){
      this.$router.push("/");
    },
    gosecond(){
      this.$router.replace({name : "second", params : {
        id : '1',
        name : 'zhaojun'
      }});
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
