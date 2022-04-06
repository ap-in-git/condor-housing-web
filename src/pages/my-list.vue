<template>
  <v-container>
    <v-row class="mt-16">
      <h3>My listings</h3>
      <v-spacer/>
      <v-btn color="primary" @click.prevent="$router.push('/add')">
        Add new listing
      </v-btn>
    </v-row>
    <v-row class="mt-8">

      <v-card class="mt-2 mb-2" v-for="product in products" :key="product._id" style="width: 100%;">
        <v-card-text>
          <v-row>
            <v-col sm="4">
              <v-img
                  :src="product.images[0]"
                  height="150px"
              ></v-img>
            </v-col>
            <v-col sm="8">
              <h2>{{ product.name }}</h2>
              <div>
                {{product.description}}
              </div>
              <h4 class="mt-2 mb-2">
                $ {{ product.price }}
              </h4>
              <v-divider/>
              <div style="display: flex;justify-content: space-between;align-items: center;margin-top: 10px;">
                <div class="subtitle-2 mt-2">
                  {{  product.location }}
                </div>
                <div>
                  <v-btn
                    style="background: white;"
                    depressed
                    small
                    @click="$router.push('product-edit/'+product._id)"
                >
                  <v-icon >
                    mdi-pencil
                  </v-icon>
                  &nbsp;Edit
                </v-btn>
                <v-btn
                    depressed
                    small
                    color="error"
                    class="pa-2"
                >
                  <v-icon >
                    mdi-trash-can
                  </v-icon>
                  &nbsp;Delete
                </v-btn>
                </div>

              </div>

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

import publicApi from "@/api";

export default {
  name: "MyList",
  data() {
    return {
      products :[]
    };
  },
  created() {
    publicApi.get("/products?type=my-list").then((res)=>{
      this.products = res.data;
    })
  }
};
</script>
