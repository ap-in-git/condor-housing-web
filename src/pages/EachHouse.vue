<template>
  <v-container fluid class="pr-16 pl-16">
    <v-row>
      <v-col cols="5">
        <v-row>
          <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="6">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
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
        <v-tabs fixed-tabs background-color="indigo" dark>
          <v-tab> Overview </v-tab>
          <v-tab> Features </v-tab>
          <v-tab-item key="1">
            <ul style="list-style: none">
              <li>
                <v-icon style="color: black !important" large disabled dense>
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
              A BEAUTIFUL TOWNHOME AVAILABLE IN THE HEART OF WATERLOO!! Welcome
              Home to 133 Park st Unit 303. This 1537 sqft luxury home is full
              of high-end finishes including high ceilings on the main, elegant
              trim and crown molding details, a contemporary open concept
              layout, and hardwood flooring throughout most of the home. The
              main floor features tall windows, a balcony off the kitchen, 2 pce
              bathroom, and a beautiful wood feature wall. The upscale kitchen
              includes Stainless Steel appliances, crisp white cabinetry, tiled
              backsplash, granite counters and is open to the dining area and
              large balcony. Bright and open, the main floor is the perfect
              place to entertain guests. The Upper level has a huge Master
              bedroom with ensuite bath and walkout to an additional private
              balcony. The Upper level also has a spacious 2nd bedroom, 4 piece
              bath and in suite laundry. Fantastic location....just a short walk
              to popular restaurants (The Bauer Kitchen), shops, boutique
              groceries (Vincenzo's) and the rest of uptown waterloo.
            </p>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
    <v-container fluid class="pr-16">
      <v-row class="my-6">
        <h3>Comments</h3>
        <v-col sm="12" v-for="item in comments" :key="item._id">
          <v-card class="my-2" elevation="0">
            <v-card-title>
              <span class="font-weight-bold mr-4">{{ item.user.name }}</span>
              <small class="grey--text">{{
                new Date(item.commented_at).toLocaleString()
              }}</small>
              <v-spacer />
            </v-card-title>
            <v-card-text>
              <div class="subtitle-2">{{ item.text }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h3 class="mt-5">Leave a Comment</h3>
      <v-divider />
      <v-form @submit.prevent="submitForm">
        <v-text-field
          name="input-7-1"
          class="mt-1"
          outlined
          label="Tell us your thoughts"
          v-model="commentedText"
        ></v-text-field>
        <div class="mt-1 text-right">
          <v-btn color="secondary" type="submit">{{ "Submit" }}</v-btn>
        </div>
      </v-form>
    </v-container>

    <v-row>
      <h3>Similar housing</h3>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Beautiful apartment </v-card-title>

          <v-card-subtitle> Waterloo,Ontario </v-card-subtitle>
          <v-divider />
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi architecto aspernatur eius esse, expedita fuga
            ipsum iusto necessitatibus praesentium quidem, repellat sint sit
            soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>

          <v-card-actions>
            <div />
            <v-spacer></v-spacer>

            <v-btn text> View details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Beautiful apartment </v-card-title>

          <v-card-subtitle> Waterloo,Ontario </v-card-subtitle>
          <v-divider />
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi architecto aspernatur eius esse, expedita fuga
            ipsum iusto necessitatibus praesentium quidem, repellat sint sit
            soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>

          <v-card-actions>
            <div />
            <v-spacer></v-spacer>

            <v-btn text> View details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Beautiful apartment </v-card-title>

          <v-card-subtitle> Waterloo,Ontario </v-card-subtitle>
          <v-divider />
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi architecto aspernatur eius esse, expedita fuga
            ipsum iusto necessitatibus praesentium quidem, repellat sint sit
            soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>
          <v-card-actions>
            <div />
            <v-spacer></v-spacer>
            <v-btn text> View details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Beautiful apartment </v-card-title>

          <v-card-subtitle> Waterloo,Ontario </v-card-subtitle>
          <v-divider />
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium animi architecto aspernatur eius esse, expedita fuga
            ipsum iusto necessitatibus praesentium quidem, repellat sint sit
            soluta sunt tenetur totam veritatis voluptatem!
          </v-card-text>
          <v-card-actions>
            <div />
            <v-spacer></v-spacer>
            <v-btn text> View details </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import publicApi from "@/api";

export default {
  mounted() {
    publicApi.get("/comments?id=" + this.$route.params.id).then((res) => {
      this.comments = res.data;
    });
  },
  name: "Product",
  data: () => ({
    rating: 5,
    comments: [],
    commentedText: "",
  }),
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },

    reviewCount() {
      const id = this.$route.params.id;
      return this.$store.state.product.reviews.filter((p) => p.product_id == id)
        .length;
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
    submitForm() {
      const productId = this.$route.params.id;
      /*       if (!this.isLoggedIn) {
        this.$store.commit("user/setLoginDialog", true);
        return;
      } */
      if (this.commentedText === "") {
        this.$store.dispatch(
          "notification/showErrorMessage",
          "Review text is missing"
        );
        return;
      }
      publicApi.post("/comments", {
        product_id: productId,
        text: this.commentedText,
        user_id: window.localStorage.getItem("user_id"),
      });
    },
    goToProduct(id) {
      this.$router.push({ name: "Product", params: { id } });
    },
  },
};
</script>
