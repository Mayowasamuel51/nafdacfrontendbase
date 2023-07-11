
import React, { useState } from 'react';
import Master from '../../components/Unit/unit1Osun/Master';
import axios from 'axios'
import { useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import { Route, Redirect, useHistory } from 'react-router-dom'

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

import swal from 'sweetalert';
function Unit1OsunRoutes({ ...rest }) {
  const notyf = new Notyf();
  const history = useHistory();
  const [errorNetwork, setErrorNetwork] = useState(false)
  const [Authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const fetchAuth = () => {
    axios.get(`/api/checkingAuthenticated`).then(res => {
      if (res.status === 200) {
        setAuthenticated(true)
        console.log('auth seen ')
      }
      setLoading(false)
    }).catch((err) => setErrorNetwork(true))
    return () => {
      setAuthenticated(false)
    }
  }
  useEffect(() => {
    fetchAuth()
  }, [])

  axios.interceptors.response.use(
    undefined, function axiosRetryInterceptor(err) {
      if (err.response.status === 401) {
        swal("Unauthorized", err.response.data.message_back, "warning")
        history.push('/')
        notyf.error('worng');
      }
      return Promise.reject(err);
    }
  )
  axios.interceptors.response.use(
    function (response) {
      return response
    }, function (err) {
      if (err.response.status === 403) {   // access denied
        swal('Forbedden', err.response.data.message_back, 'warning')
        history.push('/403')
        notyf.error('worng');
      }
      else if (err.response.status === 404) {   // page not found
        swal('404 Error', "URL PAGE NOT FOUND", 'warning')
        history.push('/404')
        notyf.error('worng');
      }
      return Promise.reject(err)
    }
  )

  if (errorNetwork) {
    return <div>
      <h4 className='text-danger text-center'>ERROR WITH SERVER PLEASE CONTACT THE ADMIN OFFICERS </h4>
    </div>
  } else {
    if (loading) {
      return <div  style={{margin:'auto', width:'10%', marginTop:'300px'}}>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    }
  }
  return (
    <Route {...rest}
      render={({ props, location }) =>
        Authenticated ?
          (<Master {...props} />)
          : (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
      }



    />
  )
}

export default Unit1OsunRoutes;



