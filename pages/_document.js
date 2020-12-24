import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class StyledDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Preconnect to the Google domains */}
          {[
            'https://fonts.gstatic.com',
            'https://fonts.googleapis.com',
            'https://www.googletagmanager.com',
          ].map((href) => (
            <link key={href} rel='preconnect' href={href} crossOrigin='anonymous' />
          ))}
          {/* Google Font: Montserrat */}
          <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
          <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
