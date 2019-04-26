<template>
  <div>
    <form action="#" method="POST">
      <input type="text" name="username" v-model="loginInput.username">
      <input type="password" name="password" v-model="loginInput.password">
      <button type="submit" @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapActions } from "vuex";
import actionTypes from "../store/action-types";
import { IVuexActionResponse } from "@/interfaces/index";

@Component({})
export default class LoginPage extends Vue {
  /**
   * Data Atrributes
   */
  loginInput = {
    username: "",
    password: ""
  };
  isLoggingIn: boolean = false;

  /**
   * Log the user in
   */
  async login() {
    this.isLoggingIn = true;

    const response: IVuexActionResponse = await this.$store.dispatch(
      actionTypes.login,
      this.loginInput
    );

    this.isLoggingIn = false;

    if (!response.success) {
      return;
    } else {
      // Navigate to the next page
      this.$router.push({ name: "home" });
    }
  }
}
</script>
