import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import DevelopmentNotes from './components/DevelopmentNotes';
import AssessmentReport from './components/AssessmentReport';
import PresentationSkills from './components/PresentationSkills';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Profile />
        </motion.div>
        <div className="grid gap-8 mt-8">
          {[DevelopmentNotes, AssessmentReport, PresentationSkills].map((Component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Component />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
