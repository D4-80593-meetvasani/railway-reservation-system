// App.js
import React from "react";
import Landing from "./components/landing/Landing";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/aboutUs/ContactUs";
import Faqs from "./components/aboutUs/Faqs";
import UserLogin from "./components/authentication/UserLogin";
import SignUp from "./components/user/SignUp";
import MyBookings from "./components/user/MyBookings";
import AdminLogin from "./components/authentication/AdminLogin";
import MainDiv from "./components/MainDiv";
import TrainList from "./components/train/TrainList";
import AddTrain from "./components/train/AddTrain";
import TrainStatus from "./components/train/TrainStatus";
import PassengerDetails from "./components/bookings/PassengerDetails";
import AdminHome from "./components/admin/AdminHome";
import BookingSuccess from "./components/bookings/BookingSuccess";
import { AuthProvider } from "./contexts/AuthContext";
import UserProfile from "./components/user/UserProfile";
import EditProfile from "./components/user/EditProfile";

const App = () => {
  const appStyles = {
    // backgroundColor: "#C5FFF8",
    minHeight: "100vh",
    width: "100vw",
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainDiv />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="userlogin" element={<UserLogin />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="trainlist" element={<TrainList />} />
        <Route path="adminhome" element={<AdminHome />} />
        <Route path="addtrain" element={<AddTrain />} />
        <Route path="trainstatus" element={<TrainStatus />} />
        <Route path="passengerdetails" element={<PassengerDetails />} />
        <Route path="booksuccess" element={<BookingSuccess />} />
        <Route path="mybookings" element={<MyBookings />} />
        <Route path="userprof" element={<UserProfile />} />
        <Route path="edituserprofile" element={<EditProfile />} />

        {/* why am I not able to use 'userprofile' instead of 'userprof' in the above line. If I use 'userprofile' then landing page is not shown*/}
        <Route path="*" element={<Landing />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <div style={appStyles}>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
