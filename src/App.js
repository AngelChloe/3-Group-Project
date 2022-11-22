import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard";
import AboutUsPage from "./pages/aboutus";
import DestinationPage from "./pages/destinations";
import PastTripsPage from "./pages/pasttrips";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";


function App() {
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://countries-cities.p.rapidapi.com/location/country/list',
  headers: {
    'X-RapidAPI-Key': 'bcee7348afmshb2a2bb64c60a5ebp11f6bbjsn4d7b7ce455d6',
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <Layout>
     <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
        <Route path="/pasttrips" element={<PastTripsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> 

      </Routes>
    </Layout>
  );
}

export default App;
