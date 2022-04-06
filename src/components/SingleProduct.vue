<template>
  <v-card class="mt-2 mb-2">
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
          <div style="display: flex;justify-content: space-between;align-items: center;">
            <div class="subtitle-2 mt-2">
              {{ product.location }}
            </div>
            <div>
              <v-btn
                  style="background: white;"
                  depressed
                  x-small
                  @click="$router.push(`/product/${product._id}`)"

              >
                View details
              </v-btn>
              <v-btn
                  v-if="isLoggedIn && !isSaved(product._id)"
                  style="background: white;"
                  depressed
                  x-small
                  @click="toggleSave(product._id)"
              >
                <v-icon >
                  mdi-bookmark-outline
                </v-icon>
                Save
              </v-btn>
              <v-btn
                  v-if="isLoggedIn && isSaved(product._id)"
                  style="background: white;"
                  depressed
                  x-small
                  @click="toggleSave(product._id)"
              >
                <v-icon >
                  mdi-bookmark
                </v-icon>
                Remove
              </v-btn>
            </div>

          </div>

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import publicApi from "@/api";

export default {
  name: "SingleProduct",
  props:['product'],
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
 }
}
</script>

