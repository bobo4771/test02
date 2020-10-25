<template>
  <div>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="textList"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      textList: [],
      search: '',
      headers: [
        {
          text: 'Espresso',
          align: 'start',
          sortable: 'false',
          value: 'Espresso',
        },
        { text: 'Cappuccino', value: 'Cappuccino' },
        { text: 'Mocca', value: 'Mocca' },
        { text: 'Latte', value: 'Latte' },
        { text: 'Doppio', value: 'Doppio' },
        { text: 'Americano', value: 'Americano' },
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('coffee')
        .orderBy('Espresso')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
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
