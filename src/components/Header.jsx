import { motion } from "framer-motion";
import BNMLogo from '../assets/BNM.jpg';

function Header() {
  return (
    <header className="bg-white shadow-lg backdrop-blur-sm bg-opacity-80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src={BNMLogo}
            alt="BNM Logo" 
            className="h-16 w-16"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
            Student Profile Dashboard
          </h1>
          <div className="w-12"></div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
