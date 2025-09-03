import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Palette, 
  Star, 
  Calendar, 
  CheckCircle, 
  Video, 
  Download, 
  Mail, 
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Briefcase,
  Heart,
  Sparkles
} from 'lucide-react';

const Teaching = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  const courses = [
    {
      title: "Beginner Makeup Masterclass",
      duration: "4 weeks",
      students: "6-8 per class",
      price: "$299",
      image: "https://images.pexels.com/photos/3373750/pexels-photo-3373750.jpeg",
      features: [
        "Basic makeup techniques",
        "Product knowledge",
        "Color theory fundamentals",
        "Skin preparation",
        "Day and evening looks",
        "Makeup kit recommendations",
        "Tool selection guide",
        "Sanitation practices"
      ],
      fullDescription: "Perfect for absolute beginners, this comprehensive course covers everything you need to know to start your makeup journey. Learn fundamental techniques, product knowledge, and build confidence in your application skills.",
      schedule: "Tuesdays & Thursdays, 6-8 PM",
      nextStartDate: "January 15, 2024",
      level: "Beginner",
      gradient: "from-rose-400 to-pink-400",
      popular: true
    },
    {
      title: "Advanced Bridal Makeup Certification",
      duration: "6 weeks",
      students: "4-6 per class",
      price: "$499",
      image: "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg",
      features: [
        "Professional bridal techniques",
        "Long-lasting formulas",
        "Photography makeup",
        "Client consultation skills",
        "Business basics",
        "Portfolio development",
        "Bridal trial process",
        "Emergency touch-up kits"
      ],
      fullDescription: "Specialize in bridal makeup with this intensive certification program. Learn the secrets to creating long-lasting, photograph-perfect bridal looks and build the skills to start your own bridal makeup business.",
      schedule: "Mondays & Wednesdays, 6-9 PM",
      nextStartDate: "February 5, 2024",
      level: "Intermediate",
      gradient: "from-purple-400 to-pink-400",
      popular: true
    },
    {
      title: "Editorial & Fashion Makeup Intensive",
      duration: "8 weeks",
      students: "3-5 per class",
      price: "$699",
      image: "https://images.pexels.com/photos/3622812/pexels-photo-3622812.jpeg",
      features: [
        "Creative makeup techniques",
        "Avant-garde looks",
        "Fashion industry knowledge",
        "Photoshoot preparation",
        "Networking skills",
        "Portfolio building",
        "Runway makeup",
        "Collaboration with photographers"
      ],
      fullDescription: "Dive into the creative world of editorial and fashion makeup. This advanced course teaches you how to create stunning looks for photography, runway, and high-fashion events.",
      schedule: "Saturdays, 10 AM-4 PM",
      nextStartDate: "January 27, 2024",
      level: "Advanced",
      gradient: "from-indigo-400 to-purple-400",
      popular: false
    },
    {
      title: "Special Effects Makeup Workshop",
      duration: "2 days",
      students: "8-10 per class",
      price: "$249",
      image: "https://images.pexels.com/photos/3622815/pexels-photo-3622815.jpeg",
      features: [
        "Basic SFX techniques",
        "Prosthetic application",
        "Bruise and wound creation",
        "Aging techniques",
        "Product knowledge",
        "Character design",
        "Photography for SFX",
        "Kit essentials"
      ],
      fullDescription: "Explore the fascinating world of special effects makeup in this intensive weekend workshop. Learn to create realistic injuries, aging effects, and basic character makeup.",
      schedule: "Weekend Intensive (Sat-Sun), 10 AM-5 PM",
      nextStartDate: "February 10-11, 2024",
      level: "All Levels",
      gradient: "from-blue-400 to-indigo-400",
      popular: false
    }
  ];

  const workshops = [
    {
      title: "Smokey Eye Masterclass",
      duration: "3 hours",
      price: "$89",
      focus: "Perfecting the classic smokey eye technique",
      nextDate: "January 20, 2024"
    },
    {
      title: "Skincare Before Makeup",
      duration: "2 hours",
      price: "$65",
      focus: "Preparing skin for flawless makeup application",
      nextDate: "February 3, 2024"
    },
    {
      title: "Bridal Trial Techniques",
      duration: "4 hours",
      price: "$125",
      focus: "Mastering the bridal consultation process",
      nextDate: "January 28, 2024"
    },
    {
      title: "Men's Grooming Workshop",
      duration: "3 hours",
      price: "$79",
      focus: "Makeup and grooming techniques for men",
      nextDate: "February 17, 2024"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      course: "Beginner Masterclass",
      text: "Debby's teaching style is amazing! I went from knowing nothing about makeup to feeling confident doing my own looks for special occasions. The small class size meant I got personalized attention.",
      rating: 5,
      image: "https://images.pexels.com/photos/3622820/pexels-photo-3622820.jpeg",
      outcome: "Now does makeup for friends' weddings"
    },
    {
      name: "Jennifer L.",
      course: "Bridal Makeup Certification",
      text: "The bridal course gave me the skills and confidence to start my own makeup business. Debby's guidance was invaluable, and I'm now booking my own bridal clients regularly!",
      rating: 5,
      image: "https://images.pexels.com/photos/3622821/pexels-photo-3622821.jpeg",
      outcome: "Started successful bridal makeup business"
    },
    {
      name: "Maria K.",
      course: "Editorial Makeup Intensive",
      text: "The editorial course pushed my creativity to new heights. I'm now working with top photographers in the city and my work has been featured in two local magazines!",
      rating: 5,
      image: "https://images.pexels.com/photos/3622822/pexels-photo-3622822.jpeg",
      outcome: "Published in fashion magazines"
    },
    {
      name: "David T.",
      course: "Special Effects Workshop",
      text: "As someone interested in theater makeup, this workshop was incredible. I learned techniques I never thought I could master in just a weekend. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/3622823/pexels-photo-3622823.jpeg",
      outcome: "Does makeup for local theater productions"
    }
  ];

  const whyChoose = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Instructor",
      description: "Learn from a professionally certified makeup artist with 5+ years experience in both application and teaching"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Class Sizes",
      description: "Maximum 8 students per class ensures personalized attention and hands-on learning experience"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Professional Kit Included",
      description: "Each student receives a starter kit with professional-grade products to use during and after the course"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Lifetime Support",
      description: "Ongoing support, mentorship, and alumni network access even after course completion"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Resources",
      description: "Access to exclusive video tutorials and course materials for 12 months after your course"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Business Guidance",
      description: "Learn how to turn your skills into a business with our optional business development modules"
    }
  ];

  const faqs = [
    {
      question: "Do I need any prior experience?",
      answer: "No prior experience is needed for our beginner courses. We offer programs for all skill levels, from absolute beginners to advanced artists looking to specialize."
    },
    {
      question: "What's included in the course fee?",
      answer: "The course fee includes all materials, a professional makeup kit for use during classes, course materials, and lifetime access to our alumni network. Some courses include take-home products."
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes! We offer flexible payment plans for all courses longer than 4 weeks. A deposit secures your spot, and the balance can be paid in monthly installments."
    },
    {
      question: "Do you offer online courses?",
      answer: "Currently, we focus on in-person learning for the hands-on experience. However, we do provide extensive video resources and online support to complement your in-class learning."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, upon successful completion of any certification course, you'll receive a professionally recognized certificate that you can use to build your portfolio and career."
    }
  ];

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
            Makeup <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Learn the art of professional makeup from an experienced artist. Whether you're a beginner 
            or looking to advance your skills, our courses will elevate your makeup artistry to professional levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Enroll Now</span>
            </Link>
            <a
              href="#courses"
              className="px-6 py-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 flex items-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>View Courses</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Students Trained" },
              { number: "95%", label: "Success Rate" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "5", label: "Courses Offered" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-rose-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Workshops Tabs */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Programs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect program to match your goals and skill level
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'courses'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-rose-500'
              }`}
            >
              Certification Courses
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'workshops'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-rose-500'
              }`}
            >
              Workshops
            </button>
          </div>
        </div>

        {/* Courses Content */}
        {activeTab === 'courses' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl h-full ${
                  course.popular 
                    ? 'border-rose-300/50 shadow-lg' 
                    : 'border-gray-100 dark:border-gray-700 hover:border-rose-200/50'
                }`}>
                  {course.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.gradient} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {course.title}
                      </h3>
                      <button
                        onClick={() => toggleCourse(index)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {expandedCourse === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{course.nextStartDate}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {course.fullDescription}
                    </p>

                    {expandedCourse === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-6"
                      >
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <strong>Schedule:</strong> {course.schedule}
                        </p>
                      </motion.div>
                    )}
                    
                    <ul className="space-y-2 mb-6">
                      {course.features.slice(0, expandedCourse === index ? course.features.length : 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                        {course.price}
                      </span>
                      <Link
                        to="/contact"
                        className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Workshops Content */}
        {activeTab === 'workshops' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {workshop.focus}
                </p>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{workshop.nextDate}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-500">
                    {workshop.price}
                  </span>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Register
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Learn With TouchByDebby?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience comprehensive makeup education with personalized attention and professional guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from students who've transformed their skills and careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.course} • {testimonial.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about our courses and workshops
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8">
              Join our next class and transform your passion into professional skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-rose-500 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Enroll in a Course</span>
              </Link>
              <a
                href="mailto:education@touchbydebby.com"
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Ask Questions</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Teaching;