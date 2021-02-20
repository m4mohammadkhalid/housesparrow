import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
                
	            <link rel="shortcut icon" href="images/favicon.png" />
	            <link rel='stylesheet' id='bootstrap-css' href='css/bootstrap.min.css' type='text/css' media='all' />
	            <link rel='stylesheet' id='bootstrap-slider' href='css/bootstrap-slider.min.css' type='text/css' media='all' />
	            <link rel='stylesheet' id='fancybox' href='css/jquery.fancybox.css' type='text/css' media='all' />
	            <link rel='stylesheet' id='owl-carousel' href='css/owl.carousel.css' type='text/css' media='all' />
	            <link rel='stylesheet' id='animate' href='css/animate.css' type='text/css' media='all' />
	            <link rel='stylesheet' id='fontawesome' href='css/all.min.css' type='text/css' media='all' />
	            <link rel="stylesheet" id='navigation' href="css/sina-nav.min.css" type='text/css' media='all' />
	            <link rel='stylesheet' id='style' href='css/style.css' type='text/css' media='all' />
        </Head>

        <body>
          <Main />
          <NextScript />

          <script src='js/wow.min.js'></script>
	      <script src='js/jquery.min.js'></script>
	      <script src='js/bootstrap.min.js'></script>
	      <script src='js/bootstrap-slider.min.js'></script>
	      <script src='js/sina-nav.min.js'></script>
	      <script src='js/jquery.fancybox.js'></script>
	      <script src='js/owl.carousel.min.js'></script>
	      <script src='js/fontawesome.js'></script>
	      <script src='js/customizer.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument