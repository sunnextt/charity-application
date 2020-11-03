import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/app.css";
import MiniHeader from "./components/header/MiniHeader";
// import Navbar from "./components/header/Navbar";
import Navbar from "./componentsnav/Navbar";

import Footer from "./components/header/Footer";
import HomePage from "./components/home/HomePage";
import DonationProcess from "./components/donation/DonationPage";
import RegistarPolicy from "./components/ngoRegisteration/NGOPolicyPage";
import Registration from "./components/ngoRegisteration/NGORegistrationPage1";
import NewsPage from "./components/news/NewsPage";
import RegCompletion from "./components/ngoRegisteration/NGORegitsrationPageComplete";
import LoginForm from "./components/ngoRegisteration/Ngologin";
import DashBoard from "./components/dashboard/AdminDashboard";

import PrivateRoute from './components/routing/PrivateRoute';


// ADMIN LOGIN AND REG
import AdminReg from "./components/authetication/AdminReg";
import AdminLogin from "./components/authetication/AdminLogin";


import Error from "./components/page/ErrorPage";
import SuccessReg from './components/page/SuccessReg'

import AlertState from "./context/alert/AlertState";
import CharityState from "./context/context/CharityState";
import AuthState from "./context/auth/AuthState";


// Data Files
import testimonialContent from "./components/testimonial/TestimonialContent.json";

function App() {

  return (
    <div className="App">
      <CharityState>
        <AlertState>
          <AuthState>
          <Router>
            <MiniHeader />
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage
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
                Contact Us
              </Route>
              <Route exact path="/donation_process">
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
              <PrivateRoute exact path='/dashboard' component={DashBoard} />
              <Route exact path="/about_us">
              </Route>
              <Route exact path="/Success_reg">
                <SuccessReg />
              </Route>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
            <Footer />
          </Router>
          </AuthState>
        </AlertState>
      </CharityState>
    </div>
  );


}

export default App;
