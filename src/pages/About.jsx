import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Star, Palette, Calendar, MapPin, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "Certified Professional", value: "5+ Years" },
    { icon: <Users className="w-6 h-6" />, title: "Happy Clients", value: "500+" },
    { icon: <Star className="w-6 h-6" />, title: "5-Star Reviews", value: "98%" },
    { icon: <Palette className="w-6 h-6" />, title: "Makeup Looks", value: "1000+" }
  ];

  const skills = [
    { name: "Bridal Makeup", level: 95 },
    { name: "Editorial & Fashion", level: 90 },
    { name: "Special Effects", level: 85 },
    { name: "Color Theory", level: 98 },
    { name: "Skin Care", level: 92 },
    { name: "Teaching & Training", level: 88 }
  ];

  const certifications = [
    { name: "Advanced Makeup Artistry", institution: "London School of Beauty", year: "2020" },
    { name: "Bridal Specialist Certification", institution: "International Makeup Association", year: "2019" },
    { name: "SFX Makeup Workshop", institution: "Cinema Makeup School", year: "2021" },
    { name: "Skincare Specialist", institution: "Dermal Institute", year: "2022" }
  ];

  const timeline = [
    { year: "2018", event: "Started professional makeup career", description: "Began working with local photographers and models" },
    { year: "2019", event: "Launched TouchByDebby", description: "Established my own makeup artistry business" },
    { year: "2020", event: "Bridal Specialist Certification", description: "Became certified in bridal makeup techniques" },
    { year: "2021", event: "First international workshop", description: "Conducted makeup workshops in Paris and Milan" },
    { year: "2022", event: "Celebrity client collaborations", description: "Worked with several TV personalities and influencers" },
    { year: "2023", event: "Launched online courses", description: "Began teaching makeup artistry online" }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">Debby</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in the beauty industry, I'm passionate about helping you look and feel your absolute best. 
              My journey began with a love for artistry and has evolved into a dedication to enhancing natural beauty.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I specialize in creating stunning makeup looks for weddings, special events, photoshoots, and everyday glam. 
              My approach combines technical expertise with an artistic eye to bring out your unique beauty.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
                <Heart className="w-4 h-4 text-rose-500" />
                <span className="text-gray-700 dark:text-gray-300">Certified Professional</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
                <Clock className="w-4 h-4 text-pink-500" />
                <span className="text-gray-700 dark:text-gray-300">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span className="text-gray-700 dark:text-gray-300">Based in New York</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/booking"
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book a Session
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-800 dark:to-pink-800 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                alt="Professional Makeup Artist Debby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Quote */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl max-w-xs"
            >
              <div className="flex items-start space-x-2">
                <Sparkles className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                  "Makeup is not a mask that covers your beauty; it's a weapon that helps you express who you are from the inside."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey in Numbers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The milestones that mark my passion and dedication to the art of makeup
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {achievement.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a passionate beginner to an established makeup artist
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  <div className="md:w-1/4 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full text-white font-bold text-xl">
                      {item.year}
                    </div>
                  </div>
                  <div className="md:w-3/4 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-400 to-pink-400 top-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I believe that makeup is not about changing who you are, but about enhancing your natural beauty 
                and helping you feel confident and radiant. Every face tells a unique story, and my role is to 
                help that story shine through.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Whether it's your wedding day, a special photoshoot, or just a day when you want to feel extra 
                beautiful, I'm here to create a look that's authentically you.
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-rose-500" />
                  Education & Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">{cert.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.institution}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond Makeup
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Getting to know the person behind the brushes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Passion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beyond makeup, I'm passionate about photography, travel, and exploring different cultures. These interests greatly influence my artistic perspective.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in collaborative beauty. Your input is invaluable in creating a look that truly represents you and makes you feel confident.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">My Commitment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm committed to continuous learning, staying updated with the latest techniques and trends to provide you with the best possible service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Beauty Journey?
            </h2>
            <p className="text-xl mb-8">
              Let's create something beautiful together. Book a consultation today.
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
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;