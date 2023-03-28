import React from "react";

const Education = ({
  checkInput,
  inputs,
  error,
  institutions,
  Institution,
}) => {
  return (
    <div className="container">
      {/* Education */}
      <div
        className="m-5"
        data-aos="fade-up"
        data-aos-delay="2"
        data-aos-easing="ease-in"
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          padding: "2rem",
        }}
      >
        <h1 className="text-center fs-4">Educational Background</h1>

        <div className="row ">
          <div className="col-md-6 mt-4 p-4">
            <div className="mx-auto mt-2 d-flex flex-column justify-content-center flex-lg-nowrap flex-wrap">
              <div className="mb-1">
                <label className="form-label fs-5">Tertiary Institution</label>
                <select
                  className="form-control py-3 "
                  name="tertiary_i"
                  onChange={Institution}
                >
                  {institutions.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <span className="text-danger fs-6">{error.tertiary_i}</span>
              </div>

              <div className="mb-1 ms-4">
                <label className="form-label fs-5">Year of Entry</label>
                <input
                  type="month"
                  className="form-control shadow py-3 "
                  aria-describedby="helpId"
                  name="year_of_entry"
                  onChange={checkInput}
                  value={inputs.year_of_entry}
                />
              </div>

              <div className="mb-1 ms-4">
                <label className="form-label fs-5">Year of Graduation</label>
                <input
                  type="month"
                  className="form-control shadow py-3 "
                  aria-describedby="helpId"
                  name="year_of_graduation"
                  onChange={checkInput}
                  value={inputs.year_of_graduation}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 p-4">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="mx-auto mt-2 d-flex flex-column justify-content-center flex-lg-nowrap flex-wrap"
                  style={{
                    gap: "1.4rem",
                  }}
                >
                  <div className="mb-1">
                    <label className="form-label fs-5">Secondary</label>
                    <input
                      type="text"
                      className="form-control shadow py-3 "
                      placeholder=""
                      aria-describedby="helpId"
                      name="Secondary"
                      onChange={checkInput}
                      value={inputs.Secondary}
                    />
                  </div>

                  <div className="mb-1">
                    <label className="form-label fs-5">Year of Entry</label>
                    <input
                      type="month"
                      className="form-control shadow py-3 "
                      aria-describedby="helpId"
                      name="year_of_secondary"
                      onChange={checkInput}
                      value={inputs.year_of_secondary}
                    />
                  </div>

                  <div className="mb-1">
                    <label className="form-label fs-5">
                      Year of Graduation
                    </label>
                    <input
                      type="month"
                      className="form-control shadow py-3 "
                      name="year_of_graduation_secondary"
                      onChange={checkInput}
                      value={inputs.year_of_graduation_secondary}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="mx-auto mt-2 d-flex flex-column justify-content-center flex-lg-nowrap flex-wrap"
                  style={{
                    gap: "1.4rem",
                  }}
                >
                  <div className="mb-1">
                    <label className="form-label fs-5">Primary</label>
                    <input
                      type="text"
                      className="form-control shadow py-3 "
                      placeholder=""
                      name="primary"
                      onChange={checkInput}
                      value={inputs.primary}
                    />
                  </div>

                  <div className="mb-1">
                    <label className="form-label fs-5">Year of Entry</label>

                    <input
                      type="month"
                      className="form-control shadow py-3 "
                      name="year_of_primary"
                      onChange={checkInput}
                      value={inputs.year_of_primary}
                    />
                  </div>

                  <div className="mb-1">
                    <label className="form-label fs-5">
                      Year of Graduation
                    </label>
                    <input
                      type="month"
                      className="form-control shadow py-3 "
                      name="year_of_graduation_primary"
                      onChange={checkInput}
                      value={inputs.year_of_graduation_primary}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
