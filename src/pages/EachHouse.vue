<template>
  <v-container fluid class="pr-16 pl-16">
    <v-row>
      <v-col cols="5">
        <v-row>
          <v-col
            v-for="n in 6"
            :key="n"
            class="d-flex child-flex"
            cols="6"
        >
          <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
              >
                <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        </v-row>
      </v-col>
      <v-col cols="7">
        <h2>Waterloo House</h2>
        <v-tabs
            fixed-tabs
            background-color="indigo"
            dark
        >
          <v-tab>
            Overview
          </v-tab>
          <v-tab>
            Features
          </v-tab>
          <v-tab-item key="1">
            <ul style="list-style: none">
              <li>
                <v-icon
                    style="color: black !important;"
                    large
                    disabled
                    dense
                >
                  mdi-bed-double-outline
                </v-icon>
                2 Bedrooms
              </li>
              <li>
                <i class="mdi mdi-shower"></i>
                2 Bathrooms
              </li>
              <li>
                <i class="mdi mdi-calendar"></i>
                Built in 1940
              </li>
              <li>
                <i class="mdi mdi-rectangle-outline"></i>
                14000 Sq ft
              </li>
              <li>
                <i class="mdi mdi-home-thermometer"></i>
                Forced air, natural gas
              </li>
              <li>
                <i class="mdi mdi-parking"></i>
               3 Parking
              </li>
            </ul>
          </v-tab-item>
          <v-tab-item key="2" class="pl-2 pr-2">
            <p class="subtitle-1 mt-8">
              A BEAUTIFUL TOWNHOME AVAILABLE IN THE HEART OF WATERLOO!! Welcome Home to 133 Park st Unit 303. This 1537 sqft luxury home is full of high-end finishes including high ceilings on the main, elegant trim and crown molding details, a contemporary open concept layout, and hardwood flooring throughout most of the home. The main floor features tall windows, a balcony off the kitchen, 2 pce bathroom, and a beautiful wood feature wall.  The upscale kitchen includes Stainless Steel appliances, crisp white cabinetry, tiled backsplash, granite counters and is open to the dining area and large balcony. Bright and open, the main floor is the perfect place to entertain guests. The Upper level has a huge Master bedroom with ensuite bath and walkout to an additional private balcony. The Upper level also has a spacious 2nd bedroom, 4 piece bath and in suite laundry. Fantastic location....just a short walk to popular restaurants (The Bauer Kitchen), shops, boutique groceries (Vincenzo's) and the rest of uptown waterloo.
            </p>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
        <h3>Similar housing</h3>
    </v-row>
    <v-row>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Beautiful apartment
          </v-card-title>

          <v-card-subtitle>
            Waterloo,Ontario
          </v-card-subtitle>
          <v-divider/>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto aspernatur eius esse, expedita fuga ipsum iusto necessitatibus praesentium quidem, repellat sint sit soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>

          <v-card-actions>
            <div/>
            <v-spacer></v-spacer>

            <v-btn
                text
            >
              View details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
      <v-card
          class="mx-auto"
          max-width="344"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
        ></v-img>

        <v-card-title>
          Beautiful apartment
        </v-card-title>

        <v-card-subtitle>
          Waterloo,Ontario
        </v-card-subtitle>
        <v-divider/>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto aspernatur eius esse, expedita fuga ipsum iusto necessitatibus praesentium quidem, repellat sint sit soluta sunt tenetur totam veritatis voluptatem!
        </v-card-text>

        <v-card-actions>
          <div/>
          <v-spacer></v-spacer>

          <v-btn
              text
          >
            View details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Beautiful apartment
          </v-card-title>

          <v-card-subtitle>
            Waterloo,Ontario
          </v-card-subtitle>
          <v-divider/>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto aspernatur eius esse, expedita fuga ipsum iusto necessitatibus praesentium quidem, repellat sint sit soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>
          <v-card-actions>
            <div/>
            <v-spacer></v-spacer>
            <v-btn
                text
            >
              View details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
          ></v-img>

          <v-card-title>
            Beautiful apartment
          </v-card-title>

          <v-card-subtitle>
            Waterloo,Ontario
          </v-card-subtitle>
          <v-divider/>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi architecto aspernatur eius esse, expedita fuga ipsum iusto necessitatibus praesentium quidem, repellat sint sit soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>
          <v-card-actions>
            <div/>
            <v-spacer></v-spacer>
            <v-btn
                text
            >
              View details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    rating: 5,
    commentedText: "",
  }),
  computed: {
    averageReview() {
      const id = this.$route.params.id;
      const reviews = this.$store.state.product.reviews.filter(
          (p) => p.product_id == id
      );
      if (reviews.length === 0) {
        return 0;
      }
      let totalReview = 0;

      for (let i = 0; i < reviews.length; i++) {
        totalReview = totalReview + reviews[i].rating;
      }
      return totalReview / reviews.length;
    },
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    reviews() {
      const id = this.$route.params.id;
      return this.$store.state.product.reviews.filter((p) => p.product_id == id);
    },
    reviewCount() {
      const id = this.$route.params.id;
      return this.$store.state.product.reviews.filter((p) => p.product_id == id).length;
    },
    products() {
      return this.$store.state.product.products;
    },
    product() {
      const id = this.$route.params.id;
      return this.products.find((p) => p.id == id);
    },
    relatedProducts() {
      const id = this.$route.params.id;
      return this.products.filter((p) => p.id !== id);
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.commit("cart/addProductToCart", product);
      this.$store.commit("cart/toggleDrawer", true);
    },
    submitForm() {
      if (!this.isLoggedIn) {
        this.$store.commit("user/setLoginDialog", true);
        return;
      }
      if (this.commentedText === "") {
        this.$store.dispatch(
            "notification/showErrorMessage",
            "Review text is missing"
        );
        return;
      }
      this.$store.dispatch("product/addReview",{
        text: this.commentedText,
        rating: this.rating,
        product_id: this.product.id
      }).then((message) => {
        console.log(message)
        this.$store.dispatch(
            "notification/showSuccessMessage",
            message
        );
      })

    },
    goToProduct(id) {
      this.$router.push({ name: "Product", params: { id } });
    },
  },
};
</script>
