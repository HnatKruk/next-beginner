import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from '../styles/Home.module.scss';
import Head from "next/head";

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text='Hello World' />
      <Socials socials={socials} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/socials`);
  const socials = await response.json();

  if (!socials) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socials,
    },
  };
};

export default Home;
