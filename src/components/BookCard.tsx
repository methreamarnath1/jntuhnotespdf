// import React from 'react';
// import { Book } from '../types';
// import { ShoppingCart } from 'lucide-react';

// interface BookCardProps {
//   book: Book;
//   onAddToCart: (book: Book) => void;
// }

// export const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
//       <img
//         src={book.coverUrl}
//         alt={book.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold">{book.title}</h3>
//         <p className="text-gray-600">by {book.author}</p>
//         <p className="text-sm text-gray-500 mt-2">{book.description}</p>
//         <div className="mt-4 flex items-center justify-between">
//           <span className="text-xl font-bold">${book.price}</span>
//           <button
//             onClick={() => onAddToCart(book)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//           >
//             <ShoppingCart size={20} />
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };