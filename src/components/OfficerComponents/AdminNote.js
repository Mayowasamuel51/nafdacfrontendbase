
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react';
// import swal from 'sweetalert';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
function AdminNote(props) {
    const notyf = new Notyf();
    const history = useHistory()
    const mainRef = useRef('');;;;;;;;;
    const { id } = useParams()
    let suspect_id = id

    const [note, setNote] = useState([]);;
    let suspect_name = '';
    let suspect_note = ''

    const [value, setValue] = useState([])
    const [messages, setMessage] = useState([]);




    const CallValue = () => {
        note.map((item) => {
            suspect_name = item.name
            setMessage(item.note)
        })
    }
    // const Call = () => {
    //     axios.get(`/api/note/${suspect_id}`).then((res) => {
    //         if (res.data.status === 200) {
    //             const api = res.data.data
    //             console.log(api)
    //             setNote(api) 

    //         } else if(res.data.status === 404) {
    //             swal('Danger', res.data.data, 'danger')
    //             navigate('/dashboard')
    //         }
    //     }
    //     ).catch(err => {console.log(err)})
    // }
    const handelValue = (e) => {
        // setValue({...value, [e.target.name]:e.target.value})
        setValue({ ...value, [e.target.name]: e.target.value })

    }
    const formNote = (e) => {
        e.preventDefault();
        const data = value
        axios.put(`/api/noteformfd/${suspect_id}`, data).then((res) => {
            if (res.data.status === 200) {
                // swal('Success', "Upadate SuccessFull", 'success')
                window.location.reload(false);
                notyf.success('NOTE  ADDED ');
            } else if (res.data.status === 404) {
                // swal('danger', "not allowed ", 'danger')
                notyf.success('not allowed ');
                // window.location.reload(false);
                // history.push('/')

            }
        }).catch((err) => {
            return err
        })
    }

    useEffect(() => {

        axios.get(`/api/notefd/${suspect_id}`).then((res) => {
            if (res.data.status === 200) {
                const api = res.data.notetaking
                const apinote = res.data.note
                setNote(api)
                setValue(apinote)
            } else if (res.data.status === 404) {
                // swal('Danger', res.data.data, 'danger')
                notyf.success('Danger ');
                //    history.push('/fd/dashboard')
            }
        }
        ).catch(err => { console.log(err) })
        // noter()
    }, [suspect_id, history])

    // const noter = () => {
    note.map((item) => {
        suspect_name = item.firstname
        suspect_note = item.note
        // setValue(suspect_note)  
    })
    //    }
    return (
        <div className='container   '>
        <h1>NOTE TAKING FORM  </h1>
        <br></br>
        <div className='container ms-4  '>
            <h2 className='text-secondary fs-3 '>
                NOTE TAKING BY FRONT DESK OFFICER ON
                (    {suspect_name} )</h2>
            <hr></hr>
            {note.length > 0 ? note.map((item, index) => {
                return (
                    <div key={index}>
                        <div>
                            <h4>
                                ...
                            <p className=''>{item.note}</p>
                            </h4>
                       </div>
                    </div>
                )
            })  :  <h3 className='text-danger'>NO NOTE TAKEN BY THE FRONT DESK OFFICER</h3>}
        </div>
        <hr></hr>
       
            <textarea className='form-control' 
                name='note' onChange={handelValue}
                value={value.note} />
            <br></br>
            {/* <button type="submit" className='btn btn-secondary'>Update</button> */}
        {/* </form> */}
    </div>
    )
}

export default AdminNote;