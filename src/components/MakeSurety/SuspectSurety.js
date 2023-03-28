import Webcam from "react-webcam";
import React from "react";
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

import { useEffect, useState, useRef } from 'react';
import Nav_Link from './Layouts/Nav_Link';
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";
import { Button } from '@mui/material';
// import Heading from '../Layouts/Heading'
import Nav from './Layouts/Nav'
import institutions from './Pages/Institution'
import mystate from "./Pages/places";
import langs from './Pages/langs'
import Navbar from "../../pages/layoutAuth/Navbar";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
function SuspectSurety({ imageSrc, imageSrc_front, imageSrc_right }) {
    const location = useLocation()
   
    const notyf = new Notyf();
    let navigate = useHistory()
    const [lang, setLang] = useState([])
    const [institution, setinstitution] = useState([])
    const [placebirth, setplacebirth] = useState([])
    const [orgin, setOrgin] = useState([])
    const SpokenLang = (e) => {
        setLang(e.target.value)
        console.log(e.target.value)
    }
    const Orgin = (e) => {
        setOrgin(e.target.value)
        console.log(e.target.value)
    }
    const Institution = (e) => {
        setinstitution(e.target.value)
        console.log(e.target.value)
    }
    const PlaceBirth = (e) => {
        setplacebirth(e.target.value)
        console.log(e.target.value)
    }
    const webcamRef = useRef(null);
    const [url_1, setUrl_1] = useState(null)
    const [url_2, setUrl_2] = useState(null)
    const [url_3, setUrl_3] = useState(null)
    // document.getElementById('submit').style.display = 'none'
    const Camara_1 = React.useCallback(async () => {
        document.getElementById('submit').style.display = 'block'
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl_1(imageSrc)
        document.getElementById('submit').style.display = 'block'
        document.getElementById('results').innerHTML = '<img id="myimage" src="' + imageSrc + '"/>';
        localStorage.setItem('image_left_s', imageSrc)
        

        console.log(webcamRef)
    }, [webcamRef])

    const Camara_2 = React.useCallback(async () => {
        
        // console.log(webcamRef)
        const imageSrc_front = webcamRef.current.getScreenshot();
        document.getElementById('results_front').innerHTML = '<img id="myimage" src="' + imageSrc_front + '"/>';
        localStorage.setItem('image_front_s', imageSrc_front)
    
        setUrl_2(imageSrc_front);
        return imageSrc_front;

    }, [webcamRef])
    const Camara_3 = React.useCallback(async () => {
        
        const imageSrc_right = webcamRef.current.getScreenshot();
        document.getElementById('results_right').innerHTML = '<img id="myimage" src="' + imageSrc_right + '"/>';
        localStorage.setItem('image_right_s', imageSrc_right)
        
        setUrl_3(imageSrc_right);
        return imageSrc_right;

    }, [webcamRef])
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFile_1, setSelectedFile_1] = useState(null);
    const [selectedFile_2, setSelectedFile_2] = useState(null);
    const [error, setError] = useState([])
    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0])
    }
    const changeHandler_1 = (e) => {
        setSelectedFile_1(e.target.files[0])
    }
    const changeHandler_2 = (e) => {
        setSelectedFile_2(e.target.files[0])
    }
    const [inputs, setInput] = useState({
        name: '',
        middlename: '',
        lastname: '',
        gender: '',
        date_birth: '',

        moblie_phone: '',
        Office_phone: '',
        email: '',
        international_passport: '',
        // International_Passport_Number: '',

        Res_address: '',
        Office_shop_res: '',
        year_of_entry: '',
        year_of_graduation: '',
        Secondary: '',
        year_of_secondary: '',
        year_of_graduation_secondary: '',
        primary: '',
        year_of_primary: '',
        year_of_graduation_primary: '',

        address_employer: '',
        last_place: '',
        Penultimate_Place: '',
        address_of_penultimate: '',
        nationality: 'Nigeria',
        // ethic_group: '',
        // employment_last_place: '',
        // loca_goverment: '',
        // town_village: '',,
        relationship: '',
        crime: '',
        penalty: '',
        time_known: '',
        suspect_name: '',
        date_signature: '',
        prior_surety: '',
        prior_case: '',
        surety_requirement: '',


    })
    const { martic_number, } = useParams()
    const suspect_id = martic_number
    const unitId = localStorage.getItem('unitId')
    const [name, setSuspectData] = useState([])
    const Call = () => {
        axios(`api/suspect/${unitId}`).then((res) => {
            if (res.status === 200) {
               
                const api = res.data.data
               
                setSuspectData(api)
            }
        }
        )
    }
    useEffect(() => {
        Call()
    }, [])
    let martic_numbe = ''
    let suspect_name = ''
    name.map((item) => {
        martic_numbe = item.martic_number
        suspect_name = item.firstname
    })
    // console.log(martic_number)
    const [picture, setPicture] = useState([])
    const handelIMage = (e) => {
        setPicture({ affix_front: e.target.files[0] })
    }
    
    const formSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        console.log(martic_numbe)
        formData.append('martic_number', martic_numbe)


        let image_left = localStorage.getItem('image_left_s');
        let imageClass = new Image();
        imageClass.src = image_left
        formData.append("affix_left", image_left);

        let image_right = localStorage.getItem('image_right_s');
        let imageClass_right = new Image();
        imageClass_right.src = image_right
        formData.append("affix_right", image_right);



        let image_front = localStorage.getItem('image_front_s');
        let imageClass_front = new Image();
        imageClass_front.src = image_front
        formData.append("affix_front", image_front);

        formData.append("unitId", unitId);
        // console.log(image_tag)
        // formData.append('affix_left', selectedFile)
        // formData.append('affix_right', selectedFile_1)
        // formData.append('affix_front', selectedFile_2)


        formData.append('surety_requirement', inputs.surety_requirement)
        formData.append('suspect_name', inputs.suspect_name)
        formData.append('prior_surety', inputs.prior_surety)
        formData.append('relationship', inputs.relationship)
        formData.append('email', inputs.email)


        formData.append('crime', inputs.crime)
        formData.append('penalty', inputs.penalty)
        formData.append('time_known', inputs.time_known)
        formData.append('prior_case', inputs.prior_case)
        formData.append('date_signature', inputs.date_signature)

        formData.append('international_passport', inputs.international_passport)
        formData.append('date_birth', inputs.date_birth)




        formData.append('office_phone', inputs.Office_phone)
        formData.append('place_birth', placebirth)
        formData.append('mobile_phone', inputs.moblie_phone)
        formData.append('firstname', inputs.name)
        formData.append('lastname', inputs.lastname)
        formData.append('middlename', inputs.middlename)
        formData.append('langugaes', lang)
        formData.append('residental_address', inputs.Res_address)
        formData.append('office_shop', inputs.Office_shop_res)



        formData.append('last_place', inputs.last_place)
        formData.append('address_of_penultimate	', inputs.address_of_penultimate)
        formData.append('address_employer', inputs.address_employer)
        formData.append('Penultimate_Place', inputs.Penultimate_Place)
        formData.append('nationality', inputs.nationality)
        formData.append('state', orgin)

        formData.append('tertiary_i', institution)
        formData.append('tertiary_y', inputs.year_of_graduation)
        formData.append('tertiary_yg', inputs.year_of_entry)
        formData.append('secondary', inputs.Secondary)
        formData.append('s_year_of_entry', inputs.year_of_secondary)
        formData.append('s_year_of_gradution', inputs.year_of_graduation_secondary)
        formData.append('primary', inputs.primary)
        formData.append('p_year', inputs.year_of_primary)
        formData.append('p_year_g', inputs.year_of_graduation_primary)
        if (inputs.gender === "male") {
            formData.append('gender', "male")
        } else if (inputs.gender === "female") {
            formData.append('gender', "female")
        }

        // formData.append('affix_left', selectedFile)
        // formData.append('affix_right', selectedFile_1)
        // formData.append('affix_front', selectedFile_2)

        // console.log(selectedFile)

        axios.post(`api/surety/${martic_number}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((res) => {
            if (res.data.status === 200) {
                console.log('done')
                setError([])
                
                localStorage.removeItem('image_front_s')
                localStorage.removeItem('image_right_s')
                notyf.success('SURETY ADDED ');
                localStorage.removeItem('image_left_s')
                if (location.pathname === `/unit1Osun/edit-suspect-surety/${martic_number}`) {
                    navigate.push(`/unit1Osun/frontdesk`)
                    localStorage.removeItem('martic_number')
                }
                if (location.pathname === `/unit2Osun/edit-suspect-surety/${martic_number}`) {
                    navigate.push(`/unit2Osun/frontdesk`)
                    localStorage.removeItem('martic_number')
                }
          
            } else if (res.data.status === 422) {
                // console.log('please fill the input fiieds')
                setError(res.data.errors)
            }
        })
    }
    const checkInput = (e) => {
        setInput({ ...inputs, [e.target.name]: e.target.value })
    }
    return (
        <div className="mt-5 container ">
            <Navbar/>
            {/* <Nav /> */}
            {/* <Heading /> <br></br> <br></br> */}
            {/* <div id="results" className="ms-5 " style={{ marginTop: '90px' }}>Your captured image will appear here...
                {imageSrc}
            </div> */}
            <br></br> <br></br>
            <form className="mt-6" enctype="multipart/form-data" onSubmit={formSubmit}    >
                <h5 className="text-center text-primary bw-bold">Surety Page</h5>
                <div className="d-flex justify-content-around">
                    <div className="ms-3">
                        <Webcam
                            screenshotFormat="jpeg"
                            audio={false}
                            width="400"
                            ref={webcamRef}
                        />
                        <div>
                            {/* <h5>No  Picture Taken Yet</h5> */}
                            {/* <h5>Left Picture Taken</h5> */}
                            {url_1 ? <h5 className="text-success">Left Picture Has been  Taken</h5> : <h5>No  Left Picture Taken Yet</h5>}
                            {/* {url_1 && ( */}
                            <div>
                                <br></br> <br></br>
                                {/* {url_1 ? <h5 className="text-success">Left Picture Has been  Taken</h5> : <h5>No  Picture Taken Yet</h5>} */}
                                {/* <img src={url_1} width="400" height="340" /> */}
                            </div>
                            {/* )} */}
                        </div>
                    </div>
                    <div className="ms-4">
                        <Webcam
                            screenshotFormat="jpeg"
                            audio={false}
                            width="400"
                            ref={webcamRef}
                        />
                        {url_2 ? <h5 className="text-success">  Front Picture  Has been Taken</h5> : <h5>No Front Picture Taken Yet</h5>}
                        {/* {url_2 && ( */}
                        <div>
                            <br></br> <br></br>
                            {/* {url_2 ? <h5 className="text-success">  Front Picture  Has been Taken</h5> : <h5>No  Picture Taken Yet</h5>} */}
                            {/* <img src={url_2} width="400" height="340" /> */}
                        </div>
                        {/* )} */}
                    </div>
                    <div className="ms-3">
                        <Webcam
                            screenshotFormat="image/jpeg"
                            audio={false}
                            width="400"
                            ref={webcamRef}
                            mirrored={true}
                        />
                        <div>
                            {/* {url_3 && <div>
                                {url_3 ? <h5>Right  Picture Taken</h5> : <h5>No  Picture Taken Yet</h5>}
                                <img src={url_3} width="400" />
                            </div>
                            } */}
                            {url_3 ? <h5 className="text-success">Right  Picture  Has been Taken</h5> : <h5>No Right Picture Taken Yet</h5>}
                            {/* {url_3 && ( */}
                            <div>
                                <br></br> <br></br>
                                {/* {url_3 ? <h5 className="text-success">Right  Picture  Has been Taken</h5> : <h5>No  Picture Taken Yet</h5>} */}
                                {/* <img src={url_3} width="400" height="340" /> */}
                            </div>
                            {/* )} */}
                        </div>
                    </div>
                </div>

                <div className="mb-1  p-4" style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <label className="form-label">
                        <span className="text-muted text-center fs-5">Affix left side picture
                        </span><br></br>
                        <input type="button" value="capture left" required onClick={Camara_1} className=" btn btn-info" />
                    </label>
                    <label className="form-label">
                        <span className="text-muted text-center fs-5">Affix front picture
                        </span><br></br>
                        <input type="button" value="capture front" onClick={Camara_2} required className=" btn btn-info" />
                    </label>
                    <label className="form-label">
                        <span className="text-muted text-center fs-5">Affix Right side picture
                        </span><br></br>
                        <input type="button" value="capture right" onClick={Camara_3} required className=" btn btn-info" />
                    </label>
                </div>
                <hr></hr>
                <div className="container ">
                    <div className="d-flex  justify-content-between">


                        <div id="results" className="mt-1">Your captured image left will appear here...
                            {imageSrc}
                        </div>

                        <div id="results_front" className="mt-1">Your captured image front will appear here...
                            {imageSrc_front}
                        </div>


                        <div id="results_right" className="mt-1">Your captured image right will appear here...
                            {imageSrc_right}
                        </div>



                    </div>
                </div>
                <br />
                <div className="text-center fs-5 ">
                    < HiArrowSmDown className="fs-1 text-center text-primary" /> <br></br>
                    <button className="btn btn-dark"> <Link
                        // to={`suspect-many-surety/${martic_number}`}
                        to={`/fd/edit-suspect-surety/${suspect_id}/suspect-many-surety/${martic_number}`}
                        style={{ textDecoration: 'none', color: 'white' }} >Check all Surety Standing For
                        <span className="ps-2 fw-bold h2">{suspect_name}</span></Link></button>
                </div>
                {/* Personal info */}
                <div className="m-5" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-right" data-aos-delay="90" data-aos-easing="ease-in-out"   >
                    <div className="col-md-12 p-4">
                        <div className="">
                            < HiArrowSmDown className="fs-1 text-center text-primary" />
                            <div className="d-flex justify-content-center" style={{ backgroundColor: '', padding: '14px' }}>


                                {/* <div>
                                    <h5 className="text-white">Left Picture Folder</h5> <br></br>
                                    <input type="file" name="affix_left"
                                        className="form-control"
                                        value={selectedFile}
                                        onChange={changeHandler} />
                                    <span>{error.affix_left }</span>
                                </div>

                                <div className="ms-4">
                                    <h5 className="text-white">Front Picture Folder</h5> <br></br>
                                    <input type="file"
                                        name="affix_front"
                                        className="form-control"
                                        onChange={changeHandler_2} />
                                    <span>{error.affix_front}</span>
                                </div>


                                <div className="ms-4">
                                    <h5 className="text-white">Right Picture Folder</h5> <br></br>
                                    <input type="file" name="affix_right" className="form-control"
                                        onChange={changeHandler_1} />
                                </div> */}
                                <br></br>

                            </div>
                            <h3 className="text-dark fs-4 mb-2 text-center" style={{ fontFamily: '600' }}>Personal Information</h3>
                            <label className="form-label fs-6 fw-bold">Firstname:</label>
                            <input type="text" className="form-control "
                                placeholder="surname  " name='name' value={inputs.name} onChange={checkInput} />
                            <br></br>
                            <span className="text-danger      fs-6">{error.firstname}</span>
                            <br></br>
                            <label className="form-label fs-6 fw-bold">Middlename:</label>
                            <input type="text" className="form-control "
                                placeholder="middlename" name='middlename' value={inputs.middlename} onChange={checkInput} />
                            <span className="text-danger      fs-6">{error.middlename}</span>
                            <br></br>
                            <label className="form-label fs-6 fw-bold">Lastname:</label>
                            <input type="text" className="form-control "
                                placeholder="lastname" name='lastname' value={inputs.lastname} onChange={checkInput} />
                            <span className="text-danger      fs-6">{error.lastname}</span>

                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <p className="text-dark fs-6 mb-1">Gender:</p>
                                    <label className="form-check-label" >Male</label>

                                    <input className="form-check-input" name="gender" value="male"
                                        onChange={checkInput} type="checkbox" />
                                    <br></br>
                                    <span className="text-danger      fs-6">{error.gender}</span>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" name="gender" value="female"
                                        onChange={checkInput} type="checkbox"
                                    />
                                    <label className="form-check-label" >Female</label>
                                    <br></br>
                                    <span className="text-danger fs-6">{error.gender}</span>
                                </div>
                            </div>

                            <div className="mb-1 d-inline-block justify-center">
                                <p className="text-dark fs-6 mb-1">Date Of Birth:</p>
                                <input type="date" className="form-control " name="date_birth" onChange={checkInput} value={inputs.date_birth} />
                                <span className="text-danger      fs-6">{error.date_birth}</span>

                            </div>

                            <div className="mb-1">
                                <p className="text-dark fs-6 mb-1">Place Of Birth:</p>
                                <select className="form-control state" name="place_birth" onChange={PlaceBirth} >
                                    {mystate.map((item, index) => {
                                        return (
                                            <option value={item} key={index} >{item}</option>
                                        )
                                    })}
                                </select>
                                <span className="text-danger      fs-6">{error.place_birth}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="mb-1">

                                <p className="text-dark fs-6 mb-1">Mobile Phone:</p>
                                <input type="number" className="form-control " name="moblie_phone" value={inputs.moblie_phone} onChange={checkInput}
                                    placeholder="#000000000" />
                                <span className="text-danger      fs-6">{error.mobile_phone}</span>
                            </div>

                            <div className="mb-1">
                                <p className="text-dark fs-6 mb-1">Office Phone:</p>
                                <input type="number" className="form-control " name="Office_phone"
                                    value={inputs.Office_phone} onChange={checkInput}
                                    placeholder="#000000000" />
                                <span className="text-danger      fs-6">{error.office_phone}</span>
                            </div>
                            <div className="mb-1">
                                <p className="text-dark fs-6 mb-1">Email:</p>
                                <input type="email" className="form-control "
                                    placeholder="email address" name="email" onChange={checkInput} value={inputs.email} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div className="mb-1">
                                <p className="text-dark fs-6 mb-2">International Passport Number:</p>
                                <input type="number" className="form-control " value={inputs.international_passport} onChange={checkInput} name="international_passport"
                                    aria-describedby="emailHelpId" placeholder="########" />
                                <span className="text-danger fs-6">{error.international_passport}</span>
                            </div>

                            <div className="mb-1">
                                <p className="text-dark fs-6 mb-2">Spoken Languages:</p>
                                <select className="form-control spoken" name="langugaes" onChange={SpokenLang}  >
                                    {langs.map((item, index) => {
                                        return (
                                            <option value={item} key={index} >{item}</option>
                                        )
                                    })}
                                </select>
                                <span className="text-danger      fs-6">{error.languages}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <div className="mx-auto" style={{ display: 'block' }}>
                            <div className="mb-1">
                                <p className="text-dark fs-6 mb-2">Residential Address:</p>
                                <input type="text" className="form-control "
                                    placeholder="" name="Res_address" value={inputs.Res_address} onChange={checkInput} />
                            </div>
                            <span className="text-danger fs-6">{error.residental_address}</span>
                        </div>
                    </div>
                    <div className="col-md-12 p-4">
                        <div className="mx-auto" style={{ display: 'block' }}>
                            <div className="mb-1">
                                <p className="text-dark fs-5 mb-1">Office/Shop:</p>
                                <input type="text" className="form-control "
                                    placeholder="" onChange={checkInput} name="Office_shop_res" value={inputs.Office_shop_res} />
                            </div>
                            <span className="text-danger fs-6">{error.office_shop}</span>
                        </div>
                    </div>
                </div>
                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    < HiArrowSmDown className="fs-1 text-center text-primary" />

                    <HiArrowNarrowUp className="fs-1 text-center text-success" />
                </div>
                <hr></hr>
                {/* Educational  */}
                <div className="m-5" data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in"
                    style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }}
                >
                    <h1 className="text-center fs-4">Educational Background</h1>
                    <div className="col-md-12 mt-4 p-4">
                        <h3 className="text-dark fs-4 mb-2" style={{ fontWeight: "600" }}>Educational Background</h3>
                        <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="mb-1">
                                <label className="form-label fs-5">Tertiary Institution</label>
                                <select className="form-control  " name="tertiary_i" onChange={Institution}  >
                                    {institutions.map((item, index) => {
                                        return (
                                            <option value={item} key={index} >{item}</option>
                                        )
                                    })}
                                </select>
                                <span className="text-danger      fs-6">{error.tertiary_i}</span>
                            </div>

                            <div className="mb-1 ms-4">
                                <label className="form-label fs-5">Year of Entry</label>
                                <input type="month" className="form-control shadow"
                                    aria-describedby="helpId" name="year_of_entry"
                                    onChange={checkInput}
                                    value={inputs.year_of_entry}
                                //   value="main go dfjbsufbf"  
                                />
                            </div>

                            <div className="mb-1 ms-4">
                                <label className="form-label fs-5">Year of Graduation</label>
                                <input type="month"
                                    className="form-control shadow" aria-describedby="helpId" name="year_of_graduation" onChange={checkInput} value={inputs.year_of_graduation} />
                            </div>

                        </div>

                        <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="mb-1">
                                <label className="form-label fs-5">Secondary</label>
                                <input type="text" className="form-control shadow"
                                    placeholder="" aria-describedby="helpId" name="Secondary" onChange={checkInput} value={inputs.Secondary} />
                            </div>

                            <div className="mb-1">
                                <label className="form-label fs-5">Year of Entry</label>
                                <input type="month" className="form-control shadow"
                                    aria-describedby="helpId" name="year_of_secondary" onChange={checkInput} value={inputs.year_of_secondary} />
                            </div>

                            <div className="mb-1">
                                <label className="form-label fs-5">Year of Graduation</label>
                                <input type="month"
                                    className="form-control shadow" name="year_of_graduation_secondary" onChange={checkInput} value={inputs.year_of_graduation_secondary} />
                            </div>

                        </div>
                        <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="mb-1">
                                <label className="form-label fs-5">Primary</label>
                                <input type="text" className="form-control shadow"
                                    placeholder="" name="primary" onChange={checkInput} value={inputs.primary} />
                            </div>

                            <div className="mb-1">
                                <label className="form-label fs-5">Year of Entry</label>

                                <input type="month" className="form-control shadow" name="year_of_primary" onChange={checkInput} value={inputs.year_of_primary}
                                />
                            </div>

                            <div className="mb-1">
                                <label className="form-label fs-5">Year of Graduation</label>
                                <input type="month" className="form-control shadow" name="year_of_graduation_primary" onChange={checkInput} value={inputs.year_of_graduation_primary}
                                />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    < HiArrowSmDown className="fs-1 text-center text-primary" />

                    <HiArrowNarrowUp className="fs-1 text-center text-success" />
                </div>
                <hr></hr>

                <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                    <h1 className="text-center fs-5">Employment Background</h1>
                    <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="mb-1">
                            <label className="form-label fs-5">Last Place:</label>
                            <input type="text" className="form-control shadow"
                                placeholder="" aria-describedby="helpId" onChange={checkInput} name="last_place"
                                value={inputs.last_place} />
                            <span className="text-danger      fs-6">{error.last_place}</span>
                        </div>

                        <div className="mb-1">
                            <label className="form-label fs-5">Address of Employer</label>
                            <input type="text" className="form-control shadow"
                                aria-describedby="helpId" onChange={checkInput} name="address_employer"
                                value={inputs.address_employer} />

                        </div>



                    </div>
                    <div className="mb-1">
                        <label className="form-label fs-5">Penultimate Place</label>
                        <input type="text"
                            className="form-control shadow" aria-describedby="helpId"
                            onChange={checkInput} name="Penultimate_Place" value={inputs.Penultimate_Place} />
                        <span className="text-danger      fs-6">{error.Penultimate_Place}</span>
                    </div>
                    <div className="mb-1">
                        <label className="form-label fs-5">Address of Employer</label>
                        <input type="text"
                            className="form-control shadow" aria-describedby="helpId"
                            onChange={checkInput} name="address_of_penultimate" value={inputs.address_of_penultimate}
                        />
                    </div>

                </div>
                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    < HiArrowSmDown className="fs-1 text-center text-primary" />

                    <HiArrowNarrowUp className="fs-1 text-center text-success" />
                </div>
                <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                    <h1 className="text-center fs-5">Place of Orgin</h1>
                    <div className="col-md-12 mt-4">
                        <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="mb-1">
                                <label className="form-label fs-5">Nationality</label>
                                <input value={inputs.nationality} onChange={checkInput} className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fs-5">State</label>
                                <select className="form-control " name="state" onChange={Orgin}  >
                                    {mystate.map((item, index) => {
                                        return (
                                            <option value={item} key={index} >{item}</option>
                                        )
                                    })}
                                </select>
                                <span className="text-danger      fs-6">{error.state}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-5">Ethnic Group</label>
                                <select className="form-control w-100">
                                    <option>ITEM</option>
                                </select>
                            </div>

                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label fs-5">Local Goverment</label>
                            <select className="form-control w-100">
                                <option>ITEM</option>
                            </select>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label fs-5">Town/Village</label>
                            <select className="form-control w-100">
                                <option>ITEM</option>
                            </select>
                        </div>
                    </div>
                </div>

                <h1 className="text-success text-center">FINAL SECTION </h1>

                <div className=" mt-1 p-5">
                    <div className="mx-auto">
                        <div className="mb-3">

                            <label className="form-label fs-5">What is your relationship to the
                                suspect?</label>
                            <input type="text" id="" className="form-control shadow"
                                aria-describedby="helpId" name="relationship"
                                value={inputs.relationship} onChange={checkInput}
                            />
                            <span className="text-danger      fs-6">{error.relationship}</span>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fs-5">Are you aware of the crime commited? If yes,
                                state the crime...</label>
                            <input type="text" name="crime" id="" className="form-control shadow"
                                aria-describedby="helpId"
                                value={inputs.crime} onChange={checkInput} />
                            <span className="text-danger      fs-6">{error.crime}</span>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fs-5">Are you aware of the penalty for the
                                crime?</label>
                            <input type="text" name="penalty" id="" className="form-control shadow"
                                aria-describedby="helpId"
                                value={inputs.penalty} onChange={checkInput}
                            />
                        </div>

                        <div className="mb-3">

                            <label className="form-label fs-5">How long have you known the suspect?</label>
                            <input type="text" name="time_known" id="" className="form-control shadow"
                                aria-describedby="helpId"
                                value={inputs.time_known} onChange={checkInput}
                            />
                            <span className="text-danger      fs-6">{error.time_known}</span>
                        </div>

                        <div className="mb-3">

                            <label className="form-label fs-5">Are you aware of what is required of you as a
                                surety?</label>
                            <input type="text" name="surety_requirement" id="" className="form-control shadow"
                                aria-describedby="helpId"
                                value={inputs.surety_requirement} onChange={checkInput}
                            />
                        </div>

                        <div className="mb-3">

                            <label className="form-label fs-5">Have you had any former case with NAFDAC? If yes
                                give details...</label>
                            <input type="text" name="prior_case" id="" className="form-control shadow"
                                aria-describedby="helpId"
                                value={inputs.prior_case} onChange={checkInput}
                            />
                            <span className="text-danger      fs-6">{error.prior_case}</span>
                        </div>

                        <div className="mb-3">

                            <label className="form-label fs-5">Have you been a surety with respect to any other
                                person arrested by NAFDAC or any law enforcment body? If yes, give details...</label>
                            <input type="text" name="prior_surety" id="" className="form-control shadow"
                                aria-describedby="helpId"
                                value={inputs.prior_surety} onChange={checkInput}
                            />
                            <span className="text-danger      fs-6">{error.prior_surety}</span>
                        </div>
                    </div>
                </div>
                <div className="" >
                    < HiArrowSmDown className="fs-1 text-center text-primary" />
                </div>

                <div className=" mt-1 p-5">
                    <p className="text-dark fs-4">I hereby attest that the above information is true and correct to the best of
                        my knowledge</p>
                    <div className="mx-auto mt-3">
                        <div className="mb-3">

                            <label className="form-label">Name</label>
                            <input type="text" className="form-control shadow" name="suspect_name" id=""
                                aria-describedby="helpId" placeholder=""
                                value={inputs.suspect_name} onChange={checkInput}
                            />
                            <span className="text-danger      fs-6">{error.suspect_name}</span>
                        </div>

                        <div className="mb-3">

                            <label className="form-label">Signature/Date</label>
                            <input type="text" className="form-control shadow" name="date_signature" id=""
                                aria-describedby="helpId" placeholder=""
                                value={inputs.date_signature} onChange={checkInput}
                            />
                            <span className="text-danger      fs-6">{error.date_signature}</span>
                        </div>
                    </div>
                </div>

                {/* <div className="text-center">
                    <h4 className="lead fs-4 " style={{ fontWeight: 'bold' }}>Note:
                        after filling this Surety form you will be moved to the Dashboard
                        page to complete the other sections (Childern)</h4>
                </div>
 */}


                {/* fignerPrint */}
                <button className=" m-5 btn btn-dark w-100" id="submit" style={{display:'none'}}>Submit Form</button>

            </form>


        </div>
    )
}

export default SuspectSurety;