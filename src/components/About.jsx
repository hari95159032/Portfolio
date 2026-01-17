import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data';
import { User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center justify-center mb-12">
                        <span className="text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider mb-2">About Me</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
                            Know Me Better
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 opacity-20"></div>
                            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                                <User className="w-16 h-16 text-blue-600 mb-6" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Software Engineer
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {personalData.about}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I am a dedicated software engineer with a passion for creating efficient, scalable, and user-friendly web applications.
                                My journey in tech began with a curiosity for how things work, which naturally evolved into a career in software development.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                At Verizon, I've had the opportunity to work on challenging projects that have honed my skills in both frontend and backend development.
                                I believe in writing clean, maintainable code and staying updated with the latest industry trends.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                                    <span className="block text-3xl font-bold text-blue-600 mb-1">2+</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Years Experience</span>
                                </div>
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                                    <span className="block text-3xl font-bold text-cyan-500 mb-1">5+</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
