<template>
  <v-container>
    <v-row class="mt-16">
      <h3>Saved listing</h3>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12" v-for="product in products" :key="product._id">
        <single-product :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import publicApi from "@/api";
import SingleProduct from "@/components/SingleProduct";
export default {
  name: "MyList",
  components:{
    SingleProduct,
  },
  data() {
    return {
      products :[]
    };
  },
  created() {
    publicApi.get("/products?type=saved-listing").then((res)=>{
      this.products = res.data;
    })
  }
};
</script>
