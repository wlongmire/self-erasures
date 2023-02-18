import Document, { Head, Html, Main, NextScript } from 'next/document'
    import { ServerStyleSheet } from 'styled-components'

    export default class MyDocument extends Document {
      render() {
        return (
          <Html lang="en">
            <Head>

              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>

              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Sorts+Mill+Goudy&display=swap" rel="stylesheet"></link>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }

      static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
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
    }