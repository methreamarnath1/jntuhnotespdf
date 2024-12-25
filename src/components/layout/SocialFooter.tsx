// import React from 'react';
// import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

// export const SocialFooter = () => {
//   const socialLinks = [
//     {
//       name: 'GitHub',
//       icon: Github,
//       url: 'https://github.com/yourusername',
//       color: 'hover:text-gray-100'
//     },
//     {
//       name: 'LinkedIn',
//       icon: Linkedin,
//       url: 'https://linkedin.com/in/yourusername',
//       color: 'hover:text-blue-400'
//     },
//     {
//       name: 'Twitter',
//       icon: Twitter,
//       url: 'https://twitter.com/yourusername',
//       color: 'hover:text-blue-400'
//     },
//     {
//       name: 'Email',
//       icon: Mail,
//       url: 'mailto:contact@example.com',
//       color: 'hover:text-red-400'
//     }
//   ];

//   return (
//     <footer className="border-t border-gray-800 pt-8">
//       <div className="flex justify-center space-x-6">
//         {socialLinks.map((link) => (
//           <a
//             key={link.name}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`text-gray-400 ${link.color} transition-colors`}
//             aria-label={link.name}
//           >
//             <link.icon className="h-6 w-6" />
//           </a>
//         ))}
//       </div>
//       <p className="text-center text-gray-400 mt-4">
//         Connect with us on social media
//       </p>
//     </footer>
//   );
// };