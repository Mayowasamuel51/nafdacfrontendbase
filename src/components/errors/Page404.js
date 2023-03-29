import { Link } from "react-router-dom";



function Page404() {
    return ( 
        <div className="container is-fullhd">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card card-body">
                        <h1>PAGE 404 |PAGE NOT FOUND </h1>
                        <h3>URL /PAGE U SEARCHING NOT FOUNC D</h3>
                        <button className='btn btn-warning'>  <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>Home</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Page404;