<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="countries">
          <template v-slot:items="props">
            <td>{{ props.item.caption }}</td>
            <td>{{ props.item.latitude }}</td>
            <td>{{ props.item.longitude }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-snackbar top right v-model="snackbar.showError">
      {{ snackbar.text }}
      <v-btn color="error" flat @click="snackbar.showError = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "Table",
  data() {
    return {
      countries: [],
      headers: [
        {
          text: "Caption",
          name: "caption",
          sortable: false
        },
        {
          text: "Latitude",
          name: "latitude",
          sortable: false
        },
        {
          text: "Longitude",
          name: "longitude",
          sortable: false
        }
      ],
      snackbar: {
        showError: false,
        text: ""
      }
    };
  },
  methods: {
    transformCountryData(countryData) {
      let {
        name: countryName,
        capital: countryCapital,
        location: { latitude, longitude }
      } = { ...countryData };
      return {
        caption: `${countryCapital} is capital of ${countryName}`,
        longitude: longitude,
        latitude: latitude
      };
    },
    checkIfDataIsAllRight(countryData) {
      if (
        _.has(countryData, "name") &&
        _.has(countryData, "capital") &&
        _.has(countryData, "location.longitude") &&
        _.has(countryData, "location.latitude")
      ) {
        let {
          name: countryName,
          capital: countryCapital,
          location: { latitude, longitude }
        } = { ...countryData };
        if (
          typeof countryName !== "string" ||
          typeof countryCapital !== "string" ||
          typeof latitude !== "number" ||
          typeof longitude !== "number"
        ) {
          this.snackbar.showError = true;
          this.snackbar.text =
            "Error occurred while parsing data! Some data will not display.";
          return false;
        } else return true;
      } else {
        this.snackbar.showError = true;
        this.snackbar.text =
          "Error occurred while parsing data! Some data will not display.";
        return false;
      }
    }
  },
  mounted() {
    axios
      .get("countries.json")
      .then(res => {
        this.countries = res.data
          .filter(country => this.checkIfDataIsAllRight(country))
          .map(country => this.transformCountryData(country));
      })
      .catch(error => {
        this.snackbar.showError = true;
        this.snackbar.text = "Error occurred while retrieving data!";
      });
  }
};
</script>

<style scoped></style>
