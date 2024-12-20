export interface Book {
    id: string;
    title: string;
    author: string;
    price: number;
    coverUrl: string;
    description: string;
    category: string;
    publicationYear?: number; // Optional field
    rating?: number; // Optional field
  }
  
  export const books: Book[] = [
    {
      id: '1',
      title: 'The Art of Programming',
      author: 'Jane Smith',
      price: 29.99,
      coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      description: 'A comprehensive guide to modern programming practices and patterns.',
      category: 'Technology',
      publicationYear: 2021,
      rating: 4.8,
    },
    // Other books...
  ];
  