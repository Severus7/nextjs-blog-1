export default function Post({ post }) {
  return <div>{post.attributes.Title}</div>;
}

// tell next.js how many pages are there
export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/api/posts");
  const data = await res.json();
  const posts = data.data;

  const paths = posts.map((post) => ({
    params: { slug: post.attributes.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/api/posts?Slug=${slug}`);
  const data = await res.json();
  const posts = data.data;
  const post = posts[0];

  return {
    props: { post },
  };
}
