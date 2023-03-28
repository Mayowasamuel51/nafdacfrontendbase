import React, { useState } from "react";
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";

const PersonalInfo = ({
  checkInput,
  inputs,
  error,
  PlaceBirth,
  langs,
  SpokenLang,
  mystate,
  international_passport,
  changeHandler,
  changeHandler_1,
  changeHandler_2,
  nin,
  driver
}) => {
  return (
    <div className="container">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-label="Example with label"
          style={{ width: "10%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          10%
        </div>
      </div>
      {/* Personal info */}
      <div
        className="ml-5 mt-5 p-5"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
        data-aos="fade-right"
        data-aos-delay="90"
        data-aos-easing="ease-in-out"
      >
        <h3
          className="text-dark fs-4 mb-2 text-center"
          style={{ fontFamily: "600" }}
        >
          Personal Information
        </h3>
        <div className="row d-flex flex-row justify-content-center align-items-center flex-lg-nowrap flex-wrap">
          <div className="col-md-6 p-4">
            <div className="w-100">
              <label className="form-label fs-5 mt-3">FirstName:</label>
              <input
                type="text"
                className="form-control py-3"
                placeholder="First name"
                name="name"
                value={inputs.name}
                onChange={checkInput}
              />
              <span className="text-danger  fs-6">{error.firstname}</span>
              <br></br>
              <label className="form-label fs-5 mt-3">MiddleName:</label>
              <input
                type="text"
                className="form-control py-3"
                placeholder="Middlename"
                name="middlename"
                value={inputs.middlename}
                onChange={checkInput}
              />
              <span className="text-danger  fs-6">{error.middlename}</span>
              <br></br>
              <label className="form-label fs-5 mt-3">LastName:</label>
              <input
                type="text"
                className="form-control py-3"
                placeholder="LastName"
                name="lastname"
                value={inputs.lastname}
                onChange={checkInput}
              />
              <span className="text-danger  fs-6">{error.lastname}</span>
            </div>
          </div>

          <div className="col-md-6 p-4">
            <div
              className="mx-auto"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                justifyContent: "space-between",
              }}
            >
              <div className="mb-1 d-inline-block justify-center">
                <p className="text-dark fs-5 mb-1">Date Of Birth:</p>
                <input
                  type="date"
                  className="form-control py-3"
                  name="date_birth"
                  onChange={checkInput}
                  value={inputs.date_birth}
                />
                <span className="text-danger  fs-6">{error.date_birth}</span>
              </div>

              <div className="mb-1">
                <p className="text-dark fs-5 mb-1">Place Of Birth:</p>
                <select
                  className="form-control state py-3"
                  name="place_birth"
                  onChange={PlaceBirth}
                >
                  {mystate.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <span className="text-danger  fs-6">{error.place_birth}</span>
              </div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <p className="text-dark fs-5 mb-1">Gender:</p>
                  <label className="form-check-label">Male</label>
                  <input
                    className="form-check-input "
                    name="gender"
                    value="Male"
                    onChange={checkInput}
                    type="checkbox"
                  />
                  <span className="text-danger fs-6">{error.gender}</span>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    name="gender"
                    value="female"
                    onChange={checkInput}
                    type="checkbox"
                  />
                  <label className="form-check-label">Female</label>
                  <span className="text-danger  fs-5">{error.gender}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex flex-row justify-content-center align-items-center flex-lg-nowrap flex-wrap">
          <div className="col-md-6 p-4">
            <div
              className="mx-auto"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="mb-1">
                <p className="text-dark fs-5 mb-2">
                  NIN
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  aria-describedby="emailHelpId"
                  placeholder="NIN"
                  value={inputs.nin}
                  onChange={checkInput}
                />
              </div>
              <div className="mb-1">
                <p className="text-dark fs-5 mb-1">Mobile Phone:</p>
                <input
                  type="number"
                  className="form-control py-3"
                  name="moblie_phone"
                  value={inputs.moblie_phone}
                  onChange={checkInput}
                  placeholder="Phone Number"
                />
                <span className="text-danger  fs-6">{error.mobile_phone}</span>
              </div>

              <div className="mb-1">
                <p className="text-dark fs-5 mb-1">Office Phone:</p>
                <input
                  type="number"
                  className="form-control py-3"
                  name="Office_phone"
                  value={inputs.Office_phone}
                  onChange={checkInput}
                  placeholder="Office Phone Number"
                />
                <span className="text-danger fs-6">{error.office_phone}</span>
              </div>
              <div className="mb-1">
                <p className="text-dark fs-5 mb-1">Email:</p>
                <input
                  type="email"
                  className="form-control py-3"
                  placeholder="Email address"
                  name="email"
                  onChange={checkInput}
                  value={inputs.email}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <div
              className="mx-auto"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                justifyContent: "space-evenly",
              }}
            >
              <div className="mb-1">
                <p className="text-dark fs-5 mb-2">
                  International Passport Number:
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  aria-describedby="emailHelpId"
                  value={inputs.international_passport}
                  onChange={checkInput}
                  placeholder="Enter Number"
                />
              </div>

              

              <div className="mb-1">
                <p className="text-dark fs-5 mb-2">
                 Driver
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  aria-describedby="emailHelpId"
                  placeholder="Driver"
                  value={inputs.driver}
                  onChange={checkInput}
                />
              </div>

              <div className="mb-1">
                <p className="text-dark fs-5 mb-2">Spoken Languages:</p>
                <select
                  className="form-control spoken py-3"
                  name="langugaes"
                  onChange={SpokenLang}
                >
                  {langs.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <span className="text-danger fs-6">{error.languages}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex flex-row justify-content-center align-items-baseline align-content-center flex-lg-nowrap flex-wrap">
          <div className="col-md-6 p-4">
            <div className="mx-auto" style={{ display: "block" }}>
              <div className="mb-1">
                <p className="text-dark fs-5 mb-2">Residential Address:</p>
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="Enter residential address"
                  name="Res_address"
                  value={inputs.Res_address}
                  onChange={checkInput}
                />
              </div>
              <span className="text-danger fs-6">
                {error.residental_address}
              </span>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <div className="mx-auto" style={{ display: "block" }}>
              <div className="mb-1">
                <p className="text-dark fs-5 mb-1">Office/Shop:</p>
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="Office/Shop address"
                  onChange={checkInput}
                  name="Office_shop_res"
                  value={inputs.Office_shop_res}
                />
              </div>
              <span className="text-danger fs-6">{error.office_shop}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
