import { BookWithCaptionIcon } from '../Icons'
import ClassSession from '../ClassSession'
import React from 'react'

export default props => (
  <ClassSession
    subject='BM1'
    icon={<BookWithCaptionIcon caption='ms' />}
    subjectSubTitle='Bahasa Melayu'
    teacher='Ropi/Zuhdi'
    {...props}
  />
)
