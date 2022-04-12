<template>
  <v-container fluid class="pr-16 pl-16">
    <v-row>
      <v-col cols="5">
        <v-row>
          <v-col
            v-for="image in product.images"
            :key="image"
            class="d-flex child-flex"
            cols="6"
          >
            <v-img
              :src="image"
              :lazy-src="image"
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
        <h2>{{ product.name }}</h2>
        <v-tabs fixed-tabs background-color="indigo" dark>
          <v-tab> Overview </v-tab>
          <v-tab> Features </v-tab>
          <v-tab-item key="1" class="pl-2 pr-2">
            <p class="subtitle-1 mt-8">
              {{ product.description }}
            </p>
          </v-tab-item>
          <v-tab-item key="2">
            <ul style="list-style: none">
              <li>
                <i class="mdi mdi-bed-double-outline"></i>
                {{ product.no_of_bedroom }} Bedrooms
              </li>
              <li>
                <i class="mdi mdi-shower"></i>
                {{ product.no_of_bathroom }} Bathrooms
              </li>
              <li>
                <i class="mdi mdi-calendar"></i>
                Built in {{ product.built_in }}
              </li>
              <li>
                <i class="mdi mdi-rectangle-outline"></i>
                {{ product.area }} Sq ft
              </li>
              <li>
                <i class="mdi mdi-parking"></i>
                {{ product.no_of_parking_space }} Parking
              </li>
            </ul>
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
      <v-col
        cols="4"
        v-for="popular_product in similarProducts"
        :key="popular_product._id"
      >
        <v-card class="mx-auto" max-width="344">
          <v-img :src="popular_product.images[0]" height="200px"></v-img>

          <v-card-title>
            {{ popular_product.name }}
          </v-card-title>

          <v-card-subtitle>
            {{ popular_product.location }}
          </v-card-subtitle>
          <v-divider />
          <v-card-text>
            {{ popular_product.description }}
          </v-card-text>

          <v-card-actions>
            <div />
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
  </v-container>
</template>

<script>
import publicApi from "@/api";

export default {
  mounted() {
    this.fetchComments();
    publicApi.get("/products/" + this.$route.params.id).then((res) => {
      this.product = res.data;
    });
    publicApi
      .get("/products?type=similar&id=" + this.$route.params.id)
      .then((res) => {
        this.similarProducts = res.data;
      });
  },
  name: "Product",
  data: () => ({
    rating: 5,
    comments: [],
    commentedText: "",
    product: {},
    similarProducts: [],
  }),
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },

    products() {
      return this.$store.state.product.products;
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
      publicApi
        .post("/comments", {
          product_id: productId,
          text: this.commentedText,
        })
        .then(() => {
          this.$store.commit(
            "notification/showSuccessMessage",
            "Comment added successfully"
          );
          this.fetchComments();
          this.commentedText = "";
        });
    },
    fetchComments() {
      publicApi.get("/comments?id=" + this.$route.params.id).then((res) => {
        this.comments = res.data;
      });
    },
    goToProduct(id) {
      this.$router.push({ name: "Product", params: { id } });
    },
  },
};
</script>
