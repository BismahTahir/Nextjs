import React from 'react'
// import {useRouter} from 'next/router';
import styles from '../../styles/post.module.css';
import Meta from '../../componnets/Meta';

export default function Post({post}) {
    // const router=useRouter();
    // const{slug}=router.query;
  return (
    <>
      <Meta title={post.title} />
      <div className={styles.card}>
        <main className={styles.content}>
          <h3>{post.title}</h3>

          <p>{post.body}</p>
        </main>
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {

    console.log(context.params.slug);
  const allPost = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.slug}`
  );
  const post = await allPost.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async (context) => {
  const allPost = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts_ = await allPost.json();
  const ids = posts_.map((post) => post.id);
  const params_ = ids.map((id) => {
    return {params: {slug:id.toString()}}
  });
  return {
    paths: params_,
    fallback: false,
  };
};


