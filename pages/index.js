import Link from "next/link";

export default function Home({ posts }) {
  console.log("I am on the client");
  //  console.log(posts.data);

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.attributes.Slug}`} key={post.id}>
            <a key={post.id}>
              <h2>{post.attributes.Title}</h2>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // get posts from api

  const res = await fetch("http://localhost:1337/api/posts");
  const data = await res.json();
  const posts = data.data;

  console.log(posts);

  return {
    props: { posts },
  };
}
