import React from 'react';
import { personalData } from '../data';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-gray-100">{personalData.name}</span>. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
