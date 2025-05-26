import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Data Analysis', 'Business Intelligence', 'Machine Learning', 'Visualization'];

const projectsData = [
  {
    title: 'Sales Performance Analysis',
    category: 'Data Analysis',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive analysis of sales data revealing key performance indicators and growth opportunities across multiple regions.',
    link: '#'
  },
  {
    title: 'Customer Segmentation',
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Applied clustering algorithms to segment customers based on behavior patterns and purchasing habits.',
    link: '#'
  },
  {
    title: 'Financial Dashboard',
    category: 'Business Intelligence',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Interactive Power BI dashboard providing real-time insights into financial metrics and KPIs.',
    link: '#'
  },
  {
    title: 'Market Trend Analysis',
    category: 'Data Analysis',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Statistical analysis of market trends using time series forecasting to predict future market behavior.',
    link: '#'
  },
  {
    title: 'Supply Chain Optimization',
    category: 'Business Intelligence',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Data-driven optimization of supply chain processes resulting in 15% cost reduction.',
    link: '#'
  },
  {
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    image: 'https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Predictive modeling to identify at-risk customers with 85% accuracy using machine learning.',
    link: '#'
  }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Featured data analysis projects and case studies
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;