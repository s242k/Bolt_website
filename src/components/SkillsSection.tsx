import React from 'react';
import { LineChart, Database, BarChart3, Brain } from 'lucide-react';
import SkillCard from './SkillCard';

const skillsData = [
  {
    icon: <Database size={32} />,
    title: 'Data Management',
    description: 'Expertise in handling and processing large datasets with attention to data quality and integrity.',
    skills: ['SQL', 'ETL Processes', 'Data Cleaning', 'Database Management']
  },
  {
    icon: <LineChart size={32} />,
    title: 'Analysis & Statistics',
    description: 'Strong foundation in statistical analysis and problem-solving using various analytical methods.',
    skills: ['Statistical Analysis', 'Hypothesis Testing', 'Regression Analysis', 'A/B Testing']
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Visualization',
    description: 'Creating clear and impactful data visualizations to communicate insights effectively.',
    skills: ['Tableau', 'Power BI', 'Data Storytelling', 'Dashboard Design']
  },
  {
    icon: <Brain size={32} />,
    title: 'Tools & Technologies',
    description: 'Proficiency in various data analysis tools and programming languages.',
    skills: ['Python', 'R', 'Excel Advanced', 'Machine Learning Basics']
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Expertise in transforming data into actionable insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              skills={skill.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;