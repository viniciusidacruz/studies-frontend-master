interface Prodcut {
  image: string;
  title: string;
}

export interface CardProductProps {
  product?: Prodcut | null;
  className: string;
  valueOf?: string;
  valuePer: string;
  inStock?: boolean;
}
