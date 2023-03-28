import axios from "axios";




export  function getmoreinfo(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`api/moreinfo/${unitId}`).then(res=>res.data.data)
}

