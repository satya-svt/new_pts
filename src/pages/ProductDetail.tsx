import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, MapPin, Phone, Droplets, Shield, Ticket } from 'lucide-react';

const productData = {
  'iot-development-boards': {
    title: 'IoT Development Boards',
    description: 'Powerful boards for fast IoT prototyping and development. Our IoT Development Boards are designed for developers and hobbyists to create and prototype IoT applications quickly and efficiently.',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Cpu,
    color: 'from-blue-400 to-cyan-500',
    features: [
      'Multiple connectivity options (Wi-Fi, Bluetooth, LoRa, etc.)',
      'User-friendly interface',
      'Extensive documentation and support',
      'Developer-friendly design',
      'Extensive SDKs & documentation',
      'Low power consumption modes'
    ],
    applications: [
      'Prototyping IoT devices',
      'Educational purposes',
      'Home automation projects',
      'Industrial IoT solutions',
      'Smart agriculture systems'
    ],
    specifications: [
      'Processor: ARM Cortex-M4',
      'Memory: 512KB Flash, 128KB RAM',
      'Connectivity: Wi-Fi 802.11 b/g/n, Bluetooth 5.0',
      'GPIO Pins: 30+ configurable pins',
      'Power: 3.3V operation, USB powered'
    ]
  },
  'gps-tracker': {
    title: 'GPS Tracker',
    description: 'Reliable GPS device for tracking vehicles, assets, or individuals. Our GPS Tracker provides accurate location data and can be easily integrated into your existing systems.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: MapPin,
    color: 'from-green-400 to-emerald-500',
    features: [
      'Real-time location tracking',
      'Geo-fencing capabilities',
      'Long battery life',
      'Waterproof design',
      'Mobile app integration'
    ],
    applications: [
      'Vehicle tracking',
      'Asset management',
      'Personal tracking',
      'Fleet Management',
      'Safety monitoring'
    ],
    specifications: [
      'GPS Accuracy: ±3 meters',
      'Battery Life: Up to 30 days',
      'Connectivity: 4G LTE, GPS, GLONASS',
      'Operating Temperature: -20°C to +70°C',
      'Dimensions: 95 x 55 x 20mm'
    ]
  },
  'payphone': {
    title: 'PayPhone',
    description: 'An innovative solution designed for schools and colleges, allowing students to make phone calls securely and conveniently. This device integrates RFID technology for easy usage and access control.',
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Phone,
    color: 'from-purple-400 to-pink-500',
    features: [
      'RFID access for authorized users',
      'Secure payment options',
      'User-friendly interface',
      'Call logging and monitoring',
      'Emergency call features'
    ],
    applications: [
      'Campus communication',
      'Student services',
      'Emergency communications',
      'Controlled access environments'
    ],
    specifications: [
      'Display: 7-inch touchscreen',
      'Payment: RFID cards, mobile payments',
      'Audio: HD voice quality',
      'Network: VoIP, traditional telephony',
      'Security: Encrypted communications'
    ]
  },
  'aquasafe': {
    title: 'AquaSafe',
    description: 'A state-of-the-art water quality monitoring system designed to ensure safe and clean water in aquaculture and other water bodies. This system provides real-time data on water parameters.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Droplets,
    color: 'from-cyan-400 to-blue-500',
    features: [
      'Real-time monitoring of water quality',
      'Alerts for parameter deviations',
      'Easy integration with existing systems',
      'Multi-parameter sensing',
      'Cloud data storage'
    ],
    applications: [
      'Aquaculture',
      'Water resource management',
      'Environmental monitoring',
      'Swimming pool maintenance',
      'Industrial water treatment'
    ],
    specifications: [
      'Parameters: pH, DO, Temperature, Turbidity',
      'Accuracy: ±0.1 pH, ±0.2mg/L DO',
      'Communication: LoRaWAN, Wi-Fi',
      'Power: Solar panel + battery backup',
      'Depth Rating: Up to 50 meters'
    ]
  },
  'rfid-tripod-turnstile': {
    title: 'RFID Tripod Turnstile',
    description: 'A secure and efficient access control solution for various applications. It allows authorized users to gain entry while preventing unauthorized access.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Shield,
    color: 'from-orange-400 to-red-500',
    features: [
      'RFID reader for easy access',
      'Durable construction',
      'User-friendly design',
      'Anti-tailgating detection',
      'Integration with security systems'
    ],
    applications: [
      'Office buildings',
      'Events and venues',
      'Public transportation',
      'Secure facilities',
      'Educational institutions'
    ],
    specifications: [
      'Material: Stainless steel 304',
      'RFID Frequency: 13.56MHz',
      'Throughput: 25-30 people/minute',
      'Power: AC 110V/220V',
      'Dimensions: 1200 x 280 x 1000mm'
    ]
  },
  'token-kiosk': {
    title: 'Token Kiosk',
    description: 'An innovative solution for managing queues and enhancing customer service. It allows users to take tokens and monitor their turn in various settings.',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Ticket,
    color: 'from-indigo-400 to-purple-500',
    features: [
      'User-friendly touchscreen interface',
      'Real-time queue management',
      'Customizable options',
      'Multi-language support',
      'SMS/Email notifications'
    ],
    applications: [
      'Hospitals',
      'Banks',
      'Retail environments',
      'Government offices',
      'Service centers'
    ],
    specifications: [
      'Display: 21.5-inch touchscreen',
      'Printer: Thermal ticket printer',
      'Connectivity: Wi-Fi, Ethernet',
      'OS: Android-based system',
      'Dimensions: 1800 x 400 x 350mm'
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-300 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Back to Products
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = product.icon;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-white/20 to-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Products</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Product Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
            <IconComponent className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{product.title}</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">{product.description}</p>
        </motion.div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Features */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-gray-300 flex items-start"
                  >
                    <span className={`w-3 h-3 bg-gradient-to-r ${product.color} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Applications</h3>
              <ul className="space-y-3">
                {product.applications.map((application, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {application}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-4 border border-white/10"
              >
                <span className="text-gray-300">{spec}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Interested in This Product?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn more about pricing, customization options, and how this product can meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${product.color} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300`}
              >
                Contact Us
              </motion.button>
            </Link>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-white/20 to-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
              >
                Visit Shop
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;