import axios from "axios";
export  function getOfficers(){
    const unitId = localStorage.getItem('unitId')
    return axios
    .get(`api/admin/officers/${unitId}`).then(res=>res.data.data)
}