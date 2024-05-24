import { formatDate } from "date-fns";

import {
  Card,
  Badge,
  Avatar,
  Button,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  AvatarImage,
  AvatarFallback,
  CardDescription,
} from "@presentation/components";
import { cn, shortStr } from "@/helpers/utils";

import { CardPostProps } from "./types";

/**
 * @param {string}  title - Título do card;
 * @param {Object} author - Informações do autor contento avatar e name;
 * @param {string} content - Informações do conteúdo que irá ser mostrado;
 * @param {string} pathname - URL para onde será redirecionado;
 * @param {string} className - Extensão de estilos para o card;
 * @param {string} createdAt - Data que foi criado esse post;
 * @param {string} description - Descrição do card brevemente;

 * @returns {Element} Vai devolver um elemento HTML
 */
export function CardPost({
  title,
  author,
  content,
  pathname,
  className,
  createdAt,
  description = "",
}: CardPostProps) {
  const hasAuthor = !!author;
  const hasTitle = !!title.length;
  const hasDate = !!createdAt.length;
  const hasContent = !!content.length;
  const hasPathname = !!pathname.length;
  const hasDescription = !!description?.length;

  const authorName = author?.name || "Unknown";
  const letterName = shortStr(authorName, 2).toUpperCase();

  const createdAtFormatted = () => formatDate(createdAt, "dd/MM/yyyy");

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex-row justify-between">
        <div>
          <CardTitle>{hasTitle ? title : "No result for title"}</CardTitle>
          <CardDescription>
            {hasDescription ? description : "No result for description"}
          </CardDescription>
        </div>
        {hasDate && <Badge variant="secondary">{createdAtFormatted()}</Badge>}
      </CardHeader>

      <CardContent>
        <p>{hasContent ? content : "No result for content"}</p>
      </CardContent>

      <CardFooter className="justify-between">
        {hasAuthor && (
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{letterName}</AvatarFallback>
            </Avatar>

            <small>
              <strong>Author:</strong> {authorName}
            </small>
          </div>
        )}

        <a href={hasPathname ? pathname : "/"}>
          <Button>See more</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
