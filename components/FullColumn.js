import React from "react"
import styled from '@emotion/styled'
import {childContainer, container} from "../styles/gridLayoutCell"

const Container = styled.div`
  ${container}
`

const FullColumn = styled.div`
  ${childContainer};
  text-align: center;
  top: 19rem;
  font-size: 1.15rem;
  transform: rotate(-90deg);
`

export default ({children}) =>
  <Container>
    <FullColumn>{children}</FullColumn>
  </Container>
