import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../../../constants/constants";
import { useTheme } from "../../../contexts/ThemeContext";
import ProfessionalContactForm from "./ProfessionalContactForm";
import SectionHeading from "../../ui/common/SectionHeading";
import {  Mail, MapPin, Phone, Rocket, Linkedin, Github, MessageCircle, Facebook, Instagram, Brain } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { FaKaggle } from "react-icons/fa";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20
        }
    }
};

export default function Contact() {
    const [activeTab, setActiveTab] = useState('info');
    const theme = useTheme();

    return (
        <section key={activeTab} className={`py-16 md:py-14 px-4 md:px-8 `}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Header */}
                    <motion.div className="text-center" variants={itemVariants}>
                        <SectionHeading level="section">
                            Get in Touch
                        </SectionHeading>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className={`text-lg text-center mb-12 max-w-2xl mx-auto ${theme.currentTheme === 'minimal' ? 'text-gray-600' : 'text-neutral-400'
                            }`}
                    >
                        Ready to bring your ideas to life? Let&apos;s discuss your project and explore how we can work together.
                    </motion.p>

                    {/* Tab Navigation */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center mb-12"
                    >
                        <div className={`
                            flex rounded-lg p-1 
                            ${theme.currentTheme === 'minimal'
                                ? 'bg-white border border-gray-200'
                                : 'bg-neutral-900/50 border border-neutral-700'
                            }
                        `}>
                            {[
                                { id: 'info', label: 'Contact Info'},
                                { id: 'form', label: 'Send Message'}
                            ].map((tab) => (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                        relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200
                                        ${activeTab === tab.id
                                            ? theme.currentTheme === 'minimal'
                                                ? 'bg-gray-900 text-white'
                                                : 'bg-purple-500 text-white'
                                            : theme.currentTheme === 'minimal'
                                                ? 'text-gray-600 hover:text-gray-900'
                                                : 'text-neutral-400 hover:text-white'
                                        }
                                    `}
                                >
                                    {tab.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {activeTab === 'info' && (
                                <motion.div
                                    key="contact-info"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Contact Info */}
                                    <div className="max-w-4xl mx-auto">
                                        <div className={`
                                            rounded-2xl p-8 shadow-xl border
                                            ${theme.currentTheme === 'minimal'
                                                ? 'bg-white border-gray-200 shadow-gray-100'
                                                : 'bg-neutral-900/50 border-neutral-800 shadow-purple-900/20'
                                            }
                                        `}>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                {/* Address */}
                                                <motion.div
                                                    variants={itemVariants}
                                                    className="text-center md:text-center"
                                                >
                                                    <div className={`
                                                        w-12 h-12 rounded-full flex items-center justify-center mx-auto  mb-4
                                                        ${theme.currentTheme === 'minimal'
                                                            ? 'bg-gray-100 text-gray-600'
                                                            : 'bg-neutral-800 text-purple-400'
                                                        }
                                                    `}>
                                                        <MapPin/>
                                                    </div>
                                                    <h3 className={`font-semibold mb-2 ${theme.currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
                                                        }`}>
                                                        Address
                                                    </h3>
                                                    <p className={`text-sm leading-relaxed ${theme.currentTheme === 'minimal' ? 'text-gray-600' : 'text-neutral-300'
                                                        }`}>
                                                        {CONTACT.address}
                                                    </p>
                                                </motion.div>

                                                {/* Phone */}
                                                <motion.div
                                                    variants={itemVariants}
                                                    className="text-center md:text-center"
                                                >
                                                    <div className={`
                                                        w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4
                                                        ${theme.currentTheme === 'minimal'
                                                            ? 'bg-gray-100 text-gray-600'
                                                            : 'bg-neutral-800 text-purple-400'
                                                        }
                                                    `}>
                                                        <Phone/>
                                                    </div>
                                                    <h3 className={`font-semibold mb-2 ${theme.currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
                                                        }`}>
                                                        Phone
                                                    </h3>
                                                    <a
                                                        href={`tel:${CONTACT.phoneNo}`}
                                                        className={`text-sm hover:underline ${theme.currentTheme === 'minimal'
                                                            ? 'text-gray-600 hover:text-gray-900'
                                                            : 'text-neutral-300 hover:text-white'
                                                            }`}
                                                    >
                                                        {CONTACT.phoneNo}
                                                    </a>
                                                </motion.div>

                                                {/* Email */}
                                                <motion.div
                                                    variants={itemVariants}
                                                    className="text-center md:text-center"
                                                >
                                                    <div className={`
                                                        w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4
                                                        ${theme.currentTheme === 'minimal'
                                                            ? 'bg-gray-100 text-gray-600'
                                                            : 'bg-neutral-800 text-purple-400'
                                                        }
                                                    `}>
                                                        <Mail/>
                                                    </div>
                                                    <h3 className={`font-semibold mb-2 ${theme.currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
                                                        }`}>
                                                        Email
                                                    </h3>
                                                    <a
                                                        href={`mailto:${CONTACT.email}`}
                                                        className={`text-sm hover:underline break-all ${theme.currentTheme === 'minimal'
                                                            ? 'text-gray-600 hover:text-gray-900'
                                                            : 'text-neutral-300 hover:text-white'
                                                            }`}
                                                    >
                                                        {CONTACT.email}
                                                    </a>
                                                </motion.div>
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-neutral-800/20">
                                                <motion.a
                                                    href={`mailto:${CONTACT.email}`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`
                                                        flex-1 text-center py-3 px-6 rounded-lg font-medium transition-colors
                                                        ${theme.currentTheme === 'minimal'
                                                            ? 'bg-gray-900 hover:bg-gray-800 text-white'
                                                            : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white'
                                                        }
                                                    `}
                                                >
                                                <div className="flex items-center justify-center gap-2"><Mail/> Send Quick Email</div>
                                                    
                                                </motion.a>

                                                <motion.button
                                                    onClick={() => setActiveTab('form')}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`
                                                        flex-1 text-center py-3 px-6 rounded-lg font-medium border transition-colors
                                                        ${theme.currentTheme === 'minimal'
                                                            ? 'border-gray-300 hover:bg-gray-50 text-gray-700'
                                                            : 'border-neutral-600 hover:bg-neutral-700 text-neutral-300'
                                                        }
                                                    `}
                                                >
                                                <div className="flex items-center justify-center gap-2"><Rocket/> Use Contact Form</div>
                                                     
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'form' && (
                                <motion.div
                                    key="contact-form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProfessionalContactForm />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Social Media Links */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800"
                    >
                        <div className="text-center">
                            <h3 className={`text-xl font-semibold mb-6 ${
                                theme.currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
                            }`}>
                                Connect with me!
                            </h3>
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                {/* LinkedIn */}
                                <motion.a
                                    href={CONTACT.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-blue-500 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-blue-500 text-neutral-400 hover:text-white'
                                        }
                                    `}
                                    title="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </motion.a>

                                {/* Facebook */}
                                <motion.a
                                    href={CONTACT.socials.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-blue-600 text-neutral-400 hover:text-white'
                                        }
                                    `}
                                    title="Facebook"
                                >
                                    <Facebook size={24} />
                                </motion.a>

                                {/* Instagram */}
                                <motion.a
                                    href={CONTACT.socials.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-neutral-400 hover:text-white'
                                        }
                                    `}
                                    title="Instagram"
                                >
                                    <Instagram size={24} />
                                </motion.a>

                                {/* WhatsApp */}
                                <motion.a
                                    href={CONTACT.socials.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-green-500 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-green-500 text-neutral-400 hover:text-white'
                                        }
                                    `}
                                    title="WhatsApp"
                                >
                                    <BsWhatsapp size={24} />
                                </motion.a>

                                {/* GitHub */}
                                <motion.a
                                    href={CONTACT.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-gray-600 text-neutral-400 hover:text-white'
                                        }
                                    `}
                                    title="GitHub"
                                >
                                    <Github size={24} />
                                </motion.a>

                                

                                {/* Kaggle */}
                                <motion.a
                                    href={CONTACT.socials.kaggle}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-cyan-500 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-cyan-500 text-neutral-400 hover:text-white'
                                        }
                                    `}
                                    title="Kaggle"
                                >
                                    <FaKaggle size={24} />
                                </motion.a>

                                

                                

                                {/* Medium */}
                                <motion.a
                                    href={CONTACT.socials.medium}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-3 rounded-full transition-all duration-200 group
                                        ${theme.currentTheme === 'minimal'
                                            ? 'bg-gray-100 hover:bg-gray-900 text-gray-600 hover:text-white'
                                            : 'bg-neutral-800 hover:bg-gray-100 text-neutral-400 hover:text-gray-900'
                                        }
                                    `}
                                    title="Medium Blog"
                                >
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                                    </svg>
                                </motion.a>
                            </div>
                            <p className={`text-sm mt-6 ${
                                theme.currentTheme === 'minimal' ? 'text-gray-500' : 'text-neutral-500'
                            }`}>
                                Let's connect and collaborate on amazing projects together!
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}