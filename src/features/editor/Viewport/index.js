import {useEditor,  Editor, Frame, Element, useNode } from "@craftjs/core";
import React from "react";
import { Toolbox } from "./Toolbox";
import { Header } from "./Header";
import Pages from "../../pages";
import cx from "classnames";


export const Viewport = ({ children }) => {

  const {enabled, connectors,actions: { setOptions }} = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);


  return (
    <div className="widget-container">
      <Header />
      <div className="row widget-content">
        <div
          className={cx([
            "craftjs-renderer flex-1 h-full w-full transition pb-8 overflow-auto",
            {
              "bg-renderer-gray": enabled,
            },
          ])}
          ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
        >
          <div className="relative flex-col flex items-center pt-8">
            <Pages />
          </div>
          <div
            className={
              "flex items-center justify-center w-full pt-6 text-xs text-light-gray-2"
            }
          ></div>
        </div>
        <Toolbox />
      </div>
    </div>
  );
};
