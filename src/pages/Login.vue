<template>
  <v-layout align-center justify-center style="background-color: #f5f5f5;height: calc(100vh - 64px)">
    <v-card class="mt-12" style="width: 40%">
      <v-card-text class="pa-12">
        <v-form >
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
export default {
  mounted() {
    this.$store.dispatch("product/fetchProducts")
    this.$store.dispatch("product/getReviews",{
      product_id: this.$route.params.id
    })
  },
  name: "Product",
  data: () => ({
    email:'',
    password:'',
    errorMessage:'',
    rating: 5,
    commentedText: "",
  }),
};
</script>
