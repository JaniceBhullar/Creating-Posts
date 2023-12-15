import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./Timeago";
import ReactionButtons from "./ReactionButtons";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  // console.log(orderedPosts)

  return (
    <section>
      <h2>Posts</h2>

      {orderedPosts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
          </p>
          <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  );
}
