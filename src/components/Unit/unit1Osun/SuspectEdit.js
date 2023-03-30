
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { HiArrowSmDown, HiArrowNarrowUp } from "react-icons/hi";
import { Button } from '@mui/material';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
function SuspectEdit() {
    const notyf = new Notyf();
    const history = useHistory()
    const [pageload, setPageLoading] = useState(true)
    const [catchs, setCatch] = useState('');
    const [name, setSuspectData] = useState([])
    const [load, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [susccessLoad, setSuccessLoader] = useState(true);
    const [addsuccess, setSuccess] = useState('')
    const [child, setChild] = useState([]);
    const [inputs, setInput] = useState({
        name: '',
        address: '',
        phone_number: '',
        birth_date: ''
    })
    const handelInput = (e) => {
        setInput({ ...inputs, [e.target.name]: e.target.value });
    }
    const { martic_number } = useParams()
    const suspect_id = martic_number
    const Call = () => {

    }
    let martic_numbers = '';
    name.map((item, index) => {
        martic_numbers = item.martic_number
    })
    useEffect(() => {
        axios(`/api/edit-suspect/${suspect_id}`).then((res) => {
            if (res.status === 200) {
                // console.log(res.data)
                const api = res.data.suspect
                setSuspectData(api)
            }
        }
        ).catch(err => {
            // console.log(err)
            setCatch(err)
        }) 
    }, [])
    useEffect(() => {
        let isApiSubscribed = true
        axios(`/api/suspectchild/${suspect_id}`).then((res) => {
            if (res.status === 200) {
                const api = res.data.child
                // console.log(api)
                setChild(api)
                // setArray(api)
            }
            // setmainLoader(false)
        }).catch(err => console.log(err))
        return () => {
            isApiSubscribed = false
        }

    }, [])

    const ChildForm = async (e) => {
        // let martic_number = '';
        // name.map((item, index) => {
        //     martic_number = item.martic_number
        //     // console.log(martic_number)
        // })
        e.preventDefault();
        let data = {
            child1_name: inputs.name,
            child1_address: inputs.address,
            child1_birth: inputs.birth_date,
            child1_phone: inputs.phone_number,
            martic_number: suspect_id
        }
        console.log(data)
        axios.post('/api/suspectchild', data).then((res) => {
            if (res.data.status === 200) {
                setSuccess(res.data.message)
                setError([])
                // swal({})
                // swal('success',"Child Added", 'success')
                notyf.success('CHILD ADDED ');
                window.location.reload(false);
                // history.push('')
                e.preventDefault();
                // history.push(`/fd/edit-suspect/${martic_number}`)

            } else if (res.data.status === 422) {
                // console.log('please fill the input fiieds')
                setError(res.data.errors)
            }
        }).catch(err => setCatch(err))

    }
    return (
        <div className='container '>
            {catchs}
            <div className='mt-1 ' style={{ margin:'auto', width:'100%'}}>
                <br></br> <br></br> <br></br>
                <h3 className='text-center text-success fw-bold'> Children  Form
                    {name.map((item, index) => { return (<div key={index}><h3 className='text-center text-info'> Add Child for {item.firstname}</h3></div>) })}</h3>
                <hr></hr>
                <form onSubmit={ChildForm} className="m-2 p-4  container" style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }} >
                    <div>
                        <div data-aos="fade-up" data-aos-delay="2" data-aos-easing="ease-in">
                            {/* <h1 className="text-center fs-5">Child Form </h1> */}
                            <div className=" mt-4"> 
                                <div className="mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="mb-1">
                                        <label className="form-label fs-5" style={{ fontWeight: 'bold' }}>Name</label>
                                        <input className="form-control w-100" placeholder='Child Name' name="name"
                                            value={inputs.name} onChange={handelInput}
                                        />
                                        <h5 className='text-danger '>{error.child1_name}</h5>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fs-5" style={{ fontWeight: 'bold' }}>Date of Birth</label>
                                        <input type="date" name='birth_date' className="form-control w-100"
                                            value={inputs.birth_date} onChange={handelInput} />
                                         <h5 className='text-danger '>{error.child1_birth}</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="mx-auto mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className="mb-1">
                                        <label className="form-label fs-5" style={{ fontWeight: 'bold' }}> Address</label>
                                        <input placeholder='Child Address' className="form-control w-100" name='address' value={inputs.address} onChange={handelInput} />
                                        <h5 className='text-danger '>{error.child1_address}</h5>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fs-5" style={{ fontWeight: 'bold' }}>Phone Number</label>
                                        <input placeholder='Child Phone Number' type="number" name="phone_number" className="form-control w-100"
                                            value={inputs.phone_number} onChange={handelInput} />
                                         <h5 className='text-danger '>{error.child1_phone}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-dark   fs-5 ml-3'>Add Child</button>
                    </div>


                </form>
            </div>


            <div className="m-4   container" >
                {/* <h4 className='text-center '>Childern For</h4> */}
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Child Name</th>
                            <th scope='col'>Child Address</th>
                            <th scope="col">Child Phone Number</th>
                            <th scope="col">Child Data of Birth </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {showchild} */}
                        {child.length > 0 ? child.map((item, index) => {
                            return (
                                <tr key={index}>

                                    <td>{item.child1_name}</td>
                                    <td>{item.child1_address}</td>
                                    <td>{item.child1_phone}</td>
                                    <td>{item.child1_birth}</td>

                                </tr>
                            )

                        }) : <tr>
                            <td className='fs-4 text-warning '>NO CHILD FOR THIS SUSPECT </td>
                        </tr>
                        }
                    </tbody>

                </table>
                <button className='btn btn-success '><Link to="/fd/dashboard" style={{
                    textDecoration: 'none', color: 'white'
                }}>Back</Link></button>

            </div>

        </div>
    )
}
export default SuspectEdit;