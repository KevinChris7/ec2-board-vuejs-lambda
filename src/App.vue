<template>
  <div class="container">
    <Header title="EC2 Board"/>
    <img alt="Vue logo" src="./assets/ec2.png">
    <label>AWS Account</label>
    <div>
      <h4>
        <Combo />
      </h4>
    </div>
  </div>


</template>

<script>

import Header from './components/Header'
import Combo from './components/Combo'

export default {
  name: 'App',
  components: {
    Header,
    Combo,
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;

}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.label{
  height: 31px;
  line-height: 47px;
  bottom: 130px;
  left: 372px;  
}
.select {
  position: relative;
  width: 20%;
  text-align: left;
  outline: none;
  height: 31px;
  line-height: 47px;
  bottom: 78px;
  left: 279px;
}
.mt-4 {
  margin-top: -1.5rem!important;
}
h3 {
  text-align: left;
  height: 20px;
  bottom: 5px;
  left: 150px;
  font-size: medium;
}
h4 {
  text-align: left;
  height: 30px;
  left: 150px;
  font-size: medium;
}
table {
  border: 2px solid black;
  border-radius: 193px;
  border-color: black;
  background-color: white;
}

th {
  background-color: white;
  color: black;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
td {
  background-color: white;
  color: rgb(214, 9, 9);
  align-content:stretch;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
