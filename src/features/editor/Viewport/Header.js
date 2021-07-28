import { useEditor } from "@craftjs/core";

import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDetectOutsideClick } from "../../../components/useDetectOutsideClick";
import { ReactSVG } from "react-svg";
import redoSVG from "../../../assets/images/redo.svg";
import undoSVG from "../../../assets/images/undo.svg";
import widgetLogo from "../../../assets/images/V_widget_maly_roz.png"

export const Header = () => {
  const { actions, canUndo, canRedo } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  const history = useHistory();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="row">
        <div className="col-9 widget-header">
          <span
            onClick={() => history.push("/")}
            className="widget-logo float-start"
          >
            <img src={widgetLogo} alt="widget logo" />
          </span>
        </div>
        <div className="col-3 widget-options">
          <div
            className="widget-options_undo"
            size="small"
            variant="outlined"
            color="secondary"
            disabled={!canUndo}
            onClick={() => actions.history.undo()}
            style={{ marginRight: "10px" }}
          >
            <ReactSVG src={redoSVG} />
            Undo
          </div>
          <div
            className="widget-options_redo"
            size="small"
            variant="outlined"
            color="secondary"
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
            style={{ marginRight: "10px" }}
          >
            <ReactSVG src={undoSVG} />
            Redo
          </div>
          <button className="btn btn-danger widget-save">SAVE</button>

          <div onClick={onClick} className="menu-trigger">
            {isActive ? (
              <i className="fas fa-angle-down"></i>
            ) : (
              <i className="fas fa-angle-up"></i>
            )}
          </div>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <i className="fas fa-cogs"></i> Change Domain and Position
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
