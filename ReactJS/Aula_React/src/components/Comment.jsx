import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/marcelosousafigueira.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Marcelo Figueira</strong>
              <time title="18 de Junho ás 02:55" dateTime="2022-06-18 02:54">
                {" "}
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
