import React, { useState, useEffect} from 'react';
import { ReactComponent as EditSVG } from "assets/images/edit.svg";
import { useEditor, Element } from '@craftjs/core';

import {Grid, Button as MaterialButton,} from '@material-ui/core';

import { Button } from './Button/Index';
import { Card } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';
import { Template } from './user/Template';
import { SettingsPanel } from 'pages/Dashboard/CreateWidget/WidgetEditor/SettingsPanel';
import { Toolbar } from 'pages/Dashboard/CreateWidget/WidgetEditor/Toolbar/Index';


export const Toolbox = () => {
  const { connectors } = useEditor();
  const[tabName, setTabName] = useState('Settings');
  const[widget, setWidget] = useState({});
  const[position, setPosition]= useState("");
  const[saveButton, setSaveButton] = useState(false);
  const[isAutoplay, setIsAutoplay] = useState(false);
  const[isMuted, setIsMuted] = useState(false);
  


  const handleChange = e => {
      const { name, value } = e.target;
      setWidget(prevState => ({
          ...prevState,
          [name]: value
      }));
      setSaveButton(true);
  };


  const handleSubmit = () =>{
      setWidget(prevState => ({
          ...prevState,
          id: 1,
          name: widget.name,
          domain_url: widget.domain_url,
          position: widget.position,
          isAutoplay: widget.isAutoplay,
          isMuted: widget.isMuted
       }));

       setData();
       setSaveButton(false);
  }
  const setData = () =>{
      localStorage.setItem('widget', JSON.stringify(widget));
  }
  const handlePosition = e =>{
      const value = e.target.innerHTML;
      setWidget(prevState => ({
            ...prevState,
            position: value
        }));
        setSaveButton(true);
  }

  useEffect(() => {
      const localData = localStorage.getItem('widget');
      var widget = JSON.parse(localData);
      setWidget(widget? widget:{});
      setPosition(widget? widget.position: "");
  }, []);
  
  const handleAutoplay = e =>{
      setIsAutoplay(e.target.checked);
      const value = e.target.checked;
      setWidget(prevState => ({
          ...prevState,
          isAutoplay: value
      }));
      setSaveButton(true);
  }
  
  const handleMuted = e =>{
      setIsMuted(e.target.checked);
      const value = e.target.checked;
      setWidget(prevState => ({
          ...prevState,
          isMuted: value
      }));
      setSaveButton(true);
  }


  return (
    <>




      <div className="col-3 widget-content-right">
        <div className="widget-content-settings">
            <div className="btn-group widget-content-settings_buttons">
                <button type="button" className={`btn btn-sm ${tabName ==='Settings'? 'btn-info' : 'btn-light'}`} onClick={() =>setTabName('Settings')}>Settings</button>
                <button type="button" className={`btn btn-sm ${tabName ==='Edit'? 'btn-info' : 'btn-light'}`} onClick={() =>setTabName('Edit')}>Edit</button>
                <button type="button" className={`btn btn-sm ${tabName ==='AddElements'? 'btn-info' : 'btn-light'}`} onClick={() =>setTabName('AddElements')}>Add Elements</button>
            </div>
        </div>
        {tabName === 'Edit' && <>
        <div className="widget-content-settings_elements">
            <div className="card add-element-card">
            <div className="card-header">
                      Click on any element to edit
                </div>
                <div className="card-body">
                    <p className="card-text">Click on any element in your campaign to edit it and all options will be displayed right here.</p>
                    <EditSVG />
                </div>
                </div>
            </div>
        </>
        }
        {tabName === 'AddElements' && <>
        <div className="widget-content-settings_elements">
            <div className="card">
                <div className="card-header">
                    Add Elements to the widget (Drag and drop to add)
                </div>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                  spacing={1}
                >
        
                  <Grid container direction="column" item>
                    <MaterialButton
                      ref={(ref) =>
                        connectors.create(ref, <Button text="Click me" size="small" />)
                      }
                      variant="contained"
                    >
                      Button
                    </MaterialButton>
                  </Grid>
                  <Grid container direction="column" item>
                    <MaterialButton
                      ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
                      variant="contained"
                    >
                      Text
                    </MaterialButton>
                  </Grid>
                  <Grid container direction="column" item>
                    <MaterialButton
                      ref={(ref) =>
                        connectors.create(
                          ref,
                          <Element canvas is={Container} padding={20} />
                        )
                      }
                      variant="contained"
                    >
                      Container
                    </MaterialButton>
                  </Grid>
                  <Grid container direction="column" item>
                    <MaterialButton
                      ref={(ref) => connectors.create(ref, <Card />)}
                      variant="contained"
                    >
                      Card
                    </MaterialButton>
                  </Grid>
                </Grid>

            </div>
        </div>
        </>
        }
        {tabName === 'Settings' && <>
        <div className="widget-content-settings_elements">

            <div className="card">
            <div className="card-header">
                  Widget Settings
                </div>
                <div className="card-body"> 
                <label htmlFor="basic-url" className="form-label">Widget Name</label>  
                  <div className="input-group mb-3">  
                        <input className="form-control" value={widget.name} onChange={handleChange} name="name" type="text" placeholder="Please Enter Widget Name" />
                    </div>
                 <label htmlFor="basic-url" className="form-label">Domain Url</label>
                  <div className="input-group mb-3">  
                        <input className="form-control"  value={widget.domain_url} onChange={handleChange} name="domain_url" type="text" placeholder="Please Enter the URL of your website" />
                    </div>
                    <h5 className="my-4">Where Do You Want to Show Your Widget?</h5>
                    <div className="btn-group my-3 d-flex justify-content-center align-items-center">
                        <button value={widget.position} name="position" type="button" className={`btn btn-sm mx-2  ${position === "Bottom Left" ? "btn-info text-white" : "btn-lightDark"}`} onClick={(e) => {setPosition(position !== "Bottom Left" ? "Bottom Left" : ""); handlePosition(e);}}>Bottom Left</button>
                        <button value={widget.position} name="position" type="button" className={`btn btn-sm mx-2  ${position === "Bottom Right" ? "btn-info text-white" : "btn-lightDark"}`} onClick={(e) => {setPosition(position !== "Bottom Right" ? "Bottom Right" : ""); handlePosition(e);}}>Bottom Right</button>
                    </div>

                </div>
            </div>
            <div className="card">
                <div className="card-header">
                        Video settings
                </div>
                <div className="card-body">
                    <div className="mb-2">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="isAutoplay" checked={isAutoplay} onChange={handleAutoplay}  />
                                <label className="form-check-label" htmlFor="isAutoplay">Autoplay</label>
                            </div>
                        </div>
                    <div className="mb-2">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="isMuted" checked={isMuted} onChange={handleMuted}  />
                            <label className="form-check-label" htmlFor="isMuted">Muted</label>
                        </div>
                    </div>

                </div>
                {saveButton ===true &&
                    <div className="btn-group my-5 d-flex justify-content-center align-items-center" style={{width: "14rem"}}>
                        <button onClick={handleSubmit} className={`btn ${saveButton === true? "btn-info text-white" : "btn-lightDark"}`}>SAVE SETTINGS</button>
                    </div>
                }
            </div>

        </div>
        </>
        }
        {/* <SettingsPanel />
         */}
         {/* <Toolbar /> */}
      </div>

    </>
  );
};
