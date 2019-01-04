import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(219, 219, 219);
  background: #7a7a7a;
`

const showCss = css`
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 1rem;
`

const Top = styled.div`
  ${showCss}
  top: .256rem;
  font-weight: bold;
`

const Bottom = styled.div`
  ${showCss}
  bottom: .0625rem;
  font-size: .75rem;
  font-weight: light;
  color: whitesmoke;
`

const Tag = styled.span`
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 0.75rem;
  height: 1.5em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.5em;
  padding-right: 0.5em;
  white-space: nowrap;
  
  background-color: whitesmoke;
  color: #7a7a7a;
  
  border-radius: 290486px;
`

export default ({tag, start, end}) =>
  tag?
    <Container>
      <Top>{
        tag.trim().length ?
          <Tag>{tag}</Tag> :
          ' '
      }</Top>
      <Bottom>{start} - {end}</Bottom>
    </Container> :
    <Container>
      <Top>{start} - {end}</Top>
    </Container>

