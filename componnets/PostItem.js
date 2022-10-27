import React from "react";
import Link from "next/link";
import {useRouter} from 'next/router';
export default function PostItem({ post }) {

  const router=useRouter();
  const{slug}=router.query;
  return (
    <div className="post-container">
      <style jsx>
        {`
          div.post-container {
            max-width: 50rem;
            border: 1px solid grey;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 2px;
            text-align: center;
          }
          div.post-container:hover {
            background-color: rgb(176, 175, 175);
          }
        `}
      </style>
      <Link href={`posts/${post?.id}`}>
        <a>
          <h3>{post?.title}</h3>
          <p>{post?.body}</p>
        </a>
      </Link>
    </div>
  );
}
