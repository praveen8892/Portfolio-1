import { motion } from 'framer-motion';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import {FaReact,FaNodeJs,FaGithub,FaHtml5     } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const skills = [
  { name: 'HTML', icon: <FaHtml5   className="h-8 w-8 mx-auto mb-2" /> },
  { name: 'React', icon: <FaReact className="h-8 w-8 mx-auto mb-2" /> },
  { name: 'Next.js', icon: <RiNextjsFill   className="h-8 w-8 mx-auto mb-2" /> },
  { name: 'Node.js', icon: <FaNodeJs  className="h-8 w-8 mx-auto mb-2" /> },
  { name: 'Redux', icon: <SiRedux className="h-8 w-8 mx-auto mb-2" /> },
  { name: 'GitHub', icon: <FaGithub  className="h-8 w-8 mx-auto mb-2" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <ScrollAnimationWrapper key={skill.name}>
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill.icon}
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
