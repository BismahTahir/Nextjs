import React from 'react'
import PostItem from '../componnets/PostItem';

export default function PostList({posts}) {
  return (
    <div>
{posts?posts.map((post,index)=>(
  <PostItem key={index} post={post} />
  )):"No Post Found"}
    </div>
  )
}
