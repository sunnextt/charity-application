import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import MiniHeader from "./components/header/MiniHeader";
import Navbar from "./components/header/Navbar";
import Footer from "./components/header/Footer";
import PageNotFound from "./components/home/PageNotFound";
import HomePage from "./components/home/HomePage";
import DonationProcess from "./components/donation/DonationPage";
import RegistarPolicy from "./components/ngoRegisteration/NGOPolicyPage";
import Registration from "./components/ngoRegisteration/NGORegistrationPage1";
import NewsPage from "./components/news/NewsPage";
import RegCompletion from "./components/ngoRegisteration/NGORegitsrationPageComplete";
import LoginForm from "./components/ngoRegisteration/Ngologin";
import DashBoard from "./components/dashboard/AdminDashboard";

// ADMIN LOGIN AND REG
import AdminReg from "./components/authetication/AdminReg";
import AdminLogin from "./components/authetication/AdminLogin";



import Error from "./components/page/ErrorPage";


import AlertState from "./context/alert/AlertState";
import CharityState from "./context/context/CharityState";

// Data Files
// import content from "./components/home/HeaderContent.js";
import testimonialContent from "./components/testimonial/TestimonialContent.json";

function App() {
  return (
    <div className="App">
      <CharityState>
        <AlertState>
          <Router>
            <MiniHeader />
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage
                  // content={content}
                  testimonialContent={testimonialContent}
                />
              </Route>
              <Route exact path="/registration_policy">
                <RegistarPolicy />
              </Route>
              <Route exact path="/login_form">
                <LoginForm />
              </Route>
              <Route exact path="/registration_contact">
                <Registration />
              </Route>
              <Route exact path="/registration_complete/">
                <RegCompletion />
              </Route>
              <Route exact path="/contact_us">
                <DonationProcess />
              </Route>
              <Route exact path="/blogs">
                <NewsPage />
              </Route>
              <Route exact path="/admin_reg">
                <AdminReg />
              </Route>
              <Route exact path="/admin_login">
                <AdminLogin />
              </Route>
              <Route exact path="/dashboard">
                <DashBoard />
              </Route>
              <Route exact path="/about_us">
                <PageNotFound />
              </Route>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AlertState>
      </CharityState>
    </div>
  );
}

export default App;
