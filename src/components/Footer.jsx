const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 py-6 px-4 md:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Lokesh Vishwakarma. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Designed & Built with 💻 by <span className="text-yellow-400">Lokesh vishwakarma and AI</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
