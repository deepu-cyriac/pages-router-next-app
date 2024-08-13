//this is a catch all file i.e, begins with '...'
//next.js catches anything after blog and is made available as an array of values in the router.query

import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The blog posts</h1>
    </div>
  );
}
