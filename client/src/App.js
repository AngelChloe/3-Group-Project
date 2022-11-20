import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import DashboardPage from "./client/pages/dashboard";
import AboutUsPage from "./client/pages/aboutus";
import DestinationPage from "./client/pages/destinations";
import PastTripsPage from "./client/pages/pasttrips";
import LoginPage from "./client/pages/login";
import SignupPage from "./client/pages/signup";

function App() {
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
