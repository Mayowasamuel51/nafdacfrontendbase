
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';



function DisplaySuretySuspect() {
    const [suspectmanysurety, setsuspectmanysurety] = useState([]);
    const { martic_number } = useParams()
    const [loading, setLoading] = useState(true);
    const { id, } = useParams()
    const suspect_id = id
    const martic_n = martic_number
    const [name, setSuspectData] = useState([])
    const Call = () => {
        axios(`/api/edit-suspect-surety/${suspect_id}`).then((res) => {
            if (res.status === 200) {
                console.log(res.data)
                const api = res.data.suspect
                console.log(api)
                setSuspectData(api)
            }
        }
        )
    }
    useEffect(() => {
        Call()
    }, [])
    let martic_nu = ''
    let suspect_na = ''
    name.map((item) => {
        martic_nu = item.martic_number
        suspect_na = item.firstname
    })

    const [pageEror , setPageError] = useState(true)
    const CallSuspectManySurety = () => {
        axios(`/api/suspect-many-suretyfd/${martic_n}`).then((res) => {
            if (res.status === 200) {
                const api = res.data.suspectmanysurety
                console.log(api)
                setsuspectmanysurety(api)

            }
            setLoading(false)
        }).catch((err)=>{setPageError(err)})
    }
    let martic_num = ''
    let suspect_name = ''
    suspectmanysurety.map((item) => {
        martic_num = item.martic_number
        suspect_name = item.firstname
    })
    useEffect(() => {
        setTimeout(() => {
            CallSuspectManySurety()
        }, 3000)
    }, [])
    let page_load_image = '';
    let error_page = '';

    if (loading) {
        page_load_image=  <div>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div><br></br>
        </div>
    } else {
        page_load_image = 
            <tbody>
                {suspectmanysurety.length > 0 ? suspectmanysurety.map((item, index) => {
                    return (
                        <tr key={item.id}>

                            <td>{item.firstname}</td>
                            <td>{item.office_phone}</td>
                            <td>
                                    <img
                                    src={`http://127.0.0.1:8000/storage/uploads/${item.affix_left}`} width="120px" /></td>
                            <td>{item.mobile_phone}</td>
                            <td>{item.residental_address}</td>
                            <td>{item.office_shop}</td>
                            <td>{item.international_passport}</td>
                            <td>{item.gender}</td>

                        </tr>
                    )
                }) : <tr>
                    <td>
                        <div className='text-center'>
                            <h3 className='text-danger fs-4'>There are no Sureties for {suspect_na}</h3></div>
                    </td>
                </tr>}


            </tbody>
    
    }
    return (
        <div>
            <h1 className='fs-3 text-info text-center'>Information's for those Standing For   <span className="ps-2">{suspect_na}</span> </h1>
            <hr></hr>
            <div className='p-3 container  m-3 m-auto'>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Surety Name</th>
                            <th scope='col'>Office Number</th>
                            <th scope="col">Image</th>
                            <th scope="col">Mobile Number </th>
                            <th scope="col">Residential Address</th>
                            <th scope="col">Office Address </th>
                            <th scope="col">international_passport </th>
                            <th scope="col">Gender </th>
                        </tr>
                    </thead>
                    { page_load_image}
                  
                </table>
                <button className='btn btn-success '>
                    <Link to="/fd/dashboard" style={{
                        textDecoration: 'none', color: 'white'
                    }}>Back</Link></button>
            </div>
        </div>
    )
}

export default DisplaySuretySuspect;