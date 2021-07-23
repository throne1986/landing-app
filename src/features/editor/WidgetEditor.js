import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Typography, Paper, Grid, makeStyles } from '@material-ui/core';
import { SettingsPanel } from './SettingsPanel';
import { Toolbox } from './Toolbox';
import { Topbar } from './Topbar';
import { Button } from './user/Button';
import { Card, CardBottom, CardTop } from './user/Card';
import { Container } from './user/Container';
import { Text } from './user/Text';
import WidgetFooter from "./WidgetFooter";
import WidgetContent from "./WidgetContent";
import { RenderNode } from "./RenderNode";



const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));
const WidgetEditor = () => {
  const classes = useStyles();

  return (
    <div className="widget-container">
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,


        }}
        onRender={RenderNode}
      >
        <Topbar />
        <div className="row widget-content">
          <WidgetContent />
           <Toolbox />
          {/* <Grid item xs={4}>
            <Paper className={classes.root}>
              <SettingsPanel />
            </Paper>
          </Grid> */}
        </div>
      </Editor>

      <div className="row widget-footer">
          <WidgetFooter />
        </div>
    </div>
  );
}

export default WidgetEditor;
