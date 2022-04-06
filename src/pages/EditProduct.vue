<template>
  <v-container>
    <v-row>
      <v-col
       cols="5"
      >
        <v-row>
          <v-col cols="12">
           <h4>Edit image</h4>
          </v-col>
          <v-col cols="6" v-for="image in data.images" :key="image">
            <div :style="{'height':'200px','position':'relative','background-size':'contain','background-image':`url(${image})`}">
              <v-btn icon style="color: red;position: absolute;right: 0;top:5px;"  @click="removeImage(image)">
                <v-icon>
                  mdi-trash-can
                </v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12">
            <v-file-input
                outlined
                label="Images"
                multiple
                dense
                truncate-length="15"
                @change="handleFileChange"
                accept="image/*"
            ></v-file-input>
            <v-btn color="secondary" block  :loading="loading" v-if="newImages.length > 0" @click="uploadImage">
              Upload
            </v-btn>
          </v-col>

        </v-row>

      </v-col>
      <v-col
       cols="7"
      >
        <v-col cols="12">
          <h4>Edit details</h4>
        </v-col>
        <v-alert color="red" class="white--text" v-if="errorMessage !== ''">
          {{ errorMessage }}
        </v-alert>
        <v-text-field
            dense
            name="user_name"
            label="Name *"
            v-model="data.name"
            type="text"
            outlined
        ></v-text-field>
        <v-text-field
            dense
            name="location"
            label="Location *"
            type="text"
            v-model="data.location"
            outlined
        ></v-text-field>
        <v-select
            dense
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
            dense
            name="user_name"
            label="Price *"
            type="number"
            v-model="data.price"
            outlined
        ></v-text-field>
        <v-text-field
            dense
            name="user_name"
            label="No of bedroom *"
            v-model="data.no_of_bedroom"
            type="number"
            outlined
        ></v-text-field>
        <v-text-field
            dense
            name="user_name"
            label="No of bathroom *"
            v-model="data.no_of_bathroom"
            type="number"
            outlined
        ></v-text-field>
        <v-text-field
            dense
            name="user_name"
            label="No of parking space *"
            v-model="data.no_of_parking_space"
            type="number"
            outlined
        ></v-text-field>
        <v-text-field
            dense
            name="user_name"
            label="Built in *"
            v-model="data.built_in"
            type="text"
            outlined
        ></v-text-field>
        <v-text-field
            dense
            name="user_name"
            label="Area(Sq foot) *"
            v-model="data.area"
            type="text"
            outlined
        ></v-text-field>
        <v-btn color="secondary" block  :loading="loading" @click="submitForm">
          Update details
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

import publicApi from "@/api";

export default {
  name: "EditProduct",
  data() {
    return {
      data :{
        name:"asdf",
        place_type:"Condo",
        description:"asdf",
        price:0,
        no_of_bedroom:0,
        no_of_bathroom:0,
        no_of_parking_space:0,
        images:"",
        built_in:"1994",
        area:"15",
        location:"Waterloo,Ontario"
      },
      errorMessage:'',
      newImages:[],
      loading: false,
      items:['Condo','Villa','Mansions','Room']
    };
  },
  mounted() {
    publicApi.get('/products/'+this.$route.params.id).then((res)=>{
      this.data = res.data
    })
  },
  methods: {
    uploadImage(){
      const formData = new FormData()
      this.newImages.forEach((i) =>{
        formData.append('images',i)
      })
      publicApi.post("/products/upload-images/"+this.$route.params.id,formData).then((res) => {
        this.$store.commit('notification/showSuccessMessage',res.data.message)
        this.newImages = [];
        this.data.images = res.data.images;
      })
    },
    removeImage(image){
      if (!confirm('Are you sure')){
        return;
      }
      const productId = this.$route.params.id;
      const imageName = image.split('/').pop()
      publicApi.post(`/products/delete-image/${productId}`,{
        image:imageName
      }).then((res)=>{
         this.data.images = this.data.images.filter( i => i !== imageName)
         this.$store.commit('notification/showSuccessMessage',res.data.message)
      })
    },
    handleFileChange(files){
      this.newImages = files
    },
    submitForm() {
      this.errorMessage = "";
      const {name,place_type,description,price,no_of_parking_space,no_of_bathroom,no_of_bedroom,built_in,area,location} = this.data;
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
      if (location === "") {
        this.errorMessage = "Location is required";
        return;
      }


      this.loading = true
      const d = Object.assign({},this.data)
      //Joi will not accept _id _v
      delete d['_id']
      delete  d['__v']
      delete  d['images']
      delete  d['user']
      publicApi.put("/products/"+this.$route.params.id,d).then((res) =>{
        this.$store.commit('notification/showSuccessMessage',res.data.message)
      }).finally(() =>{
        this.loading = false
      })


    },
  },
};
</script>
