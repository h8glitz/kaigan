export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Poster {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}