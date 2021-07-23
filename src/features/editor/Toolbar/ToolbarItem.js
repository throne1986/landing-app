import React from 'react';
import { Grid, Slider, RadioGroup } from '@material-ui/core';
import { useNode } from '@craftjs/core';
import { ToolbarTextInput } from './ToolbarTextInput';

export const ToolbarItem = ({full = false,propKey,type,onChange,index,...props}) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }));

  const value = Array.isArray(propValue) ? propValue[index] : propValue;

  return (
    <Grid item xs={full ? 12 : 6}>
      <div className="mb-2">
        {['text', 'color', 'bg', 'number'].includes(type) ? (
          <ToolbarTextInput
            {...props}
            type={type}
            value={value}
            onChange={(value) => {
              setProp((props) => {
                if (Array.isArray(propValue)) {
                  props[propKey][index] = onChange ? onChange(value) : value;
                } else {
                  props[propKey] = onChange ? onChange(value) : value;
                }
              }, 500);
            }}
          />
        ): null}
      </div>
    </Grid>
  );
};
