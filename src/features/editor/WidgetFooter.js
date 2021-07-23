import React from "react";
import {useHistory} from 'react-router-dom';
import {ReactComponent as BackSVG} from '../../assets/images/back.svg';

function WidgetFooter() {
  const history = useHistory();

  return (
    <>
      <div className="col-9 widget-footer_details">
        <span className="widget-footer_back" onClick={() =>history.goBack()}>
          <BackSVG /> Back
        </span>
      </div>
      <div className="col-3 widget-footer_details">
        <button type="button" className="btn btn-sm mx-2 btn-light disabled">
          Previous Step
        </button>
        <button type="button" className="btn btn-sm mx-2 btn-light">
          Next Step
        </button>
      </div>
    </>
  );
}

export default WidgetFooter;
