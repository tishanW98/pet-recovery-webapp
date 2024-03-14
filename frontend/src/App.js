import React from "react";
import Login from "./components/LoginLogin";
import Register from "./components/Register";
//import "./App.css";
import Home from "./components/Home";

import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import LogUp from "./components/LogUp";
import LostMyPet from "./components/LostMyPet";
import CreateLostPet from "./components/CreateLostPet";
import CreateFoundPet from "./components/CreateFoundPet";
import ViewLostPets from "./components/ViewLostPets";
import ViewFoundPets from "./components/ViewFoundPets";
import ChangePet from "./components/ChangePet";
import ChangeFoundPet from "./components/ChangeFoundPet";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";



const App = () => {
    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/login" element={<LogIn/>} />

                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/logup" element={<LogUp/>} />
                    <Route path="/lostMyPet" element={
                        user ? <LostMyPet></LostMyPet> : <login/>
                    } />

                    <Route path="/createpet" element={
                        <CreateLostPet></CreateLostPet>
                    } /> 
                    <Route path="/createfoundpet" element={
                        <CreateFoundPet></CreateFoundPet>
                    } /> 


                    <Route path="/lostpets" element={
                        <ViewLostPets></ViewLostPets>
                    } /> 

                    <Route path="/foundpets" element={
                        <ViewFoundPets></ViewFoundPets>
                    } /> 


                    <Route path="/changepet/:id" element={<ChangePet />} />

                    <Route path="/changefoundpet/:id" element={<ChangeFoundPet />} />

                    <Route path="/aboutus" element={
                        <AboutUs></AboutUs>
                    } />

                    <Route path="/contactus" element={
                        <ContactUs></ContactUs>
                    } />


                    <Route path="/" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> :
                            <Login />

                    } />
                    <Route path="/logout" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Login />
                    } />

                    <Route path="/register" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Register />
                    } />
                </Routes>
                <Footer/>
            </Router>
        </div>

    );
};

export default App;
