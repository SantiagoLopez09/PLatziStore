const { Main, NextScript } = require("next/document")
const { default: Head } = require("next/head")

import Document { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document{
  render(){
    return (
      <Html lang="en">
        <Head>
          <title>React Shop</title>
          <body>
            <Main />
            <NextScript />           
          </body>
        </Head>
      </Html>
    )
  }
}