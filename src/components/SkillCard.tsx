import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, skills, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;