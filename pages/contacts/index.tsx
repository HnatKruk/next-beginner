import Heading from "../../components/Heading"
import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"

export const getStaticProps:GetStaticProps = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

  if (!users) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      contacts: users
    }
  }
}

const Contacts = ({ contacts }) => {

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text='Contacts list:' />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
            <span> {contact.email}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Contacts