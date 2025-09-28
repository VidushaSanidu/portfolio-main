import { FaQuoteLeft } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import QuoteText from "../../ui/common/QuoteText";
import { useTheme } from "../../../contexts/ThemeContext";

const ReferenceCard = ({ name, title, company, quote, image, linkedIn }) => {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`w-full max-w-sm h-auto min-h-[320px] rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 group relative overflow-hidden ${
      currentTheme === 'minimal'
        ? 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-gray-200/20'
        : 'bg-gradient-to-br from-[#232347] to-[#181825] border-purple-800/30 hover:border-purple-700/50 hover:shadow-purple-500/10'
    }`}>
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
        currentTheme === 'minimal'
          ? 'bg-gradient-to-br from-gray-50/50 to-blue-50/30'
          : 'bg-gradient-to-br from-purple-600/5 to-cyan-600/5'
      }`} />
      
      <div className="relative flex flex-col h-full p-6">
        {/* Quote icon */}
        <div className="mb-4">
          <FaQuoteLeft className={`text-xl ${
            currentTheme === 'minimal' ? 'text-gray-400' : 'text-purple-400'
          }`} />
        </div>
        
        {/* Quote content */}
        <div className="flex-1 mb-6">
          <QuoteText text={quote} className="text-base leading-relaxed" />
        </div>
        
        {/* Author info */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="relative">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className={`w-12 h-12 rounded-full object-cover border-2 shadow-sm transition-transform duration-300 group-hover:scale-105 ${
                currentTheme === 'minimal' ? 'border-gray-200' : 'border-purple-700/40'
              }`}
            />
            {/* Online indicator */}
            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${
              currentTheme === 'minimal' 
                ? 'bg-green-500 border-white' 
                : 'bg-green-400 border-[#232347]'
            }`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`font-semibold text-base truncate ${
              currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
            }`}>
              {name}
            </p>
            <p className={`text-sm truncate ${
              currentTheme === 'minimal' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              {title} <span className={`font-xs ${
                currentTheme === 'minimal' ? 'text-blue-600' : 'text-purple-300'
              }`}>@{company}</span>
            </p>
            
            {linkedIn && (
              <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-sm hover:underline transition-colors duration-200 ${
                  currentTheme === 'minimal' 
                    ? 'text-blue-600 hover:text-blue-700' 
                    : 'text-purple-400 hover:text-purple-300'
                }`}
              >
                <FiLinkedin className="text-sm" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle bottom accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
        currentTheme === 'minimal'
          ? 'bg-gradient-to-r from-blue-500 to-purple-500'
          : 'bg-gradient-to-r from-purple-500 to-cyan-400'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </div>
  );
};

export default ReferenceCard;
