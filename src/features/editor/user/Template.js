import { Element, useNode } from '@craftjs/core';
import React from 'react';

import { Button } from '../Button/Index';
import {
  ContainerSettings,
  ContainerDefaultProps,
} from './Container';
import { Text } from './Text';

export const CardTop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      ref={connect}
      className="text-only"
      style={{
        padding: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Text,
  },
};

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div style={{ padding: '10px 0' }} ref={connect}>
      {children}
    </div>
  );
};

CardBottom.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Button,
  },
};


export const OnlyButtons = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div title="only-buttons" ref={connect} className="w-full mt-5" {...props}>
      {children}
    </div>
  );
};


OnlyButtons.craft = {
  rules: {
    canMoveIn: (node) => node.data.type == Button,
  },
};

export const Template = ({ background, padding = 20 }) => {
  return (

      <div id="video-container">
                <div id="bot">
                    <div className="video-container_details">

                        <div id="video-replay_btn" className="video-btn btn_stats video-btn-bot">
                        </div>
                        <div id="video-voice_btns" className="btn_stats video-btn-bot">
                            <div id="video-voice_btn" className="video-btn
                                video-btn-bot btn_stats">

                            </div>
                            <div id="video-muted_btn" className="video-btn
                                video-btn-bot btn_stats">

                            </div>
                        </div>

                        <div id="video-close_btn" className="video-btn btn_stats video-btn-bot">
                        </div>

                        <div id="video-play_btn" className="video-btn btn_stats video-btn-bot">
                        </div>
                        <div id="video-pause_btn" className="video-btn btn_stats video-btn-bot">
                        </div>
                        
                        <div id="video_btn-bottom">
                            <Element className="flex-row" canvas id="wow" is={OnlyButtons}>
                              <Button />
                              <Button />
                              <Button />
                              <Button />
                            </Element>
                        </div>
                    </div>

                    <div className="video-conatiner_datavideo">
                        <video className="videoplayer-circle-datavideo" id="videoplayer-circle"
                            playsInline autoPlay muted>
                            <source src="https://videommerce.com/wp-content/uploads/2021/03/V_koleczko_napisy_converted.mp4"
                                type="video/mp4" />
                        </video>
                        
                    </div>
                </div>

                <div id="show-iframe_btn" className="iframe-display_btn">
                    <img src="https://videommerce.com/wp-content/uploads/2020/11/miniaturka_60.png"  alt="show iframe" />
                </div>

                <div className="help-iframe_header">
                    <p>Hey, let's talk about our services</p>
                </div>

            </div>
 
  );
};

Template.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
