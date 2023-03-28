import React from "react";
import fringer_one from "./PlaceFinger2.bmp";
import fingerprint from './fingerprint.jpg'



const Fingerprint = ({ good, bad, captureFP }) => {
  return (
    <div className="container">
      {/* fignerPrint */}
      <div className="row text-center mb-5">
        <div className="col-lg-12 col-md-6 col-sm-3">
          <h2 className="text-center text-success fs-2 mt-5 p-3">
            FINGERPRINT
          </h2>
          <small className="fs-5">
            {" "}
            Please place your right thumb on the scanner.
          </small>
        </div>
      </div>
      <div className="row">
        <table
          width="1012"
          border="0"
          align="center"
          cellpadding="1"
          cellspacing="1"
        >
          <tr align="center">
            <td className="auto-style2" align="right" valign="top">
              &nbsp;
            </td>
            <td className="style3">
              <span className="download_href">
                <img
                  id="FPImage1"
                  alt="Fingerpint Image"
                  height="300"
                  width="210"
                  align="center"
                  src={fingerprint}
                />
                <br />
                <input
                  type="button"
                  value="Click to Scan"
                  className="btn btn-danger px-4 rounded-4 mt-5"
                  onClick={captureFP}
                />
                <br />
                <p id="result" />.
              </span>
            </td>
            <td>
              <div>
                {good ? (
                  <h1 className="fs-1 text-success">
                    {good} <br></br>
                  </h1>
                ) : (
                  <h1 className="text-danger fs-1 "> {bad}</h1>
                )}
              </div>
            </td>

            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="style2">&nbsp;</td>
            <td className="style3">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Fingerprint;
