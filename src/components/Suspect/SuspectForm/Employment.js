import React from "react";

const Employment = ({ checkInput, inputs, error }) => {
  return (
    <div className="container">
      {/* Employment Background */}
      <div
        className="m-5 p-4"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-up"
        data-aos-delay="2"
        data-aos-easing="ease-in"
      >
        <h1 className="text-center fs-4">Employment Background</h1>
        <div className="mx-auto mt-2">
          <div className="row">
            <div
              className="col-md-6 col-lg-12 col-sm-4"
              style={{ display: "flex",flexDirection: 'column',  justifyContent: "center" }}
            >
              <div className="mb-1">
                <label className="form-label fs-5">Last Place Worked:</label>
                <input
                  type="text"
                  className="form-control shadow py-3"
                  placeholder=""
                  aria-describedby="helpId"
                  onChange={checkInput}
                  name="last_place"
                  value={inputs.last_place}
                />
                <span className="text-danger fs-6">{error.last_place}</span>
              </div>
              <div className="mb-1">
                <label className="form-label fs-5">
                  Address of Last Employer:
                </label>
                <input
                  type="text"
                  className="form-control shadow py-3"
                  aria-describedby="helpId"
                  onChange={checkInput}
                  name="address_employer"
                  value={inputs.address_employer}
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-12 col-sm-4"
              style={{ display: "flex",flexDirection: 'column', justifyContent: "center" }}
            >
              <div className="mb-1">
                <label className="form-label fs-5">Penultimate Place:</label>
                <input
                  type="text"
                  className="form-control shadow py-3"
                  aria-describedby="helpId"
                  onChange={checkInput}
                  name="Penultimate_Place"
                  value={inputs.Penultimate_Place}
                />
                <span className="text-danger      fs-6">
                  {error.Penultimate_Place}
                </span>
              </div>
              <div className="mb-1">
                <label className="form-label fs-5">Address of Employer:</label>
                <input
                  type="text"
                  className="form-control shadow py-3"
                  aria-describedby="helpId"
                  onChange={checkInput}
                  name="address_of_penultimate"
                  value={inputs.address_of_penultimate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
