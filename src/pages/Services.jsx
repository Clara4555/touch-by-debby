import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Clock, 
  Camera, 
  Heart, 
  Users, 
  Sparkles, 
  Crown, 
  Palette, 
  Check,
  Star,
  Calendar,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Bridal Makeup",
      description: "Your perfect wedding day look with trial and day-of service",
      fullDescription: "Our comprehensive bridal package ensures you look absolutely radiant on your special day. We begin with a consultation to understand your vision, followed by a trial session to perfect your look. On your wedding day, we arrive early to create your dream makeup that lasts through tears, hugs, and dancing.",
      features: ["Trial session included", "Wedding day application", "Long-lasting formula", "Emergency touch-up kit", "Up to 5 hours of coverage", "Complimentary lip touch-up product"],
      price: "From $300",
      duration: "3-4 hours",
      popular: true,
      gradient: "from-rose-400 to-pink-400"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Service",
      description: "Professional makeup application in the comfort of your own home",
      fullDescription: "Enjoy the convenience of professional makeup services without leaving your home. Perfect for busy schedules, special occasions, or when you simply want to relax in your own space. We bring our entire professional kit and setup to you.",
      features: ["Travel to your location", "Full makeup kit included", "2-3 hours session", "Touch-up guidance", "Setup and cleanup included", "Flexible scheduling"],
      price: "From $150",
      duration: "2-3 hours",
      popular: false,
      gradient: "from-pink-400 to-rose-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Studio Service",
      description: "Quick and professional makeup at my beautifully equipped studio",
      fullDescription: "Visit our professionally designed studio with perfect lighting, comfortable seating, and a wide range of premium products. Ideal for those who want the complete salon experience with personalized attention.",
      features: ["Studio location", "1-2 hours session", "Professional lighting", "Immediate availability", "Product recommendations", "Complimentary beverages"],
      price: "From $100",
      duration: "1-2 hours",
      popular: false,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photoshoot Makeup",
      description: "Editorial and fashion makeup for photography and filming",
      fullDescription: "Specialized makeup designed to look flawless under professional lighting and high-resolution cameras. We understand how makeup translates on camera and work closely with photographers to achieve the desired look.",
      features: ["Camera-ready looks", "HD compatible products", "Touch-ups included", "Collaboration with photographers", "On-location service", "Multiple look changes"],
      price: "From $200",
      duration: "2-4 hours",
      popular: false,
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Event Glam",
      description: "Stunning makeup for special events, parties, and celebrations",
      fullDescription: "Whether it's a gala, prom, anniversary, or any special occasion, we'll create a look that makes you feel confident and beautiful. We focus on creating Instagram-worthy makeup that lasts all night.",
      features: ["Event-appropriate styling", "Professional application", "Photo-ready finish", "Confidence boost", "Evening touch-up tips", "Complimentary false lashes"],
      price: "From $120",
      duration: "1.5-2 hours",
      popular: true,
      gradient: "from-pink-400 to-purple-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Bookings",
      description: "Makeup services for multiple people - perfect for bridal parties",
      fullDescription: "Perfect for weddings, proms, or any event where multiple people need professional makeup. We offer coordinated scheduling and consistent quality across all applications, ensuring everyone in your group looks their best.",
      features: ["Group discounts", "Coordinated scheduling", "Consistent quality", "Special packages", "Bridal party pricing", "On-location service available"],
      price: "Custom Quote",
      duration: "Varies",
      popular: false,
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Makeup Lessons",
      description: "Learn professional techniques for everyday application",
      fullDescription: "One-on-one or small group sessions where we teach you how to apply makeup like a professional. Perfect for beginners or those looking to refine their skills. You'll learn techniques tailored to your features and preferences.",
      features: ["Personalized instruction", "Product recommendations", "Take-home techniques", "Skincare advice", "Customized look book", "Follow-up support"],
      price: "From $150",
      duration: "2 hours",
      popular: false,
      gradient: "from-rose-400 to-amber-400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Special Occasion",
      description: "Makeup for birthdays, anniversaries, dates, and more",
      fullDescription: "For those times when you want to look extra special without the full glam treatment. We create natural yet enhanced looks that highlight your best features while still looking like you.",
      features: ["Natural enhancement", "Quick application", "Skin-first approach", "Customized to event", "Product advice", "Long-lasting results"],
      price: "From $90",
      duration: "1 hour",
      popular: true,
      gradient: "from-amber-400 to-rose-400"
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Consultation", 
      desc: "We discuss your vision, preferences, and any specific needs", 
      details: "This can be done via phone, video call, or in person. We'll talk about your style, the occasion, and your desired look."
    },
    { 
      step: "02", 
      title: "Preparation", 
      desc: "Skin prep and color matching for flawless results", 
      details: "We analyze your skin type and tone to select the perfect products and shades for your unique features."
    },
    { 
      step: "03", 
      title: "Application", 
      desc: "Professional makeup application with precision and care", 
      details: "Using techniques perfected over years of experience, we create your desired look with attention to every detail."
    },
    { 
      step: "04", 
      title: "Final Touch", 
      desc: "Perfect finishing, photos, and maintenance tips", 
      details: "We ensure everything is perfect, take photos for your reference, and provide tips for maintaining your look."
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my appointment?",
      answer: "For weddings, we recommend booking 6-12 months in advance. For other events, 2-4 weeks is usually sufficient, but we can sometimes accommodate last-minute bookings."
    },
    {
      question: "What products do you use?",
      answer: "We use high-end, professional-grade products from brands like Charlotte Tilbury, MAC, NARS, Fenty Beauty, and Hourglass. All products are sanitized between clients."
    },
    {
      question: "Do you travel for appointments?",
      answer: "Yes! We offer mobile services throughout the area. Travel fees may apply for locations beyond 20 miles from our studio."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 48 hours notice for cancellations. For weddings, a non-refundable deposit is required to secure your date."
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
            Our <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            From intimate home sessions to glamorous event makeup, we offer comprehensive beauty services 
            tailored to your unique needs and style preferences.
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
              to="/portfolio"
              className="px-6 py-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 flex items-center space-x-2"
            >
              <Camera className="w-5 h-5" />
              <span>View Portfolio</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Makeup Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Each service is tailored to your unique features and preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-white dark:bg-gray-800 rounded-3xl p-6 border transition-all duration-500 hover:shadow-2xl h-full ${
                service.popular 
                  ? 'border-rose-300/50 shadow-lg' 
                  : 'border-gray-100 dark:border-gray-700 hover:border-rose-200/50'
              }`}>
                {service.popular && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-rose-400 to-pink-400 text-white text-sm rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {service.icon}
                  </div>
                  <button
                    onClick={() => toggleService(index)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {expandedService === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </motion.div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                      {service.duration}
                    </span>
                  </div>
                  <Link
                    to="/booking"
                    className="px-5 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Book Now
                  </Link>
                </div>
                
                <ul className="space-y-2">
                  {service.features.slice(0, expandedService === index ? service.features.length : 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A seamless journey from consultation to your perfect look
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {process.desc}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {process.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
              Everything you need to know about our services
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Have More Questions?
            </h2>
            <p className="text-xl mb-8">
              We're here to help you choose the perfect service for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+15551234567"
                className="px-6 py-3 bg-white text-rose-500 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a
                href="mailto:hello@touchbydebby.com"
                className="px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Choose your preferred service and let's create something beautiful together.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 space-x-2"
            >
              <Palette className="w-5 h-5" />
              <span>Book Your Appointment</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;