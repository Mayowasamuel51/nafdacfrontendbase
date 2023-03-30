
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Navbar from "../../pages/layoutAuth/Navbar";

const OfficersForSuspect = () => {
  let navigate = useHistory();
  const [input, setInput] = useState({
    height_of_suspect: "",
    weight_of_suspect: "",
    distinguinshing_features: "",
    nature_of_crime: "",
    number_of_offense: "",
    accomplices: "",
    motive: "",
    financial_benefits: "",
    environment_commited: "",
    enfd: "",
    cr: "",
    reg_officer_name: "",
    reg_signature_date: "",
    officer_name: "",
    officer_signature_date: "",
    oc_name: "",
    oc_signature_date: "",
  });
  const [loading, setLoading] = useState(false);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState([]);
  const [name, setOfficerData] = useState([]);
  const { id, martic_number } = useParams();
  const suspect_id = id;
  const my_martic_number = martic_number;
  const Call = () => {
    axios(`/api/add-suspect-officerad/${suspect_id}`).then((res) => {
      if (res.status === 200) {
        const api = res.data.suspect;
        setOfficerData(api);
      }
    });
  };
  useEffect(() => {
    Call();
  }, []);
  let martic_num = "";
  let suspect_name = "";
  let suspect_na;
  name.map((item) => {
    martic_num = item.martic_number;
    suspect_name = item.firstname;
    suspect_na = item.firstname;
  });
  const [police, setPolice] = useState([]);
  const [statevalue, setStatevalue] = useState("");
  const stay = (e) => {
    setStatevalue(e.target.value);
  };
  let police_id = "";
  const fetchPolice = async () => {
    await axios
      .get(`/api/officervaluead/${my_martic_number}`)
      .then((res) => {
        if (res.data.status === 200) {
          const api = res.data.data;
          setPolice(api);
          console.log(police);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  police.map((item) => {
    police_id = item.id;
  });
  useEffect(() => {
    fetchPolice();
  }, []);
  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      height_of_suspect: input.height_of_suspect,
      weight_of_suspect: input.weight_of_suspect,
      distinguinshing_features: input.distinguinshing_features,
      nature_of_crime: input.nature_of_crime,
      number_of_offense: input.number_of_offense,
      accomplices: input.accomplices,
      motive: input.motive,
      financial_benefits: input.financial_benefits,
      environment_commited: input.environment_commited,
      enfd: input.enfd,
      cr: input.cr,

      reg_officer_name: input.reg_officer_name,
      reg_signature_date: input.reg_signature_date,
      officer_name: input.officer_name,
      officer_signature_date: input.officer_signature_date,
      oc_name: input.oc_name,
      oc_signature_date: input.oc_signature_date,
      suspect_name: suspect_name,
      martic_number: my_martic_number,
    };
    axios.put(`/api/officeroc/${police_id}`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        window.location.reload(false); // hot reload
      } else if (res.data.status === 404) {
        // setError(res.data.errors)
        console.log("this failed");
      } else {
        setError(res.data.errors);
      }
    });
  };
  const [value, setValue] = useState([]);

  const handelValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div
      className=""
      style={{
        // boxShadow:
        //   "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
        marginTop: "6em",
      }}
    >
      <Navbar/>
      <div className="text-center mb-5">
        <button className="btn btn-dark px-5 py-2 rounded-0">
          <Link
            to="/admin/dashboard"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            Go to dashboard
          </Link>
        </button>

        {/* <Link to={`moreinfo/${item.id}/${item.martic_number}`} className='btn btn-dark btn-sm'>More info</Link> */}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div>
            <form
              method="post"
              onSubmit={submitForm}
              className="p-5"
              style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
            >
              <div>
                {police.length > 0 ? (
                  police.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="row mt-4">
                          {/* <h1 className='text-center text-danger fs-4'>Note ::  Your about to Fill the Form for the Suspect Named  ( {suspect_name}  )</h1> */}
                          <hr></hr>
                          <div className="col-md-12 text-center">
                            <h3
                              className="text-dark fs-4 mb-4"
                              style={{ fontWeight: "600" }}
                            >
                              For Investigating Police Officer & Regulatory
                              Officers Use Only
                            </h3>

                            <div
                              style={{
                                display: "flex",
                                marginBottom: '3rem',
                                justifyContent: "space-around",
                              }}
                            >
                              <div className="mb-3">
                                <label className="form-label">
                                  Height of Suspect
                                </label>
                                <input
                                  onChange={handleInput}
                                  value={item.height_of_suspect}
                                  name="height_of_suspect"
                                  type="text"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder="Height of Suspect"
                                />
                                {/* <span className="text-danger">{error.height_of_suspect}</span> */}
                              </div>

                              <div className="mb-3">
                                <label className="form-label">
                                  Weight of Suspect
                                </label>
                                <input
                                  type="text"
                                  value={item.weight_of_suspect}
                                  name="weight_of_suspect"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder="Weight of suspect"
                                />
                                {/* <span className="text-danger">{error.weight_of_suspect}</span> */}
                              </div>

                              <div className="mb-3">
                                <label className="form-label">
                                  Suspect Name
                                </label>
                                <input
                                  type="text"
                                  value={suspect_name}
                                  onChange={stay}
                                  name="suspect_name"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder="Weight of suspect"
                                />
                                {/* <span className="text-danger">{error.martic_number}</span> */}
                                {/* <span className="text-danger"> */}
                                {/* {error.suspect_name ? <h1 className="fs-5 text-warning">This Form has be Submited OC is expected */}
                                {/* to close  the form ...</h1> : ''}</span> */}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">
                                  Distinguishing Features ? (birth marks, tattoos,
                                  facial feautures)
                                </label>
                                <input
                                  type="text"
                                  onChange={handleInput}
                                  value={item.distinguinshing_features}
                                  name="distinguinshing_features"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder="Distinguishing Features (birth marks, tattoos, facial feautures)"
                                />
                              </div>

                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">
                                  Nature Of Crime Committed?
                                </label>
                                <input
                                  type="text"
                                  onChange={handleInput}
                                  value={item.nature_of_crime}
                                  name="nature_of_crime"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder=""
                                />
                              </div>

                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">
                                  Is the suspect a first time, second time,
                                  third time or recidivist offender?
                                </label>
                                <input
                                  type="text"
                                  onChange={handleInput}
                                  value={item.number_of_offense}
                                  name="number_of_offense"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder="Is the suspect a first time, second time, third time or recidivist offender"
                                />
                              </div>

                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">
                                  Who are the suspects accomplices? (if not
                                  alone)
                                </label>
                                <input
                                  type="text"
                                  onChange={handleInput}
                                  value={item.accomplices}
                                  name="accomplices"
                                  className="form-control shadow"
                                  placeholder=">Who are the suspects accomplices? (if not alone)"
                                  aria-describedby="helpId"
                                />
                              </div>

                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">Motive</label>
                                <input
                                  type="text"
                                  onChange={handleInput}
                                  value={item.motive}
                                  name="motive"
                                  className="form-control shadow"
                                  placeholder="motive"
                                  aria-describedby="helpId"
                                />
                              </div>

                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">
                                  Were there any financial benefits? (if yes,
                                  state them)
                                </label>
                                <textarea
                                  type="text"
                                  onChange={handleInput}
                                  value={item.financial_benefits}
                                  name="financial_benefits"
                                  className="form-control shadow"
                                  aria-describedby="helpId"
                                  placeholder="Were there any financial benefits? (if yes, state them)"
                                />
                              </div>

                              <div className="mb-3">
                                <label className="htmlForm-label fs-5">
                                  Was the crime committed in a clandestine
                                  environment? (if yes, give detailed
                                  description)
                                </label>
                                <textarea
                                  cols="30"
                                  rows="10"
                                  onChange={handleInput}
                                  value={item.environment_commited}
                                  name="environment_commited"
                                  className="form-control shadow"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <h3
                                className="text-dark fs-5 mb-2 mx-5"
                                style={{ fontWeight: "500" }}
                              >
                                Record ID
                              </h3>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                }}
                              >
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    onChange={handleInput}
                                    value={item.enfd}
                                    name="enfd"
                                    className="form-control shadow"
                                    placeholder="ENFD/"
                                  />
                                </div>

                                <div className="mb-3">
                                  <input
                                    type="text"
                                    onChange={handleInput}
                                    value={item.cr}
                                    className="form-control shadow"
                                    placeholder="CR:"
                                    name="cr"
                                  />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-12">
                                  <h3
                                    className="text-dark fs-5 mb-2 mx-5"
                                    style={{ fontWeight: "500" }}
                                  >
                                    Regulatory Officer
                                  </h3>

                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    <div className="mb-3">
                                      <label className="htmlForm-label">
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        value={item.reg_officer_name}
                                        onChange={handleInput}
                                        name="reg_officer_name"
                                        className="form-control shadow"
                                        aria-describedby="helpId"
                                        placeholder=""
                                      />
                                    </div>

                                    <div className="mb-3">
                                      <label className="htmlForm-label">
                                       Date
                                      </label>
                                      <input
                                        type="date"
                                        onChange={handleInput}
                                        value={item.reg_signature_date}
                                        name="reg_signature_date"
                                        className="form-control shadow"
                                        aria-describedby="helpId"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <h3
                                    className="text-dark fs-5 mb-2 mx-5"
                                    style={{ fontWeight:"500" }}
                                  >
                                    Investigating Police Officer
                                  </h3>

                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    <div className="mb-3">
                                      <label className="htmlForm-label">
                                        Name
                                      </label>
                                      <input
                                        id="ipoid"
                                        type="text"
                                        className="form-control shadow"
                                        aria-describedby="helpId"
                                        placeholder=""
                                        value={item.officer_name}
                                        onChange={handleInput}
                                        name="officer_name"
                                      />
                                      {/* <span className="text-danger">{error.officer_name}</span> */}
                                    </div>
                                    <div className="mb-3">
                                      <label className="htmlForm-label">
                                        Signature & Date
                                      </label>
                                      <input
                                        id="ipodate"
                                        type="date"
                                        className="form-control shadow"
                                        aria-describedby="helpId"
                                        placeholder=""
                                        value={item.officer_signature_date}
                                        onChange={handleInput}
                                        name="officer_signature_date"
                                      />
                                      {/* <span className="text-danger">{error.officer_signature_date}</span> */}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <h3
                                    className="text-dark fs-5 mb-2 mx-5"
                                    style={{ fontWeight: "500" }}
                                  >
                                    O/C Police Squad/FTF
                                  </h3>

                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    <div className="mb-3">
                                      <label className="htmlForm-label">
                                        Name
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control shadow"
                                        aria-describedby="helpId"
                                        placeholder=""
                                        value={item.oc_name}
                                        onChange={handleInput}
                                        name="oc_name"
                                      />
                                      {/* <span className="text-danger">{error.oc_name}</span> */}
                                    </div>
                                    <div className="mb-3">
                                      <label className="htmlForm-label">
                                        Date
                                      </label>
                                      <input
                                        type="date"
                                        value={item.oc_signature_date}
                                        onChange={handleInput}
                                        name="oc_signature_date"
                                        className="form-control shadow"
                                        aria-describedby="helpId"
                                        placeholder=""
                                      />
                                      {/* <span className="text-danger">{error.oc_signature_date}</span> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="container">
                    <br></br>
                    <h4 className="text-danger">
                      THERE ARE NO RECORD FOR THIS SUSPECT{" "}
                    </h4>
                  </div>
                )}
              </div>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficersForSuspect;
