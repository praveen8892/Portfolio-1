import { motion } from 'framer-motion';
import { FaAws, FaCss3, FaDocker, FaGithub, FaHtml5, FaJenkins, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiAnsible, SiKubernetes, SiRedux, SiTypescript } from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

const skillGroups = [
  {
    title: 'Frontend & Application Development',
    description: 'Modern tools for building accessible, maintainable web experiences.',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3 },
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Redux', icon: SiRedux },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure, automation, and delivery technologies for reliable software operations.',
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'DevOps', icon: VscAzureDevops },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Ansible', icon: SiAnsible },
      { name: 'Docker', icon: FaDocker },
      { name: 'Jenkins', icon: FaJenkins },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16" aria-labelledby="skills-heading">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Technical Expertise
        </p>
        <h2 id="skills-heading" className="mb-3 text-3xl font-bold">Skills & Technologies</h2>
        <p className="text-gray-600 dark:text-gray-300">
          A practical toolkit spanning application development, cloud infrastructure, and automated delivery.
        </p>
      </div>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold">{group.title}</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">{group.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {group.skills.map(({ name, icon: Icon }) => (
                <ScrollAnimationWrapper key={name}>
                  <motion.div
                    className="h-full rounded-xl border border-gray-200 bg-gray-50 p-5 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="mx-auto mb-3 h-9 w-9 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <h4 className="text-base font-semibold">{name}</h4>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
