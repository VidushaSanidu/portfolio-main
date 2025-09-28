import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../../contexts/ThemeContext";

const CLAMP_LINES = 5;

const QuoteText = ({ text, className = "" }) => {
  const { currentTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const quoteRef = useRef();

  useEffect(() => {
    const element = quoteRef.current;
    if (!element) return;

    const checkTruncation = () => {
      const overflow = element.scrollHeight > element.clientHeight + 1;
      setIsTruncated(overflow);
    };

    checkTruncation();

    const observer = new ResizeObserver(checkTruncation);
    observer.observe(element);

    window.addEventListener("resize", checkTruncation);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkTruncation);
    };
  }, [text]);

  return (
    <div>
      <p
        ref={quoteRef}
        className={`italic leading-snug transition-all duration-200 ${
          currentTheme === 'minimal' ? 'text-gray-700' : 'text-gray-200'
        } ${!expanded ? "line-clamp-7" : ""} ${className || "text-base sm:text-[1rem] sm:leading-relaxed"}`}
      >
        "{text}"
      </p>
      {isTruncated && (
        <button
          aria-label="Toggle Quote Expansion"
          onClick={() => setExpanded(!expanded)}
          className={`mt-2 hover:underline text-xs font-medium transition-colors duration-200 ${
            currentTheme === 'minimal' ? 'text-blue-600 hover:text-blue-700' : 'text-purple-400 hover:text-purple-300'
          }`}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default QuoteText;
