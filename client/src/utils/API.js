import axios from "axios";

export default {
   
  
   // Authentication methods
   // ===============================================

   destinations: function() {
      // const RAPIDAPI_KEY= "bcee7348afmshb2a2bb64c60a5ebp11f6bbjsn4d7b7ce455d6"
      // const GEOLOCATION_URL = "https://countries-cities.p.rapidapi.com/location/country/GB/geojson"
      // const GEOLOCATION_HOST = "countries-cities.p.rapidapi.com"

      // const RapidAPI_Key = "bcee7348afmshb2a2bb64c60a5ebp11f6bbjsn4d7b7ce455d6"
      // const RAPIDPII_URL = "https://andruxnet-world-cities-v1.p.rapidapi.com/"
      // const RAPID_HOST = "andruxnet-world-cities-v1.p.rapidapi.com"
     
      const options = {
         method: 'GET',
         url: 'https://andruxnet-world-cities-v1.p.rapidapi.com/',
         params: {query: 'paris', searchby: 'city'},
         headers: {
           'X-RapidAPI-Key': 'bcee7348afmshb2a2bb64c60a5ebp11f6bbjsn4d7b7ce455d6',
           'X-RapidAPI-Host': 'andruxnet-world-cities-v1.p.rapidapi.com'
         }
      }
            return axios.request(options);
   },
   //    const runApiQueries = async ()=> {
   //       const geoData = getData(GEOLOCATION_URL, GEOLOCATION_HOST);
   //       console.log(geoData);

   //    },
   // runApiQueries();

   getDashboard: function(id){
      return axios.post("/api/dashboard");
   },

   getDestinations: function() {
      return axios.get("./api/destinations");
   },
   getOneTrip: function(id){
      return axios.get("/api/pasttrips");
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