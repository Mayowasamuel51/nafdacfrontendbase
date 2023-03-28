import swal from "sweetalert";
import React, { useState } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import nafdac from "./images/nafdac.png";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
function Nav() {
  const notyf = new Notyf();
  const [menu, setMenu] = useState(true);
  const handleMenu = (e) => {
    e.preventDefault();
    setMenu((prev) => !prev);
  };

  const history = useHistory();
  const loginOut = (e) => {
    e.preventDefault();

    // axios.post(`api/logout`).then((res) => {
    //   if (res.data.status === 200) {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("unitId");
    localStorage.removeItem('image_front')
    localStorage.removeItem('image_right')
    localStorage.removeItem('image_left')
    // swal("Logout Successfull", "", "success");
    notyf.error('Logout successfully');
    history.push("/");
    //   }
    // });

  };
  var AuthButtons = "";
  if (!localStorage.getItem("auth_token")) {
    AuthButtons = (
      <>
        <li className="nav-item">
          <Link
            className={"btn btn-dark px-4 rounded-5 text-light nav-link mx-3"}
            to="/login"
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link btn btn-success px-4 rounded-5 text-light"
            to="/register"
          >
            Register
          </Link>
        </li>
      </>
    );
  } else {
    AuthButtons = (
      <React.Fragment>
        <li className="nav-item">
          <button onClick={loginOut} className=" btn btn-dark" to="/logout">
            Logout
          </button>
        </li>

      </React.Fragment>
    );
  }
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top mb-5">
      <div className="container">
        <a className="navbar-brand d-flex" href="{{ route('dashboard') }}">
          <div>
            {" "}
            <img src={nafdac} alt="" width="50" height="50"></img>{" "}
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label=""
          onClick={handleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto"></ul>
          <ul className="navbar-nav ms-auto">{AuthButtons}</ul>
        </div>
        {/* Responsive */}

        <div className={menu ? "d-none" : "navbar d-block container mx-auto"}>
          <div className='mt-2'>
            <ul className="navbar-nav d-flex flex-column gap-2 align-items-center justify-content-center">
              <li className="nav-item">
                <Link
                  className={
                    "btn btn-dark px-4 rounded-5 text-light nav-link mx-3"
                  }
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link btn btn-success px-4 rounded-5 text-light"
                  to="/register"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
