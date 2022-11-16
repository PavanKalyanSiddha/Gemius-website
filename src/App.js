// import React, { useEffect } from "react";

import Container from "./Components/Container";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Philosopy from "./Components/Philosopy";
import Work from "./Components/Work";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
// import history from "./Components/history";

const App = () => {
  // useEffect(() => {
  //   if (history.location.pathname) {
  //     // window.location.reload();
  //   }
  // }, [history.location.pathname]);
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Container />}></Route>
          <Route exact path="/philosopy" element={<Philosopy />}></Route>
          <Route exact path='/contactus' element={< Contact />}></Route>
          <Route exact path='/work' element={< Work />}></Route>
          <Route exact path='/careers' element={< Careers />}></Route>


        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

export default App;
