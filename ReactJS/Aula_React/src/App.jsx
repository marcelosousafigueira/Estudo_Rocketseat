import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./app.module.css";
function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/marcelosousafigueira.png",
        name: "Marcelo Figueira",
        role: "Developer",
      },
      content: [
        { type: "paragraph", content: "Olá Pessoal" },
        {
          type: "paragraph",
          content: "Esse é um projeto de treinamento da Rocketseat.",
        },
        {
          type: "link",
          content:
            "https://github.com/marcelosousafigueira/Estudo_Rocketseat/tree/main/ReactJS/Aula_React",
        },
      ],
      publishedAt: new Date("2022-06-18 06:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "Educator @ Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Olá Pessoal" },
        {
          type: "paragraph",
          content: "Esse é um projeto de treinamento da Rockseat.",
        },
        {
          type: "link",
          content:
            "https://github.com/marcelosousafigueira/Estudo_Rocketseat/tree/main/ReactJS/Aula_React",
        },
      ],
      publishedAt: new Date("2022-06-17 06:00:00"),
    },
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
