import { Link } from "react-router-dom";
import moment from "moment";
import '../pages/layoutAuth/style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function AdminList({ suspect, police }) {
    let testdata = ['mayowa', 'ola']

    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-12 grid-margin p-3">
                    <div class="card" style={{ width: '1500px' }}>
                        bu;gug

                        <div class="table-responsive p-3">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Home</th>
                                        <th scope="col">Office-A</th>
                                        <th scope="col">Office</th>
                                        <th scope="col">Childern</th>
                                        <th scope="col">More</th>
                                        {/* <th scope="col">Surety</th> */}
                                        <th scope="col">Year</th>
                                        <th scope="col">Note</th>
                                        <th scope="col">Actions</th>
                                        <th scope="col">officer</th>
                                        <th scope="col">Status</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {suspect.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <LazyLoadImage
                                                        effect="blur"
                                                        alt={item.affix_left.alt}
                                                        opacity='2.4'

                                                        // height={image.height}
                                                        src={`http://127.0.0.1:8000/storage/uploads/${item.affix_left}`}
                                                        width="130px"
                                                        className="p-1"
                                                    // width={item.affix_left.width}
                                                    />
                                                    {/* <span>{image.caption}</span> */}
                                                    {/* <img
                                                        src={`http://127.0.0.1:8000/storage/uploads/${item.affix_left}`}
                                                        width="120px"
                                                        className="p-1"
                                                    /> */}
                                                </td>
                                                {/* <td>{item.created_at}</td> */}
                                                {/* {<td>
                                                
                                                </td>} */}


                                                <td>{item.firstname === 'mayowa' && item.firstname === 'may' ? <>
                                                    <span className="  badge rounded-pill bg-danger">99+ <span className="">
                                                        {item.firstname}  unread messages</span></span></> : <h2>{item.firstname}</h2>}
                                                </td>
                                                <td>{item.office_phone}</td>
                                                <td>{item.residental_address}</td>
                                                <td>{item.office_shop}</td>
                                                <td>{item.office_phone}</td>
                                                <td>
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`admin/edit-suspect/${item.martic_number}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        Child
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`admin/moreinfo/${item.martic_number}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0">
                                                        More info
                                                    </Link>
                                                </td>
                                                {/* <td>
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`edit-suspect-surety/${item.martic_number}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        Surety
                                                    </Link>
                                                </td> */}

                                                <td>
                                                    {moment(item.created_at)
                                                        .utc()
                                                        .format("YYYY-MM-DD")}
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`admin/note/${item.id}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        Check
                                                    </Link>
                                                </td>

                                                <td>
                                                    <Link
                                                        to={`edit-student/${item.id}`}
                                                        className="btn btn-primary btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                                {/* <td> */}

                                                {/* <span className="text-success fw-bold">Cleared</span> */}
                                                {/* </td> */}
                                                <td>
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`admin/add-suspect-officer/${item.martic_number}`}
                                                        className="btn btn-primary btn-sm px-3 py-1 rounded-0"
                                                    >
                                                      Officers
                                                    </Link>
                                                </td>
                                                <td>
                                                {item.reg_officer_name?.length > 0 && item.oc_name?.length > 0 && item.officer_name?.length > 0 ? <span className="text-success fw-bold">CLEARED</span> : <span className="text-danger fw-bold">NOT CLEARED</span>}
                                                </td>
                                              
                                            </tr>

                                        );
                                    })}

                                   
                                            
                                      
                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminList;