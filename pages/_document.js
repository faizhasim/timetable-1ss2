import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps (props) {
    const documentProps = await super.getInitialProps(props)
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    return (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title='Hello next.js!'
        meta={[
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { property: 'og:title', content: 'Hello next.js!' }
        ]}
      >
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans|Roboto'
          rel='stylesheet'
        />
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </Helmet>
    )
  }

  render () {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
