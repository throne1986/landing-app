import React, { useEffect, useRef, useCallback } from 'react';
import { useNode, useEditor } from '@craftjs/core';
import styled from 'styled-components';
import ArrowUp from '../../assets/images/icons/arrow-up.svg';
import Move from '../../assets/images/icons/move.svg';
import Delete from '../../assets/images/icons/delete.svg';
import ReactDOM from 'react-dom';
import { ROOT_NODE } from '@craftjs/utils';


export const RenderNode = ({ render }) => {
  const { actions, query, connectors } = useEditor();
  const {
    id,
    isActive,
    isHover,
    dom,
    deletable,
    connectors: { drag },
  } = useNode((node) => ({
    isActive: node.events.selected,
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef(HTMLDivElement);

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) dom.classList.add('component-selected');
      else dom.classList.remove('component-selected');
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  return (
    <>
      {isHover || isActive
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              className="px-2 py-2 text-white fixed flex items-center"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              {deletable ? (
                <Btn
                  className="cursor-pointer"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
              <i className="fas fa-trash-alt" style={{color:"red"}}></i>

                </Btn>
              ) : null}
            </IndicatorDiv>,
            document.body
          )
        : null}
      {render}
    </>
  );
};


const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

const Btn = styled.a`
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;