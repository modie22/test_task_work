import { useEffect, useState } from "react";
import axios from "axios";
import css from "./FormPosts.module.css";
import { Notify } from "notiflix";
import { ModalPost } from "components/ModalPost/ModalPost";
import { SectionPosts } from "components/SectionPosts/SectionPosts";

interface Post {
  id: number;
  title: string;
  body: string;
}
type PostWithoutId = Omit<Post, "id">;

export const FormPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<PostWithoutId>({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [modalPost, setModalPost] = useState<Post | null>(null);

  useEffect(() => {
    (function () {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
        .catch((err) => console.error(err));
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title || !newPost.body) return;
    setLoading(true);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts([res.data, ...posts]);
      setNewPost({ title: "", body: "" });
      Notify.success("Публікація створена успішно!");
    } catch {
      Notify.failure("Сталася помилка!Спробуйте ще раз!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`container ${css.containerMain}`}>
      <h1 className={css.titleFormPage}>Публікації</h1>
      <h2 className={css.titleForm}>Форма створення публікаії</h2>
      <form onSubmit={handleSubmit} className={css.formStyles}>
        <input
          className={css.inputForm}
          type="text"
          placeholder="Заголовок"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <br />
        <textarea
          className={css.inputForm}
          placeholder="Текст"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          required
        />
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: `${
              !newPost.title || !newPost.body || loading
                ? "rgba(33, 150, 243, 0.3)"
                : "#2196f3"
            }`,
          }}
          disabled={!newPost.title || !newPost.body || loading}
        >
          {loading ? "Завантаження..." : "Створити"}
        </button>
      </form>

      <SectionPosts posts={posts} setModalPost={setModalPost} />

      {modalPost && (
        <ModalPost
          title={modalPost.title}
          body={modalPost.body}
          setModalPost={setModalPost}
        />
      )}
    </main>
  );
};
