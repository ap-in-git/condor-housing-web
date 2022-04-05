<template>
  <v-layout align-center justify-center>
    <v-card elevation="0" class="mt-2" style="width: 60%">
      <v-card-text class="pt-2 pb-8 px-12">
        <v-form @submit.prevent="submitForm">
          <v-card-title style="justify-content: center"> Add new housing </v-card-title>
          <v-alert color="red" class="white--text" v-if="errorMessage !== ''">
            {{ errorMessage }}
          </v-alert>
          <v-text-field
              name="user_name"
              label="Name *"
              v-model="name"
              type="text"
              outlined
          ></v-text-field>
          <v-select
              outlined
              :items="items"
              label="Place type"
          ></v-select>
          <v-textarea
              outlined
              name="input-7-1"
              label="Description"
              value=""
          ></v-textarea>
          <v-text-field
              name="user_name"
              label="Price *"
              v-model="name"
              type="number"
              outlined
          ></v-text-field>
          <v-text-field
              name="user_name"
              label="No of bedroom *"
              v-model="name"
              type="number"
              outlined
          ></v-text-field>
          <v-text-field
              name="user_name"
              label="No of bathroom *"
              v-model="name"
              type="number"
              outlined
          ></v-text-field>
          <v-text-field
              name="user_name"
              label="No of parking space *"
              v-model="name"
              type="number"
              outlined
          ></v-text-field>
          <v-text-field
              name="user_name"
              label="Images *"
              v-model="name"
              type="file"
              outlined
          ></v-text-field>
          <v-text-field
              name="user_name"
              label="Built in *"
              v-model="name"
              type="text"
              outlined
          ></v-text-field>
          <v-text-field
              name="user_name"
              label="Area(Sq foot) *"
              v-model="name"
              type="text"
              outlined
          ></v-text-field>
          <v-btn color="secondary" block type="submit" :loading="loading">
            Add
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      errorMessage: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      shippingAddress: "",
      loading: false,
      items:['Condo','Villa','Mansions','Room']
    };
  },
  methods: {
    submitForm() {
      this.errorMessage = "";
      if (this.name === "") {
        this.errorMessage = "Username is required";
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
      if (this.confirmPassword === "") {
        this.errorMessage = "Confirm password is required";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Password and confirm password doesn't match";
        return;
      }
      if (this.shippingAddress === "") {
        this.errorMessage = "Shipping address is required";
        return;
      }
      this.loading = true;

    },
  },
};
</script>
