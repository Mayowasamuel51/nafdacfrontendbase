import { Link } from "react-router-dom";
import moment from "moment";
import '../pages/layoutAuth/style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function SuspectList({ suspect, police }) {
    let testdata = ['mayowa', 'ola']

    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-12 grid-margin p-3">
                    <div class="card" style={{ width: '1500px' }}>

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
                                        <th scope="col">Surety</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Note</th>
                                        <th scope="col">Actions</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suspect.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    {item.firstname === 'Axel Strong' ? <div className="tn btn-primary position-relative">
                                                        <span style={{ zIndex: '99', height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className=" position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                            <span className="p-2 text-white">3</span>
                                                        </span>
                                                    </div> : ''

                                                    }

                                                    {item.firstname === 'Troy Pennington' ? <div className="tn btn-primary position-relative">
                                                        <span style={{ zIndex: '99', height: '20px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className=" position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                            <span className="p-2 text-white">1</span>
                                                        </span>
                                                    </div> : ''

                                                    }

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


                                                <td className="mx-2">
                                                    {/* {item.firstname === 'mayowa' && item.firstname === 'may' */}
                                                    <h5>{item.firstname}</h5>
                                                    {/* } */}
                                                </td>
                                                <td>{item.office_phone}</td>
                                                <td>{item.residental_address}</td>
                                                <td>{item.office_shop}</td>
                                                <td>{item.office_phone}</td>
                                                <td>
                                                    <Link
                                                        to={`edit-suspect/${item.martic_number}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        Add Child
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`moreinfo/${item.id}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
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
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`edit-suspect-surety/${item.id}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        Surety
                                                    </Link>
                                                </td>

                                                <td>
                                                    {moment(item.created_at)
                                                        .utc()
                                                        .format("YYYY-MM-DD")}
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`note/${item.id}`}
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

export default SuspectList;