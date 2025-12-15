import React from 'react';

const Hero = () => {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-extrabold mb-4">Full-Stack JavaScript Engineer</h2>
      <p className="max-w-2xl mx-auto mb-8">
        Crafting scalable SaaS applications with React, Next.js, Node.js, and Redux. Expertise in monorepo patterns and building robust, high-performance web solutions.
      </p>
      <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Explore Projects
      </button>
    </section>
  );
};

export default Hero;
