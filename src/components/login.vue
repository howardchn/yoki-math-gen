<template>
  <div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email" 
        v-model="email">
      <small
        id="emailHelp"
        class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Remember me</label>
    </div>
    <div>
        <button type="submit" class="btn btn-primary" @click="login">Submit</button>
        <router-link to="./signup">Don't have an account, create one</router-link>
    </div>
    <div class="alert alert-warning" v-if="errorMsg">{{ errorMsg }}</div>
  </div>
</template>

<script>
import { User } from '../services/userService'

export default {
    data: () => ({ email: 'howardch@outlook.com', password: 'ckeyhmon1', errorMsg: '' }),
    methods: {
        login: function() {
            User.logIn(this.email, this.password).then(currentUser => {
                const token = currentUser._sessionToken
                const account = currentUser.attributes.username
                const email = currentUser.attributes.email
                const userId = currentUser.id
                _.toPairs({ token, account, email, userId }).forEach(item => document.cookie = item.join('='))

                this.$router.push({ path: '/' })
            }, error => {
                this.errorMsg = error.rawMessage
            })
        }
    }
}
</script>

