import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PostList from "../componnets/PostList";

export default function Home({ posts }) {
  // console.log("data==", posts);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PostList posts={posts} />
      </main>
    </div>
  );
}
export const getStaticProps = async () => {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  const data = await post.json();

  return {
    props: {
      posts: data,
    },
  };
};
