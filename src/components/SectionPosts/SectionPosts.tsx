import React, { useState } from "react";
import css from "./SectionPosts.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}
export const SectionPosts: React.FC<SectionPostsProps> = ({
  posts,
  setModalPost,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(10);
  return (
    <section>
      {posts.slice(0, visibleCount).map((post, index) => (
        <div
          className={css.postItem}
          key={post.id}
          style={{
            border: `2px solid ${index % 2 === 0 ? "blue" : "green"}`,
          }}
          onClick={() => setModalPost(post)}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      {visibleCount < posts.length && (
        <button onClick={() => setVisibleCount(visibleCount + 10)}>
          Завантажити ще
        </button>
      )}
    </section>
  );
};
type SectionPostsProps = {
  posts: Post[];
  setModalPost: React.Dispatch<React.SetStateAction<Post | null>>;
};
