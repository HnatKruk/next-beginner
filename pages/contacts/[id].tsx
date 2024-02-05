import { GetServerSideProps } from "next"
import ContactInfo from "../../components/ContactInfo"
import Head from "next/head"

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.params
  const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())

  if (!users) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      contact: users
    }
  }
}

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  )
}

export default Contact