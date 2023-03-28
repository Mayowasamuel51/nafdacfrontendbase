import * as React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";
import MoreList from "../../List/MoreList";

export  function getmoreinfo(){
    const martic_number = localStorage.getItem('martic_number')
    return axios
    .get(`api/moreinfo/${martic_number}`).then(res=>res.data.suspect)
}



function MoreInfo() {
    const suspectQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getmoreinfo
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
        
            <MoreList moreinfo={suspectQuery.data } />
        
        </>
    )
}

export default MoreInfo;