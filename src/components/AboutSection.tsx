import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A passionate Data Analyst.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a data analyst with expertise in transforming complex datasets into clear, actionable insights.
              My approach combines statistical analysis with business understanding to uncover meaningful patterns
              and drive data-informed decisions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not analyzing data, you can find me exploring new data visualization techniques,
              learning about machine learning algorithms, or contributing to data science communities.
              I believe in the power of data to tell stories and drive positive change.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Data Analysis', 'Statistical Modeling', 'Data Visualization', 'Business Intelligence'].map((item) => (
                <span 
                  key={item}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-square">
            <img 
              src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Sunny Singh" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;