<template>
  <h1>Hello User, Welcome to Home Page</h1>
  <button class="btn btn-primary" type="button" @click="navigateTo('signup')">
    New Consumer
  </button>
  <button class="btn btn-primary" type="button" @click="navigateTo('login')">
    Existing Consumer
  </button>
</template>

<script>
export default {
  name: "HOME",

  methods: {
    navigateTo(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>
