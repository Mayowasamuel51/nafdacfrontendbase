
import nafdac from '../../MakeSurety/images/nafdac.png';
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top mb-5">
            <div className="container">
                <Link className="navbar-brand d-flex" to="/">
                    <div> <img src={nafdac} alt="" width="50" height="50"></img>  </div>
                    <h3 className="text-success mt-2 px-2 h3"  >NAFDAC</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto">
                    </ul>
                    <ul className="navbar-nav ms-auto">
                    <li> <Link className="nav-link" to="/suspect" >Suspect </Link></li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="{{ route('login') }}">Login</a> */}
                            <Link className="nav-link" to="/" >Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/register" >Register</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a  className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="{{ route('logout') }}" >
                                    logout
                                </a>
                                <form action="{{ route('logout') }}" method="POST" className="d-none">
                                </form>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        <div>
                 <br></br>
        </div>
        </div>

    )
}


export default Nav;