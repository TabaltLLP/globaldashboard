import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Users, Briefcase, Home, Calendar, Phone, Mail, Shield } from 'lucide-react';
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';

const LondonAgents = () => {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Support',
      description: 'Professional assistance for all your business needs including scheduling, research, and administrative tasks.',
    },
    {
      icon: Home,
      title: 'Personal Assistance',
      description: 'Handle personal errands, home management, and daily tasks so you can focus on what matters.',
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Save valuable time by delegating routine tasks to experienced personal assistants.',
    },
    {
      icon: Shield,
      title: 'Reliable & Trustworthy',
      description: 'All our agents are thoroughly vetted and trained to provide exceptional service.',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Available when you need them, with flexible scheduling to match your lifestyle.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Work with dedicated personal assistants who understand your preferences and needs.',
    },
  ];

  const services = [
    'Email management and correspondence',
    'Calendar and appointment scheduling',
    'Travel planning and bookings',
    'Research and data collection',
    'Document preparation and organization',
    'Personal shopping and errands',
    'Home management tasks',
    'Event planning and coordination',
    'Customer service support',
    'Social media management',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
              >
                London Agents
                <br />
                <span className="text-blue-600">Save your time & live more</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
              >
                Hire a Personal Assisting Agent for work and home. Our professional London-based agents are ready to help you manage both business and personal tasks, giving you the freedom to focus on what truly matters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/customer/signup"
                  className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Professional personal assistant"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose London Agents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional personal assistance tailored to your needs, helping you achieve better work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Can Help With
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our London Agents are equipped to handle a wide range of tasks, from business administration to personal errands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                  alt="Organized workspace"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with a London Agent is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Create your account and tell us about your needs and preferences.',
              },
              {
                step: '2',
                title: 'Get Matched',
                description: 'We match you with a dedicated London Agent who understands your requirements.',
              },
              {
                step: '3',
                title: 'Start Delegating',
                description: 'Begin delegating tasks and enjoy more time for what matters most.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to save time and live more?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Hire a Personal Assisting Agent today and experience the freedom of delegating both business and personal tasks.
            </p>
            <Link
              to="/customer/signup"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LondonAgents;

