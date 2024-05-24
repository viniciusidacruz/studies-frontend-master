import { CardPost } from "@presentation/components";

export const App = () => (
  <main className="h-screen w-full flex items-center justify-center">
    <CardPost
      title="Primeiro titulo"
      content="lorem ipsum dolor sit amet, consectetur adip occurence velit"
      createdAt="2024-05-12"
      pathname="/post/um-titulo-interessante"
      className="w-[300px]"
      author={{
        avatar: "https://github.com/viniciusidacruz.png",
        name: "Vinicius Italo",
      }}
      description="Subtitulo"
    />
  </main>
);
