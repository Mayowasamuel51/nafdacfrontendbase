import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import Nav from './Layouts/Nav';
import Heading from './Layouts//Heading'
import swal from 'sweetalert'
import Nav_Link from './Layouts/Nav_Link';

const OfficersForSuspect = () => {
    let navigate = useHistory()
    const [input, setInput] = useState({

        height_of_suspect: '',
        weight_of_suspect: '',
        distinguinshing_features: '',
        nature_of_crime: '',
        number_of_offense: '',
        accomplices: '',
        motive: '',
        financial_benefits: '',
        environment_commited: '',
        enfd: '',
        cr: '',
        reg_officer_name: '',
        reg_signature_date: '',
        officer_name: '',
        officer_signature_date: '',
        oc_name: '',
        oc_signature_date: '',
        error_list: []

    })
    const [myerror, setMyerror] = useState('')
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(true);
    const [name, setOfficerData] = useState([])
    const { id } = useParams()
    const suspect_id = id
    const Call = () => {
        axios(`/api/add-suspect-officer/${suspect_id}`).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                const api = res.data.suspect
                // console.log(api)
                setOfficerData(api)
            }
        }
        )
    }
    useEffect(() => {
        Call()
    }, [])
  
    let martic_number = ''
    let suspect_name = ''
    name.map((item) => {
        martic_number = item.martic_number
        suspect_name = item.name
    })
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
            martic_number:martic_number
        }
        axios.post('/api/officers', data).then((response) => {
            if (response.data.status === 200) {
                console.log('done')
                navigate('/dashboard')
                setError([])
                swal("Good job OFFICER ", "", "success");
            } else if (response.data.status === 422) {
                // console.log('please fill the input fiieds')
                setError(response.data.errors)
            }
        })

        // console.log('form is done well')
    }
    
    return (
        <div className="" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px' }}>
            {/* <Nav /> */}
            {/* <Heading /> <br></br> <br></br> */}
            <div className='text-center'>
                <button className='btn btn-info'><Link to="/dashboard" style={{ textDecoration: 'none' }}>DashBoard</Link></button>
            </div>
            <div className="container-fluid p-3">

                <div className="row">
                    <div>
                        <form method='post' onSubmit={submitForm} className='p-1' style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }}>
                            <div className="row mt-4">
                                <h1 className='text-center text-danger fs-4'>Note ::  Your about to Fill the Form for the Suspect Named  ( {suspect_name}  )</h1>
                                <hr></hr>
                                <div className="col-md-12">
                                    <h3 className="text-dark fs-4 mb-4" style={{ fontWeight: "600" }}>For Investigating Police Officer & Regulatory Officers Use Only</h3>

                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div className="mb-3">
                                            <label className="form-label">Height of Suspect</label>

                                            <input value={input.height_of_suspect} onChange={handleInput} name="height_of_suspect" type="text" className="form-control shadow" aria-describedby="helpId" placeholder="Height of Suspect" />
                                            <span className="text-danger">{error.height_of_suspect}</span>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Weight of Suspect</label>
                                            <input type="text" value={input.weight_of_suspect} onChange={handleInput} name="weight_of_suspect" className="form-control shadow" aria-describedby="helpId" placeholder="Weight of suspect" />
                                            <span className="text-danger">{error.weight_of_suspect}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">

                                        <label className="htmlForm-label">Distinguishing Features (birth marks, tattoos, facial feautures)</label>
                                        <input type="text" value={input.distinguinshing_features} onChange={handleInput}
                                            name="distinguinshing_features" className="form-control shadow" aria-describedby="helpId" placeholder="Distinguishing Features (birth marks, tattoos, facial feautures)" />
                                        <span className="text-danger">{error.distinguinshing_features}</span>
                                    </div>

                                    <div className="mb-3">
                                        <label className="htmlForm-label">Nature Of Crime Committed?</label>
                                        <input type="text" value={input.nature_of_crime} onChange={handleInput} name="nature_of_crime" className="form-control shadow" aria-describedby="helpId" placeholder="" />
                                        <span className="text-danger">{error.nature_of_crime}</span>
                                    </div>

                                    <div className="mb-3">
                                        <label className="htmlForm-label">Is the suspect a first time, second time, third time or recidivist offender?</label>
                                        <input type="text" value={input.number_of_offense} onChange={handleInput} name="number_of_offense" className="form-control shadow" aria-describedby="helpId" placeholder="Is the suspect a first time, second time, third time or recidivist offender" />
                                    </div>


                                    <div className="mb-3">
                                        <label className="htmlForm-label">Who are the suspects accomplices? (if not alone)</label>
                                        <input type="text" value={input.accomplices} onChange={handleInput} name="accomplices" className="form-control shadow" placeholder=">Who are the suspects accomplices? (if not alone)" aria-describedby="helpId" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="htmlForm-label">Motive</label>
                                        <input type="text" value={input.motive} onChange={handleInput} name="motive" className="form-control shadow" placeholder="motive" aria-describedby="helpId" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="htmlForm-label">Were there any financial benefits? (if yes, state them)</label>
                                        <textarea type="text" value={input.financial_benefits} onChange={handleInput} name="financial_benefits" className="form-control shadow" aria-describedby="helpId" placeholder="Were there any financial benefits? (if yes, state them)" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="htmlForm-label">Was the crime committed in a clandestine environment? (if yes, give detailed description)</label>
                                        <textarea cols="30" rows="10" value={input.environment_commited} onChange={handleInput} name="environment_commited" className="form-control shadow"></textarea>
                                        <span className="text-danger">{input.error_list}</span>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <h3 className="text-dark fs-4 mb-2" style={{ fontWeight: "600" }}>Record ID</h3>
                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                        <div className="mb-3">
                                            <input type="text" value={input.enfd} onChange={handleInput} name="enfd" className="form-control shadow" placeholder="ENFD/" />
                                            <span className="text-danger">{error.enfd}</span>
                                        </div>

                                        <div className="mb-3">
                                            <input type="text" value={input.cr} onChange={handleInput} className="form-control shadow" placeholder="CR:" name="cr" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="text-dark fs-4 mb-2" style={{ fontWeight: "600" }}>Regulatory Officer</h3>

                                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Name</label>
                                                    <input type="text" value={input.reg_officer_name} onChange={handleInput} name="reg_officer_name" className="form-control shadow" aria-describedby="helpId" placeholder="" />
                                                    <span className="text-danger">{error.officer_name}</span>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Signature & Date</label>
                                                    <input type="date" value={input.reg_signature_date} onChange={handleInput} name="reg_signature_date" className="form-control shadow" aria-describedby="helpId" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="text-dark fs-4 mb-2" style={{ fontWeight: "600" }}>Investigating Police Officer</h3>

                                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Name</label>
                                                    <input type="text" className="form-control shadow" aria-describedby="helpId" placeholder="" value={input.officer_name} onChange={handleInput} name="officer_name" />
                                                    <span className="text-danger">{error.reg_officer_name}</span>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Signature & Date</label>
                                                    <input type="date" className="form-control shadow" aria-describedby="helpId" placeholder="" value={input.officer_signature_date} onChange={handleInput} name="officer_signature_date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <h3 className="text-dark fs-4 mb-2" style={{ fontWeight: "600" }}>O/C Police Squad/FTF</h3>

                                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Name</label>
                                                    <input type="text" className="form-control shadow" aria-describedby="helpId" placeholder="" value={input.oc_name} onChange={handleInput} name="oc_name" />
                                                    <span className="text-danger">{error.oc_name}</span>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="htmlForm-label">Signature & Date</label>
                                                    <input type="date" value={input.oc_signature_date} onChange={handleInput} name="oc_signature_date" className="form-control shadow" aria-describedby="helpId" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            {/* <div className="mt-5 d-flex justify-content-center align-content-center">
                                <button type="submit" className="btn btn-success text-white px-5 py-2 w-25">Submit</button>
                            </div> */}
                            <br></br>
                            <Button variant="contained" fullWidth={true} type="submit" color="success" size="large" >
                                Submit
                            </Button>


                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OfficersForSuspect;