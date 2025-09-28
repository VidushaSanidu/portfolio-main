import { motion } from "framer-motion";
import ReferenceCard from "./ReferenceCard";
import { REFERENCES } from "../../../constants/references";
import { useTheme } from "../../../contexts/ThemeContext";
import SectionHeading from "../../ui/common/SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

export default function ReferenceSection() {
  const { currentTheme } = useTheme();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <SectionHeading level="section">
          Professional References
        </SectionHeading>
        <p className={`text-lg max-w-2xl mx-auto mt-2 ${
          currentTheme === 'minimal' ? 'text-gray-600' : 'text-neutral-400'
        }`}>
          Testimonials from colleagues and Clients who have worked with me directly.
        </p>
        
      </motion.div>

      {/* References Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8"
      >
        {REFERENCES.map((reference, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="flex justify-center"
          >
            <ReferenceCard {...reference} />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className={`flex flex-col items-center ${
            currentTheme === 'minimal' ? 'text-gray-700' : 'text-neutral-300'
          }`}>
            <span className={`text-2xl font-bold ${
              currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
            }`}>
              100%
            </span>
            <span className="text-sm uppercase tracking-wide">Trust</span>
          </div>
          
          <div className={`w-px h-12 hidden sm:block ${
            currentTheme === 'minimal' ? 'bg-gray-300' : 'bg-neutral-600'
          }`} />
          
          <div className={`flex flex-col items-center ${
            currentTheme === 'minimal' ? 'text-gray-700' : 'text-neutral-300'
          }`}>
            <span className={`text-2xl font-bold ${
              currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
            }`}>
              100%
            </span>
            <span className="text-sm uppercase tracking-wide">Positive</span>
          </div>
          
          <div className={`w-px h-12 hidden sm:block ${
            currentTheme === 'minimal' ? 'bg-gray-300' : 'bg-neutral-600'
          }`} />
          
          <div className={`flex flex-col items-center ${
            currentTheme === 'minimal' ? 'text-gray-700' : 'text-neutral-300'
          }`}>
            <span className={`text-2xl font-bold ${
              currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
            }`}>
              100%
            </span>
            <span className="text-sm uppercase tracking-wide">Satisfaction</span>
          </div>
           
        </div>
      </motion.div>
    </section>
  );
}
