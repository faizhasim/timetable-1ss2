import Helmet from 'react-helmet'

import React from 'react'

import { Sheet } from '../components/Sheet'
import Schedule from '../components/Schedule'

export default () => {
  const timestamp = `${new Date().toISOString()}`
  const title = `Time table generated at ${timestamp}`
  return (
    <>
      <Helmet title={title} meta={[{ property: 'og:title', content: title }]}>
        <script
          defer
          src='https://use.fontawesome.com/releases/v5.6.3/js/all.js'
          integrity='sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1'
          crossOrigin='anonymous'
        />
      </Helmet>

      <Sheet width='297mm' height='209mm' padding='15mm 10mm'>
        <Schedule />
      </Sheet>
    </>
  )
}
