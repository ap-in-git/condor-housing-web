<template>
  <v-layout align-center justify-center>
    <v-card elevation="0" class="mt-2" style="width: 60%">
      <v-card-text class="pt-2 pb-8 px-12">
        <v-form @submit.prevent="submitForm">
          <v-card-title style="justify-content: center">
            Add new housing
          </v-card-title>
          <v-alert color="red" class="white--text" v-if="errorMessage !== ''">
            {{ errorMessage }}
          </v-alert>
          <v-text-field
            name="user_name"
            label="Name *"
            v-model="data.name"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            name="location"
            label="Location *"
            type="text"
            v-model="data.location"
            outlined
          ></v-text-field>
          <v-select
            outlined
            :items="items"
            label="Place type"
            v-model="data.place_type"
          ></v-select>

          <v-textarea
            outlined
            name="input-7-1"
            label="Description"
            v-model="data.description"
            value=""
          ></v-textarea>
          <v-text-field
            name="user_name"
            label="Price *"
            type="number"
            v-model="data.price"
            outlined
          ></v-text-field>
          <v-text-field
            name="user_name"
            label="No of bedroom *"
            v-model="data.no_of_bedroom"
            type="number"
            outlined
          ></v-text-field>
          <v-text-field
            name="user_name"
            label="No of bathroom *"
            v-model="data.no_of_bathroom"
            type="number"
            outlined
          ></v-text-field>
          <v-text-field
            name="user_name"
            label="No of parking space *"
            v-model="data.no_of_parking_space"
            type="number"
            outlined
          ></v-text-field>
          <v-file-input
            outlined
            label="Images"
            multiple
            truncate-length="15"
            @change="handleFileChange"
            accept="image/*"
          ></v-file-input>
          <v-text-field
            name="user_name"
            label="Built in *"
            v-model="data.built_in"
            type="text"
            outlined
          ></v-text-field>
          <v-text-field
            name="user_name"
            label="Area(Sq foot) *"
            v-model="data.area"
            type="text"
            outlined
          ></v-text-field>

          <v-btn color="secondary" block type="submit" :loading="loading">
            Add
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import publicApi from "@/api";

export default {
  name: "Register",
  data() {
    return {
      data: {
        name: "",
        place_type: "",
        description: "",
        price: 0,
        no_of_bedroom: 0,
        no_of_bathroom: 0,
        no_of_parking_space: 0,
        images: "",
        built_in: "",
        area: "",
        location: "",
      },
      errorMessage: "",

      loading: false,
      items: ["Condo", "Villa", "Mansions", "Room"],
    };
  },
  methods: {
    handleFileChange(files) {
      this.data.images = files;
    },
    submitForm() {
      this.errorMessage = "";
      const {
        name,
        place_type,
        description,
        price,
        no_of_parking_space,
        no_of_bathroom,
        no_of_bedroom,
        built_in,
        area,
        location,
      } = this.data;
      if (name === "") {
        this.errorMessage = "Name is required";
        return;
      }
      if (place_type === "") {
        this.errorMessage = "Place type is required";
        return;
      }
      if (description === "") {
        this.errorMessage = "Description is required";
        return;
      }
      if (price === "") {
        this.errorMessage = "Price is required";
        return;
      }

      if (no_of_parking_space === "") {
        this.errorMessage = "Parking space is required";
        return;
      }
      if (no_of_bathroom === "") {
        this.errorMessage = "No of bathroom is required";
        return;
      }
      if (no_of_bedroom === "") {
        this.errorMessage = "Parking space is required";
        return;
      }
      if (built_in === "") {
        this.errorMessage = "Parking space is required";
        return;
      }
      if (area === "") {
        this.errorMessage = "Parking space is required";
        return;
      }
      if (this.data.images.length === 0) {
        this.errorMessage = "Select images";
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("place_type", place_type);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("price", price);
      formData.append("no_of_bedroom", no_of_bedroom);
      formData.append("no_of_bathroom", no_of_bathroom);
      formData.append("no_of_parking_space", no_of_parking_space);
      formData.append("built_in", built_in);
      formData.append("area", area);

      this.data.images.forEach((i) => {
        formData.append("images", i);
      });

      this.loading = true;
      publicApi
        .post("/products", formData)
        .then((res) => {
          this.$store.commit(
            "notification/showSuccessMessage",
            res.data.message
          );
          setTimeout(() => {
            this.$router.push("/my-listing");
          }, 1000);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
