export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  beds: number;
  baths: number;
  area: number;
  type: string;
  description?: string;
  yearBuilt?: number;
  status?: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Location {
  id: number;
  name: string;
  image: string;
  properties: number;
}

export interface Category {
  title: string;
  icon: React.ElementType;
  count: string;
  href: string;
}