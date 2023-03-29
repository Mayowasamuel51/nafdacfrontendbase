// this will be the form  will the ipo officer will fill;
import Navbar from "../../pages/layoutAuth/Navbar";
import swal from "sweetalert";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

function IPOofficer() {
    const unitId = localStorage.getItem('unitId')
    const location = useLocation()
    const [police, setPolice] = useState([]);

    const notyf = new Notyf();
    const { martic_number } = useParams();
    const suspect_martic_number = martic_number;

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
        iponote: "",
        oc_signature_date: "",
      });
    const [myerror, setMyerror] = useState("");
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setOfficerData] = useState([]);
    let police_id = "";
    const fetchPolice = useCallback( async  () => {
        await axios.get(`/api/officerdetails/${suspect_martic_number}/${unitId}`)
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
    });
    useEffect(() => {
        fetchPolice();
    }, []);
    const Call = useCallback(() => {
        axios(`/api/add-suspect-officerrf/${suspect_martic_number}`).then((res) => {
            if (res.status === 200) {
                const api = res.data.suspect;
                setOfficerData(api);
            }
        });
    })
    useEffect(() => {
        Call();
    }, []);
    police.map((item) => {
        police_id = item.id;
    });
    let martic_numbe = "";
    let suspect_name = "";
    let suspect_na;
    let get_suspect_id = ''
    name.map((item) => {
        martic_numbe = item.martic_number;
        suspect_name = item.firstname;
        suspect_na = item.firstname;
        get_suspect_id = item.id
    });
    const [statevalue, setStatevalue] = useState("");
    const stay = (e) => {
        setStatevalue(e.target.value);
    };
    let alert = ''

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
            iponote: input.iponote,
            // oc_name: '',
            // oc_signature_date: '',
            suspect_name: suspect_name,
            martic_number: martic_number,
            unitId: unitId


          };

        
        axios.put(`/api/officeripo/${police_id}`, data).then((res) => {
            if (res.data.status === 200) {
                if (location.pathname === `/unit1Osun/ipo/add-suspect-officer/${martic_number}`) {
                    navigate.push(`/unit1Osun/ipo`)
                    localStorage.removeItem('martic_number')
                    notyf.success('INFO ADDED ');
                }
                if (location.pathname === `/unit2Osun/edit-suspect-surety/${martic_number}`) {
                    navigate.push(`/unit2Osun/frontdesk`)
                    localStorage.removeItem('martic_number')
                }

            } else if (res.data.status === 422) {
                setError(res.data.errors);
            }
        

        });
    };


