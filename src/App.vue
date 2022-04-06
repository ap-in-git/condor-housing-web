<template>
  <v-app>
    <v-snackbar v-model="snackbar" top right :color="alertType">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <toolbar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";
export default {
  name: "App",
  components:{Toolbar},
  computed:{
    alertType() {
      return this.$store.state.notification.type;
    },
    message() {
      return this.$store.state.notification.message;
    },
    snackbar: {
      get() {
        return this.$store.state.notification.show;
      },
      set(value) {
        this.$store.commit("notification/setShow", value);
      },
    },
  }

};
</script>
