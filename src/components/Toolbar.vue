<template>
  <div>
    <v-app-bar elevation="0">
      <a
        href="#"
        @click="$router.push('/')"
        style="text-decoration: none; color: black; font-size: 2rem"
        ><i class="mdi mdi-home-city" /> Condor Housing</a
      >
      <v-autocomplete
        style="margin-left: 20px"
        hide-selected
        hide-details
        solo
        label="Search your house"
        :items="products"
        item-text="name"
        item-value="_id"
        v-model="searchedProduct"
        @change="redirectToProduct"
      ></v-autocomplete>

      <v-spacer></v-spacer>
      <a
        v-if="!isLoggedIn"
        href="#"
        @click="$router.push('/login')"
        style="text-decoration: none; color: black; margin-right: 10px"
        >Login</a
      >
      <a
        v-if="!isLoggedIn"
        href="#"
        @click="$router.push('/register')"
        style="text-decoration: none; color: black; margin-right: 10px"
        >Register</a
      >
      <a
        v-if="isLoggedIn"
        href="#"
        @click="$router.push('/saved-listing')"
        style="text-decoration: none; color: black; margin-right: 10px"
        >Saved listing</a
      >
      <a
        v-if="isLoggedIn"
        href="#"
        @click="$router.push('/my-listing')"
        style="text-decoration: none; color: black; margin-right: 10px"
        >My Listing</a
      >
      <span v-if="isLoggedIn">
        {{ loggedInUserDetail }}
      </span>
      <v-btn icon="" v-if="isLoggedIn">
        <v-icon dark>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn :icon="true" v-if="isLoggedIn" @click="logoutUser">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import publicApi from "@/api";

export default {
  data() {
    return {
      searchedProduct: null,
      products: [],
    };
  },
  name: "Toolbar",
  mounted() {
    const accessToken = window.localStorage.getItem("access_token");
    const userName = window.localStorage.getItem("name");
    this.$store.commit("user/setLoggedIn", !!(accessToken && userName));
    if (accessToken && userName) {
      publicApi
        .get("/users/" + window.localStorage.getItem("id"))
        .then((res) => {
          this.$store.commit("user/setSavedHousing", res.data.saved_housing);
        });
      this.$store.commit("user/setUserDetails", {
        name: userName,
        id: window.localStorage.getItem("id"),
        access_token: window.localStorage.getItem("access_token"),
      });
    }

    publicApi.get("/products?type=all").then((res) => {
      this.products = res.data;
    });
  },
  methods: {
    redirectToProduct() {
      if (this.searchedProduct != null) {
        this.$router.push(`/product/${this.searchedProduct}`);
      }
      console.log(this.searchedProduct);
    },
    proceedToCheckout() {
      if (!this.isLoggedIn) {
        this.$store.commit("user/setLoginDialog", true);
        return;
      }
      this.$router.push({
        name: "CheckoutPage",
      });
    },
    logoutUser() {
      this.$store.commit("user/setLoggedIn", false);
    },
    removeItem(product) {
      this.$store.commit("cart/removeItem", product);
    },
  },
  computed: {
    loggedInUserDetail() {
      return this.$store.state.user.userDetail.name;
    },
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
  },
};
</script>
