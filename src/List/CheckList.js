import { Link } from "react-router-dom";
import moment from "moment";
import '../pages/layoutAuth/style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'



function CheckList({ suspect , reload}) {
    return (
        <>
          <div className="container-fluid m-3">
            <div className="row">
                <div class="col-12 grid-margin p-3">
                    <div class="card" style={{ width: '1500px' }}>
                        <button className="btn btn-dark  mt-1 mb-4 w-100" onClick={reload}>reload</button>
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

                                        <th scope="col">More</th>

                                        <th scope="col">Year</th>



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
                                                <td>{item.firstname}</td>
                                                <td>{item.office_phone}</td>
                                                <td>{item.residental_address}</td>
                                                <td>{item.office_shop}</td>
                                                <td>{item.office_phone}</td>

                                                <td>
                                                    <Link onClick={(e) => (localStorage.setItem('martic_number', item.martic_number))}
                                                        to={`moreinfo/${item.martic_number}`}
                                                        className="btn btn-dark btn-sm px-3 py-1 rounded-0"
                                                    >
                                                        More info
                                                    </Link>
                                                </td>


                                                <td>
                                                    {moment(item.created_at)
                                                        .utc()
                                                        .format("YYYY-MM-DD")}
                                                </td>



                                                <td>
                                                    <span className="text-success fw-bold">Cleared</span>
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
        
        </>
    )
}


export default CheckList;