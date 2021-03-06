import GridLayout from 'react-grid-layout'
import { css, Global } from '@emotion/core'
import React, { Fragment } from 'react'
import Day from './Day'
import TimePeriod from './TimePeriod'
import FullColumn from './FullColumn'
import PH from './class-sessions/PH'
import PI from './class-sessions/Pi'
import BM1 from './class-sessions/Bm1'
import BI1 from './class-sessions/Bi1'
import KSENI from './class-sessions/KSeni'
import MT2 from './class-sessions/Mt2'
import BA from './class-sessions/Ba'
import PJK from './class-sessions/Pjk'
import TSMK2 from './class-sessions/Tsmk2'
import SN1 from './class-sessions/Sn1'
import Mzk from './class-sessions/Mzk'
import styled from '@emotion/styled'

const globalCss = css`
  body {
    -webkit-print-color-adjust: exact !important;
  }

  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }

  .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle::after {
    content: '';
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }

  .react-resizable {
    position: relative;
  }
  .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
  }
`

const layoutCss = css`
  font-family: 'Roboto', sans-serif;
`

const generateTimeComponents = () => {
  let tagCount = 0
  const formatSec = sec => {
    const mm = `${sec % (Math.floor(sec / 60) * 60)}`
    return `${Math.floor(sec / 60)}:${mm.padStart(2, '0')}`
  }
  const genFn = (startTime, n, hStart, duration = 30) => {
    let res = []
    for (let i = 0; i < n; i++) {
      res.push(
        <div key={`h${hStart + i}`}>
          <TimePeriod
            tag={`${`${tagCount || ' '}`}`}
            start={`${formatSec(startTime + i * duration)}`}
            end={`${formatSec(startTime + (i + 1) * duration)}`}
          />
        </div>
      )
      tagCount++
    }
    return res
  }
  return []
    .concat(genFn(7 * 60 + 30, 1, 1, 10))
    .concat(genFn(7 * 60 + 40, 4, 2))
    .concat(genFn(9 * 60 + 40, 1, 6, 20))
    .concat(genFn(10 * 60, 5, 7))
}

const ScheduleTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  z-index: 100;
  top: 0rem;
  left: 0rem;
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
  margin: 1rem 0;
