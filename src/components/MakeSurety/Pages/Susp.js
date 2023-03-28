import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";
import { Button } from '@mui/material';
import Webcam from "react-webcam";
import Nav from '../Layouts/Nav'
import Heading from '../Layouts/Heading'
import { useEffect, useState, useRef } from 'react';
import langs from './langs'
const SuspectForm = () => {

    const webcamRef = useRef(null);
    const onUserMedia = (e) => {
        console.log(e)
    }
    const styles = () => {
        // {{label:}}
    }
    const [lang, setLang] = useState([])
    const SpokenLang = (e) => {
        setLang(e.target.value)
        console.log(e.target.value)
    }
    const formData = () => {

    }
    // const Camara = () => {
    //     console.log('clicked')
    // }
    const [url, setUrl] = useState(null)
    const [getimg, setgetImg] = useState(null)

    const Camara = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(imageSrc)
        setUrl(imageSrc)
        console.log(webcamRef)

    }, [webcamRef])

    const [inputs, setInput] = useState({
        Affix_left: '',
        Affix_Front: '',
        Affix_Right: '',
        name: '',
        male: '',
        female: '',
        date_bith: '',
        place_birth: '',
        moblie_phone: '',
        Office_phone: '',
        email: '',
        International_Passport_Number: '',
        spoken_languge: '',
        Res_address: '',
        Office_shop_res: '',
        Tertiary_Institution: '',
        year_of_entry: '',
        year_of_graduation: '',
        Secondary: '',
        year_of_secondary: '',
        year_of_graduation_secondary: '',
        primary: '',
        year_of_primary: '',
        year_of_graduation_primary: '',
        employment_last_place: '',
        employment_address: '',
        employment_penultimate: '',
        address_employer: '',
        Nationality: '',
        state: '',
        ethic_group: '',
        employment_last_place: '',
        loca_goverment: '',
        town_village: '',
        spouse_name: '',
        spouse_madien_name: '',
        spouse_date_birth: '',
        spouse_address: '',
        spouse_phone: '',
        spouse_place_work: '',
        father_name: '',
        father_address: '',
        father_date_birth: '',
        father_phone: '',
        father_address: '',
        mother_name: '',
        mother_address: '',
        mother_date_birth: '',
        mother_phone: '',
        mother_address: '',
        Sibling_1_name: '',
        Sibling_1_address: '',
        Sibling_1_date_birth: '',
        Sibling_1_phone: '',

        Sibling_2_name: '',
        Sibling_2_address: '',
        Sibling_2_date_birth: '',
        Sibling_2_phone: '',

        Landlord_name: '',
        Landlord_phone: '',
        Landlord_address: '',
        here_name: '',
        here_signatur_date: ''




    })
    const [err_message, setErrMessage] = useState({})
    const checkInput = (e) => {
        setInput({ ...inputs, [e.target.name]: e.target.value })
    }
    const formSubmit = (e) => {
        e.preventDefault()
    }
    const [test, setTest] = useState('');
    const handletest = (e) => {
        setTest(e.target.value)
        // console.log(test)
    }
    const fun = (e) => {
       console.log(test)
    }
    return (
        <div>
            <Nav />
            <Heading /> <br></br> <br></br>
            <div className="d-flex justify-content-around">
                <div className="">
                    <Webcam
                        screenshotFormat="image/jpeg"
                        audio={false}
                        width="200"
                        ref={webcamRef}
                    />
                    {url && (
                        <div>
                            <img src={url} alt='failed' />
                        </div>
                    )}
                </div>

                <div className="">
                    <Webcam
                        screenshotFormat="image/jpeg"
                        audio={false}
                        width="200"
                        ref={webcamRef}
                    />
                    {url && (
                        <div>
                            <img src={url} alt='failed' />
                        </div>
                    )}
                </div>

                <div className="">
                    <Webcam
                        screenshotFormat="image/jpeg"
                        audio={false}
                        width="200"
                        ref={webcamRef}
                    />
                    {url && (
                        <div>
                            <img src={url} alt='failed' />
                        </div>
                    )}
                </div>
            </div>
            <div className="m-1">
                <form action="" onSubmit={formSubmit}>
                    <div className="mb-1  p-4" style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <label className="form-label">
                            <span className="text-muted text-center fs-5">Affix left side picture
                            </span><br></br>
                            <input type="button" value='Left Picture' required onClick={Camara} className=" btn btn-info" />
                        </label>
                        <label className="form-label">
                            <span className="text-muted text-center fs-5">Affix front picture
                            </span><br></br>
                            <input type="button" value='Front Picture' required onClick={Camara} className=" btn btn-info" />
                        </label>
                        <label className="form-label">
                            <span className="text-muted text-center fs-5">Affix left side picture
                            </span><br></br>
                            <input type="button" value='Right  Picture' required onClick={Camara} className=" btn btn-info" />
                        </label>
                    </div>
                    {/* Personal info */}
                    <div className="m-5" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-right" data-aos-delay="90" data-aos-easing="ease-in-out"   >
                        <div className="col-md-12 p-4">
                            <div className="">
                                <h3 className="text-dark fs-4 mb-2 text-center" style={{ fontFamily: '600' }}>Personal Information</h3>
                                <label className="form-label fs-6">Name:</label>
                                <input type="text" className="form-control "
                                    placeholder="surname                                                    firstname             othername" value={inputs.personal_name} onChange={checkInput} required />

                            </div>
                        </div>
                        <div className="col-md-12 p-4">
                            <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">

                                        <p className="text-dark fs-6 mb-1">Gender:</p>

                                        <label className="form-check-label" >Male</label>

                                        <input className="form-check-input " type="checkbox" />
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox"
                                        />
                                        <label className="form-check-label" >Female</label>
                                    </div>
                                </div>

                                <div className="mb-1 d-inline-block justify-center">
                                    <p className="text-dark fs-6 mb-1">Date Of Birth:</p>
                                    <input type="date" className="form-control " />
                                </div>

                                <div className="mb-1">
                                    <p className="text-dark fs-6 mb-1">Place Of Birth:</p>
                                    <select className="form-control state">
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 p-4">
                            <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">

                                    <p className="text-dark fs-6 mb-1">Mobile Phone:</p>
                                    <input type="text" className="form-control " value={inputs.Mobile_phone} onChange={checkInput} required
                                        placeholder="#000000000" />
                                </div>

                                <div className="mb-1">
                                    <p className="text-dark fs-6 mb-1">Office Phone:</p>
                                    <input type="text" className="form-control " onChange={checkInput} required
                                        placeholder="#000000000" />
                                </div>
                                <div className="mb-1">
                                    <p className="text-dark fs-6 mb-1">Email:</p>
                                    <input type="email" className="form-control "
                                        placeholder="email address" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 p-4">
                            <div className="mx-auto" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div className="mb-1">
                                    <p className="text-dark fs-6 mb-2">International Passport Number:</p>
                                    <input type="text" className="form-control "
                                        aria-describedby="emailHelpId" placeholder="########" />
                                </div>

                                <div className="mb-1">
                                    <p className="text-dark fs-6 mb-2">Spoken Languages:</p>
                                    <select className="form-control spoken" onChange={SpokenLang}  >
                                        {langs.map((item, index) => {
                                            return (
                                                <option value={item} key={index} >{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 p-4">
                            <div className="mx-auto" style={{ display: 'block' }}>
                                <div className="mb-1">
                                    <p className="text-dark fs-6 mb-2">Residential Address:</p>
                                    <input type="text" className="form-control "
                                        placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 p-4">
                            <div className="mx-auto" style={{ display: 'block' }}>
                                <div className="mb-1">
                                    <p className="text-dark fs-5 mb-1">Office/Shop:</p>
                                    <input type="text" className="form-control "
                                        placeholder="" />
                                </div>
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
                                    <input type="text" className="form-control shadow"
                                        placeholder="" aria-describedby="helpId" />
                                </div>

                                <div className="mb-1">
                                    <label className="form-label fs-5">Year of Entry</label>
                                    <input type="month" className="form-control shadow"
                                        aria-describedby="helpId" />
                                </div>

                                <div className="mb-1">
                                    <label className="form-label fs-5">Year of Graduation</label>
                                    <input type="month"
                                        className="form-control shadow" aria-describedby="helpId" />
                                </div>

                            </div>

                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Secondary</label>
                                    <input type="text" className="form-control shadow"
                                        placeholder="" aria-describedby="helpId" />
                                </div>

                                <div className="mb-1">
                                    <label className="form-label fs-5">Year of Entry</label>
                                    <input type="month" className="form-control shadow"
                                        aria-describedby="helpId" />
                                </div>

                                <div className="mb-1">
                                    <label className="form-label fs-5">Year of Graduation</label>
                                    <input type="month"
                                        className="form-control shadow" />
                                </div>

                            </div>
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Primary</label>
                                    <input type="text" className="form-control shadow"
                                        placeholder="" />
                                </div>

                                <div className="mb-1">
                                    <label className="form-label fs-5">Year of Entry</label>

                                    <input type="month" className="form-control shadow"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label className="form-label fs-5">Year of Graduation</label>
                                    <input type="month" className="form-control shadow"
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
                                    placeholder="" aria-describedby="helpId" />
                            </div>

                            <div className="mb-1">
                                <label className="form-label fs-5">Address of Employer</label>
                                <input type="text" className="form-control shadow"
                                    aria-describedby="helpId" />
                            </div>

                            <div className="mb-1">
                                <label className="form-label fs-5">Penultimate Place</label>
                                <input type="text"
                                    className="form-control shadow" aria-describedby="helpId" />
                            </div>

                        </div>
                        <div className="mb-1">
                            <label className="form-label fs-5">Address of Employer</label>
                            <input type="text"
                                className="form-control shadow" aria-describedby="helpId" />
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
                                    <select className="form-control w-100">
                                        <option>ITEM</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">State</label>
                                    <select className="form-control w-100">
                                        <option>ITEM</option>
                                    </select>
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
                    <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        < HiArrowSmDown className="fs-1 text-center text-primary" />

                        <HiArrowNarrowUp className="fs-1 text-center text-success" />
                    </div>

                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Spouse</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name of Spouse</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Maiden Name (if wife)</label>
                                    <input className="form-control w-100" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Residential Address</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input type="number" className="form-control w-100" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5">Place of Work</label>
                                    <input type="text" className="form-control w-100" />
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Child 1 </h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name</label>
                                    <input className="form-control w-100" />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5"> Address</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input type="number" className="form-control w-100" />
                                </div>


                            </div>

                        </div>
                    </div>

                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Child 2 </h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name</label>
                                    <input className="form-control w-100" />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5"> Address</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input type="number" className="form-control w-100" />
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="container-fluid">
                        <h1>{ test}</h1>
                        <Button variant="contained" color="success" size="small" onClick={fun}>
                            Create Child
                        </Button>
                        <TextField
                            required
                            value={test}
                            onChange={handletest}
                            id="outlined-required"
                            label="Required"                    />
                    </div>
                    <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        < HiArrowSmDown className="fs-1 text-center text-primary" />

                        <HiArrowNarrowUp className="fs-1 text-center text-success" />
                    </div>
                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Father</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name </label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Address</label>
                                    <input className="form-control w-100" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Residential Address</label>
                                    <input type="number" className="form-control w-100" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        < HiArrowSmDown className="fs-1 text-center text-primary" />

                        <HiArrowNarrowUp className="fs-1 text-center text-success" />
                    </div>
                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Mother</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name </label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Address</label>
                                    <input className="form-control w-100" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Residential Address</label>
                                    <input type="number" className="form-control w-100" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="" >
                        < HiArrowSmDown className="fs-1 text-center text-primary" />
                    </div>


                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Sibling 1</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name </label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Address</label>
                                    <input className="form-control w-100" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Residential Address</label>
                                    <input type="number" className="form-control w-100" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="" >
                        < HiArrowSmDown className="fs-1 text-center text-primary" />
                    </div>
                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Sibling 2</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name </label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Address</label>
                                    <input className="form-control w-100" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fs-5">Date of Birth</label>
                                    <input type="month" className="form-control w-100" />
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Residential Address</label>
                                    <input type="number" className="form-control w-100" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="" >
                        < HiArrowSmDown className="fs-1 text-center text-primary" />
                    </div>

                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-down" data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">Landlord/Caretaker</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" >
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name </label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Residential   Address</label>
                                    <input className="form-control w-100" />
                                </div>
                                <div className="mb-1">
                                    <label className="form-label fs-5">Phone Number</label>
                                    <input className="form-control w-100" />
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="" >
                        < HiArrowSmDown className="fs-1 text-center text-primary" />
                    </div>
                    <div className="m-5 p-4" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} data-aos="fade-up"
                        data-aos-delay="2" data-aos-easing="ease-in">
                        <h1 className="text-center fs-5">I hereby attest that the above information is true and correct to the best of my knowledge</h1>
                        <div className="col-md-12 mt-4">
                            <div className="mx-auto mt-2" >
                                <div className="mb-1">
                                    <label className="form-label fs-5">Name </label>
                                    <input className="form-control w-100" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fs-5">Signature/Date</label>
                                    <input className="form-control w-100" />
                                </div>

                            </div>

                        </div>


                    </div>


                    {/* fignerPrint */}


                    <button className="btn btn-dark is-fullwidth">Submit</button>

                </form>

            </div>
        </div>

    )
}
// https://youtu.be/eDP0U7DVw-4

export default SuspectForm;





// <FaBeer />
// <HiArrowSmDown/>

