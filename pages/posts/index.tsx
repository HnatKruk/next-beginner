import Heading from "../../components/Heading"
import Head from "next/head"
import Link from "next/link"

export const getStaticProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

  if (!posts) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      posts: posts
    }
  }
}

const Posts = ({ posts }) => {

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text='Posts list:' />
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts