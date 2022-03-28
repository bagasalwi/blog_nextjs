import '../styles/globals.css'
import type { AppProps } from 'next/app'
import App from 'next/app';
import Layout from '@components/Layout'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '@components/Loader';
function MyApp({ Component, pageProps, categories }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  // loading useEffect
  useEffect(() => { 
      router.events.on("routeChangeStart", (url) => {
         console.log("Route is changing");
         setLoading(true)
      });
      router.events.on("routeChangeComplete", (url) => {
        console.log("Route is changed");
        setTimeout(
          function() {
            setLoading(false)
          }
          .bind(loading),
          50000
        );
      });
  }, []);
  
  return (
    <>
    {loading && <Loader/>}
    <Layout categories={categories}>
      <Component {...pageProps} categories={categories} />
    </Layout>
    </>
  );

  // return <>{loading ? "loading..." : 
  //   <Layout categories={categories}>
  //     <Component {...pageProps} categories={categories} />
  //   </Layout>
  // }</>;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reqCategories = await fetch(process.env.API_URL + '/categories');
  const categories = await reqCategories.json();

  return { ...appProps, categories};
}

export default MyApp
