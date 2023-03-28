import React from "react";
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";

const Spouse = ({ inputs, checkInput, error }) => {
  return (
    <div className="container">
      {/* Spouse */}
      <div
        className="m-5 p-5"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-up"
        data-aos-delay="2"
        data-aos-easing="ease-in"
      >
        <h1 className="text-center fs-4 mb-5">Spouse</h1>
        <div className="row d-flex flex-row g-3 justify-content-between flex-lg-nowrap flex-wrap">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label fs-5">Name of Spouse</label>
              <input
                className="form-control w-100 shadow py-3"
                name="spouse_name"
                value={inputs.spouse_name}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.spouse_name}</span>
            </div>

            <div className="mb-3">
              <label className="form-label fs-5">Maiden Name (if wife)</label>
              <input
                className="form-control w-100 shadow py-3"
                name="spouse_maiden"
                value={inputs.spouse_maiden}
                onChange={checkInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-5">Date of Birth</label>
              <input
                type="date"
                className="form-control w-100 shadow py-3"
                name="spouse_date_brith"
                value={inputs.spouse_date_brith}
                onChange={checkInput}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label fs-5">Residential Address</label>
              <input
                className="form-control w-100 shadow py-3"
                name="spouse_residential_address"
                value={inputs.spouse_residential_address}
                onChange={checkInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-5">Phone Number</label>
              <input
                type="number"
                className="form-control w-100 shadow py-3"
                name="spouse_phone"
                value={inputs.spouse_phone}
                onChange={checkInput}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fs-5">Place of Work</label>
              <input
                type="text"
                className="form-control w-100 shadow py-3"
                name="spouse_work"
                value={inputs.spouse_work}
                onChange={checkInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spouse;
