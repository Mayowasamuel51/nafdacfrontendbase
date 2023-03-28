// this will be the form  will the rf officer will fill;
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

function Rfoffiecer() {
    const location = useLocation()
    const notyf = new Notyf();
    const { martic_number } = useParams();
    const suspect_martic_number = martic_number;
    const getSuspectOfficer = () => {
        return axios(`/api/add-suspect-officerrf/${suspect_martic_number}`).then(res => res.data.suspect)
    }
    let navigate = useHistory();
    const [input, setInput] = useState({
        suspect_name: "",
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
        note: "",
        error_list: [],
    });
    const [myerror, setMyerror] = useState("");
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setOfficerData] = useState([]);

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
    }, [Call]);

    let martic_numbe = "";
    let suspect_name = "";
    let suspect_na;
    name.map((item) => {
        martic_numbe = item.martic_number;
        suspect_name = item.firstname;
        suspect_na = item.firstname;
    });
    const [statevalue, setStatevalue] = useState("");
    const stay = (e) => {
        setStatevalue(e.target.value);
    };
    let alert = ''
    const unitId = localStorage.getItem('unitId')
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
            suspect_name: suspect_na,
            // officer_name: input.officer_name,
            // officer_signature_date: input.officer_signature_date,
            // oc_name: input.oc_name,
            // oc_signature_date: input.oc_signature_date,
            martic_number: martic_number,
            unitId: unitId
        };
        axios.post("/api/officers", data).then((response) => {
            if (response.data.status === 200) {
                if (location.pathname === `/unit1Osun/rf/add-suspect-officer/${martic_number}`) {
                    navigate.push(`/unit1Osun/rf`)
                    localStorage.removeItem('martic_number')
                    notyf.success('INFO ADDED ');
                }
                if (location.pathname === `/unit2Osun/edit-suspect-surety/${martic_number}`) {
                    navigate.push(`/unit2Osun/frontdesk`)
                    localStorage.removeItem('martic_number')
                }

            } else if (response.data.status === 422) {
                // console.log('please fill the input fiieds')
                setError(response.data.errors);
            }
        });
    };

    return (
        <>

            <Navbar />
            <div className="mt-5 " style={{
                margin: 'auto', width: '80%'
            }} id="oc-officer">
                {/* <Nav /> */}
                <div className="text-center">
                    { }
                </div>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <form
                                method="post"
                                onSubmit={submitForm}
                                className="p-5"
                                style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
                            >
                                <div className="row mt-4">
                                    <h1 className="text-center text-danger fs-5">
                                        Note: you are about to fill the form for the suspect named ({" "}
                                        {suspect_name} )
                                    </h1>
                                    <hr></hr>
                                    <div className="row mb-3">
                                        <div className="col-md-12 mb-5">
                                            <h3
                                                className="text-dark text-center fs-4 mb-4"
                                                style={{ fontWeight: "600" }}
                                            >
                                                For Investigating Police Officer & Regulatory Officers Use
                                                Only
                                            </h3>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-around",
                                                }}
                                            >
                                                <div className="mb-3">
                                                    <label className="form-label">Height of Suspect</label>

                                                    <input
                                                        value={input.height_of_suspect}
                                                        onChange={handleInput}
                                                        name="height_of_suspect"
                                                        type="text"
                                                        className="form-control shadow"
                                                        aria-describedby="helpId"
                                                        placeholder="Height of Suspect"
                                                    />
                                                    <span className="text-danger">
                                                        {error.height_of_suspect}
                                                    </span>
                                                </div>

                                                <div className="mb-3 ms-2">
                                                    <label className="form-label">Weight of Suspect</label>
                                                    <input
                                                        type="text"
                                                        value={input.weight_of_suspect}
                                                        onChange={handleInput}
                                                        name="weight_of_suspect"
                                                        className="form-control shadow"
                                                        aria-describedby="helpId"
                                                        placeholder="Weight of suspect"
                                                    />
                                                    <span className="text-danger">
                                                        {error.weight_of_suspect}
                                                    </span>
                                                </div>

                                                <div className="mb-3 ms-2">
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
                                                    <span className="text-danger">
                                                        {error.suspect_name ? (
                                                            <>
                                                              
                                                                <h1 className="h5 fw-bolder text-warning">
                                                                    This Form has be Submited IPO is expected to fill
                                                                    is part ...
                                                                  
                                                                </h1>
                                                            </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">
                                                        Distinguishing Features (birth marks, tattoos, facial
                                                        feautures)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={input.distinguinshing_features}
                                                        onChange={handleInput}
                                                        name="distinguinshing_features"
                                                        className="form-control shadow"
                                                        aria-describedby="helpId"
                                                        placeholder="Distinguishing Features (birth marks, tattoos, facial feautures)"
                                                    />
                                                    <span className="text-danger">
                                                        {error.distinguinshing_features}
                                                    </span>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="htmlForm-label">
                                                        Nature Of Crime Committed?
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={input.nature_of_crime}
                                                        onChange={handleInput}
                                                        name="nature_of_crime"
                                                        className="form-control shadow"
                                                        aria-describedby="helpId"
                                                        placeholder=""
                                                    />
                                                    <span className="text-danger">
                                                        {error.nature_of_crime}
                                                    </span>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="htmlForm-label">
                                                        Is the suspect a first time, second time, third time
                                                        or recidivist offender?
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={input.number_of_offense}
                                                        onChange={handleInput}
                                                        name="number_of_offense"
                                                        className="form-control shadow"
                                                        aria-describedby="helpId"
                                                        placeholder="Is the suspect a first time, second time, third time or recidivist offender"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">
                                                        Who are the suspects accomplices? (if not alone)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={input.accomplices}
                                                        onChange={handleInput}
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
                                                        value={input.motive}
                                                        onChange={handleInput}
                                                        name="motive"
                                                        className="form-control shadow"
                                                        placeholder="motive"
                                                        aria-describedby="helpId"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="htmlForm-label">
                                                        Were there any financial benefits? (if yes, state
                                                        them)
                                                    </label>
                                                    <textarea
                                                        type="text"
                                                        value={input.financial_benefits}
                                                        onChange={handleInput}
                                                        name="financial_benefits"
                                                        className="form-control shadow"
                                                        aria-describedby="helpId"
                                                        placeholder="Were there any financial benefits? (if yes, state them)"
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="htmlForm-label">
                                                        Was the crime committed in a clandestine environment?
                                                        (if yes, give detailed description)
                                                    </label>
                                                    <textarea
                                                        cols="30"
                                                        rows="0"
                                                        value={input.environment_commited}
                                                        onChange={handleInput}
                                                        name="environment_commited"
                                                        className="form-control shadow"
                                                    ></textarea>
                                                    <span className="text-danger">{input.error_list}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="d-flex flex-row justify-content-between align-items-center align-content-baseline flex-md-nowrap flex-wrap">
                                                <h3
                                                    className="text-dark fs-5 mb-2"
                                                    style={{ fontWeight: "500" }}
                                                >
                                                    Record ID:
                                                </h3>
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        value={input.enfd}
                                                        onChange={handleInput}
                                                        name="enfd"
                                                        className="form-control shadow"
                                                        placeholder="ENFD/"
                                                    />
                                                    <span className="text-danger">{error.enfd}</span>
                                                </div>

                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        value={input.cr}
                                                        onChange={handleInput}
                                                        className="form-control shadow"
                                                        placeholder="CR:"
                                                        name="cr"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="d-flex flex-row justify-content-between align-items-center align-content-baseline flex-md-nowrap flex-wrap">
                                                        <h3
                                                            className="text-dark fs-5 mb-2"
                                                            style={{ fontWeight: "500" }}
                                                        >
                                                            Regulatory Officer:
                                                        </h3>
                                                        <div className="mb-3">
                                                            <label className="htmlForm-label">Name</label>
                                                            <input
                                                                type="text"
                                                                value={input.reg_officer_name}
                                                                onChange={handleInput}
                                                                name="reg_officer_name"
                                                                className="form-control shadow"
                                                                aria-describedby="helpId"
                                                                placeholder=""
                                                            />
                                                            <span className="text-danger">
                                                                {error.reg_officer_name}
                                                            </span>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="htmlForm-label">Date</label>
                                                            <input
                                                                type="date"
                                                                value={input.reg_signature_date}
                                                                onChange={handleInput}
                                                                name="reg_signature_date"
                                                                className="form-control shadow"
                                                                aria-describedby="helpId"
                                                                placeholder=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <hr />
                                                <div>
                                                    <h4> Short Note ({suspect_name}) </h4>
                                                    <textarea className="form-control" name="note" value={input.name} onChange={handleInput}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h1 className="fs-5  text-start text-danger">
                                        Note: This data can not be reversed after submission <br></br>
                                        <span className="fs-5">Review the Data Carefully.</span>
                                    </h1>
                                </div>
                                <br></br>
                                <div className="mx-auto container">
                                    <button className="btn btn-dark px-5 py-2 text-bold text-center rounded-0 ">
                                        Submit
                                    </button>
                                </div>
                                <div>
                                    <br></br>
                                <span className="text-danger pt-4">
                                                        {error.suspect_name ? (
                                                            <>
                                                              
                                                                <h1 className="h5 fw-bolder text-warning">
                                                                    This Form has be Submited IPO is expected to fill
                                                                    is part ...
                                                                  
                                                                </h1>
                                                            </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Rfoffiecer;