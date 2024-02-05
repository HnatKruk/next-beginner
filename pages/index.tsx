import Heading from "../components/Heading"
import Socials from "../components/Socials";
import styles from '../styles/Home.module.scss';
import Head from "next/head";

export const getStaticProps = async () => {
  const socials = await fetch(`${process.env.API_URL}/socials`)
    .then(response => response.json())

  if (!socials) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      socials: socials
    }
  }
}

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text='Hello World' />
      <Socials socials={socials} />
    </div>
  )
}

export default Home