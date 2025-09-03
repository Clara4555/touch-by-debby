import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MapPin, Heart, CheckCircle, X, CreditCard, Info, AlertCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    duration: '1 hour',
    location: 'studio',
    address: '',
    message: '',
    emergencyContact: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Your Formspree form ID
  const FORMSPREE_FORM_ID = 'xpwjowzj';

  const services = [
    { 
      name: 'Bridal Makeup', 
      price: '$300+', 
      duration: '3-4 hours',
      description: 'Complete bridal package with trial session'
    },
    { 
      name: 'Home Service', 
      price: '$150+', 
      duration: '2-3 hours',
      description: 'Professional makeup at your location'
    },
    { 
      name: 'Studio Service', 
      price: '$100+', 
      duration: '1-2 hours',
      description: 'Makeup application at our studio'
    },
    { 
      name: 'Event Glam', 
      price: '$120+', 
      duration: '1.5-2 hours',
      description: 'Special occasion makeup'
    },
    { 
      name: 'Photoshoot Makeup', 
      price: '$200+', 
      duration: '2-4 hours',
      description: 'Professional makeup for photography'
    },
    { 
      name: 'Group Booking', 
      price: 'Custom Quote', 
      duration: 'Varies',
      description: 'Makeup for multiple people'
    },
    { 
      name: 'Makeup Lesson', 
      price: '$150+', 
      duration: '2 hours',
      description: 'One-on-one makeup instruction'
    },
    { 
      name: 'Special Occasion', 
      price: '$90+', 
      duration: '1 hour',
      description: 'Quick glam for special events'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const durations = [
    '1 hour', '1.5 hours', '2 hours', '2.5 hours', 
    '3 hours', '3.5 hours', '4 hours', '4+ hours'
  ];

  const locations = [
    { value: 'studio', label: 'Studio Appointment' },
    { value: 'home', label: 'Home Service' },
    { value: 'venue', label: 'Event Venue' }
  ];

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.service) errors.service = 'Please select a service';
    if (!formData.date) errors.date = 'Please select a date';
    if (!formData.time) errors.time = 'Please select a time';
    if (formData.location === 'home' && !formData.address.trim()) {
      errors.address = 'Address is required for home service';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Since we're using Formspree, we'll let the form submit naturally
    // but we'll show our confirmation modal first
    setTimeout(() => {
      setShowConfirmation(true);
      setIsSubmitting(false);
      
      // Programmatically submit the form after a brief delay
      setTimeout(() => {
        document.getElementById('booking-form').submit();
      }, 2000);
    }, 1500);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        setFormErrors({
          name: !formData.name ? 'Name is required' : '',
          email: !formData.email ? 'Email is required' : '',
          phone: !formData.phone ? 'Phone number is required' : ''
        });
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const selectedService = services.find(s => s.name === formData.service);

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
            Book Your <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Ready for your transformation? Fill out the form below and we'll get back to you within 24 hours 
            to confirm your appointment details and discuss your perfect look.
          </p>
          
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep >= step
                      ? 'bg-rose-500 border-rose-500 text-white'
                      : 'border-gray-300 dark:border-gray-600 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-rose-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-rose-500 font-semibold">
              {currentStep === 1 && 'Contact Information'}
              {currentStep === 2 && 'Appointment Details'}
              {currentStep === 3 && 'Review & Confirm'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl"
        >
          <form 
            id="booking-form"
            action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Formspree Hidden Fields */}
            <input type="hidden" name="_subject" value="New Booking Request - TouchByDebby" />
            <input type="hidden" name="_replyto" value={formData.email} />
            <input type="hidden" name="_format" value="plain" />
            <input type="text" name="_gotcha" style={{display: 'none'}} />

            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                        formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Mail className="w-4 h-4" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Phone className="w-4 h-4" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Phone className="w-4 h-4" />
                      <span>Emergency Contact</span>
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300"
                      placeholder="Emergency contact number (optional)"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Next: Appointment Details</span>
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Appointment Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Appointment Details
                </h2>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                    <Heart className="w-4 h-4" />
                    <span>Service Type *</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                      formErrors.service ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name} - {service.price} ({service.duration})
                      </option>
                    ))}
                  </select>
                  {formErrors.service && (
                    <p className="text-red-500 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {formErrors.service}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                        formErrors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Clock className="w-4 h-4" />
                      <span>Preferred Time *</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                        formErrors.time ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                    {formErrors.time && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.time}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <Clock className="w-4 h-4" />
                      <span>Estimated Duration</span>
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300"
                    >
                      {durations.map((duration, index) => (
                        <option key={index} value={duration}>{duration}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>Location Type *</span>
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300"
                    >
                      {locations.map((location, index) => (
                        <option key={index} value={location.value}>{location.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.location !== 'studio' && (
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>Full Address *</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border ${
                        formErrors.address ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300`}
                      placeholder="Street address, city, state, ZIP code"
                    />
                    {formErrors.address && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.address}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Next: Review & Confirm</span>
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review & Confirm */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Review Your Booking
                </h2>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Appointment Summary
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Name</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Email</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Phone</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Service</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Date & Time</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {formData.date} at {formData.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Duration</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formData.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {formData.location === 'studio' ? 'Studio Appointment' : 
                         formData.location === 'home' ? 'Home Service' : 'Event Venue'}
                      </p>
                    </div>
                    {formData.address && (
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Address</p>
                        <p className="font-medium text-gray-900 dark:text-white">{formData.address}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision, special requests, skin concerns, or any questions you have..."
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    Back
                  </button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" />
                        <span>Confirm Booking</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
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
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 max-w-md w-full mx-4"
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
                  Appointment Request Sent!
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We've received your booking request and will contact you within 24 hours to confirm your appointment details and discuss your perfect look.
                </p>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Next Steps:</strong> Check your email for a confirmation message and keep your phone handy for our call.
                  </p>
                </div>
                
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Got It!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Information Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <Calendar className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Available 7 days a week with morning and evening appointments to fit your busy schedule.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <Clock className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Quick Response
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We respond to all booking requests within 24 hours to confirm your appointment details.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-6 border border-gray-200 dark:border-gray-600 text-center"
            >
              <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every appointment includes a consultation to ensure your look is tailored to your unique style.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Guidelines */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Booking Guidelines & Policies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Important information to ensure a smooth booking experience
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Confirmation call within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Pre-appointment consultation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Professional makeup application</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Touch-up guidance and tips</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Important Policies
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Book at least 48 hours in advance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">24-hour cancellation policy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">50% deposit required for bridal bookings</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Travel fee applies for locations 20+ miles away</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Late arrivals may result in shortened service</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Payment Information
              </h3>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <CreditCard className="w-5 h-5" />
                <span>We accept cash, credit cards, and digital payments. Payment is due at time of service.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prefer to Book Directly?
            </h2>
            <p className="text-xl mb-8">
              Contact us directly for immediate assistance with your booking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="px-8 py-4 bg-white text-rose-500 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us: (555) 123-4567</span>
              </a>
              <a
                href="mailto:bookings@touchbydebby.com"
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;