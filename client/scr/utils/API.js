import axios from "axios";

export default {

    // Axios is an HTTP consumer library that permits you to make requests to a given endpoint.  Need to do an npm install axios
   // Authentication methods
   // ===============================================
   deleteTrip: function(id){
      return axios.post(`/api/calendar/delete/${id}`);
   },

   getTrips: function() {
      return axios.get("/api/calendar/populated");
   },
   getOneTrip: function(id){
      return axios.get(`/api/calendar/trip/${id}`);
   },
   saveTrip: function (trip){
      console.log(trip)
      return axios.post("/api/calendar/add", trip);
   },
   update: function (id, trip){
      return axios.post(`/api/calendar/update/${id}`, trip)
   },

   getUser: function () {
      return axios.get("/auth/user");
   },

   getAllUsers: function () {
      return axios.get("/api/users")
   },
   logout: function () {
      return axios.get("/auth/logout")
   }

};