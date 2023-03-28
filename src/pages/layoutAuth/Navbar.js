import React from "react";
import { Link, useLocation } from "react-router-dom";
import nafdac from "../images/nafdac.png";
import { Search } from "@mui/icons-material";
import { HiUserAdd } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import "./style.css";

const Navbar = (props) => {
  const linkname = localStorage.getItem('martic_number')
  let location = useLocation();
  const linkssuspect = [
    { link: '/unit1Osun/frontdesk/createsuspect' },
    { links: '/unit2Osun/frontdesk/createsuspect' }
  ]

  const runFun = () => {
    const links = linkssuspect.find((item) => {
      // return item.links === location && 
    })
  }
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary " id="navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand text-light ps-3 bw-bold d-inline"
            to="/"
          >
            <img src={nafdac} width="50" height="50" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              <li className="nav-item"></li>
            </ul>
            <div className="d-flex" role="search">


              <input
                className="form-control me-2"
                type="search"
                value={props.details}
                onChange={props.detailsHanlder}
                placeholder="search suspect names"
                aria-label="Search"
              />
              <button
                onClick={props.FindDetails}
                className="btn btn-outline-success btn-dark text-light"
                type="submit"
              >
                <Search />
              </button>
            </div>
            <div className="mx-4">
              <ul className="nav navbar d-md-flex flex-fill flex-row justify-content-between gap-4 d-none align-baseline">
                {/* <li>
                  <Link className="dropdown-item" to="/unit1Osun/frontdesk/createsuspect">
                    <HiUserAdd className="fs-5 text-light" />
                    <span className="fs-6 mx-1 fw-bold">Add suspect</span>
                  </Link>
                </li> */}

                <li>
                  {location.pathname === '/unit1Osun/frontdesk' ? <li>
                    <Link className="dropdown-item" to="/unit1Osun/frontdesk/createsuspect">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">Add suspect</span>
                    </Link>
                  </li> : null}
                </li>
                <li>
                  {location.pathname === '/unit2Osun/frontdesk' ? <li>
                    <Link className="dropdown-item" to="/unit2Osun/frontdesk/createsuspect">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">Add suspect</span>
                    </Link>
                  </li> : null}
                </li>
                {/* all suspect */}
                <li>
                  {location.pathname === '/unit2Osun/frontdesk/createsuspect' ? <li>
                    <Link className="dropdown-item" to="/unit2Osun/frontdesk">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">All suspect</span>
                    </Link>
                  </li> : null}
                </li>

                <li>
                  {location.pathname === '/unit1Osun/frontdesk/createsuspect' ? <li>
                    <Link className="dropdown-item" to="/unit1Osun/frontdesk">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">All suspect</span>
                    </Link>
                  </li> : null}
                </li>


                {/* surety suspect */}
                <li>
                  {location.pathname === `/unit1Osun/edit-suspect-surety/${linkname}` ? <li>
                    <Link className="dropdown-item" to="/unit1Osun/frontdesk">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">All suspect</span>
                    </Link>
                  </li> : null}
                </li>

                <li>
                  {location.pathname === `/unit2Osun/edit-suspect-surety/${linkname}` ? <li>
                    <Link className="dropdown-item" to="/unit2Osun/frontdesk">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">All suspect</span>
                    </Link>
                  </li> : null}
                </li>


                {/* officers */}
                <li>
                  {location.pathname === `/unit1Osun/rf/add-suspect-officer/${linkname}` ? <li>
                    <Link className="dropdown-item" to="/unit1Osun/rf">
                      <HiUserAdd className="fs-5 text-light" />
                      <span className="fs-6 mx-1 fw-bold">Back</span>
                    </Link>
                  </li> : null}
                </li>
                
                


              </ul>
            </div>
            <div className="mt-2 d-lg-block d-none" id="profile">
              <ul className="navbar-nav ms-auto ms-md-0 me-lg-4" id="list">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle bg-light rounded-circle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <HiUser className="fs-5 fw-bold" />
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/fd/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Activity Log
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
