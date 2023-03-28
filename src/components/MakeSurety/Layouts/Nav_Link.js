import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Nav_Link = () => {
    return (
        <>

            <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: '23px', width: "40%" }} className="m-auto" >
                <h4>Fast links</h4>
               
                <ul className="nav justify-content-center">
                    <li className="nav-item mr-3">

                        <Button variant="contained" fullWidth={true} color="success" size="small" >
                            <Link className='text-white' style={{ textDecoration: 'none' }} to="/surety">Surety Page</Link>
                        </Button>
                    </li>
                    <li className="nav-item ms-3">
                        <Button variant="contained" fullWidth={true} color="success" size="small" >
                            <Link className='text-white' style={{ textDecoration: 'none' }} to="/officer">Officer Page</Link>
                        </Button>
                    </li>
                    <li className="nav-item ms-4">
                        <Button variant="contained" fullWidth={true} color="success" size="small" >
                            <Link className='text-white' style={{ textDecoration: 'none' }} to="/suspect">Suspect Page</Link>
                        </Button>

                    </li>
                </ul>

           
            </div>
            <br></br>
                <br></br>

        </>
    )
}

export default Nav_Link;