import { posts } from "../../data.js";

export default function handler({query:{id}}, res) {
 
console.log("id==>",id)

const singlepost=posts.find(post=>post.id===id)
    
  res.status(200).json({ data: singlepost });
}
