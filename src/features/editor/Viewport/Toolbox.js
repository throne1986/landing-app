import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Button } from "../../../features/editor/user/Button";
import { Toolbar } from "../../../features/editor/Toolbar";
import ButtonICON from "../../../assets/images/button.svg";

export const Toolbox = () => {
  const [tabName, setTabName] = useState("Settings");
  const [widget, setWidget] = useState({});
  const [position, setPosition] = useState("");



  useEffect(() => {
    const localData = localStorage.getItem("widget");
    var widget = JSON.parse(localData);
    setWidget(widget ? widget : {});
    setPosition(widget ? widget.position : "");
  }, []);

  const positions = {
    left: {
      position: "absolute",
      left: "20px",
      bottom: "50px",
    },
    center: {
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
      background: "blue",
    },
    right: {
      position: "absolute",
      right: "20px",
      bottom: "50px",
    },
  };

  return (
    <>
      <div className="col-3 widget-content-right">
        <div className="widget-content-settings">
          <div className="btn-group widget-content-settings_buttons">
            <button
              type="button"
              className={`btn btn-sm ${
                tabName === "Settings" ? "btn-info" : "btn-light"
              }`}
              onClick={() => setTabName("Settings")}
            >
              Settings
            </button>
            <button
              type="button"
              className={`btn btn-sm ${
                tabName === "Edit" ? "btn-info" : "btn-light"
              }`}
              onClick={() => setTabName("Edit")}
            >
              Edit
            </button>
            <button
              type="button"
              className={`btn btn-sm ${
                tabName === "AddElements" ? "btn-info" : "btn-light"
              }`}
              onClick={() => setTabName("AddElements")}
            >
              Add Elements
            </button>
          </div>
        </div>
        {tabName === "Edit" && (
          <>
            <div className="widget-content-settings_elements">
              <div className="card add-element-card">
                <div className="card-header">Click on any element to edit</div>
                <div className="card-body">
                  <Toolbar />
                </div>
              </div>
            </div>
          </>
        )}
        {tabName === "Settings" && (
          <>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Widget Settings
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <label htmlFor="basic-url" className="form-label">
                      Add your website url and press enter
                    </label>
                    <div className="input-group mb-3">
                      {/* <input className="form-control"  onKeyDown={handleChange} name="domain_url" type="text" placeholder="Please Enter the URL of your website" /> */}
                    </div>
                    <h5 className="my-4">
                      Where Do You Want to Show Your Widget?
                    </h5>
                    <div className="btn-group my-3 d-flex justify-content-center align-items-center">
                      <button
                        value={widget.position}
                        name="position"
                        type="button"
                        className={`btn btn-sm mx-2  ${
                          position === "Bottom Left"
                            ? "btn-info text-white"
                            : "btn-lightDark"
                        }`}

                      >
                        Bottom Left
                      </button>
                      <button
                        value={widget.position}
                        name="position"
                        type="button"
                        className={`btn btn-sm mx-2  ${
                          position === "Bottom Center"
                            ? "btn-info text-white"
                            : "btn-lightDark"
                        }`}

                      >
                        Bottom Center
                      </button>
                      <button
                        value={widget.position}
                        name="position"
                        type="button"
                        className={`btn btn-sm mx-2  ${
                          position === "Bottom Right"
                            ? "btn-info text-white"
                            : "btn-lightDark"
                        }`}
                      >
                        Bottom Right
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Video Settings
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <label htmlFor="basic-url" className="form-label">
                      Choose a movie to add interactive elements
                    </label>
                    <div className="widget-add-block" variant="contained">
                      <ReactSVG src={ButtonICON} />
                      ADD A VIDEO
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Theme Colors
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <label htmlFor="basic-url" className="form-label">
                      Click Pallete to Change the color
                    </label>
                    {/* <Picker /> */}
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Add Buttons Text and Link
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <label htmlFor="basic-url" className="form-label">
                      Drag and drop to add the button
                    </label>

                    <div
                      className="widget-add-block"
                      // ref={(ref) =>
                      //   connectors.create(
                      //     ref,
                      //     <Button text="Click me" size="small" />
                      //   )
                      // }
                      variant="contained"
                    >
                      <ReactSVG src={ButtonICON} />
                      Button
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </>
  );
};
