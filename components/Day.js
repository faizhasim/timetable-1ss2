import React from 'react'
import styled from '@emotion/styled'
import { childContainer, container } from '../styles/gridLayoutCell'

const Container = styled.div`
  ${container}
  background: #7a7a7a;
`

const Day = styled.div`
  ${childContainer};
  text-align: center;
  top: 3rem;
  font-size: .9rem;
  text-transform: capitalize;
  color: whitesmoke;
`

export default ({ children }) =>
  <Container>
    <Day>{children}</Day>
  </Container>
