<template>
  <v-layout align-center justify-center>
    <v-card class="mt-2" style="width: 40%">
      <v-card-text class="pt-2 pb-8 px-12">
        <v-form @submit.prevent="submitForm">
          <v-card-title style="justify-content: center"> Sign up </v-card-title>
          <v-alert color="red" class="white--text" v-if="errorMessage !== ''">
            {{ errorMessage }}
          </v-alert>
          <v-text-field
            prepend-inner-icon="mdi-account-circle"
            name="user_name"
            label="Name *"
            v-model="name"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="email"
            prepend-inner-icon="mdi-at"
            name="email"
            label="Email *"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="phone"
            prepend-inner-icon="mdi-phone"
            name="email"
            label="Phone number *"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            id="password"
            outlined
            v-model="password"
            prepend-inner-icon="mdi-key"
            name="password"
            label="Password *"
            type="password"
          ></v-text-field>
          <v-text-field
            id="confirm-password"
            outlined
            v-model="confirmPassword"
            prepend-inner-icon="mdi-key"
            name="password"
            label="Confirm password *"
            type="password"
          ></v-text-field>
          <v-btn color="secondary" block type="submit" :loading="loading">
            Sign Up
          </v-btn>
          <v-btn color="secondary" to="/login" block class="mt-2" outlined>
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import publicApi from "@/api";

export default {
  name: "Register",
  data() {
    return {
      errorMessage: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      loading: false,
    };
  },
  methods: {
    submitForm() {
      this.errorMessage = "";
      if (this.name === "") {
        this.errorMessage = "Name is required";
        return;
      }
      if (this.email === "") {
        this.errorMessage = "Email is required";
        return;
      }
      if (this.password === "") {
        this.errorMessage = "Password is required";
        return;
      }

      if (this.phone === "") {
        this.errorMessage = "Phone number is required";
        return;
      }
      if (this.confirmPassword === "") {
        this.errorMessage = "Confirm password is required";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Password and confirm password doesn't match";
        return;
      }

      this.loading = true;
      publicApi
        .post("/users", {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
        })
        .then((res) => {
          this.$store.commit(
            "notification/showSuccessMessage",
            res.data.message
          );
          setTimeout(() => {
            this.$router.push("/login");
          }, 1000);
          console.log(res);
        })
        .catch((err) => {
          this.errorMessage = err.response.data.message;
          this.loading = false;
        });
    },
  },
};
</script>
