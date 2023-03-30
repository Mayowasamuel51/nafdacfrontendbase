
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { Button } from "@mui/material";



function AdminChild() {
    const history = useHistory();
    const [pageload, setPageLoading] = useState(true);
    const [catchs, setCatch] = useState("");
    const [name, setSuspectData] = useState([]);
    const [load, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [susccessLoad, setSuccessLoader] = useState(true);
    const [addsuccess, setSuccess] = useState("");
    const [child, setChild] = useState([]);
    const [inputs, setInput] = useState({
      name: "",
      address: "",
      phone_number: "",
      birth_date: "",
    });
    const handelInput = (e) => {
      setInput({ ...inputs, [e.target.name]: e.target.value });
    };
    const { martic_number } = useParams();
    const suspect_id = martic_number;
    const Call = () => {};
    let martic_numbers = "";
    name.map((item, index) => {
      martic_numbers = item.martic_number;
    });
    useEffect(() => {
      axios(`/api/edit-suspectad/${suspect_id}`)
        .then((res) => {
          if (res.status === 200) {
            // console.log(res.data)
            const api = res.data.suspect;
            setSuspectData(api);
          }
        })
        .catch((err) => {
          // console.log(err)
          setCatch(err);
        });
    }, []);
    useEffect(() => {
      let isApiSubscribed = true;
      axios(`/api/suspectchildad/${suspect_id}`)
        .then((res) => {
          if (res.status === 200) {
            const api = res.data.child;
            // console.log(api)
            setChild(api);
            // setArray(api)
          }
          // setmainLoader(false)
        })
        .catch((err) => console.log(err));
      return () => {
        isApiSubscribed = false;
      };
    }, []);
  
    const ChildForm = (e) => {
      // let martic_number = '';
      // name.map((item, index) => {
      //     martic_number = item.martic_number
      //     // console.log(martic_number)
      // })
      e.preventDefault();
      let data = {
        child1_name: inputs.name,
        child1_address: inputs.address,
        child1_birth: inputs.birth_date,
        child1_phone: inputs.phone_number,
        martic_number: suspect_id,
      };
      console.log(data);
      axios
        .post("/api/suspectchildad", data)
        .then((res) => {
          if (res.data.status === 200) {
            setSuccess(res.data.message);
            setError([]);
            // swal({})
            // swal("success", "Child Added", "success");
            window.location.reload(false);
            history.push(`/fd/edit-suspect/${martic_number}`);
          } else if (res.data.status === 422) {
            // console.log('please fill the input fiieds')
            setError(res.data.errors);
          }
        })
        .catch((err) => setCatch(err));
    };
    <div>
    {" "}
    <br></br>
    {catchs}
    <div className="p-4 mt-6">
      <br></br> <br></br> <br></br>
      <h3 className="text-center text-success">
        {" "}
        {name.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="text-center text-success fs-4">
                Child of suspect {item.firstname}
              </h3>
            </div>
          );
        })}
      </h3>
      <hr></hr>
      <form
        onSubmit={ChildForm}
        className="m-2 p-4"
        style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
      >
        <div></div>
      </form>
    </div>
    <div className="m-4 ">
      {/* <h4 className='text-center '>Childern For</h4> */}
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">Child Name</th>
            <th scope="col">Child Address</th>
            <th scope="col">Child Phone Number</th>
            <th scope="col">Child Data of Birth </th>
          </tr>
        </thead>
        <tbody>
          {/* {showchild} */}
          {child.length > 0 ? (
            child.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.child1_name}</td>
                  <td>{item.child1_address}</td>
                  <td>{item.child1_phone}</td>
                  <td>{item.child1_birth}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="fs-4 text-warning ">
                NO CHILD FOR THIS SUSPECT{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  </div>
    
}

export default AdminChild;