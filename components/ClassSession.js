import React from 'react'
import styled from '@emotion/styled'
import { childContainer, container } from '../styles/gridLayoutCell'

const Container = styled.div`
  ${container};
`

const SubjectTitle = styled.span`
  font-size: 1.2rem;
  width: fit-content;
  background: rgb(219, 219, 219);
  padding: 0rem 0.3rem;
  border: #7a7a7a solid 1px;
`

const SubjectSubTitle = styled.div`
  font-size: 0.75rem;
  margin: 0.3rem 0;
`

const Icon = styled.span`
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
  display: block;
  margin-top: 3rem;
  color: #000;
  opacity: 0.15;
`

const Subject = styled.div`
  ${childContainer};
  font-size: 1.3rem;
  text-align: left;
  top: 0.5rem;
  left: 0.3rem;
  ${SubjectTitle}
  ${SubjectSubTitle}
`

const Teacher = styled.div`
  ${childContainer};
  font-size: 0.8rem;
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
  top: 0.5rem;
  right: 0.3rem;

  font-weight: 700;

  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 0.6rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;

  background-color: #363636;
  color: #f5f5f5;
`
export default ({ subject, subjectSubTitle, teacher, venue, icon }) => (
  <Container>
    {icon ? <Icon>{icon}</Icon> : ''}
    <Subject>
      <SubjectTitle>{subject}</SubjectTitle>
      {subjectSubTitle ? (
        <SubjectSubTitle>{subjectSubTitle}</SubjectSubTitle>
      ) : (
        ''
      )}
    </Subject>
    {venue ? <Venue>{venue}</Venue> : ''}
    {teacher ? <Teacher>{teacher}</Teacher> : ''}
  </Container>
)
