import Helmet from 'react-helmet'
// import { hydrate} from 'emotion'

import React from "react"

import {Sheet} from "../components/Sheet"
import Schedule from "../components/Schedule";

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
// if (typeof window !== 'undefined') {
//   hydrate(window.__NEXT_DATA__.ids)
// }


export default () => {
  const title = `${new Date().toISOString()}`;
  return (
    <>
      <Helmet
        title={`${title} | Hello next.js!`}
        meta={[{ property: 'og:title', content: title }]}
      >
      </Helmet>

      <Sheet width='297mm' height='209mm' padding='15mm 10mm'>
        <Schedule/>
      </Sheet>

    </>
  )
}
