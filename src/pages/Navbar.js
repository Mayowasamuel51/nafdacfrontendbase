

import React from "react";
import Nav from "./Nav";

function Navbar() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container mt-5">
        <div className="row justify-content-center mx-auto mt-5">
          <div className="col-md-12">
            <h1
              className="text-center text-dark fs-3 text-uppercase font-main"
              style={{ marginTop: "2em" }}
            >
              National Agency for food and drug administration and control
            </h1>
            <h5 className="text-center text-dark fs-5 text-uppercase">
              Investigation and enforcement directorate/federal task force on
              counterfeit and fake drugs and unwholesome processed foods
            </h5>
            <h5 className="bg-dark text-white text-center text-uppercase p-3 fs-5 m-auto w-50 rounded">
              Suspect and surety profiling
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
