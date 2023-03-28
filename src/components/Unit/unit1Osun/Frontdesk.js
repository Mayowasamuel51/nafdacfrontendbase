import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Redirect, Route, useParams } from "react-router-dom";
import Navbar from '../../../pages/layoutAuth/Navbar';
// import { getPosts } from "../api/axios";
import { ThreeCircles, Rings, ThreeDots } from "react-loader-spinner";
import { getSuspect, getOfficers } from '../api/suspect'
import '../../../pages/layoutAuth/style.css'
import SuspectList from "../../../List/SuspectList";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SearchList from "../../../List/SearchList";
import CheckList from "../../../List/CheckList";
function Frontdesk() {
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(true);
  const [police, setPolice] = useState([]);
  const [details, setDetails] = useState('')
  const [searchData, setSearchData] = useState([])
  const [bool, setBool] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [checkbool, setcheckBool] = useState(false)

  const [checkloading, setCheckLoading] = useState(false)
  const [checkData, setcheckData] = useState([])


  const [dateinput, setDateInput] = useState('');

  // input errors


  const dateHandler = (e) => {
    setDateInput(e.target.value)
  }

  const handleDate = (e) => {
    e.preventDefault();
    setShowDate((prev) => !prev);
    console.log(date)
    calenderLogic(`${date}`, unitId)
  };
  const datelogic = (e) => {
    // setDate(e.target.value)
  }

  const unitId = localStorage.getItem('unitId')
  const suspectQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getSuspect
  })
  const officerQuery = useQuery({
    queryKey: ['post'],
    queryFn: getOfficers
  })
  const fetchPost = useCallback(async () => {
    try {
      const response = await axios(`api/officers/${unitId}`);
      if (response.data.status === 200) {
        setPolice(response.data.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  });



  const detailsHanlder = (e) => {
    setDetails(e.target.value)
  }
  // reload
  function reloadPage() {
    window.location.reload()
  }
  // changed the axious 
  const fetchSearchData = (details, unitId) => {
    axios(`api/search/${details}/${unitId}`).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data.data)
        const api = res.data.data
        setSearchData(api)
        setSearchLoading(false)
        setBool(false)
      }
      else if (res.data.status === 404) {
        console.log('sorry for this name is not found')
        setBool(true)
        setSearchData([])
      }

    }).catch((err) => console.log(err.message))
  }

  // calendar logic 
  function calenderLogic(getyear, unitId) {
    axios(`api/fullyear/${getyear}/${unitId}`).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data.data)
        const api = res.data.data
        console.log(api)
        setcheckData(api)
        setCheckLoading(false)
        setcheckBool(false)
      }
      else if (res.data.status === 404) {
        console.log('sorry for this name is not found')
        setcheckBool(true)
        setcheckData([])
      }
    })
  }


  useEffect(() => {
    fetchPost();
  }, []);
  let serachContent = '';
  let checkseacrch = ''

  if (checkbool) {
    checkseacrch = <h5 className="text-danger text-center">NO SUSPECT REGISTERED  ON THIS DAY  </h5>
  } else {
    if (checkloading) {
      checkseacrch = <div style={{ margin: 'auto', width: '10%', marginTop: '100px' }}> <ThreeDots
        height="80"
        width="120"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    } else {
      checkseacrch = <div> {checkData.length > 0 ? <CheckList reload={reloadPage} suspect={checkData} /> : ''} </div>
    }
  }

  if (bool) {
    serachContent = <h5 className="text-danger text-center">NO SUSPECT  FOUND </h5>
  }
  else {
    if (searchLoading) {
      serachContent = <div style={{ margin: 'auto', width: '10%', marginTop: '100px' }}>
        <Rings
          height="80"
          width="80"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        /></div>
    } else {
      serachContent = <div> {searchData.length > 0 ? <SearchList reload={reloadPage} suspect={searchData} /> : ''} </div>
    }
  }
  const buttonCalender = () => {
    if (dateinput === '') {
      console.log('empty')
    } else {
      setCheckLoading(true)
      calenderLogic(dateinput, unitId)
    }
  }
  const clickFind = () => {

    if (details === '') {
      console.log('empty')
    } else {
      setSearchLoading(true)
      fetchSearchData(details, unitId)
    }

  }
  if (suspectQuery.status === 'loading') return <div style={{ margin: 'auto', width: '10%', marginTop: '300px' }}> <ThreeCircles
    height="100"
    width="100"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  /></div>
  if (suspectQuery.status === 'error') return <h1 className="text-danger ">{JSON.stringify(suspectQuery.error)}</h1>
  return (
    <>
      <Navbar details={details} detailsHanlder={detailsHanlder} FindDetails={clickFind} /> <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <div className="text-center " style={{
        margin: 'auto', width: '50%', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', padding: '20px'
      }}>
        {/* Calender */}
        {/*  i removed the data */}
        {/* <h3></h3> */}
        <input className="form-control" type="date" onChange={dateHandler} value={dateinput} />
        <button className="btn btn-info fw-bolder mt-4 " onClick={buttonCalender}>check</button>
      </div>
      <div className="">
        <br />
        {serachContent}
        <div className="mt-4">
          {checkseacrch}
        </div>
        <h3 className="ps-3">Suspect infomation under  {unitId}</h3>
        <SuspectList suspect={suspectQuery.data} police={police} />


      </div>


    </>
  )
}

export default Frontdesk;