import React from "react";
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";

const Mother = ({ inputs, checkInput, error }) => {
  return (
    <div className="container">
      {/* Mother */}
      <div
        className="m-5 p-4"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-up"
        data-aos-delay="2"
        data-aos-easing="ease-in"
      >
        <h1 className="text-center fs-4 mb-5">Mother</h1>
        <div className="row d-flex flex-row g-3 justify-content-between flex-lg-nowrap flex-wrap">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label fs-5">Name </label>
              <input
                className="form-control w-100 py-3 shadow"
                name="mother_name"
                value={inputs.mother_name}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.mother_name}</span>
            </div>

            <div className="mb-3">
              <label className="form-label fs-5">Date of Birth</label>
              <input
                type="month"
                className="form-control w-100 py-3 shadow"
                name="mother_birth"
                value={inputs.mother_birth}
                onChange={checkInput}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label fs-5">Phone Number</label>
              <input
                className="form-control w-100 py-3 shadow"
                name="mother_phone"
                value={inputs.mother_phone}
                onChange={checkInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-5">Residential Address</label>
              <input
                type="text"
                className="form-control w-100 py-3 shadow"
                name="mother_res_address"
                value={inputs.mother_res_address}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">
                {error.mother_res_address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mother;
