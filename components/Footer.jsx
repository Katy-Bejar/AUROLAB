const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-10 mt-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y Nombre */}
          <div>
            <img src="/img/aurolab.jpg" alt="Logo" className="w-32 mb-4" />
            <h2 className="text-2xl font-bold">Aurolab</h2>
          </div>
  
          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Leadership Team</a></li>
              <li><a href="#">News & Media</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
  
          {/* Tests & Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tests & Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">General Diagnostic Testing</a></li>
              <li><a href="#">Genetic Testing</a></li>
              <li><a href="#">Food Sensitivity Testing</a></li>
              <li><a href="#">Hormone Insights Testing</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
            <p className="text-gray-300">If you have any questions, feel free to contact us.</p>
            <p className="mt-4"><span className="font-bold">Email:</span> <a href="mailto:info@email.com" className="text-green-400">info@email.com</a></p>
            <p><span className="font-bold">Phone:</span> <a href="tel:01061245741" className="text-green-400">02 01061245741</a></p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t bg-white border-gray-900 mt-10 pt-6 text-center text-gray-400">
          <p>©2025 AuroLab, All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-900">Privacy Policy</a>
            <a href="#" className="hover:text-blue-900">Terms of Use</a>
            <a href="#" className="hover:text-blue-900">Report a Vulnerability</a>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-blue-900">Facebook</a>
            <a href="#" className="hover:text-blue-900">Twitter</a>
            <a href="#" className="hover:text-blue-900">YouTube</a>
          </div>
          <a href="#" className="text-green-400 hover:underline mt-4 inline-block">Back to Top ↑</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  