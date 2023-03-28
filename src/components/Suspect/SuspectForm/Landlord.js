import React from "react";
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";

const Landlord = ({ inputs, checkInput, error }) => {
  return (
    <div>
      {/* Landlord/Caretaker */}
      <div
        className="m-5 p-4"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-down"
        data-aos-delay="2"
        data-aos-easing="ease-in"
      >
        <h1 className="text-center fs-4 mb-4">Landlord/Caretaker</h1>
        <div className="row d-flex flex-row g-3 justify-content-between flex-lg-nowrap flex-wrap">
          <div className="col-md-4">
            <div className="mb-1">
              <label className="form-label fs-5">Name </label>
              <input
                className="form-control w-100 py-3 shadow"
                name="Landlord_name"
                value={inputs.Landlord_name}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.Landlord_name}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label fs-5">Residential Address</label>
              <input
                className="form-control w-100 py-3 shadow"
                name="Landlord_address"
                value={inputs.Landlord_address}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.Landlord_address}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-1">
              <label className="form-label fs-5">Phone Number</label>
              <input
                type="number"
                className="form-control w-100 py-3 shadow"
                name="Landlord_phone"
                value={inputs.Landlord_phone}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.Landlord_phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlord;
