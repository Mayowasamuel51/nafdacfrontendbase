import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Navbar from '../../pages/Navbar'
import swal from "sweetalert";

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

const Login = () => {
    const history = useHistory();
    const [role, setRole] = useState("");
    const [state, setState] = useState('')
    const [unit, setUnit] = useState("")
    const [loginInput, setLoginInput] = useState({
        tokenpass: "",
        password: "",
    });
    const notyf = new Notyf();
    const roleHanlder = (e) => {
        setRole(e.target.value)
        console.log(e.target.value)
    }
    const unitHanlder = (e) => {
        setUnit(e.target.value)
        console.log(e.target.value)
    }
    const stateHanlder = (e) => {
        setState(e.target.value)
        console.log(e.target.value)
    }
    const [error, setError] = useState([]);
    const [invaild, setinvaild] = useState([]);
    const handelInput = (e) => {
        e.persist();
        setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        const data = {
            unitId: unit,
            role: role,
            tokenpass: loginInput.tokenpass,
            password: loginInput.password
        };
        axios.post('api/login', data).then((res) => {
            if (unit === "unit1Osun") {
                if (res.data.role === 'frontdesk') {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("unitId", res.data.unitId);
                    console.log('welcome to frontdesk')
                    console.log(res.data)
                    history.push(`/unit1Osun/frontdesk`)
                    // swal("Welcome!", "", "success");
                    notyf.success('welcome');
                }
               else  if (res.data.role === 'rf') {
                    console.log(res.data)
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("unitId", res.data.unitId);
                    localStorage.setItem("role", role);
                    console.log('welcome to rf')
                    history.push(`/unit1Osun/rf`)
                    notyf.success('welcome as rf');
                }

            }



            if (unit === "unit2Osun") {
                if (res.data.role === 'frontdesk') {
                    console.log('welcome to frontdesk')
                    console.log(res.data)
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("unitId", res.data.unitId);
                    history.push('/unit2Osun/frontdesk')
                    notyf.success('welcome to unit2Osun');
                }
                if (res.data.role === 'rf') {
                    console.log(res.data)
                    console.log('welcome to rf')
                }

            }


        }).then((err) => console.log(err))

        // if (unit === "unit1Osun") {
        //     // need to check which type of role was choosen............
        //     axios.post('api/login', data).then((res) => {
        //         if (res.data.role === 'frondesk') {
        //             console.log('welcome to frontdesk')
        //         }
        //         if (res.data.role === 'rf') {
        //             console.log('welcome to rf')
        //         }
        //     }).then((err)=>console.log(err))

        // }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div
                    className="row justify-content-center"
                    style={{ marginTop: "3em" }}
                >
                    <div className="col-12">
                        <div className="d-block text-center mb-5">
                            <h4
                                className=" text-capitalize text-success fs-4"
                                style={{ letterSpacing: "4px" }}
                            >
                                Welcome back!
                            </h4>
                            <p className="text-muted fs-6" style={{ fontWeight: "600" }}>
                                Fill in the required details to login
                            </p>
                        </div>

                        <div className="row justify-content-center p-1">
                            <div className="col-md-7">
                                <form method="POST" onSubmit={formSubmit} action="">
                                    <div className="row is-widescreen mt-3  mb-4">
                                        <div className="col-md-6">
                                            <label className="fs-6 col-form-label text-md-end">
                                                Roles
                                            </label>
                                            <select
                                                className="select form-control shadow"
                                                onChange={roleHanlder}
                                            >
                                                <option value={""} >
                                                    -- Choose role --
                                                </option>
                                                <option value={"frontdesk"}>Front-Desk</option>
                                                <option value={"rf"}>Regulatory Officer</option>
                                                <option value={"ipo"}>
                                                    Investigating Police Officer
                                                </option>
                                                <option value={"oc"}>O/C Officer</option>
                                                <option value={"aa"}>Admin Account</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* State */}
                                    <div className="row is-widescreen mt-3  mb-4">
                                        <div className="col-md-6">
                                            <label className="fs-6 col-form-label text-md-end">
                                                State
                                            </label>
                                            <select
                                                className="select form-control shadow"
                                                onChange={stateHanlder}
                                            >
                                                <option value={""} >
                                                    -- Choose state/location --
                                                </option>
                                                <option value={"osun"}>Osun State</option>
                                                <option value={"lagos"}>Lagos State</option>
                                                <option value={"abuja"}>
                                                    FCT
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Unit */}

                                    {
                                        state === 'osun' ? <select className="select form-control shadow" onChange={unitHanlder}>
                                            <option value={""}>pick</option>
                                            <option value={"unit1Osun"}>unit1Osun</option>
                                            <option value={"unit2Osun"}>unit2Osun</option>
                                        </select> : ''
                                    }

                                    {
                                        state === 'lagos' ? <select onChange={unitHanlder} className="select form-control shadow">
                                            <option value={"lAunit1Osun"}>Lagosunit1Osun</option>
                                            <option value={"Launit2Osun"}>Lagosunit2Osun</option>
                                        </select> : ''

                                    }


                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="fs-6 col-form-label text-md-end">
                                                Token Pass
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control shadow"
                                                name="tokenpass"
                                                onChange={handelInput}
                                                value={loginInput.tokenpass}
                                            />
                                            <span className="text-danger">{error.email}</span>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label className="fs-6 col-form-label text-md-end">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control shadow"
                                                name="password"
                                                onChange={handelInput}
                                                value={loginInput.password}
                                            />
                                            <span className="text-danger">{error.password}</span>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name=""
                                                    id="remember"
                                                />

                                                <label className="form-check-label">Remember Me</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-0">
                                        <div className="col-md-8">
                                            <button
                                                type="submit"
                                                className="btn btn-success py-2 px-5"
                                            >
                                                {" "}
                                                Login{" "}
                                            </button>

                                            <Link className="btn btn-link" to="/">
                                                Forgot Password{" "}
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-5">
                                <div className="row justify-content-center mt-sm-0 mt-5">
                                    {/* <img src={naf} alt="" className="image-fluid" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Login;