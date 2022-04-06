<template>
  <v-layout align-center justify-center style="background-color: #f5f5f5;height: calc(100vh - 64px)">
    <v-card class="mt-12" style="width: 40%">
      <v-card-text class="pa-12">
        <v-form @submit.prevent="signIn">
          <v-card-title style="justify-content: center"> Login </v-card-title>
          <v-alert color="red" class="white--text" v-if="errorMessage !== ''">
            {{ errorMessage }}
          </v-alert>
          <v-text-field
              prepend-inner-icon="mdi-at"
              name="email"
              label="Email"
              type="text"
              v-model="email"
              outlined
          ></v-text-field>
          <v-text-field
              id="password"
              outlined
              prepend-inner-icon="mdi-key"
              name="password"
              label="Password"
              v-model="password"
              type="password"
          ></v-text-field>
          <v-btn color="secondary" block type="submit"> Login </v-btn>
          <v-btn color="secondary" to="/register" block class="mt-2" outlined>
            Sign up
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import publicApi from "@/api";

export default {
  name: "Login",
  data: () => ({
    email:'',
    password:'',
    errorMessage:'',
    rating: 5,
    commentedText: "",
  }),
  methods:{
    signIn(){
      publicApi.post("/auth/login",{
        email: this.email,
        password: this.password
      }).then((res) =>{
        window.localStorage.setItem("access_token", res.data.token);
        window.localStorage.setItem("name", res.data.name);
        window.localStorage.setItem("id", res.data.id);
        this.$store.commit("user/setLoggedIn", true);
        this.$store.commit("user/setUserDetails", {
          username: res.data.name,
          id: res.data.id,
        });
        this.$router.push("/")
      }).catch((err) =>{
        this.errorMessage = err.response.data.message
      })
    }
  }
};
</script>
