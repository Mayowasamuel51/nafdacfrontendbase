// show the dashboard
// click on officer 
// perform your duty 
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Redirect, Route, useParams } from "react-router-dom";
import Navbar from '../../../pages/layoutAuth/Navbar';
// import { getPosts } from "../api/axios";
import { ThreeCircles } from "react-loader-spinner";
import { getSuspect } from '../api/suspect'
import '../../../pages/layoutAuth/style.css'
import SuspectList from "../../../List/SuspectList";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PoliceList from "../../../List/PoliceList";
import IpopoliceList from "../../../List/IpopoliceList";
function IPO() {
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(true);

    const handleDate = (e) => {
        e.preventDefault();
        setShowDate((prev) => !prev);
    };
    const unitId = localStorage.getItem('unitId')
    const suspectQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getSuspect
    })
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
        
        
        <Navbar /> <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
            <div className="text-center align-baseline flex-fill flex-lg-row flex-column">
                {/* Calender */}
                
            </div>
            <div className="  ">
                <h1 className="ps-3 " style={{lineHeight:'2.8rem'}}>IPO Officer</h1> 
                <h5 className="ps-3">Suspect Infomation Under  {unitId}</h5>
                <br />
                <IpopoliceList suspect={suspectQuery.data} />
            </div>


        
        
        </>
    )
}

export default IPO;