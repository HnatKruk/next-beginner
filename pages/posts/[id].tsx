import PostInfo from "../../components/PostInfo"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"

export const getStaticPaths:GetStaticPaths = async () => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(response => response.json())

  const paths = posts.map(({ id }) => ({
    params: { id: id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const { id } = context.params
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post: post
    }
  }
}

const Contact = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post} />
    </>
  )
}

export default Contact