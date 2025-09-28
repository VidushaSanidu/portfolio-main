import { motion } from "framer-motion";
import { HERO_CONTENT } from "../../../constants/constants";
import { useTypingAnimation } from "../../../hooks/useTypingAnimation";
import { HiDownload, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaMediumM } from 'react-icons/fa';
import { useCV } from '../../../hooks/useCV';
import Button from '../../ui/common/Button';
import profileImage from '../../../assets/pro4.png';
import {
    containerVariants,
    itemVariants,
    titleVariants,
    floatingShapeVariants,
    floatingShapeVariantsReduced,
    cursorGlowVariants,
    profileCardVariants
} from "./animations";

export default function Hero() {
    const { cvUrl, isLoading } = useCV();
    const typedRole = useTypingAnimation(HERO_CONTENT.roles, 150, 100, 2000);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shapeVariants = prefersReducedMotion ? floatingShapeVariantsReduced : floatingShapeVariants;

    return (
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
            {/* Floating Geometric Shapes Background with Beautiful Animations */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Enhanced background glow with subtle scale animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                />

                {/* Original floating geometric shapes */}
                <motion.div
                    variants={shapeVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm will-change-transform"
                />
                <motion.div
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                    className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rotate-45 blur-sm will-change-transform"
                />
                <motion.div
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: "4s" }}
                    className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-sm will-change-transform"
                />
                <motion.div
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: "6s" }}
                    className="absolute bottom-40 right-1/3 w-24 h-24 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rotate-12 blur-sm will-change-transform"
                />

                {/* Additional smaller floating elements */}
                <motion.div
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                    className="absolute top-32 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm will-change-transform"
                />
                <motion.div
                    variants={shapeVariants}
                    animate="animate"
                    style={{ animationDelay: "5s" }}
                    className="absolute bottom-32 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rotate-45 blur-sm will-change-transform"
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="grid lg:grid-cols-3 gap-12 items-center"
                >
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div variants={titleVariants} className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r bg-clip-text text-transparent from-white via-purple-200 to-blue-200">
                                {HERO_CONTENT.name}
                            </h1>

                            <div className="text-2xl md:text-3xl font-medium h-12 flex items-center text-purple-300">
                                <span className="mr-3">{typedRole}</span>
                                <motion.span
                                    variants={cursorGlowVariants}
                                    animate="blink"
                                    className="inline-block w-1 h-8 rounded-full bg-purple-400"
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl leading-relaxed text-neutral-300"
                        >
                            {HERO_CONTENT.summary}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                as="a"
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                                size="lg"
                                loading={isLoading}
                                className="group"
                            >
                                <HiDownload className="text-xl transition-transform group-hover:scale-110" />
                                <span>Download CV</span>
                            </Button>

                            <Button
                                as="a"
                                href="#contact"
                                variant="secondary"
                                size="lg"
                                className="group"
                            >
                                <HiMail className="text-xl transition-transform group-hover:scale-110" />
                                <span>Get In Touch</span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Profile Card - Right Side */}
                    <motion.div
                        variants={itemVariants}
                        animate="animate"
                        className="relative group"
                    >
                        <motion.div
                            variants={profileCardVariants}
                            animate="animate"
                            className="relative"
                        >
                            {/* Iconic Profile Card with Neon Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                        
                                                    
                            <div className="relative bg-neutral-900/95 backdrop-blur-xl rounded-3xl p-8 border border-neutral-700/50 overflow-hidden">
                                {/* Animated Background Pattern */}
                                <div className="absolute inset-0 opacity-5">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20" />
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                                </div>

                                {/* Profile Image Container */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
                                    className="relative mb-6 mx-auto w-72 h-72"
                                >
                                    {/* Rotating Glow Ring */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1"
                                    >
                                        <div className="w-full h-full rounded-full bg-neutral-900" />
                                    </motion.div>

                                    {/* Profile Image with Fallback */}
                                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center overflow-hidden">
                                        <img 
                                            src={profileImage} 
                                            alt="Vidusha Sanidu Profile" 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // Fallback to initials if image fails to load
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="text-4xl font-bold text-white hidden items-center justify-center w-full h-full">
                                            {HERO_CONTENT.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>

                                    {/* Status Indicator */}
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute bottom-5 right-10 w-6 h-6 bg-green-400 rounded-full border-4 border-neutral-900 shadow-lg"
                                    />
                                </motion.div>

                                {/* Name and Status */}
                                <div className="text-center mb-6">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-2xl font-bold text-white mb-2"
                                    >
                                        {HERO_CONTENT.name}
                                    </motion.h3>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="inline-flex items-center gap-2 px-3 py-1 bg-green-400/20 text-green-300 rounded-full text-sm font-medium"
                                    >
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Available for projects
                                    </motion.div>
                                </div>

                                {/* Location */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex items-center justify-center gap-3 mb-6 text-neutral-300"
                                >
                                    <HiLocationMarker className="text-xl text-cyan-400" />
                                    <span className="font-medium">Colombo, Sri Lanka</span>
                                </motion.div>

                                {/* Social Links with Enhanced Animations */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex justify-center gap-4"
                                >
                                    <motion.a
                                        href="https://www.linkedin.com/in/vidushasanidu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group/social p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-blue-400 transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaLinkedin className="text-2xl text-neutral-400 group-hover/social:text-blue-400 transition-colors duration-300" />
                                        <div className="absolute inset-0 rounded-xl bg-blue-400/0 group-hover/social:bg-blue-400/10 transition-all duration-300" />
                                    </motion.a>

                                    <motion.a
                                        href="https://github.com/VidushaSanidu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group/social p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-purple-400 transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="text-2xl text-neutral-400 group-hover/social:text-purple-400 transition-colors duration-300" />
                                        <div className="absolute inset-0 rounded-xl bg-purple-400/0 group-hover/social:bg-purple-400/10 transition-all duration-300" />
                                    </motion.a>

                                    <motion.a
                                        href="https://medium.com/@vidushsanidu07"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group/social p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 hover:border-cyan-400 transition-all duration-300"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaMediumM className="text-2xl text-neutral-400 group-hover/social:text-cyan-400 transition-colors duration-300" />
                                        <div className="absolute inset-0 rounded-xl bg-cyan-400/0 group-hover/social:bg-cyan-400/10 transition-all duration-300" />
                                    </motion.a>
                                </motion.div>

                                {/* Quick Stats or Additional Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="mt-6 pt-6 border-t border-neutral-700/50"
                                >
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-cyan-400">3+</div>
                                            <div className="text-sm text-neutral-400">Years Experience</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-purple-400">10+</div>
                                            <div className="text-sm text-neutral-400">Projects Completed</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}