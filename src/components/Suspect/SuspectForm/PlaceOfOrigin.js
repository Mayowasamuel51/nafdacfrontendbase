import React from "react";
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";

const PlaceOfOrigin = ({
  checkInput,
  inputs,
  error,
  mystate,

  // Change, current_state, current_local
}) => {
  return (
    <div className="container">
      {/* Place of origin */}
      <div
        className="m-5 p-5"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-up"
        data-aos-delay="2"
        data-aos-easing="ease-in"
      >
        <h1 className="text-center fs-4">Place of Origin</h1>
        <div className="row d-flex flex-row g-3 justify-content-between flex-lg-nowrap flex-wrap">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label fs-5">Nationality</label>
              <input
                value={inputs.nationality}
                onChange={checkInput}
                className="form-control py-3 shadow"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fs-5">State</label>
              <select
                className="form-control py-3 shadow"
                name="state"
                id="current_state"
              >
                {mystate.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <span className="text-danger  fs-6">{error.state}</span>
            </div>
            <div className="mb-3">
              <label className="form-label fs-5">Ethnic Group</label>
              <select className="form-control w-100 py-3 shadow">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3 mt-3">
              <label className="form-label fs-5">Local Goverment</label>
              <select
                className="form-control w-100 py-3 shadow"
                id="current_local"
              ></select>
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label fs-5">Town/Village</label>
              <select className="form-control w-100 py-3 shadow">
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOfOrigin;
