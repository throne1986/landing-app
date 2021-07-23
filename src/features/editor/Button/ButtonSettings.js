import React from 'react';
import {ToolbarItem } from '../Toolbar/ToolbarItem';

export const ButtonSettings = () => {
  return (
    <React.Fragment>

        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />

    </React.Fragment>
  );
};
