import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import ReferenceCard from "./ReferenceCard";
import { REFERENCES } from "../../constants/references";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    transitionEnd: { position: "relative" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

export default function ReferenceSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // 🔧 防抖锁

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = (newDirection) => {
    if (isAnimating) return; // 🔒 阻止快速点击
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + REFERENCES.length) % REFERENCES.length);
    setIsAnimating(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
    delta: 50,
    touchEventOptions: { passive: false },
  });

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-tight">
        What Others Say
      </h2>

      <div
        {...(isMobile ? handlers : {})}
        className="relative w-full flex items-center justify-center"
        style={{ minHeight: 340 }}
      >
        <button
          aria-label="Previous"
          onClick={() => paginate(-1)}
          className="hidden md:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-10 
                     p-2 rounded-full bg-neutral-800/70 hover:bg-purple-700/80 text-white transition"
        >
          <FiChevronLeft size={28} />
        </button>

        <AnimatePresence
          custom={direction}
          initial={false}
          onExitComplete={() => setIsAnimating(false)} // ✅ 解锁动画状态
        >
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.2 },
            }}
            className="w-full flex justify-center"
          >
            <ReferenceCard {...REFERENCES[index]} />
          </motion.div>
        </AnimatePresence>

        <button
          aria-label="Next"
          onClick={() => paginate(1)}
          className="hidden md:flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-10 
                     p-2 rounded-full bg-neutral-800/70 hover:bg-purple-700/80 text-white transition"
        >
          <FiChevronRight size={28} />
        </button>
      </div>

      <div className="flex gap-2 mt-6">
        {REFERENCES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (isAnimating || i === index) return;
              setDirection(i > index ? 1 : -1);
              setIndex(i);
              setIsAnimating(true);
            }}
            className={`h-2 w-6 rounded-full transition-all duration-200 ${i === index ? "bg-purple-400" : "bg-neutral-700"
              }`}
            aria-label={`Go to reference ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
