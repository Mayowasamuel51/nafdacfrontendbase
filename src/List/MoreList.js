import '../pages/layoutAuth/style.css'
import moment from "moment";
import '../pages/layoutAuth/style.css'
import { Link } from "react-router-dom";

function MoreList({ moreinfo }) {
    return (
        <>
            <div className='container is-widescreen row'>
                {moreinfo.map((item, index) => {
                    return (
                        <div style={{ marginTop: "5em" }} key={item.id}>
                            {/* <h2 className="text-center fs-3 px-4 py-3 text-uppercase">
                                More info on {item.suspect_name}{" "}
                            </h2> */}
                            <div
                                className="container-fluid row"
                                style={{
                                    position: "relative",
                                    top: "3em",
                                    marginInline: "auto",
                                    padding: "2.4em",
                                }}
                            >
                            </div>
                            <div className='row'>
                                {/* <img src="download.png" alt=""> */}
                                <img style={{ width: '40%', borderRadius: '12px' }}
                                    src={`http://127.0.0.1:8000/storage/uploads/${item.affix_left}`} className="img-thumbnail" alt="..." />
                                <br></br>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-4">

                                    <div className="card p-4 shadow" key={index}>
                                        <h4 className="text-center">Personal Infomation</h4> <br />
                                        <div className="card-body">
                                            {/* <img style={{ width: '70%', borderRadius: '12px' }} src={`http://127.0.0.1:8000/uploads/images/${item.affix_left}`} className="img-thumbnail" alt="..." /> */}
                                            <ul>
                                                <li>
                                                    Fristname{" "}
                                                    <span className="ps-2 fw-bold">{item.firstname}</span>
                                                </li>
                                                <li>
                                                    Surname{" "}
                                                    <span className="ps-1 fw-bold">{item.lastname}</span>
                                                </li>
                                                <li>
                                                    Middle name{" "}
                                                    <span className="ps-1 fw-bold">{item.middlename}</span>
                                                </li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    Office Address{" "}
                                                    <span className="ps-1 fw-bold">{item.office_shop}</span>
                                                </li>
                                                <li>
                                                    Home Address{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.residental_address}
                                                    </span>
                                                </li>
                                                <li>
                                                    Phone number{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.mobile_phone}
                                                    </span>
                                                </li>
                                                <li>
                                                    Office Phone{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.office_phone}
                                                    </span>
                                                </li>
                                            </ul>

                                            <ul key={index}>
                                                <li>
                                                    Landlord Name{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.Landlord_name}
                                                    </span>
                                                </li>
                                                <li>
                                                    Landlord Address{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.Landlord_address}
                                                    </span>
                                                </li>
                                                <li>
                                                    Landlord number{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.Landlord_phone}
                                                    </span>
                                                </li>
                                            </ul>


                                            <ul key={index}>
                                                <li>
                                                    Here by name{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.hereby_name}
                                                    </span>
                                                </li>
                                                <li>
                                                    Here by Singnature{" "}
                                                    <span className="ps-1 fw-bold">
                                                        {item.hereby_signature}
                                                    </span>
                                                </li>
                                            </ul>

                                            <li>
                                                Nationality:{" "}
                                                <span className="ps-2 fw-bold">
                                                    {item.nationality}
                                                </span>{" "}
                                            </li>
                                            <li>
                                                {" "}
                                                State:{" "}
                                                <span className="ps-2 fw-bold">
                                                    {item.state}
                                                </span>{" "}
                                            </li>
                                            <li>
                                                Ethnic_group:
                                                <span className="ps-2 fw-bold">
                                                    {item.ethnic_group}
                                                </span>{" "}
                                            </li>
                                            <li>
                                                Local-govt{" "}
                                                <span className="ps-2 fw-bold">
                                                    {item.local_govt}
                                                </span>{" "}
                                            </li>
                                            <li>
                                                town_village{" "}
                                                <span className="ps-2 fw-bold">
                                                    {item.town_village}
                                                </span>{" "}
                                            </li>


                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-4">
                                        <div className="card shadow p-4">
                                            <div className="card-body">
                                                <h4 className="text-center">Employment Infomation</h4> <br />

                                                <li>
                                                    Last Place{" "}
                                                    <span className="ps-2 fw-bold">{item.last_place}</span>{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Address Employer{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.address_employer}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Penultimate_Place{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Penultimate_Place}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Address_of_penultimate{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.address_of_penultimate}
                                                    </span>{" "}
                                                </li>


                                                <li>
                                                    Spouse name{" "}
                                                    <span className="ps-2 fw-bold">{item.spouse_name}</span>{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Spouse_maiden{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.spouse_maiden}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Spouse_date_brith
                                                    <span className="ps-2 fw-bold">
                                                        {item.spouse_date_brith}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Spouse_residential_address{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.spouse_residential_address}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Spouse_phone{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.spouse_phone}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Spouse_work{" "}
                                                    <span className="ps-2 fw-bold">{item.spouse_work}</span>{" "}
                                                </li>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card shadow mb-4 mt-5 p-4">
                                            <h1 className="fs-4 text-center">Parents Information</h1>

                                            <ul className="card-body" key={index}>
                                                <li>
                                                    Fathers name{" "}
                                                    <span className="ps-2 fw-bold">{item.father_name}</span>{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Fathers date of birth{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.father_birth}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Fathers phone number{" "}
                                                    <span className="ps-2 fw-bold">{item.father_phone}</span>{" "}
                                                </li>
                                                <li>
                                                    Fathers address{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.father_res_address}
                                                    </span>{" "}
                                                </li>
                                            </ul>

                                            <br></br>

                                            <ul className="card-body" key={index}>
                                                <li>
                                                    Mothers name{" "}
                                                    <span className="ps-2 fw-bold">{item.mother_name}</span>{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Mothers date of birth{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.mother_birth}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Mothers phone number{" "}
                                                    <span className="ps-2 fw-bold">{item.mother_phone}</span>{" "}
                                                </li>
                                                <li>
                                                    Mothers address{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.mother_res_address}
                                                    </span>{" "}
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow mb-4 mt-5 p-4">
                                            <h1 className="fs-4 text-center">Sibling information </h1>

                                            <ul className="card-body" key={index}>
                                                <li>
                                                    Sibling name{" "}
                                                    <span className="ps-2 fw-bold">{item.Sibling1_name}</span>{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Sibling birth{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Sibling1_birth}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Sibling phone{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Sibling1_phone}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Sibling address{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Sibling1_res_address}
                                                    </span>{" "}
                                                </li>
                                            </ul>

                                            <br></br>

                                            <ul className="card-body" key={index}>
                                                <li>
                                                    Sibling name{" "}
                                                    <span className="ps-2 fw-bold">{item.Sibling2_name}</span>{" "}
                                                </li>
                                                <li>
                                                    {" "}
                                                    Sibling birth{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Sibling2_birth}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Sibling phone{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Sibling2_phone}
                                                    </span>{" "}
                                                </li>
                                                <li>
                                                    Sibling address{" "}
                                                    <span className="ps-2 fw-bold">
                                                        {item.Sibling2_res_address}
                                                    </span>{" "}
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                                <div className="bg-dark text-white p-4">
                                    <h1 className="text-start text-uppercase fs-4">
                                        Note by Front Desk Officer{" "}
                                    </h1>{" "}
                                    <br />
                                    <div>{ }</div>
                                </div>
                                <br />

                                <h1 className="fs-4 text-uppercase mt-4">Surety</h1>
                                <div className="d-flex justify-content-space-around ">
                                    <div className="mt-4">
                                        <div className="p-3 container  m-3 m-auto">
                                            <table className="table table-bordered ">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Surety Name</th>
                                                        <th scope="col">Office Number</th>
                                                        <th scope="col">Image</th>
                                                        <th scope="col">Mobile Number </th>
                                                        <th scope="col">Residential Address</th>
                                                        <th scope="col">Office Address </th>
                                                        <th scope="col">international_passport </th>
                                                        <th scope="col">Gender </th>
                                                    </tr>
                                                </thead>
                                                {/* <tbody>
                                        {suspectmanysurety.length > 0 ? (
                                            suspectmanysurety.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.firstname}</td>
                                                        <td>{item.office_phone}</td>
                                                        <td>
                                                            <img
                                                                src={`http://127.0.0.1:8000/uploads/images/${item.affix_left}`}
                                                                width="120px"
                                                            />
                                                        </td>
                                                        <td>{item.mobile_phone}</td>
                                                        <td>{item.residental_address}</td>
                                                        <td>{item.office_shop}</td>
                                                        <td>{item.international_passport}</td>
                                                        <td>{item.gender}</td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td>
                                                    <div className="text-center">
                                                        <h3 className="text-danger text-uppercase fs-5">
                                                            There are no Sureties for {suspect_name}
                                                        </h3>{" "}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody> */}
                                            </table>
                                            <Link
                                                className="btn btn-success "
                                                to="/fd/dashboard"
                                                style={{
                                                    textDecoration: "none",
                                                    color: "white",
                                                }}
                                            >
                                                Go Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

        </>
    )
}


export default MoreList;