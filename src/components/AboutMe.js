import React from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const AboutMe = () => {
  return (
    <section id="about" className="py-16">
      <ScrollAnimationWrapper>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center">
            I'm a seasoned full-stack JavaScript engineer specializing in creating scalable and efficient web applications. My expertise lies in leveraging modern technologies like React, Next.js, Node.js, and Redux to build robust solutions. I'm passionate about clean code, user-centric design, and delivering high-quality software.
          </p>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default AboutMe;
