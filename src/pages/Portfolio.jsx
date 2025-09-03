import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Camera, Crown, Sparkles, Users, ArrowLeft, ArrowRight, Play, ImageIcon, Video, Star, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'

  const categories = [
    { id: 'all', name: 'All Work', icon: <Sparkles className="w-4 h-4" />, count: 32 },
    { id: 'bridal', name: 'Bridal', icon: <Crown className="w-4 h-4" />, count: 12 },
    { id: 'editorial', name: 'Editorial', icon: <Camera className="w-4 h-4" />, count: 8 },
    { id: 'events', name: 'Events', icon: <Heart className="w-4 h-4" />, count: 6 },
    { id: 'specialfx', name: 'Special FX', icon: <ImageIcon className="w-4 h-4" />, count: 4 },
    { id: 'videos', name: 'Videos', icon: <Video className="w-4 h-4" />, count: 2 }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Romantic Bridal Look',
      description: 'Soft glam with peachy tones and natural glow. This look was created for a summer wedding with a garden theme.',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg',
      beforeAfter: true,
      featured: true,
      client: 'Sarah & Michael',
      date: 'June 2023',
      location: 'New York',
      tags: ['bridal', 'natural', 'soft glam']
    },
    {
      id: 2,
      category: 'editorial',
      title: 'Bold Editorial Glam',
      description: 'Dramatic eyes with metallic accents for a fashion magazine photoshoot. Featured in Vogue Italia.',
      image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg',
      beforeAfter: false,
      featured: true,
      client: 'Vogue Italia',
      date: 'March 2023',
      location: 'Milan',
      tags: ['editorial', 'dramatic', 'fashion']
    },
    {
      id: 3,
      category: 'events',
      title: 'Evening Gala Look',
      description: 'Sophisticated smokey eyes with nude lips for a charity gala event. The look lasted all night with minimal touch-ups.',
      image: 'https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg',
      beforeAfter: true,
      featured: false,
      client: 'Jennifer L.',
      date: 'February 2023',
      location: 'Los Angeles',
      tags: ['event', 'smokey', 'evening']
    },
    {
      id: 4,
      category: 'bridal',
      title: 'Classic Bridal Beauty',
      description: 'Timeless elegance with soft pink undertones. Traditional look with a modern twist for a winter wedding.',
      image: 'https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg',
      beforeAfter: false,
      featured: false,
      client: 'Emily & James',
      date: 'December 2022',
      location: 'Chicago',
      tags: ['bridal', 'classic', 'timeless']
    },
    {
      id: 5,
      category: 'editorial',
      title: 'Creative Color Play',
      description: 'Artistic look with vibrant color combinations for a contemporary art magazine feature.',
      image: 'https://images.pexels.com/photos/3373749/pexels-photo-3373749.jpeg',
      beforeAfter: true,
      featured: true,
      client: 'Art+Beauty Magazine',
      date: 'November 2022',
      location: 'Paris',
      tags: ['editorial', 'colorful', 'artistic']
    },
    {
      id: 6,
      category: 'events',
      title: 'Glamorous Night Out',
      description: 'Bold and confident look for special occasions. Created for a client attending a Broadway premiere.',
      image: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg',
      beforeAfter: false,
      featured: false,
      client: 'Michelle R.',
      date: 'October 2022',
      location: 'New York',
      tags: ['event', 'glam', 'evening']
    },
    {
      id: 7,
      category: 'bridal',
      title: 'Bohemian Bride',
      description: 'Natural beauty with soft, romantic touches for an outdoor beach wedding ceremony.',
      image: 'https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg',
      beforeAfter: true,
      featured: false,
      client: 'Jessica & Tom',
      date: 'August 2022',
      location: 'Miami',
      tags: ['bridal', 'bohemian', 'natural']
    },
    {
      id: 8,
      category: 'editorial',
      title: 'High Fashion Look',
      description: 'Avant-garde makeup for fashion photography. Featured in Harper\'s Bazaar.',
      image: 'https://images.pexels.com/photos/3622812/pexels-photo-3622812.jpeg',
      beforeAfter: false,
      featured: true,
      client: 'Harper\'s Bazaar',
      date: 'July 2022',
      location: 'London',
      tags: ['editorial', 'avant-garde', 'fashion']
    },
    {
      id: 9,
      category: 'specialfx',
      title: 'Fantasy Creature',
      description: 'Special effects makeup transforming model into an ethereal forest creature for a fantasy photoshoot.',
      image: 'https://images.pexels.com/photos/3622815/pexels-photo-3622815.jpeg',
      beforeAfter: true,
      featured: false,
      client: 'Fantasy Cosmetics',
      date: 'June 2022',
      location: 'Studio',
      tags: ['specialfx', 'fantasy', 'creative']
    },
    {
      id: 10,
      category: 'videos',
      title: 'Makeup Tutorial',
      description: 'Step-by-step tutorial for achieving the perfect smokey eye. Featured on YouTube with over 500k views.',
      image: 'https://images.pexels.com/photos/3622816/pexels-photo-3622816.jpeg',
      beforeAfter: false,
      featured: true,
      client: 'YouTube Channel',
      date: 'May 2022',
      location: 'Studio',
      tags: ['tutorial', 'smokey eye', 'educational'],
      video: true
    },
    {
      id: 11,
      category: 'events',
      title: 'Red Carpet Ready',
      description: 'Glamorous look for a movie premiere. Designed to photograph well under flash photography.',
      image: 'https://images.pexels.com/photos/3622817/pexels-photo-3622817.jpeg',
      beforeAfter: false,
      featured: false,
      client: 'Amanda S.',
      date: 'April 2022',
      location: 'Hollywood',
      tags: ['event', 'red carpet', 'glamorous']
    },
    {
      id: 12,
      category: 'bridal',
      title: 'Traditional Indian Bride',
      description: 'Rich, vibrant colors and intricate designs for a traditional Indian wedding ceremony.',
      image: 'https://images.pexels.com/photos/3622818/pexels-photo-3622818.jpeg',
      beforeAfter: true,
      featured: true,
      client: 'Priya & Raj',
      date: 'March 2022',
      location: 'New Jersey',
      tags: ['bridal', 'traditional', 'cultural']
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content: "Debby made me feel like the most beautiful version of myself on my wedding day. Her attention to detail is incredible!",
      image: "https://images.pexels.com/photos/3622820/pexels-photo-3622820.jpeg",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Photographer",
      content: "Working with Debby is always a pleasure. Her makeup looks incredible on camera and requires minimal retouching.",
      image: "https://images.pexels.com/photos/3622821/pexels-photo-3622821.jpeg",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Magazine Editor",
      content: "Debby's creative vision and technical skill make her one of the best makeup artists we've worked with.",
      image: "https://images.pexels.com/photos/3622822/pexels-photo-3622822.jpeg",
      rating: 5
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const featuredItems = portfolioItems.filter(item => item.featured);
  
  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex]);
    setLightboxIndex(newIndex);
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore my work and see the beautiful transformations I've created for clients. 
            Each look tells a unique story of beauty, confidence, and artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/booking"
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>View Services</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Work Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Some of our most loved and recognized creations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredItems.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {item.beforeAfter && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Before & After
                    </span>
                  </div>
                )}
                {item.video && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center">
                      <Play className="w-3 h-3 mr-1" />
                      Video
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Filter our work by category to find inspiration for your look
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
              <span className="text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="text-gray-600 dark:text-gray-300">View:</span>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' 
                ? 'bg-rose-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('masonry')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'masonry' 
                ? 'bg-rose-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
            }`}
          >
            Masonry
          </button>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          layout
          className={`grid grid-cols-1 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'md:grid-cols-2 lg:grid-cols-3'
          } gap-6`}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group cursor-pointer ${
                  viewMode === 'masonry' && 'break-inside-avoid'
                }`}
                onClick={() => {
                  setSelectedImage(item);
                  setLightboxIndex(filteredItems.findIndex(i => i.id === item.id));
                }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {item.beforeAfter && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          Before & After
                        </span>
                      </div>
                    )}
                    
                    {item.video && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center">
                          <Play className="w-3 h-3 mr-1" />
                          Video
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No items found in this category
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different category or view all our work.
            </p>
          </motion.div>
        )}
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              What our clients say about their experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image/Video Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-gray-900 rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Arrows */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLightbox('prev');
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateLightbox('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Image Counter */}
              {filteredItems.length > 1 && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 rounded-full text-white text-sm">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              )}

              {/* Content */}
              <div className="h-full flex flex-col lg:flex-row">
                <div className="lg:w-7/12 h-96 lg:h-auto">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="lg:w-5/12 p-6 lg:p-8 overflow-y-auto">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selectedImage.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedImage.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-rose-500/20 text-rose-200 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-rose-400" />
                      <span>Client: {selectedImage.client}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-3 text-rose-400" />
                      <span>Date: {selectedImage.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-rose-400" />
                      <span>Location: {selectedImage.location}</span>
                    </div>
                  </div>
                  
                  {selectedImage.beforeAfter && (
                    <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-rose-400" />
                        <span className="text-rose-400 font-medium">Before & After Available</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">
                        Contact us to see the transformation process for this look
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <Link
                      to="/booking"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      onClick={() => setSelectedImage(null)}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Similar Look
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inspired by What You See?
            </h2>
            <p className="text-xl mb-8">
              Let's create your perfect look. Book a consultation today and let's discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-white text-rose-500 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Your Session
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Ask Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;