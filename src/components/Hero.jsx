import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex items-center justify-center py-20">
            <div className="text-center z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-blue-600 dark:text-blue-400 font-medium tracking-wide uppercase mb-4">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{personalData.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        {personalData.role} based in {personalData.location}.
                        Specializing in building exceptional digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all flex items-center gap-2 hover:gap-3 shadow-lg shadow-blue-500/25"
                        >
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all bg-transparent"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center text-gray-500 dark:text-gray-400">
                        <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personalData.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-30 dark:opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/30 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default Hero;
