import { posts } from "../../data.js";

export default function handler(req, res) {

    console.log("data=>", posts);
  res.status(200).json({ data: posts });
}
