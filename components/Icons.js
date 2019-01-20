import React from 'react'
import styled from '@emotion/styled'
const BookCaption = styled.span`
  font-size: 1.7rem;
  vertical-align: top;
  margin: 0.3rem;
`

const FsIcon = ({ type }) => <i className={`fas fa-${type}`} />
export const ChalkBoardTeacherIcon = () => <FsIcon type='chalkboard-teacher' />
export const UsersIcon = () => <FsIcon type='users' />
export const StarAndCrescentIcon = () => <FsIcon type='star-and-crescent' />
export const QuranIcon = () => <FsIcon type='quran' />
export const GlobeAmericasIcon = () => <FsIcon type='globe-americas' />
export const GlobeAsiaIcon = () => <FsIcon type='globe-asia' />
export const PaletteIcon = () => <FsIcon type='palette' />
export const CalculatorIcon = () => <FsIcon type='calculator' />
export const FlaskIcon = () => <FsIcon type='flask' />
export const RunningIcon = () => <FsIcon type='running' />
export const AtomIcon = () => <FsIcon type='atom' />
export const BookIcon = () => <FsIcon type='book' />
export const BookWithCaptionIcon = ({ caption }) => (
  <>
    <BookIcon />
    <BookCaption>{caption}</BookCaption>
  </>
)
