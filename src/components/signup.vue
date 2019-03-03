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
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" placeholder="Password Confirm" v-model="passwordRepeat">
    </div>
    <div>
      <button type="submit" class="btn btn-primary" @click="signUp">Submit</button>
      <router-link to="./login">Has an account</router-link>
    </div>
    <div class="alert alert-warning" v-if="errorMsg">{{ errorMsg }}</div>
  </div>
</template>

<script>
import { User } from '../scoreService'

export default {
    data: () => ({ email: 'howardch@outlook.com', password: 'ckeyhmon1', passwordRepeat: 'ckeyhmon1', errorMsg: '' }),
    methods: {
        signUp: function() {
            if (this.password != this.passwordRepeat) {
              errorMsg = 'Confirm your password'
              return
            }

            let newUser = new User()
            newUser.setUsername(this.email)
            newUser.setEmail(this.email)
            newUser.setPassword(this.password)
            newUser.signUp().then(usr => {
              console.log(usr)
            }, err => {
              console.log(err)
            })
        }
    }
}
</script>

