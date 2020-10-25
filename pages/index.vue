<template>
  <div>
    <br />
    <v-card class="mx-auto pa-4" elevation="11">
      <h3>coffee</h3>
      <br />
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="Espresso"
              :counter="10"
              label="Espresso "
              required
            />
            <v-text-field
              v-model="Cappuccino"
              :counter="10"
              label="Cappuccino"
              required
            />
            <v-text-field
              v-model="Mocca"
              :counter="10"
              label="Mocca "
              required
            />

            <v-text-field
              v-model="Latte"
              :counter="10"
              label="Latte"
              required
            />

            <v-text-field
              v-model="Doppio"
              :counter="10"
              label="Doppio"
              required
            />
            <v-text-field
              v-model="Americano"
              :counter="10"
              label="Americano"
              required
            />
          </v-col>
        </v-row>
        <br />
        <v-btn :disabled="!valid" color="success" @click="addData">
          ตกลง
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      Espresso: '',
      Cappuccino: '',
      Mocca: '',
      Latte: '',
      Doppio: '',
      Americano: '',
    }
  },
  methods: {
    addData() {
      const data = {
        Espresso: this.Espresso,
        Cappuccino: this.Cappuccino,
        Mocca: this.Mocca,
        Latte: this.Latte,
        Doppio: this.Doppio,
        Americano: this.Americano,
      }
      db.collection('coffee')
        .doc()
        .set(data)
        .then(function () {
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
<style>
.theme--dark.v-application {
  background-image: url(https://www.khundee.com/wp-content/uploads/2019/01/roasted-bean.png);
  background-size: cover;
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
}
</style>
