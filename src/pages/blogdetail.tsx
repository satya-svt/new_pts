import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu,
  MapPin,
  Phone,
  Droplets,
  Shield,
  Ticket,
  ArrowLeft,
} from 'lucide-react';

const productData = {
  'iot-development-boards': {
    title: 'IoT Development Boards',
    icon: Cpu,
    description:
      'Designed for developers and hobbyists to create and prototype IoT applications quickly and efficiently.',
    features: [
      'Multiple connectivity options (Wi-Fi, Bluetooth, LoRa)',
      'Plug-and-play sensor compatibility',
      'Compact and durable design',
    ],
  },
  'gps-tracker': {
    title: 'GPS Tracker',
    icon: MapPin,
    description:
      'Real-time tracking device with high accuracy, ideal for fleet management, personal use, and logistics.',
    features: [
      'Live tracking and location history',
      'Geo-fencing and alerts',
      'Mobile and web app integration',
    ],
  },
  'payphone': {
    title: 'PayPhone',
    icon: Phone,
    description:
      'A secure and user-friendly device enabling contactless payments through RFID and QR code scanning.',
    features: [
      'Supports UPI, RFID, and QR payments',
      'Real-time transaction dashboard',
      'Rugged and weatherproof design',
    ],
  },
  'aquasafe': {
    title: 'AquaSafe',
    icon: Droplets,
    description:
      'Smart water monitoring system for homes and industries to track usage and detect leaks.',
    features: [
      'Real-time consumption tracking',
      'Leak detection and alerts',
      'Compatible with smart assistants',
    ],
  },
  'rfid-tripod-turnstile': {
    title: 'RFID Tripod Turnstile',
    icon: Shield,
    description:
      'Secure access control with RFID authentication, perfect for office buildings and campuses.',
    features: [
      'RFID card-based access',
      'Durable stainless-steel body',
      'Access logs and reporting',
    ],
  },
  'token-kiosk': {
    title: 'Token Kiosk',
    icon: Ticket,
    description:
      'Automated token dispensing system for organized queue management at service counters.',
    features: [
      'Customizable token types',
      'Real-time display and announcements',
      'Web-based control panel',
    ],
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="p-4 text-center text-red-600 font-semibold">
        Product not found!
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-4xl mx-auto"
    >
      <Link to="/products" className="flex items-center mb-4 text-blue-600 hover:underline">
        <ArrowLeft className="mr-2" size={18} /> Back to Products
      </Link>

      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6">
        <div className="flex items-center mb-4 space-x-4">
          <Icon className="w-10 h-10 text-indigo-500" />
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

        <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          {product.features.map((feature, index) => (
            <li key={index} className="pl-1">{feature}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
