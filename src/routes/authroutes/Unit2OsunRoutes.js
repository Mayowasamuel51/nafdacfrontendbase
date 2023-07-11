
import React, { useState } from 'react';
import Master from '../../components/Unit/unit2Osun/Master';
import axios from 'axios'
import { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'

import swal from 'sweetalert';
function Unit2OsunRoutes({ ...rest }) {
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
        swal("Unauthorized", err.response.data.message, "warning")
        history.push('/')
      }
      return Promise.reject(err);
    }
  )
  axios.interceptors.response.use(
    function (response) {
      return response
    }, function (err) {
      if (err.response.status === 403) {   // access denied
        swal('Forbedden', err.response.data.message, 'warning')
        history.push('/403')
      }
      else if (err.response.status === 404) {   // page not found
        swal('404 Error', "URL PAGE NOT FOUND", 'warning')
        history.push('/404')
      }
      return Promise.reject(err)
    }
  )

  if (errorNetwork) {
    return <div>
      <h1 className='text-danger text-center'>ERROR WITH SERVE PLEASE CONTACT THE ADMIN OFFICERS </h1>
    </div>
  } else {
    if (loading) {
      return <h1>loading...</h1>
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

export default Unit2OsunRoutes;



