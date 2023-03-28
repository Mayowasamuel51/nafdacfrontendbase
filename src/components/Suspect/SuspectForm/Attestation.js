import React from "react";

const Attestation = ({ inputs, checkInput, error }) => {
  return (
    <div className="container">
      {/* Attestation */}
      <div
        className="m-5 p-4"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-up"
        data-aos-delay="2"
        data-aos-easing="ease-in"
      >
        <h1 className="text-center fs-4">
          I hereby attest that the information i entered is true and correct to
          the best of my knowledge...
        </h1>
        <div className="row d-flex flex-row justify-content-center flex-lg-nowrap flex-wrap">
          <div className="col-md-6">
            <div className="mb-1">
              <label className="form-label fs-5">Name </label>
              <input
                className="form-control w-100 py-3 shadow"
                name="hereby_name"
                value={inputs.hereby_name}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.hereby_name}</span>
            </div>
            <div className="mb-3">
              <label className="form-label fs-5">Date</label>
              <input
                type="date"
                className="form-control w-100 py-3 shadow"
                name="hereby_signature"
                value={inputs.hereby_signature}
                onChange={checkInput}
              />
              <span className="text-danger fs-6">{error.hereby_signature}</span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mt-5 text-center">
              <h2 className="text-secondary fs-5 text-center">
                A Simple Note About This Suspect ( {inputs.name} )
              </h2>
              <textarea
                className="form-control"
                placeholder="wirte a short note about this suspect"
                name="note"
                value={inputs.note}
                onChange={checkInput}
              ></textarea>
              <span className="text-danger fs-6">{error.note}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attestation;
