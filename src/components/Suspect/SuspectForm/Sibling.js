import React, { useState } from "react";

const Sibling = ({ inputs, checkInput, error }) => {
  const [sibs, setSibling] = useState(true);

  const addSibling = (e) => {
    e.preventDefault();
    setSibling((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        {/* Sibling */}
        <div
          className="m-5 p-4"
          style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
          data-aos="fade-up"
          data-aos-delay="2"
          data-aos-easing="ease-in"
        >
          <h1 className="text-center fs-4 mb-5">Sibling</h1>
          <div className="row d-flex flex-row g-3 justify-content-between flex-lg-nowrap flex-wrap">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fs-5">Name </label>
                <input
                  className="form-control w-100 py-3 shadow"
                  value={inputs.Sibling1_name}
                  onChange={checkInput}
                  name="Sibling1_name"
                />
                <span className="text-danger fs-6">{error.Sibling1_name}</span>
              </div>

              <div className="mb-3">
                <label className="form-label fs-5">Date of Birth</label>
                <input
                  type="month"
                  value={inputs.Sibling1_birth}
                  onChange={checkInput}
                  name="Sibling1_birth"
                  className="form-control w-100  py-3 shadow"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fs-5">Phone Number</label>
                <input
                  className="form-control w-100  py-3 shadow"
                  value={inputs.Sibling1_phone}
                  onChange={checkInput}
                  name="Sibling1_phone"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fs-5">Residential Address</label>
                <input
                  type="text"
                  value={inputs.Sibling1_res_address}
                  onChange={checkInput}
                  name="Sibling1_res_address"
                  className="form-control w-100  py-3 shadow"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 col-md-6 col-sm-3"
              style={{ marginRight: "3rem" }}
            >
              <div className="float-end text-center m-auto">
                <button
                  className="btn bg-success px-4 py-3 rounded-circle text-white"
                  onClick={addSibling}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <span className="fs-6 d-block">Add sibling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other */}
      <div className={sibs ? `container d-none`: 'container d-block'}>
        {/* Sibling */}
        <div
          className="m-5 p-4"
          style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
          data-aos="fade-up"
          data-aos-delay="2"
          data-aos-easing="ease-in"
        >
          <h1 className="text-center fs-4 mb-5">Sibling 2</h1>
          <div className="row d-flex flex-row g-3 justify-content-between flex-lg-nowrap flex-wrap">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fs-5">Name </label>
                <input
                  className="form-control w-100 py-3 shadow"
                  value={inputs.Sibling2_name}
                  onChange={checkInput}
                  name="Sibling2_name"
                />
                <span className="text-danger fs-6">{error.Sibling2_name}</span>
              </div>

              <div className="mb-3">
                <label className="form-label fs-5">Date of Birth</label>
                <input
                  type="month"
                  value={inputs.Sibling1_birth}
                  onChange={checkInput}
                  name="Sibling2_birth"
                  className="form-control w-100  py-3 shadow"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fs-5">Phone Number</label>
                <input
                  className="form-control w-100  py-3 shadow"
                  value={inputs.Sibling2_phone}
                  onChange={checkInput}
                  name="Sibling2_phone"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fs-5">Residential Address</label>
                <input
                  type="text"
                  value={inputs.Sibling2_res_address}
                  onChange={checkInput}
                  name="Sibling2_res_address"
                  className="form-control w-100  py-3 shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sibling;
