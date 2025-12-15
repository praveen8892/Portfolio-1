import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="max-w-4xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img src="https://placehold.co/800x600" alt="SaaS Application" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">SaaS Application</h3>
                <p className="text-gray-700 dark:text-gray-300">A scalable SaaS application built with React, Next.js, and Tailwind CSS.</p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
