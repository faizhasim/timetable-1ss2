import React from 'react'
import styled from '@emotion/styled'
import { childContainer, container } from '../styles/gridLayoutCell'

const Container = styled.div`
  ${container}
`

const Subject = styled.div`
  ${childContainer};
  font-size: 1.3rem;
  text-align: left;
  top: 0.5rem;
  left: 0.5rem;
`

const Teacher = styled.div`
  ${childContainer};
  font-size: 0.75rem;
  text-align: right;
  position: absolute;
  bottom: 0.5rem;
  left: 0.2rem;
  right: 0.2rem;
  width: auto;
`

const Venue = styled.div`
  text-align: center;
  position: absolute;
  top: .5rem;
  right: .3rem;
  
  font-weight: 700;
      
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: .6rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: .75em;
  padding-right: .75em;
  white-space: nowrap;
  
  background-color: #363636;
  color: #f5f5f5;
`

export default ({ subject, teacher, venue }) =>
  <Container>
    <Subject>{subject}</Subject>
    {venue ? <Venue>{venue}</Venue> : ''}
    {teacher ? <Teacher>{teacher}</Teacher> : ''}
  </Container>
