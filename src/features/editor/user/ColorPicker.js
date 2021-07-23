import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
 
function ColorPicker() {
  const [colorHexCode, setColorHexCode] = useState('#000000');
  const[color , setColor] =useState(false)

  const handleClick = () => {
     setColor(true)
  }
 
  return (
    <div className="ColorPicker">
   <button type="button" className="btn btn-success" style={{background:colorHexCode}}>BIG</button>
    <button type="button" className="btn btn-success" onClick={handleClick}></button> <b>Selected Hex Color: </b>{colorHexCode}
      {color ?(
          <div>
              <ChromePicker
                color={colorHexCode}
                onChange={e => setColorHexCode(e.hex)} 
              />
          </div>
      ): null}
     
    </div>
  );
}
 
export default ColorPicker;