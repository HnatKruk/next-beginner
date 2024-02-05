import "../styles/globals.scss";
import Layout from '../components/Layout'
import Image from 'next/image';
import photo1 from '@/public/photo1.jpeg'
import Head from "next/head";


const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>


)
export default App
