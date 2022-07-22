import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log("I am on the client");
  //  console.log(posts.data);

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.attributes.Title}</h2>
          </div>
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
