import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { IndexPage } from "./pages/IndexPage";

export const AppRouter = () => {
  return (
    <Router>
    <div>
      <NavBar />

      <div className='container'>
        <Routes >
          <Route exact path="/" element={<IndexPage />} />
          {/* <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} /> */}
          <Route path="*" element={<Navigate replace to="/" />} />



        </Routes>
      </div>



    </div>
  </Router>
  )
}
