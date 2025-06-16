import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, MapPin, Phone, Droplets, Shield, Ticket } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'iot-development-boards',
      icon: Cpu,
      title: 'IoT Development Boards',
      description: 'Designed for developers and hobbyists to create and prototype IoT applications quickly and efficiently.',
      features: [
        'Multiple connectivity options (Wi-Fi, Bluetooth, LoRa, etc.)',
        'User-friendly interface',
        'Extensive documentation and support'
      ],
      applications: [
        'Prototyping IoT devices',
        'Educational purposes',
        'Home automation projects'
      ],
      image: 'https://i.pinimg.com/736x/90/56/d3/9056d37cff0fcead7492b2a4fb4b01cf.jpg',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'gps-tracker',
      icon: MapPin,
      title: 'GPS Tracker',
      description: 'A reliable device that enables real-time tracking of vehicles, assets, or individuals.',
      features: [
        'Real-time location tracking',
        'Geo-fencing capabilities',
        'Long battery life'
      ],
      applications: [
        'Vehicle tracking',
        'Asset management',
        'Personal tracking'
      ],
      image: 'https://i.pinimg.com/736x/e3/a3/6f/e3a36f0cd78ae2c2a37807ec60e0d30f.jpg',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'payphone',
      icon: Phone,
      title: 'PayPhone',
      description: 'An innovative solution designed for schools and colleges, allowing students to make phone calls securely.',
      features: [
        'RFID access for authorized users',
        'Secure payment options',
        'User-friendly interface'
      ],
      applications: [
        'Campus communication',
        'Student services'
      ],
      image: 'https://www.renderhub.com/spiritswitchboard/payphone-standalone-unit/payphone-standalone-unit-01.jpg',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'aquasafe',
      icon: Droplets,
      title: 'AquaSafe',
      description: 'A state-of-the-art water quality monitoring system designed to ensure safe and clean water.',
      features: [
        'Real-time monitoring of water quality',
        'Alerts for parameter deviations',
        'Easy integration with existing systems'
      ],
      applications: [
        'Aquaculture',
        'Water resource management',
        'Environmental monitoring'
      ],
      image: 'https://t3.ftcdn.net/jpg/06/41/72/60/360_F_641726033_86u5pYTNCXQIdgOq80Xvy9IycAJgtsDs.jpg',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'rfid-tripod-turnstile',
      icon: Shield,
      title: 'RFID Tripod Turnstile',
      description: 'A secure and efficient access control solution for various applications.',
      features: [
        'RFID reader for easy access',
        'Durable construction',
        'User-friendly design'
      ],
      applications: [
        'Office buildings',
        'Events and venues',
        'Public transportation'
      ],
      image: 'https://www.elefinetech.com/wp-content/uploads/2021/12/tripod-turnstile-13.jpg',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 'token-kiosk',
      icon: Ticket,
      title: 'Token Kiosk',
      description: 'An innovative solution for managing queues and enhancing customer service.',
      features: [
        'User-friendly touchscreen interface',
        'Real-time queue management',
        'Customizable options'
      ],
      applications: [
        'Hospitals',
        'Banks',
        'Retail environments'
      ],
      image: 'https://i.pinimg.com/736x/d4/eb/c9/d4ebc9dfe6f7a0b69269a1979cc6378a.jpg',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Purple Techno Solutions, we specialize in innovative IoT products designed to meet the diverse needs of our customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20`}></div>
                <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Applications:</h4>
                    <ul className="space-y-2">
                      {product.applications.map((app, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to={`/products/${product.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Our Products Today!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            If you're interested in any of our products or need more information, please contact us or visit our Shop page.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;