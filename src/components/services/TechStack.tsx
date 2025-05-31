
const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Laravel", "Django", "Spring Boot", "Express.js", "FastAPI"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Ionic", "Xamarin"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "AWS DynamoDB"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      category: "AI & Analytics",
      technologies: ["TensorFlow", "PyTorch", "Tableau", "Power BI", "Google Analytics", "Mixpanel"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            Technology Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest and most robust technologies to build scalable, secure, and high-performing solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="text-center mb-6">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-bold mb-4`}>
                  {category.category}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="p-3 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors duration-200 group-hover:scale-105 transform"
                  >
                    <span className="text-sm font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Tech Logos */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
          <div className="text-center text-white mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-blue-100">We work with enterprise-grade tools and frameworks</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {["React", "Angular", "Node.js", "AWS", "MongoDB", "Flutter", "Laravel", "Docker"].map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
