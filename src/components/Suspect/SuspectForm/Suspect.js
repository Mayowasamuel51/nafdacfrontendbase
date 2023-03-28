import React, { useRef, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Spouse from "./Spouse";
import Navbar from "../../../pages/layoutAuth/Navbar";

import Nav from "../Layouts/Nav";
import Heading from "../Layouts/Heading";
import Camera from "./Camera";
import Fingerprint from "./Fingerprint";
import Employment from "./Employment";
import PersonalInfo from "./PersonalInfo";
import PlaceOfOrigin from "./PlaceOfOrigin";
import Education from "./Education";
import Sibling from "./Sibling";
import Father from "./Father";
import Landlord from "./Landlord";
import Mother from "./Mother";
import Attestation from "./Attestation";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import langs from "../Pages/langs";
import mystate from "../Pages/places";
import institutions from "../Pages/Institution";
import { useHistory } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
const Suspect = () => {
  
  const history = useHistory();
  const notyf = new Notyf();
  const [inputs, setInput] = useState({
    note: "",
    name: "",
    middlename: "",
    lastname: "",
    gender: "",
    international_passport: "",
    nin: "",
    driver:"",
    date_birth: "",
    moblie_phone: "",
    Office_phone: "",
    email: "",
    Res_address: "",
    Office_shop_res: "",
    year_of_entry: "",
    year_of_graduation: "",
    Secondary: "",
    year_of_secondary: "",
    year_of_graduation_secondary: "",
    primary: "",
    year_of_primary: "",
    year_of_graduation_primary: "",
    address_employer: "",
    last_place: "",
    Penultimate_Place: "",
    address_of_penultimate: "",
    nationality: "Nigeria",
    spouse_name: "",
    spouse_maiden: "",
    spouse_date_brith: "",
    spouse_residential_address: "",
    spouse_phone: "",
    spouse_work: "",
    father_name: "",
    father_birth: "",
    father_phone: "",
    father_res_address: "",
    mother_name: "",
    mother_res_address: "",
    mother_birth: "",
    mother_phone: "",
    Sibling1_name: "",
    Sibling1_res_address: "",
    Sibling1_birth: "",
    Sibling1_phone: "",

    Sibling2_name: "",
    Sibling2_res_address: "",
    Sibling2_birth: "",
    Sibling2_phone: "",

    Landlord_name: "",
    Landlord_phone: "",
    Landlord_address: "",
    hereby_name: "",
    hereby_signature: "",
  });

  const checkInput = (e) => {
    setInput({ ...inputs, [e.target.name]: e.target.value });
  };


 
  const current_state = useRef("");
  const current_local = useRef("");

  const [lang, setLang] = useState([]);
  const [institution, setinstitution] = useState([]);
  const [placebirth, setplacebirth] = useState([]);
  const [orgin, setOrgin] = useState([]);
  const [error, setError] = useState([]);
  const [page, setPage] = useState(1);

  const SpokenLang = (e) => {
    setLang(e.target.value);
    console.log(e.target.value);
  };
  const PlaceBirth = (e) => {
    setplacebirth(e.target.value);
    console.log(e.target.value);
  };
  const Institution = (e) => {
    setinstitution(e.target.value);
    console.log(e.target.value);
  };
  const Orgin = (e) => {
    setOrgin(e.target.value);
    console.log(e.target.value);
  };

  const [morechild, setMoreChild] = useState([
    { name: "", address: "", phone_number: "", date_birth: "" },
  ]);
  const handleChangeChild = (index, event) => {
    let data = [...morechild];
    data[index][event.target.name] = event.target.value;
    setMoreChild(data);
  };
  const [newchild, setNewchild] = useState([{}]);
  let main = [];
  const addMoreChild = (e) => {
    const addchilds = {
      name: "",
      address: "",
      phone_number: "",
      date_birth: "",
    };
    setMoreChild([...morechild, addchilds]);
    setNewchild([...morechild, addchilds]);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile_1, setSelectedFile_1] = useState(null);
  const [selectedFile_2, setSelectedFile_2] = useState(null);

  // Fingerprint
  const [fringerprint, setfringerprint] = useState([]);

  const CallSGIFPGetData = (successCall, failCall) => {
    let uri = "https://localhost:8443/SGIFPCapture";

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let fpobject = JSON.parse(xmlhttp.responseText);
        successCall(fpobject);
      } else if (xmlhttp.status == 404) {
        failCall(xmlhttp.status);
      }
    };
    let params = "Timeout=" + "10000";
    params += "&Quality=" + "50";
    params += "&licstr=" + encodeURIComponent(secugen_lic);
    params += "&templateFormat=" + "ISO";
    params += "&imageWSQRate=" + "0.75";
    xmlhttp.open("POST", uri, true);
    xmlhttp.send(params);

    xmlhttp.onerror = function () {
      failCall(xmlhttp.statusText);
    };
  };
  const captureFP = () => {
    CallSGIFPGetData(SuccessFunc1, ErrorFunc);
  };
  const [good, setGood] = useState("");
  const [bad, setbad] = useState("");
  function SuccessFunc1(result) {
    if (result.ErrorCode == 0) {
      if (result != null && result.BMPBase64.length > 0) {
        document.getElementById("FPImage1").src =
          "data:image/bmp;base64," + result.BMPBase64;
      }
      // template_1 = result.TemplateBase64;
      console.log(result.TemplateBase64);
      setfringerprint(result.TemplateBase64);
      console.log(fringerprint);
    } else {
      alert(
        "Fingerprint Capture Error Code:  " +
          result.ErrorCode +
          ".\nDescription:  " +
          ErrorCodeToString(result.ErrorCode) +
          "."
      );
    }
    console.log("done");
  }
  const SuccessFunc = (result) => {
    if (result.ErrorCode == 0) {
      if (result != null && result.BMPBase64.length > 0) {
        document.getElementById("FPImage1").src =
          "data:image/bmp;base64," + result.BMPBase64;
        // console.log(result.TemplateBase64)
        // console.log(result.WSQImage)
        // fringer.push(result.TemplateBase64)
        // setfringerprint(result.TemplateBase64)
        // console.log(fringerprint)
        setGood("VERY GOOD Click below to Submit the Form");
      }
    } else {
      alert(
        "Fingerprint Capture Error Code:  " +
          result.ErrorCode +
          ".\nDescription:  " +
          ErrorCodeToString(result.ErrorCode) +
          "."
      );
      setbad("PLEASE PUT YOUR FINGER VERY WELL");
    }
  };
  function ErrorFunc(status) {
    /* 	
      If you reach here, user is probabaly not running the 
      service. Redirect the user to a page where he can download the
      executable and install it. 
      */
    alert("Check if SGIBIOSRV is running; Status = " + status + ":");
  }
  let secugen_lic = "";
  function ErrorCodeToString(ErrorCode) {
    let Description;
    switch (ErrorCode) {
      // 0 - 999 - Comes from SgFplib.h
      // 1,000 - 9,999 - SGIBioSrv errors
      // 10,000 - 99,999 license errors
      case 51:
        Description = "System file load failure";
        break;
      case 52:
        Description = "Sensor chip initialization failed";
        break;
      case 53:
        Description = "Device not found";
        break;
      case 54:
        Description = "Fingerprint image capture timeout";
        break;
      case 55:
        Description = "No device available";
        break;
      case 56:
        Description = "Driver load failed";
        break;
      case 57:
        Description = "Wrong Image";
        break;
      case 58:
        Description = "Lack of bandwidth";
        break;
      case 59:
        Description = "Device Busy";
        break;
      case 60:
        Description = "Cannot get serial number of the device";
        break;
      case 61:
        Description = "Unsupported device";
        break;
      case 63:
        Description = "SgiBioSrv didn't start; Try image capture again";
        break;
      default:
        Description =
          "Unknown error code or Update code to reflect latest result";
        break;
    }
    return Description;
  }
  // File Handler
  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const changeHandler_1 = (e) => {
    setSelectedFile_1(e.target.files[0]);
  };

  const changeHandler_2 = (e) => {
    setSelectedFile_2(e.target.files[0]);
  };
  // ***PAGE SWTICH***
  const handlePage = () => {
    switch (page) {
      case 1:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-label="Example with label"
                style={{ width: "2%" }}
                aria-valuenow="2"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                0%
              </div>
            </div>
            <div className="container" style={{ marginLeft: "5rem" }}>
              <Camera />
            </div>
          </>
        );
        break;
      case 2:
        return (
          <div>
            <PersonalInfo
              checkInput={checkInput}
              inputs={inputs}
              error={error}
              PlaceBirth={PlaceBirth}
              langs={langs}
              SpokenLang={SpokenLang}
              mystate={mystate}
              changeHandler={changeHandler}
              changeHandler_1={changeHandler_1}
              changeHandler_2={changeHandler_2}
            />
          </div>
        );
        break;
      case 3:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                aria-label="Success striped example"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>

            <Education
              checkInput={checkInput}
              inputs={inputs}
              error={error}
              institutions={institutions}
              Institution={Institution}
            />
          </>
        );
        break;
      case 4:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
            <Employment checkInput={checkInput} inputs={inputs} error={error} />
          </>
        );
        break;
      case 5:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
            <PlaceOfOrigin
              checkInput={checkInput}
              inputs={inputs}
              error={error}
              mystate={mystate}
              Change={Change}
              current_local={current_local}
              current_state={current_state}
              Orgin={Orgin}
            />
          </>
        );
        break;
      case 6:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
            <Spouse checkInput={checkInput} inputs={inputs} error={error} />{" "}
          </>
        );

        break;
      case 7:
        return (
          <>
            {" "}
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <Father checkInput={checkInput} inputs={inputs} error={error} />
          </>
        );
        break;
      case 8:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <Mother checkInput={checkInput} inputs={inputs} error={error} />;
          </>
        );
        break;
      case 9:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
            <Sibling checkInput={checkInput} inputs={inputs} error={error} />
          </>
        );
      case 10:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
            <Landlord checkInput={checkInput} inputs={inputs} error={error} />
          </>
        );
        break;
      case 11:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
            <Fingerprint good={good} bad={bad} captureFP={captureFP} />
          </>
        );
        break;
      case 12:
        return (
          <>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                aria-label="Info striped example"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                100%
              </div>
            </div>
            <Attestation
              checkInput={checkInput}
              inputs={inputs}
              error={error}
            />
          </>
        );
        break;
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const unitId = localStorage.getItem('unitId')
    const formData = new FormData();
    let martic_number = Math.floor(Math.random() * 9000 + 1);
    // formData.append('martic_number', martic_number)// this thing as to be automated
    // formData.append('child1_res_address', morechild.phone_number)
    formData.append("fringer", fringerprint);
    console.log(fringerprint);
    formData.append("unitId",unitId );
    
    let image_left = localStorage.getItem('image_left');
    let imageClass = new Image();
    imageClass.src = image_left
    console.log(image_left)
    let image_tag = document.querySelector('.image-tag')
    formData.append("affix_left", image_left);

    let image_right = localStorage.getItem('image_right');
    let imageClass_right= new Image();
    imageClass_right.src = image_right
    formData.append("affix_right", image_right);


    let image_front = localStorage.getItem('image_front');
    let imageClass_front= new Image();
    imageClass_front.src = image_front
    formData.append("affix_front", image_front);

    formData.append("nin", inputs.nin);
    formData.append("driver", inputs.driver);



    formData.append("international_passport", inputs.international_passport);
    formData.append("martic_number", martic_number);
    formData.append("date_birth", inputs.date_birth);

    formData.append("office_phone", inputs.Office_phone);
    formData.append("place_birth", placebirth);
    formData.append("mobile_phone", inputs.moblie_phone);

    formData.append("firstname", inputs.name);
    formData.append("lastname", inputs.lastname);
    formData.append("middlename", inputs.middlename);
    formData.append("email", inputs.email);

    formData.append("langugaes", lang);
    formData.append("residental_address", inputs.Res_address);
    formData.append("office_shop", inputs.Office_shop_res);

    formData.append(
      "spouse_residential_address",
      inputs.spouse_residential_address
    );
    formData.append("spouse_maiden", inputs.spouse_maiden);
    formData.append("spouse_date_brith", inputs.spouse_date_brith);
    formData.append("spouse_work", inputs.spouse_work);
    formData.append("spouse_phone", inputs.spouse_phone);
    formData.append("spouse_name", inputs.spouse_name);

    formData.append("last_place", inputs.last_place);
    formData.append("address_of_penultimate", inputs.address_of_penultimate);
    formData.append("address_employer", inputs.address_employer);
    formData.append("Penultimate_Place", inputs.Penultimate_Place);

    formData.append("nationality", inputs.nationality);
    formData.append("state", orgin);

    formData.append("tertiary_i", institution);
    formData.append("tertiary_y", inputs.year_of_graduation);
    formData.append("tertiary_yg", inputs.year_of_entry);
    formData.append("secondary", inputs.Secondary);
    formData.append("s_year_of_entry", inputs.year_of_secondary);
    formData.append("s_year_of_gradution", inputs.year_of_graduation_secondary);
    formData.append("primary", inputs.primary);
    formData.append("p_year", inputs.year_of_primary);
    formData.append("p_year_g", inputs.year_of_graduation_primary);

    formData.append("father_name", inputs.father_name);
    formData.append("father_phone", inputs.father_phone);
    formData.append("father_birth", inputs.father_birth);
    formData.append("father_res_address", inputs.father_res_address);

    formData.append("mother_name", inputs.mother_name);
    formData.append("mother_phone", inputs.mother_phone);
    formData.append("mother_birth", inputs.mother_birth);
    formData.append("mother_res_address", inputs.mother_res_address);

    formData.append("Sibling1_name", inputs.Sibling1_name);
    formData.append("Sibling1_phone", inputs.Sibling1_phone);
    formData.append("Sibling1_birth", inputs.Sibling1_birth);
    formData.append("Sibling1_res_address", inputs.Sibling1_res_address);

    formData.append("Sibling2_name", inputs.Sibling2_name);
    formData.append("Sibling2_phone", inputs.Sibling2_phone);
    formData.append("Sibling2_birth", inputs.Sibling2_birth);
    formData.append("Sibling2_res_address", inputs.Sibling2_res_address);

    formData.append("Landlord_name", inputs.Landlord_name);
    formData.append("Landlord_phone", inputs.Landlord_phone);
    formData.append("Landlord_address", inputs.Landlord_address);
    formData.append("hereby_name", inputs.hereby_name);
    formData.append("hereby_signature", inputs.hereby_signature);

    formData.append("note", inputs.note);

    if (inputs.gender === "Male") {
      formData.append("gender", "male");
    } else if (inputs.gender === "female") {
      formData.append("gender", "female");
    }

    axios
      .post(`api/suspect`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log("done");
          setError([]);
          // swal("Success", res.data.message, "success");
          notyf.success('Suspect added');
          console.log("done");
          history.push("/unit1Osun/frontdesk");
        } else if (res.data.status === 422) {
          console.log("please fill the input fiieds");
          setError(res.data.errors);
        }
      });
  };
  function Change() {
    let state = document.querySelector(".current_state").value;
    if (state === "Abia State") {
      let abia_state = [
        "Aba South",
        "Arochukwu",
        "Bende",
        "Ikwuano",
        "Isiala Ngwa North",
        "Isiala Ngwa South",
        "Isuikwuato",
        "Obi Ngwa",
        "Ohafia",
        "Ukwa West",
        "Ukwa East",
        "Ugwunagbo",
        "Osisioma",
        "Umu Nneochi",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in abia_state) {
        option +=
          "<option value=" + abia_state[i] + ">" + abia_state[i] + "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let Adamawa_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in Adamawa_state) {
        option +=
          "<option value=" +
          Adamawa_state[i] +
          ">" +
          Adamawa_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else if (state === "Adamawa State") {
      let lagos_state = [
        "ring road ",
        "duba main road ",
        "bank road ",
        "lekki prase 1",
        "magodo",
      ];
      let local_gove = document.querySelector(".current_local");
      let option = "";
      for (let i in lagos_state) {
        option +=
          "<option value=" +
          lagos_state[i] +
          ">" +
          lagos_state[i] +
          "</option>";
      }
      local_gove.append(option);
      local_gove.innerHTML = option;
    } else {
      console.log(2);
    }
  }

  return (
    <>
      <Navbar/>
      <Heading /> <br></br>
     
      <div className="mb-5">
        <form action="" onSubmit={formSubmit} encType="multipart/form-data">
          {handlePage()}
          <div
            className="d-flex flex-sm-nowrap flex-wrap flex-row justify-content-around gap-3"
            style={{ position: "relative", top: "4em", marginBottom: "5em" }}
          >
            {page > 1 && (
              <button
                className="btn btn-dark text-white px-4 py-2 rounded-0"
                onClick={handleBack}
              >
                <BsArrowLeft className="mx-2 fs-4" />
                Prev page
              </button>
            )}
            {page <= 11 ? (
              <button
                className="btn btn-success shadow text-white px-4 py-2 rounded-0"
                onClick={handleNext}
                // disabled={!inputs.name}
              >
                {page <= 11 ? "Next page" : "Submit"}
                <BsArrowRight className="mx-2 fs-4" />
              </button>
            ) : (
              <button className="btn btn-dark text-white px-4 py-2 rounded-0">
                {page <= 11 ? "Next page" : "Submit"}
                <BsArrowRight className="mx-2 fs-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Suspect;
