<template>
  <div class="page">
    <form class="form" @submit.prevent>
      <label class="label">
        <span class="label"> email </span>
        <input v-model="email" class="input" type="text" />
      </label>
      <label class="label">
        <span class="label"> password </span>
        <input v-model="password" class="input" type="password" />
      </label>
      <button class="button" type="submit" @click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login(email, password) {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss">
.Login {
  > .form {
    > .button {
      display: block;
    }

    > .label {
      > .input {
        display: block;
        border: 1px solid blck;
      }
    }
  }
}
</style>
