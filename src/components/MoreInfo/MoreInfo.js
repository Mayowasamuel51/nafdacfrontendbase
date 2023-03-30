import * as React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";
import MoreList from "../../List/MoreList";


export function getmoreinfo() {

    const martic_number = localStorage.getItem('martic_number')
    return axios
        .get(`/api/moreinfo/${martic_number}`).then(res => res.data.suspect)
}



export function getmoreinfo2() {
    const unitId = localStorage.getItem('unitId')
    const martic_number = localStorage.getItem('martic_number')
    return axios
        .get(`/api/moreinfo/surety/${martic_number}`).then(res => res.data.surety)
}
function MoreInfo() {
    const [data, setData] = useState([])
    const martic_number = localStorage.getItem('martic_number')
    const [datasurety, setSuerty] = useState([])

    const martic_numbe = martic_number
    const suspectQuery = useQuery({
        queryKey: ['posts'],
        queryFn: getmoreinfo
    })

    const suspectQuery2 = useQuery({
        queryKey: ['posts'],
        queryFn: getmoreinfo2
    })

    useEffect(() => {
        axios(`/api/moreinfo/${martic_number}`).then((res) => {
            if (res.data.status === 200) {
                const api = res.data.suspect
                console.log(api)
                setData(api)
            }
        })
    }, [])
    let martic_num =''
    data.map((item) => {
        martic_num= item.martic_number
    })
    useEffect(() => {
        axios(`/api/moreinfo/surety/${martic_num}`).then((res) => {
            if (res.data.status === 200) {
                const api = res.data.surety
                console.log(api)
                setSuerty(api)
            }
        })
    }, [])
   
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

            <MoreList moreinfo={suspectQuery.data} suspectmanysurety={datasurety} />

        </>
    )
}

export default MoreInfo;