<template>
  <div
    class="login-wrapper container-fluid is-full-height is-flex-mobile is-flex-tablet flex-column justify-center align-items-center"
  >
    <div class="card has-width-500">
      <div class="card-header has-background-primary">
        <div class="card-header-title has-text-white">Welcome, Please Log In</div>
      </div>
      <div class="card-content">
        <form action method="POST" @submit.prevent="login">
          <b-field
            label="Username/Email"
            :type="{'is-danger': errors.has('username')}"
            :message="errors.first('username')"
          >
            <b-input
              v-model="loginInput.username"
              name="username"
              placeholder="Username/Email"
              v-validate="'required'"
            ></b-input>
          </b-field>

          <b-field
            label="Password"
            :type="{'is-danger': errors.has('password')}"
            :message="errors.first('password')"
          >
            <b-input
              type="password"
              v-model="loginInput.password"
              name="password"
              placeholder="Password"
              v-validate="'required'"
              password-reveal
            ></b-input>
          </b-field>

          <div class="field has-margin-top-30">
            <div class="control">
              <span>Forgot Password?</span>
              <button
                class="button is-primary is-pulled-right"
                :class="{'is-loading': isLoggingIn, 'is-disabled': isLoggingIn}"
              >
                <span>Login</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
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

<style lang="scss" scoped>
.login-wrapper {
  background-color: #9a47ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc93c4' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa6986' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23c488bf' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23a45a87' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23bc7dba' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%239e4a87' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23b473b4' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23973988' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23ac68af' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23902488' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23a45daa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
