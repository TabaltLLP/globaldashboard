import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Shield, Headphones, BarChart3, Clock, CheckCircle } from 'lucide-react';
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'London Agents',
      description: 'Hire a Personal Assisting Agent for work and home. Save your time & live more.',
      path: '/services/london-agents',
      color: 'blue',
    },
    {
      icon: Headphones,
      title: 'Customer Service',
      description: 'Round-the-clock customer service across multiple time zones. Never miss a customer interaction.',
      path: '/services/customer-service',
      color: 'green',
    },
    {
      icon: Briefcase,
      title: 'Back Office Support',
      description: 'Comprehensive back office operations to streamline your business processes.',
      path: '/services/back-office',
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Protect your platform and users with dedicated trust and safety teams.',
      path: '/services/trust-safety',
      color: 'red',
    },
    {
      icon: BarChart3,
      title: 'Quality Assurance',
      description: 'Real-time analytics and insights to optimize your customer experience.',
      path: '/services/quality-assurance',
      color: 'orange',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support services to keep your business running smoothly.',
      path: '/services/support',
      color: 'indigo',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      red: 'bg-red-100 text-red-600 hover:bg-red-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
      indigo: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to help your business scale efficiently and maintain quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <Link to={service.path} className="block">
                    <div className={`w-16 h-16 ${getColorClasses(service.color)} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
              Ready to get started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Choose a service that fits your needs and scale your business with confidence.
            </p>
            <Link
              to="/customer/signup"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Get Started
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

