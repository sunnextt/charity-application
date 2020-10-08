import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/app.css';
import MiniHeader from "./components/header/MiniHeader";
import Navbar from "./components/header/Navbar"
import Footer from "./components/header/Footer";
import PageNotFound from "./components/home/PageNotFound";
import HomePage from "./components/home/HomePage";
import DonationProcess from './components/donation/DonationPage'
import RegistarPolicy from './components/ngoRegisteration/NGOPolicyPage'
import Registration from './components/ngoRegisteration/NGORegistrationPage1'
import NewsPage from './components/news/NewsPage'
import RegCompletion from './components/ngoRegisteration/NGORegitsrationPageComplete'
import LoginForm from './components/authetication/Ngologin'
import AdminPage from './components/authetication/AdminReg'
import DashBoard from './components/dashboard/AdminDashboard'
import Error from './components/page/ErrorPage'

import AdminMain from './components/dashboard/AdminMain'


// Data Files
import bannerContent from './components/home/HeaderContent.json'
import testimonialContent from "./components/testimonial/TestimonialContent.json";


function App() {
  return (
    <div className="App">
      <Router>
        <MiniHeader />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage bannerContent={bannerContent} testimonialContent={testimonialContent} />
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
            <AdminPage />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard  />
          </Route>
          <Route exact path="/about_us">
            <PageNotFound />
          </Route>
          <Route exact path="*">
            <Error/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
