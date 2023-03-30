import axios from "axios";




export  function getmoreinfo(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`/api/moreinfo/${unitId}`).then(res=>res.data.data)
}



export  function getmoreinfo2(){
    const unitId = localStorage.getItem('martic_number')
    return axios
    .get(`/api/moreinfo/surety//${unitId}`).then(res=>res.data.surety)
}