let page_load_form = "";
if (page_load_form) {
    return (
        <div className="spinner-border text-success text-center" role="status">
            <span className="visually-hidden">Loading......</span>
        </div>
    );
} else {
    page_load_form =
        police.length > 0 ? (
            police.map((item, index) => {
                return (
                    <div key={index}>
                        <br></br> <br></br>
                        <div className="row mt-4">
                            <h1 className="text-center text-danger fs-5">
                                Note: you are about to fill the form for the suspect named ({" "}
                                {suspect_name} )
                            </h1>
                            <hr></hr>
                            <div className="col-md-12">
                                <h3
                                    className="text-dark fs-4 mb-4"
                                    style={{ fontWeight: "600" }}
                                >
                                    For Investigating Police Officer & Regulatory Officers Use
                                    Only
                                </h3>

                                <div
                                    style={{ display: "flex", justifyContent: "space-around" }}
                                >
                                    <div className="mb-3">
                                        <label className="form-label">Height of Suspect</label>
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
                                        <label className="form-label">Weight of Suspect</label>
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
                                        <label className="form-label">Suspect Name</label>
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
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="htmlForm-label">
                                        Distinguishing Features (birth marks, tattoos, facial
                                        feautures)
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
                                    <label className="htmlForm-label">
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
                                    <label className="htmlForm-label">
                                        Is the suspect a first time, second time, third time or
                                        recidivist offender?
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
                                    <label className="htmlForm-label">
                                        Who are the suspects accomplices? (if not alone)
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
                                    <label className="htmlForm-label">Motive</label>
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
                                    <label className="htmlForm-label">
                                        Were there any financial benefits? (if yes, state them)
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
                                    <label className="htmlForm-label">
                                        Was the crime committed in a clandestine environment? (if
                                        yes, give detailed description)
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

                            <div className="col-md-12">
                                <h3
                                    className="text-dark fs-5 mb-2"
                                    style={{ fontWeight: "500" }}
                                >
                                    Record ID
                                </h3>
                                <div
                                    style={{ display: "flex", justifyContent: "space-around" }}
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
                                            className="text-dark fs-5 mb-2"
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
                                                <label className="htmlForm-label">Name</label>
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
                                    <div>
                                        <h5>Note Taking On ({suspect_name}) By {item.reg_officer_name}</h5>
                                        <div className="container is-widescreen mb-4 " style={{ padding: '2rem', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                                            <p className="text-start">{item.note}</p>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div>
                <h2 className="text-danger fw-bold fs-3 text-center ">
                    No Regulatory Officer Record{" "}
                </h2>
                {/* <p>THIS CAN ONLY SHOW IF THE Regulatory OFFICER HAS FILLED A FORM FOR THIS SUSPECT</p> */}
            </div>
        );
}


return (
    <>

        <Navbar />
        <div className="mt-5  m-5 container " id="ipo-officer">
            <div className="text-center">
                {/* <button className="btn btn-dark rounded-0 px-5 py-2">
                        <Link
                            to="/ipo/dashboard"
                            className="text-light"
                            style={{ textDecoration: "none" }}
                        >
                            DashBoard
                        </Link>
                    </button> */}
             

                {/* <Link to={`moreinfo/${item.id}/${item.martic_number}`} className='btn btn-dark btn-sm'>More info</Link> */}
            </div>
            <div className="container-fluid p-3" style={{ margin: '50px' }}>
                <div className="row">
                    <div>
                        <form
                            method="post"
                            onSubmit={submitForm}
                            className="p-5"
                            style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
                        >
                            <div className="row mt-4">
                                {page_load_form}
                                <div className="col-md-12">


                                    {police.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                {item.officer_name?.length > 0 ?
                                                    <h2>Already Filled by INVESTIGATING POLICE OFFICER </h2> :
                                                    <>
                                                        <div>
                                                            <h3
                                                                className="text-dark fs-5 mb-2"
                                                                style={{ fontWeight: "500" }}
                                                            >
                                                                Investigating Police Officer
                                                            </h3>

                                                            <div
                                                                style={{ display: "flex", justifyContent: "space-around" }}
                                                            >
                                                                <div className="mb-3">
                                                                    <label className="htmlForm-label">Name</label>
                                                                    <input
                                                                        id="iponame"
                                                                        type="text"
                                                                        className="form-control shadow"
                                                                        aria-describedby="helpId"
                                                                        placeholder=""
                                                                        value={input.officer_name}
                                                                        onChange={handleInput}
                                                                        name="officer_name"
                                                                    />
                                                                    <span className="text-danger">{error.officer_name}</span>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label className="htmlForm-label">Signature & Date</label>
                                                                    <input
                                                                        id="ipodate"
                                                                        type="date"
                                                                        className="form-control shadow"
                                                                        aria-describedby="helpId"
                                                                        placeholder=""
                                                                        value={input.officer_signature_date}
                                                                        onChange={handleInput}
                                                                        name="officer_signature_date"
                                                                    />
                                                                    <span className="text-danger">
                                                                        {error.officer_signature_date}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <h5>Short Note on  ({suspect_name})</h5>
                                                            <textarea className="form-control" name="iponote" value={input.iponote} onChange={handleInput}></textarea>
                                                            <br />

                                                        </div>
                                                        <div className="mt-4">
                                                            <h1 className="fs-5  text-start text-danger">
                                                                Note: This data can not be reversed after submission <br></br>
                                                                <span className="fs-5">Review the Data Carefully</span>
                                                            </h1>
                                                        </div>
                                                        <br></br>
                                                        <div className="mx-auto container">
                                                            <button className="btn btn-dark px-5 py-2 text-light text-center rounded-0 ">
                                                                Submit
                                                            </button>
                                                        </div>

                                                    </>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* </div> */}
                            {/* <div className="mt-5 d-flex justify-content-center align-content-center">
                                <button type="submit" className="btn btn-success text-white px-5 py-2 w-25">Submit</button>
                            </div> */}
                            {/* <div className="mt-4">
                    <h1 className="fs-5  text-start text-danger">
                      Note: This data can not be reversed after submission <br></br>
                      <span className="fs-5">Review the Data Carefully</span>
                    </h1>
                  </div>
                  <br></br>
                  <div className="mx-auto container">
                    <button className="btn btn-dark px-5 py-2 text-light text-center rounded-0 ">
                      Submit
                    </button>
                  </div> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}

export default IPOofficer;