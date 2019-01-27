import { BookWithCaptionIcon } from '../Icons'
import ClassSession from '../ClassSession'
import React from 'react'

export default props => (
  <ClassSession
    subject='BI 1'
    icon={<BookWithCaptionIcon caption='en' />}
    subjectSubTitle='English'
    teacher='Hoe Kian / Chan'
    {...props}
  />
)
