import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Send, 
  CheckCircle, X, Heart, Star, Award, Users, Calendar, Sparkles 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceType: '',
    eventDate: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Call or text anytime",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "hello@touchbydebby.com",
      subtitle: "Response within 24 hours",
      link: "mailto:hello@touchbydebby.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "New York, NY",
      subtitle: "Travel services available",
      link: "#location"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Mon-Sun: 8AM-8PM",
      subtitle: "Flexible scheduling",
      link: "#hours"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#", color: "hover:bg-pink-500" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#", color: "hover:bg-blue-500" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#", color: "hover:bg-blue-400" }
  ];

  const serviceTypes = [
    "Bridal Makeup",
    "Special Occasion",
    "Editorial/Photoshoot",
    "Lessons/Tutorials",
    "Group Booking",
    "Other"
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Bride",
      content: "Debby did an incredible job on my wedding day! She listened to exactly what I wanted and made me feel so beautiful and confident.",
      rating: 5
    },
    {
      name: "Michaela T.",
      role: "Event Planner",
      content: "I've worked with many makeup artists, but Debby's attention to detail and professionalism stands out. My clients are always thrilled!",
      rating: 5
    },
    {
      name: "Jessica L.",
      role: "Model",
      content: "Debby's techniques are flawless. She knows exactly how to enhance features for photography. Absolutely amazing to work with!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How far in advance should I book?",
      answer: "For weddings, I recommend booking 3-6 months in advance. For other events, 2-4 weeks is usually sufficient, though I can sometimes accommodate last-minute requests when available."
    },
    {
      question: "Do you travel for appointments?",
      answer: "Yes! I offer mobile services within a 30-mile radius of NYC. Travel fees may apply for locations beyond 20 miles. For destinations outside this area, please contact me for a custom quote."
    },
    {
      question: "What products do you use?",
      answer: "I use only professional, high-quality, and cruelty-free makeup brands including MAC, Urban Decay, Charlotte Tilbury, Fenty Beauty, NARS, and more. I also carry products for all skin types and tones."
    },
    {
      question: "Do you offer trials?",
      answer: "Yes, I highly recommend trials for bridal clients. This allows us to perfect your look before the big day. Trials typically last 1.5-2 hours and can be scheduled at my studio or your location."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I understand that plans change. For cancellations, I require 48 hours notice for regular appointments and 2 weeks for weddings. Deposits are non-refundable but can be applied to future bookings within 6 months."
    },
    {
      question: "Can you work with sensitive skin?",
      answer: "Absolutely. I carry hypoallergenic products and can perform patch tests prior to your appointment if you have specific skin concerns or allergies. Just let me know in advance."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        serviceType: '',
        eventDate: ''
      });
    }, 2000);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Have questions about my services or want to discuss your makeup needs? 
            I'd love to hear from you and help bring your beauty vision to life. Let's create something beautiful together!
          </p>
          
          <motion.div 
            className="flex justify-center items-center space-x-2 text-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Voted Best Makeup Artist NYC 2023</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:shadow-xl text-center group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <a 
                href={info.link} 
                className="text-gray-700 dark:text-gray-300 font-medium mb-1 hover:text-pink-500 transition-colors duration-300 block"
              >
                {info.details}
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {info.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-3xl p-8 border border-pink-200/20 backdrop-blur-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Weddings Covered</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-700 dark:text-gray-300 font-medium">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-lg rounded-xl border border-white/30 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your needs, questions, or how I can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm always excited to meet new clients and discuss how we can create 
                something beautiful together. Whether you have questions about services, 
                pricing, or just want to chat about makeup, don't hesitate to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a 
                  href="mailto:hello@touchbydebby.com"
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@touchbydebby.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>New York, NY</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.color} hover:text-white transform hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Client Love
              </h3>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/50 dark:bg-gray-700/50 p-4 rounded-xl"
                  >
                    <div className="flex mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about my services, booking process, and policies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-white/20 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-5 h-5 text-gray-500" />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 dark:text-gray-300 mt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setShowConfirmation(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowConfirmation(false)}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Message Sent Successfully!
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for reaching out! I'll get back to you within 24 hours to discuss your needs.
                </p>
                
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Great!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-600/5 via-purple-600/5 to-indigo-600/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Book Your Session?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Don't wait to look and feel your best. Let's schedule your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;