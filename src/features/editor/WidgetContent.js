import React, { useState  } from "react";
import { ReactComponent as EnterMsgSVG } from '../../assets/images/enter.svg'
import { Frame, Element } from '@craftjs/core';
import { Template } from '././user/Template';

import {useSelector, useDispatch } from 'react-redux';


const WidgetContent = () => {
  const [enterMsg, setEnterMsg] = useState(false);
  const inputValue = useSelector(state => state);
  const dispatch = useDispatch();

  console.log('input value', inputValue);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setEnterMsg(false);
      dispatch({ type: 'INPUT_CHANGE', payload: event.target.value })
    }
  };

  return (
    <>
      <div className="col-9 widget-content-left">
        <div className="widget-content-browser">
          <div className="toolbar">
            <div className="row">
              <div className="col-sm-1">
                <ul className="browser-buttons">
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                  <li>
                    <span></span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-11">
                <div className="adress-input-container">
                  <label>Your domain</label>
                  <input
                    onKeyDown={handleKeyDown}
                    onFocus={() => setEnterMsg(true)}
                    onBlur={() => setEnterMsg(false)}
                    type="text"
                    className="form-control address"
                    name=""
                  />
                  <span
                    className={`msg ${enterMsg === true ? "msg-focus" : ""}`}
                  >
                    <EnterMsgSVG />
                    Press enter to submit
                  </span>
                </div>
              </div>
            </div>
          </div>
         <div className="preview-iframe-wrapper">
                <Frame>
                    <Template />
                </Frame>
                <div className="widget-iframe">
                    <iframe
                      title="domain-previe"
                      id="widget-preview"
                      className="preview-iframe"
                      width="100%"
                      height="100%"
                      scrolling="no"
                      horizontalscrolling="no"
                      verticalscrolling="no"
                      sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
                      src="www.google.com">
                    </iframe>
                </div>
          </div>

          </div>
      </div>
    </>
  );
};

export default WidgetContent;
