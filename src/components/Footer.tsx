
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">Devigo</div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with AI-driven solutions and innovative software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                💻
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 hello@devigo.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Devigo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
