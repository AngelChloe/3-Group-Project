import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard";
import AboutUsPage from "./pages/aboutus";
import DestinationPage from "./pages/destinations";
import PastTripsPage from "./pages/pasttrips";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Footer from "./components/layout/Footer";
import ContactPage from "./pages/contact";


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
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
