<template>
  <div class="wrapper">
    <form @submit.prevent="submit">
      <input type="search" v-model="form.query" />
      <button>Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        query: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.form.query)
    }
  }
}
</script>

<style scoped>
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #a2b29f;
  outline: none;
}

button {
  padding: 10px;
  background: #a2b29f;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
