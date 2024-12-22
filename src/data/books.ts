import { Book } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Art of Programming',
    author: 'Jane Smith',
    price: 29.99,
    coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    description: 'A comprehensive guide to modern programming practices and patterns.',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Digital Marketing Mastery',
    author: 'John Davis',
    price: 24.99,
    coverUrl: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
    description: 'Learn the secrets of successful digital marketing campaigns.',
    category: 'Business'
  },
  {
    id: '3',
    title: 'Mindful Living',
    author: 'Sarah Wilson',
    price: 19.99,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    description: 'A guide to living a more mindful and balanced life.',
    category: 'Self-Help'
  }
];