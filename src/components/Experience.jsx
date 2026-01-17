import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-0 md:pl-0 md:mx-auto md:w-2/3 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 bg-white dark:bg-gray-900 p-1">
                                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="text-blue-600 w-5 h-5" />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                    </div>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                                        {exp.period}
                                    </span>
                                </div>

                                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
