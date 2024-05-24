interface Author {
  name: string;
  avatar: string;
}

export interface CardPostProps {
  title: string;
  content: string;
  pathname: string;
  createdAt: string;
  className?: string;
  author?: Author | null;
  description: string | null;
}
