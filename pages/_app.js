import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from '../i18n';
import { globalStyles } from '../public/styles/styles';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Interview</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="robots" content="index,follow" />
      <meta name="description" content="author: Shreyas Patil" />
      <meta name="description" content="interview project" />
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);
