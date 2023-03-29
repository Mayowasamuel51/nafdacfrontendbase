
import {Link} from 'react-router-dom'

function Page403() {
    return ( 
        <div className="container is-fullhd">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card card-body">
                        <h1>PAGE 403 | forbidden PAGE</h1>
                        <h3>ACCESS denied | As your are not a Admin</h3>
                      <button className='btn btn-warning'>  <Link  to="/" style={{textDecoration:'none', color:'black' , fontSize:'30px'}}>Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page403;