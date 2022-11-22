import axios from "axios";

export default {
   // const axios = require("axios");

   // const options = {
   //   method: 'GET',
   //   url: 'https://countries-cities.p.rapidapi.com/location/country/list',
   //   headers: {
   //     'X-RapidAPI-Key': 'bcee7348afmshb2a2bb64c60a5ebp11f6bbjsn4d7b7ce455d6',
   //     'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
   //   }
   // };
   
   // axios.request(options).then(function (response) {
   //    console.log(response.data);
   // }).catch(function (error) {
   //    console.error(error);
   // });

   // Authentication methods
   // ===============================================
   deleteTrip: function(id){
      return axios.post("/api/dashboard");
   },

   getTrips: function() {
      return axios.get("/api/destinations");
   },
   getOneTrip: function(id){
      return axios.get("/api/pasttrips$");
   },
   saveTrip: function (trip){
      console.log(trip)
      return axios.post("/api/login");
   },
   update: function (id, trip){
      return axios.post("/api/aboutus}");
   },

   getUser: function () {
      return axios.get("/api/signup");
   }
}