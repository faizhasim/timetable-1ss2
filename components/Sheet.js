import React from "react";
import styled from "@emotion/styled";
import {css, Global} from "@emotion/core";

const sheetCss = ({ width, height, padding }) => css`
  margin: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  page-break-after: always;
  padding: ${padding? padding : '10mm 5mm'};
  @media screen {
      & {
          background: white;
          box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3);
          margin: 5mm auto;
      }
  }
  width: ${width};
  height: ${height};  
`

const bodyCss = width => css`
  @page { margin: 0 }
  body { margin: 0 }
  @media screen {
      body {
          background: #e0e0e0;
      }
  }
  @media print {
    width: ${width};
  }
  
`

export const Sheet = ({width, height, padding = '10mm 5mm', children}) => {

  const Sheet = styled.section`
    ${sheetCss};
  `
  return <>
    <Global styles={bodyCss(width, height)}/>
    <Sheet width={width} height={height} padding={padding}>
      {children}
    </Sheet>
  </>
}
