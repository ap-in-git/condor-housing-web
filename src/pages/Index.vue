<template>
  <div>
    <div
        style='margin-bottom:40px;background-image:url("https://images.unsplash.com/photo-1549517045-bc93de075e53");height: 600px;display: flex;justify-content: center;align-items: center;color: white;background-size: cover'
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            Find your fresh start
          </h1>
          <h4 class="subheading">
            Houses, condos, and apartments for rent.
          </h4>
        </v-col>
      </v-row>
    </div>
    <v-container>
      <v-row>
        <h3>Popular houses</h3>
      </v-row>
      <v-row>
        <v-col cols="4" v-for="popular_product in popular_products" :key="popular_product._id">
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                :src="popular_product.images[0]"
                height="200px"
            ></v-img>

            <v-card-title>
              {{ popular_product.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ popular_product.location }}
            </v-card-subtitle>
            <v-divider/>
            <v-card-text>
              {{popular_product.description}}
            </v-card-text>

            <v-card-actions>
              <div/>
              <v-spacer></v-spacer>
              <v-btn
                  @click="$router.push(`/product/${popular_product._id}`)"
                  text
              >
                View details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-4">
        <v-col sm="3">
          <v-list dense>
            <v-subheader>FILTERS {{productType}}</v-subheader>
            <v-list-item-group
                color="primary"
            >
              <v-list-item v-for="filterItem in filterItems" :key="filterItem" selectable @click="productType=filterItem">
                <v-list-item-content>
                  <v-list-item-title>{{ filterItem }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col sm="9">
          <single-product :product="product" v-for="product in display_products" :key="product._id"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import publicApi from "@/api";
import SingleProduct from "@/components/SingleProduct";

export default {
  name: "Index",
  components: {SingleProduct},
  data:() =>({
    filterItems :['All','Condo','Villa','Mansion','Rooms'],
    popular_products:[],
    products:[],
    productType:'All'
  }),
  methods:{
    isSaved(product_id){
      const savedHousing = this.$store.state.user.saved_housing;

      return savedHousing.includes(product_id);
    },
    toggleSave(product_id){
      publicApi.patch(`/products/toggle-save/${product_id}`).then((res) => {
        this.$store.commit('notification/showSuccessMessage',res.data.message)
        this.$store.commit('user/toggleSavedListing',product_id)

      })
    }
  },
  computed:{
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },

    display_products(){
      if (this.productType === 'All')
        return this.products;

      return  this.products.filter( p => p.place_type.toLowerCase() === this.productType.toLowerCase())
    }
  },
  mounted() {
    publicApi.get('/products?type=all').then((res) =>{
      this.products = res.data;
    })
    publicApi.get('/products?type=popular').then((res) =>{
      this.popular_products = res.data;
    })
  }
}
</script>