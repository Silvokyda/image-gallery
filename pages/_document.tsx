import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Gallery Description"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Gallery Description"
          />
          <meta property="og:title" content="Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gallery" />
          <meta
            name="twitter:description"
            content="Gallery Description"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
