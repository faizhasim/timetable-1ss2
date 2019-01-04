import Helmet from 'react-helmet'

import React from 'react'

import { Sheet } from '../components/Sheet'
import Schedule from '../components/Schedule'

export default () => {
  const title = `${new Date().toISOString()}`
  return (
    <>
      <Helmet
        title={`${title} | Hello next.js!`}
        meta={[{ property: 'og:title', content: title }]}
      />

      <Sheet width='297mm' height='209mm' padding='15mm 10mm'>
        <Schedule />
      </Sheet>

    </>
  )
}
