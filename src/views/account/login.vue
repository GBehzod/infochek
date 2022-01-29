<template>
  <form
    id="login-form"
    @submit.prevent="onSubmit(fd)"
  >
    <label>
      Login
      <input
        v-model="fd.login"
        type="text"
        required
        placeholder="Login"
      >
    </label>

    <label>
      Password
      <input
        v-model="fd.password"
        type="password"
        required
        placeholder="Password"
      >
    </label>
    <button
      type="submit"
    >
      Sing in
    </button>
  </form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        fd: {
          login: "",
          password: ""
        }
      }
    },
    methods: {
      onSubmit(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>