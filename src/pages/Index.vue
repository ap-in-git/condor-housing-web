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
        </v-col>     <v-col>
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
      <v-row class="mt-4">
        <v-col sm="3">
          <v-list dense>
            <v-subheader>FILTERS</v-subheader>
            <v-list-item-group
                color="primary"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Condo</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Villa</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Mansions</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col sm="9">
          <v-card class="mt-2 mb-2">
            <v-card-text>
              <v-row>
                <v-col sm="4">
                  <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                      height="150px"
                  ></v-img>
                </v-col>
                <v-col sm="8">
                  <h2>Beautiful Apartment</h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                  </div>
                  <h4 class="mt-2 mb-2">
                    $ 15000
                  </h4>
                  <v-divider/>
                  <div style="display: flex;justify-content: space-between;align-items: center;">
                    <div class="subtitle-2 mt-2">
                      Waterloo, Ontario
                    </div>
                    <v-btn
                        style="background: white;"
                        depressed
                        x-small
                    >
                      <v-icon >
                        mdi-bookmark-outline
                      </v-icon>
                      Save
                    </v-btn>
                  </div>

                </v-col>
              </v-row>
            </v-card-text>
          </v-card>    <v-card class="mt-2 mb-2">
          <v-card-text>
            <v-row>
              <v-col sm="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
              </v-col>
              <v-col sm="8">
                <h2>Beautiful Apartment</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                </div>
                <h4 class="mt-2 mb-2">
                  $ 15000
                </h4>
                <v-divider/>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                  <div class="subtitle-2 mt-2">
                    Waterloo, Ontario
                  </div>
                  <v-btn
                      style="background: white;"
                      depressed
                      x-small
                  >
                    <v-icon >
                      mdi-bookmark-outline
                    </v-icon>
                    Save
                  </v-btn>
                </div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>    <v-card class="mt-2 mb-2">
          <v-card-text>
            <v-row>
              <v-col sm="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
              </v-col>
              <v-col sm="8">
                <h2>Beautiful Apartment</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                </div>
                <h4 class="mt-2 mb-2">
                  $ 15000
                </h4>
                <v-divider/>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                  <div class="subtitle-2 mt-2">
                    Waterloo, Ontario
                  </div>
                  <v-btn
                      style="background: white;"
                      depressed
                      x-small
                  >
                    <v-icon >
                      mdi-bookmark-outline
                    </v-icon>
                    Save
                  </v-btn>
                </div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>    <v-card class="mt-2 mb-2">
          <v-card-text>
            <v-row>
              <v-col sm="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
              </v-col>
              <v-col sm="8">
                <h2>Beautiful Apartment</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                </div>
                <h4 class="mt-2 mb-2">
                  $ 15000
                </h4>
                <v-divider/>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                  <div class="subtitle-2 mt-2">
                    Waterloo, Ontario
                  </div>
                  <v-btn
                      style="background: white;"
                      depressed
                      x-small
                  >
                    <v-icon >
                      mdi-bookmark-outline
                    </v-icon>
                    Save
                  </v-btn>
                </div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>    <v-card class="mt-2 mb-2">
          <v-card-text>
            <v-row>
              <v-col sm="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
              </v-col>
              <v-col sm="8">
                <h2>Beautiful Apartment</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                </div>
                <h4 class="mt-2 mb-2">
                  $ 15000
                </h4>
                <v-divider/>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                  <div class="subtitle-2 mt-2">
                    Waterloo, Ontario
                  </div>
                  <v-btn
                      style="background: white;"
                      depressed
                      x-small
                  >
                    <v-icon >
                      mdi-bookmark-outline
                    </v-icon>
                    Save
                  </v-btn>
                </div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>    <v-card class="mt-2 mb-2">
          <v-card-text>
            <v-row>
              <v-col sm="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
              </v-col>
              <v-col sm="8">
                <h2>Beautiful Apartment</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                </div>
                <h4 class="mt-2 mb-2">
                  $ 15000
                </h4>
                <v-divider/>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                  <div class="subtitle-2 mt-2">
                    Waterloo, Ontario
                  </div>
                  <v-btn
                      style="background: white;"
                      depressed
                      x-small
                  >
                    <v-icon >
                      mdi-bookmark-outline
                    </v-icon>
                    Save
                  </v-btn>
                </div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>    <v-card class="mt-2 mb-2">
          <v-card-text>
            <v-row>
              <v-col sm="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="150px"
                ></v-img>
              </v-col>
              <v-col sm="8">
                <h2>Beautiful Apartment</h2>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem blanditiis explicabo inventore officia porro provident voluptate. Adipisci aperiam blanditiis deleniti dicta ipsa nisi perspiciatis tempora ullam veniam vitae. Perferendis?
                </div>
                <h4 class="mt-2 mb-2">
                  $ 15000
                </h4>
                <v-divider/>
                <div style="display: flex;justify-content: space-between;align-items: center;">
                  <div class="subtitle-2 mt-2">
                    Waterloo, Ontario
                  </div>
                  <v-btn
                      style="background: white;"
                      depressed
                      x-small
                  >
                    <v-icon >
                      mdi-bookmark-outline
                    </v-icon>
                    Save
                  </v-btn>
                </div>

              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Index",
}
</script>