`

export default () => {
  let layout = []
  for (let i = 0; i < 12; i++) {
    layout.push({ i: `h${i}`, x: i, y: 0, w: 1, h: 1, static: true })
  }

  layout = layout.concat([
    { i: 'isnin', x: 0, y: 1, w: 1, h: 3, static: true },
    { i: 'selasa', x: 0, y: 4, w: 1, h: 3, static: true },
    { i: 'rabu', x: 0, y: 7, w: 1, h: 3, static: true },
    { i: 'khamis', x: 0, y: 10, w: 1, h: 3, static: true },
    { i: 'jumaat', x: 0, y: 13, w: 1, h: 3, static: true },

    { i: 'kumpul', x: 1, y: 1, w: 1, h: 15, static: true },
    { i: 'rehat', x: 6, y: 1, w: 1, h: 15, static: true },

    { i: 'isnin-ph', x: 2, y: 1, w: 1, h: 3, minH: 3, maxH: 3, static: true },
    { i: 'isnin-bi', x: 3, y: 1, w: 1, h: 3, minH: 3, maxH: 3, static: true },
    { i: 'isnin-bm', x: 4, y: 1, w: 2, h: 3, minH: 3, maxH: 3, static: true },
    {
      i: 'isnin-mzk',
      x: 7,
      y: 1,
      w: 1,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'isnin-sc1',
      x: 8,
      y: 1,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    { i: 'isnin-pi', x: 10, y: 1, w: 2, h: 3, minH: 3, maxH: 3, static: true },

    { i: 'selasa-ba', x: 2, y: 4, w: 1, h: 3, minH: 3, maxH: 3, static: true },
    {
      i: 'selasa-pjk',
      x: 3,
      y: 4,
      w: 1,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    { i: 'selasa-bi', x: 4, y: 4, w: 2, h: 3, minH: 3, maxH: 3, static: true },
    {
      i: 'selasa-math',
      x: 7,
      y: 4,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'selasa-pi',
      x: 9,
      y: 4,
      w: 1,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'selasa-bm1',
      x: 10,
      y: 4,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },

    { i: 'rabu-bi1', x: 2, y: 7, w: 2, h: 3, minH: 3, maxH: 3, static: true },
    { i: 'rabu-math', x: 4, y: 7, w: 2, h: 3, minH: 3, maxH: 3, static: true },
    { i: 'rabu-pjk', x: 7, y: 7, w: 1, h: 3, minH: 3, maxH: 3, static: true },
    { i: 'rabu-pi', x: 8, y: 7, w: 2, h: 3, minH: 3, maxH: 3, static: true },
    { i: 'rabu-bm', x: 10, y: 7, w: 2, h: 3, minH: 3, maxH: 3, static: true },

    {
      i: 'khamis-bm1',
      x: 2,
      y: 10,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'khamis-math',
      x: 4,
      y: 10,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'khamis-bi',
      x: 7,
      y: 10,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'khamis-sc1',
      x: 9,
      y: 10,
      w: 1,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'khamis-ba',
      x: 10,
      y: 10,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },

    {
      i: 'jumaat-tsmk2',
      x: 2,
      y: 13,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'jumaat-pjk',
      x: 4,
      y: 13,
      w: 1,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'jumaat-bi1',
      x: 4,
      y: 13,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'jumaat-kseni',
      x: 7,
      y: 13,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'jumaat-bm1',
      x: 9,
      y: 13,
      w: 2,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    },
    {
      i: 'jumaat-empty',
      x: 11,
      y: 13,
      w: 1,
      h: 3,
      minH: 3,
      maxH: 3,
      static: true
    }
  ])

  return (
    <Fragment>
      <Global styles={globalCss} />
      <ScheduleTitle>2 SALAK SOUTH 2</ScheduleTitle>
      <GridLayout
        css={layoutCss}
        layout={layout}
        cols={12}
        rowHeight={42.25}
        width={1046}
        height={676}
        margin={[0, 0]}
      >
        {generateTimeComponents()}
        <div key='isnin'>
          <Day>isnin</Day>
        </div>
        <div key='selasa'>
          <Day>selasa</Day>
        </div>
        <div key='rabu'>
          <Day>rabu</Day>
        </div>
        <div key='khamis'>
          <Day>khamis</Day>
        </div>
        <div key='jumaat'>
          <Day>jumaat</Day>
        </div>

        <div key='kumpul'>
          <FullColumn>Kumpul</FullColumn>
        </div>
        <div key='rehat'>
          <FullColumn>Rehat</FullColumn>
        </div>

        <div key='isnin-ph'>
          <PH />
        </div>
        <div key='isnin-bi'>
          <BI1 />
        </div>
        <div key='isnin-bm'>
          <BM1 />
        </div>
        <div key='isnin-mzk'>
          <Mzk />
        </div>
        <div key='isnin-sc1'>
          <SN1 />
        </div>
        <div key='isnin-pi'>
          <PI />
        </div>

        <div key='selasa-ba'>
          <BA />
        </div>
        <div key='selasa-pjk'>
          <PJK />
        </div>
        <div key='selasa-bi'>
          <BI1 />
        </div>
        <div key='selasa-math'>
          <MT2 />
        </div>
        <div key='selasa-pi'>
          <PI />
        </div>
        <div key='selasa-bm1'>
          <BM1 />
        </div>

        <div key='rabu-bi1'>
          <BI1 />
        </div>
        <div key='rabu-math'>
          <MT2 />
        </div>
        <div key='rabu-pjk'>
          <PJK />
        </div>
        <div key='rabu-pi'>
          <PI />
        </div>
        <div key='rabu-bm'>
          <BM1 />
        </div>

        <div key='khamis-bm1'>
          <BM1 />
        </div>
        <div key='khamis-math'>
          <MT2 />
        </div>
        <div key='khamis-bi'>
          <BI1 />
        </div>
        <div key='khamis-sc1'>
          <SN1 />
        </div>
        <div key='khamis-ba'>
          <BA />
        </div>

        <div key='jumaat-tsmk2'>
          <TSMK2 />
        </div>
        <div key='jumaat-bi1'>
          <BI1 />
        </div>
        <div key='jumaat-kseni'>
          <KSENI />
        </div>
        <div key='jumaat-bm1'>
          <BM1 />
        </div>
        <div key='jumaat-empty'>
          <FullColumn />
        </div>
      </GridLayout>
    </Fragment>
  )
}
