import React, {useState} from 'react';
import { ChromePicker } from "react-color";
import reactCSS from 'reactcss'

function Picker() {
    const [displayColorPicker, setDisplayColorPicker] = useState();
    const [color, setColor] = useState({ r: "241", g: "112", b: "19", a: "1" });
    
    const handleClick = () => {
        setDisplayColorPicker({ displayColorPicker: !displayColorPicker });
      };
    
      const handleClose = () => {
        setDisplayColorPicker({ displayColorPicker: false });
      };
    
      const handleChange = (color) => {
          setColor({ color: color.rgb });
      };

      const styles = reactCSS({
        default: {
          color: {
            width: "36px",
            height: "14px",
            borderRadius: "2px",
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
          },
          swatch: {
            padding: "5px",
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            display: "inline-block",
            cursor: "pointer"
          },
          popover: {
            position: "absolute",
            zIndex: "2"
          },
          cover: {
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px"
          }
        }
      });

    return (
        <div>
            <div className="d-block" style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>
            {displayColorPicker ? (
                <div style={styles.popover}>
                <div className="jembe" style={styles.cover} onClick={handleClose} />
                <ChromePicker color={color} onChange={handleChange} />
                </div>
            ) : null}

            <button clasName="d-block" style={styles.color}>
                Hello
            </button>
        </div>
    )
}

export default Picker
