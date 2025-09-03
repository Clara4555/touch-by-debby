import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TB</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                TouchByDebby
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Professional makeup artist specializing in bridal, event, and photoshoot makeup. 
              Creating beautiful transformations with expertise and artistry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 hover:bg-pink-400 transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 hover:bg-pink-400 transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 hover:bg-pink-400 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Teaching', 'Booking'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-500" />
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-500" />
                <span className="text-gray-600 dark:text-gray-300">hello@touchbydebby.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span className="text-gray-600 dark:text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © 2025 TouchByDebby. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-pink-500 mx-1" /> for beauty
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;