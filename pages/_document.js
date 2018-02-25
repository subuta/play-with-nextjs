import Document, { Head, Main, NextScript } from 'next/document'
import * as ReactFreeStyle from 'react-free-style'

// https://github.com/blakeembrey/react-free-style
const onDomReady = `
  function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  // call on dom-ready
  ready(function () {
    // remove ReactFreeStyle style.
    document.head.removeChild(document.getElementById("${ReactFreeStyle.STYLE_ID}"));
  })
`

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = ReactFreeStyle.rewind()
    return { ...page, css: styles.toCss() }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render () {
    return (
      <html>
      <Head>
        <title>My page</title>
        <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        <script dangerouslySetInnerHTML={{ __html: onDomReady }} >
        </script>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
