import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import { BsCamera } from "react-icons/bs";

const Camera = ({ imageSrc, inputs, imageSrc_front, imageSrc_right }) => {
  const webcamRef = useRef(null);
  const [url_1, setUrl_1] = useState(null);
  const [url_2, setUrl_2] = useState(null);
  const [url_3, setUrl_3] = useState(null);
  //   const [getimg, setgetImg] = useState(null);
  let my_camera = document.getElementById('my_camera')
  const Camara_1 = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    let image_uri = document.querySelector('.top')

    document.getElementById('results').innerHTML = '<img id="myimage" src="' + imageSrc + '"/>';
    localStorage.setItem('image_left', imageSrc)
    document.getElementById('btn').style.display = 'block'
    // .removeAttribute('disabled', '')
    setUrl_1(imageSrc);
    return imageSrc;
    // console.log(webcamRef);

  }, [webcamRef]);
  console.log(imageSrc, 'clicked')
  const Camara_2 = React.useCallback(async () => {
    const imageSrc_front = webcamRef.current.getScreenshot();
    document.getElementById('results_front').innerHTML = '<img id="myimage" src="' + imageSrc_front + '"/>';
    localStorage.setItem('image_front', imageSrc_front)
    // document.getElementById('btn').style.display = 'block'
    // .removeAttribute('disabled', '')
    setUrl_2(imageSrc_front);
    return imageSrc_front;

    console.log(webcamRef);
  }, [webcamRef]);
  const Camara_3 = React.useCallback(async () => {
    const imageSrc_right = webcamRef.current.getScreenshot();
    document.getElementById('results_right').innerHTML = '<img id="myimage" src="' + imageSrc_right + '"/>';
    localStorage.setItem('image_right', imageSrc_right)
    // document.getElementById('btn').style.display = 'block'
    // .removeAttribute('disabled', '')
    setUrl_3(imageSrc_right);
    return imageSrc_right;


  }, [webcamRef]);
  return (
    <>

      <div className="container-fluid p-2 ">
        <h4 className="fs-3 ps-2 text-center mb-5">Capture front and side pictures</h4>

        <input type="hidden" name="image_left" className="image-tag" src={imageSrc} />
        <img className='top' />
        <div id="my_camera"></div>

        <div className="container mb-4 "  >
          <div className="row d-flex flex-row flex-md-nowrap flex-wrap justify-content-center align-items-md-center align-items-baseline align-content-center  mb-4" style={{marginRight:'50px'}}   >

            <div className="mx-4 col-md-4">
              <Webcam
                screenshotFormat="jpeg"
                audio={false}
                width="400"
                ref={webcamRef}
              // ref={my_camera}
              />

              <div>


                {url_1 ? (
                  <h5 className="text-dark fs-5">Left Side Picture Taken</h5>
                ) : (
                  <h5>Left Side Picture Not Taken</h5>
                )}
                {url_1 && (
                  <div>
                    {/* <br></br> <br></br> */}

                  </div>
                )}
                <label className="form-label">
                  <br></br>
                  <input
                    type="button"
                    value="capture left"
                    required
                    onClick={Camara_1}
                    className=" btn btn-dark px-5 rounded-5"
                  />
                </label>


              </div>
            </div>
            <div className="mx-4 col-md-4">
              <Webcam
                screenshotFormat="jpeg"
                audio={false}
                width="400"
                ref={webcamRef}
              />
              {/* {url_2 ? (
                <h5 className="text-dark fs-5"> Front Side Picture Taken</h5>
              ) : (
                <h5>Front Side Picture Not Taken</h5>
              )} */}
              {url_2 && (
                <div>
                  {/* <br></br> <br></br> */}
                  {/* <img src={url_2} width="400" height="340" /> */}
                </div>
              )}
              <label className="form-label">
                <br></br>
                <input
                  type="button"
                  value="capture front"
                  onClick={Camara_2}
                  required
                  className=" btn btn-dark px-5 rounded-5"
                />
              </label>
            </div>
            <div className="mx-4 col-md-4 ">
              <Webcam
                screenshotFormat="jpeg"
                audio={false}
                width="400"
                ref={webcamRef}

              />
              <div className="ms-2">
                {url_3 ? (
                  <h5 className="text-dark fs-5">Right Side Picture Taken</h5>
                ) : (
                  <h5>Right Side Picture Not Taken</h5>
                )}
                {url_3 && (
                  <div>
                    {/* <br></br> <br></br> */}
                    {/* <img src={url_3} width="400" height="340" /> */}
                  </div>
                )}
                <label className="form-label">
                  <br></br>
                  <input
                    type="button"
                    value="capture right"
                    onClick={Camara_3}
                    required
                    className="btn btn-dark px-5 rounded-5"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container ">
          <div className="d-flex  justify-content-between">


            <div id="results" className="mt-1">Your captured image left will appear here...
              {imageSrc}
            </div>

            <div id="results_front" className="mt-1">Your captured image front will appear here...
              {imageSrc_front}
            </div>


            <div id="results_right" className="mt-1">Your captured image right will appear here...
              {imageSrc_right}
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Camera;
