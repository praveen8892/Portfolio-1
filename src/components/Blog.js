import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { motion } from 'framer-motion';


const blogPosts = [
  {
    category: 'Tech Insights',
    title: 'Mastering Monorepo Patterns',
    description: 'A deep dive into monorepo architecture and its benefits for large-scale projects.',
    imageUrl: 'https://placehold.co/400x300',
  },
  {
    category: 'Development Tips',
    title: 'Optimizing React Performance',
    description: 'Strategies for enhancing the performance of React applications.',
    imageUrl: 'https://placehold.co/400x300',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <ScrollAnimationWrapper key={post.title}>
               <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex items-center">
                <img src={post.imageUrl} alt={post.title} className="w-32 h-32 object-cover" />
                <div className="p-4">
                  <p className="text-blue-500 dark:text-blue-400 text-sm font-semibold">{post.category}</p>
                  <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{post.description}</p>
                </div>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
