<template>
  <div>
    <v-app-bar elevation="0">
      <a
        href="#"
        @click="$router.push({ name: 'Index' })"
        style="text-decoration: none; color: black; font-size: 2rem"
        ><i class="mdi mdi-home-city"/> Condor Housing</a>
      <v-autocomplete   style="margin-left: 20px;"        hide-selected hide-details solo  label="Search your house"></v-autocomplete>

      <v-spacer></v-spacer>
      <span v-if="isLoggedIn">
        {{ loggedInUserDetail }}
      </span>

      <v-btn icon="">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <v-btn icon="" v-if="isLoggedIn">
        <v-icon dark>mdi-account-outline</v-icon>
      </v-btn>
      <v-btn icon="" @click="dialog = true" v-else>
        <v-icon dark>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn :icon="true" v-if="isLoggedIn" @click="logoutUser">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      errorMessage: '',
      email: '',
      password: '',
      nameRules: [(v) => !!v || 'Email is required'],
      passwordRules: [(v) => !!v || 'Password is required'],

    };
  },
  name: 'Toolbar',
  methods: {
    handleClose(val) {
      console.log(val);
    },
    proceedToCheckout() {
      if (!this.isLoggedIn) {
        this.$store.commit('user/setLoginDialog', true);
        return;
      }
      this.$router.push({
        name: 'CheckoutPage',
      });
    },
    logoutUser() {
      this.$store.commit('user/setLoggedIn', false);
    },
    login() {
      this.errorMessage = '';
      if (!this.$refs.form.validate()) {
        return;
      }
      if (this.email === 'hi@test.com' && this.password === 'password') {
        this.$store.commit('user/setLoggedIn', true);
        this.dialog = false;
      } else {
        this.errorMessage = 'Email or password is incorrect';
      }
    },
    increment(product) {
      this.$store.commit('cart/increment', product);
    },
    decrement(product) {
      this.$store.commit('cart/decrement', product);
    },
    removeItem(product) {
      this.$store.commit('cart/removeItem', product);
    },
  },
  computed: {
    loggedInUserDetail() {
      return this.$store.state.user.userDetail.name;
    },
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },

    cartItems() {
      return this.$store.state.cart.items;
    },
    drawer: {
      get() {
        return this.$store.state.cart.drawer;
      },
      set(val) {
        this.$store.commit('cart/toggleDrawer', val);
      },
    },
    dialog: {
      get() {
        return this.$store.state.user.dialog;
      },
      set(val) {
        this.$store.commit('user/setLoginDialog', val);
      },
    },
  },
};
</script>

<style scoped></style>
