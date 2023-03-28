import axios from "axios";

export  function getSuspect(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`api/suspect/${unitId}`).then(res=>res.data.data)
}



export  function SearchSuspect(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`api/search`).then(res=>res.data.data)
}


export  function getOfficers(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`api/officers/${unitId}`).then(res=>res.data.data)
}
