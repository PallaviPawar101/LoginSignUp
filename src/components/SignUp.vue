<template>
  <img class="logo" src="../assets/nova-logo-reverse.png" />
  <form>
    <h1>Sign Up</h1>
    <div class="register">
      <input type="text" placeholder="Enter Name" v-model="name" />
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <button class="btn btn-primary" type="submit" @click="handleSubmit">
        Sign Up
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit(e) {
        e.preventDefault();
      let res = await axios.post(`http://localhost:5500/users`, {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      let {data} = await axios.get(`http://localhost:5500/users?email=${res.data.email}`);
      console.log(data);
      this.$router.push({name:'HOME'})
    },
  },
};
</script>

<style>
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid blue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid blue;
  color: white;
  background: rgb(0, 0, 128);
  cursor: pointer;
}
</style>
