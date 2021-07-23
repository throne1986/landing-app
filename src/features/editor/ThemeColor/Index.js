import React, { useState } from "react";
import { useNode } from '@craftjs/core';
import { Text } from '../user/Text'
import { ThemeColorSettings } from './ThemeColorSettings';
import styled from 'styled-components';



export const ThemeColor = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, textComponent, color, ...otherProps } = props;
  return (
    <StyledButton
      ref={connect}
      className="rounded w-full px-1 py-1 flex-col"
      {...otherProps}
    >
      <Text {...textComponent} text={text} color={props.color} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${(props) =>
    props.buttonStyle == 'full'
      ? `rgba(${Object.values(props.background)})`
      : 'transparent'};
  border: 2px solid transparent;
  border-color: ${(props) =>
    props.buttonStyle == 'outline'
      ? `rgba(${Object.values(props.background)})`
      : 'transparent'};
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
    height: 35px;
    outline:none;
`;

ThemeColor.craft = {
  displayName: 'ThemeColor',
  props: {
    background: { r: 234, g: 23, b: 159, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    buttonStyle: 'full',
    text: 'Button',
    margin: ['5', '5', '5', '5'],
    textComponent: {
      ...Text.craft.props,
      textAlign: 'center',
    },
  },
  related: {
    toolbar: ThemeColorSettings,
  },
};
