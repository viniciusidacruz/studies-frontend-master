import { CardPost } from "@presentation/components";
import { CardProduct } from "./presentation/components/internal/card-product";

export const App = () => (
  <main className="h-screen w-full flex items-center justify-center gap-10">
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

    <CardProduct
      className=""
      valueOf="185,95"
      valuePer="167,90"
      inStock
      product={{
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/5208902-500-500?v=638336040061370000&width=500&height=500&aspect=true",
        title: "Kit Seleção Mestres do Churrasco (Aprox.  3,5kg)",
      }}
    />

    <CardProduct
      className=""
      valueOf=""
      valuePer="16.99"
      inStock
      product={{
        image:
          "https://obahortifruti.vtexassets.com/arquivos/ids/4250069-500-500?v=638144112141800000&width=500&height=500&aspect=true",
        title: "Banana Prata Kg",
      }}
    />

    <CardProduct
      className=""
      valueOf=""
      valuePer="10,20"
      product={{
        image: "",
        title: "Maça Prata Kg",
      }}
    />
  </main>
);
