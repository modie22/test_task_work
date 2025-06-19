import React from "react";
import css from "./ModalPost.module.css";

export const ModalPost: React.FC<ModalPostProps> = ({
  title,
  body,
  setModalPost,
}) => {
  return (
    <div className={css.containerModal} onClick={() => setModalPost(null)}>
      <div className={css.containerText} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button className={css.buttonModal} onClick={() => setModalPost(null)}>
          Закрити
        </button>
      </div>
    </div>
  );
};
interface Post {
  id: number;
  title: string;
  body: string;
}
type ModalPostProps = {
  title: string;
  body: string;
  setModalPost: React.Dispatch<React.SetStateAction<Post | null>>;
};
