<template>
  <img class="logo" src="../assets/nova-logo-reverse.png" />
  <form>
    <h1>Login</h1>
    <div class="register">
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <button class="btn btn-primary" type="submit" @click="handleSubmit">
        Login
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      let { data } = await axios.get(
        `http://localhost:5500/users?email=${this.email}&password=${this.password}`
      );
      if (data.length > 0) {  
        sessionStorage.setItem("userLoggedIn", new Date().getTime()); // current time stamp through get date. if user credentials are valid current details in sessionstorage. 
        this.$router.push('/');
      }
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
