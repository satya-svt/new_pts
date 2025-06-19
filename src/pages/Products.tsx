/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Cpu, MapPin, Phone, Droplets, Shield, Ticket,
  LockKeyhole, Wifi, Globe, GraduationCap, Building
} from 'lucide-react';

const productCategories = [
  { id: 'all', label: 'All Products', icon: Globe },
  { id: 'car-gps', label: 'Car GPS Tracker', icon: MapPin },
  { id: 'bike-gps', label: 'Bike GPS Tracker', icon: MapPin },
  { id: 'bus-tracking', label: 'Bus Tracking System', icon: MapPin },
  { id: 'truck-tracking', label: 'Truck Tracking System', icon: MapPin },
  { id: 'video-telematics', label: 'Video Telematics', icon: Shield },
  { id: 'asset-tracking', label: 'Asset Tracking', icon: Ticket },
  { id: 'fuel-monitoring', label: 'Fuel Monitoring', icon: Droplets },
  { id: 'e-lock', label: 'E-Lock with GPS Tracker', icon: LockKeyhole },
  { id: 'wifi-tracking', label: 'Wifi Based Tracking', icon: Wifi },
  { id: 'ev-tracking', label: 'Electric Vehicle', icon: Cpu },
];

const products = [
  {
    id: 'car-gps-1',
    title: '4G GPS Tracking Device G18',
    description: 'Compact GPS tracker for real-time car monitoring.',
    image: 'https://pictortelematics.com/public/images/1732280823_1727252776_G18%20pic.webp',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: '4G GPS Tracker with Bluetooth PS 10C',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1727252629_1727156282_ps10c-pictortelematics.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  
  {
    id: 'car-gps-2',
    title: '4G GPS Tracker With Analog Input PS10 B',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1727252001_ps10b1.jpg',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'Vehicle GPS Tracker G17S',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1727250369_dc03cea0-57b6-4235-bf83-0a02fae19da8.jpeg',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: '2G Car GPS Tracker PT 101B',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1727285694_1d78b1ff-3ff2-4aaa-ab61-8a8ef3fcca8b.jpeg',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'GPS Tracker For Vehicles GS 900C',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1727074519_GS%20900%20%282G%2B4G%29.jpeg',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: '4G Fleet Tracking Device PS10A',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1727252001_ps10b1.jpg',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'OBD Car GPS Tracker PS25',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1716383938_PS125%201.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'BLE Enabled 4G OBD2 Tracker TLD2 D',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1716293182_1.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'GPS Tracker with AC and Door Detection P09N',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1716282146_2.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'OBD2 GPS Vehicle Tracker T8608',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1716203326_1.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'PS06 GPS Tracker with SOS',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1715857385_1.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'P19S GPS Tracker with SOS and Voice Monitoring',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1715849325_1.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'P19S GPS Tracker with SOS and Voice Monitoring',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1715849325_1.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'car-gps-2',
    title: 'P19S GPS Tracker with SOS and Voice Monitoring',
    description: 'Advanced GPS with ignition cut-off feature.',
    image: 'https://pictortelematics.com/public/images/1715849325_1.png',
    icon: MapPin,
    category: 'car-gps',
    color: 'from-blue-400 to-cyan-500'
  },

  //bike
  {
    id: 'bike-gps-1',
    title: 'PT17H GPS Tracker',
    description: 'Real-time tracking system for bikes.',
    image: 'https://pictortelematics.com/public/images/1715844891_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715844891_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'SchoolBus Track Pro',
    description: 'Bus tracker with parent notification system.',
    image: 'https://static.toiimg.com/thumb/msid-100153876,imgsize-27822,width-400,resizemode-4/100153876.jpg',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 'bike-gps-2',
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    description: 'Waterproof, SIM-enabled GPS for bikes.',
    image: 'https://pictortelematics.com/public/images/1715778448_1.png',
    icon: MapPin,
    category: 'bike-gps',
    color: 'from-green-400 to-emerald-500'
  },

  //bus
  {
    id: 'bus-track-1',
    title: 'SchoolBus Track Pro',
    description: 'Bus tracker with parent notification system.',
    image: 'https://static.toiimg.com/thumb/msid-100153876,imgsize-27822,width-400,resizemode-4/100153876.jpg',
    icon: MapPin,
    category: 'bus-tracking',
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 'bus-track-2',
    title: 'CityBus Live Map',
    description: 'Live location sharing for city transport.',
    image: 'https://cdn.dribbble.com/users/2205412/screenshots/14534484/media/3420c0ac0df79dc61f5be72a24c7e803.jpg',
    icon: MapPin,
    category: 'bus-tracking',
    color: 'from-purple-400 to-pink-500'
  },

  //truck
  {
    id: 'truck-track-1',
    title: 'FleetPro GPS Heavy',
    description: 'Heavy-duty GPS for long-haul trucking.',
    image: 'https://tracktechsolutions.in/wp-content/uploads/2021/10/Truck-tracking-GPS.jpeg',
    icon: MapPin,
    category: 'truck-tracking',
    color: 'from-orange-400 to-red-500'
  },
  {
    id: 'truck-track-2',
    title: 'CargoMon Vehicle Tracker',
    description: 'Logistics-focused truck monitoring system.',
    image: 'https://toppicks.co.in/wp-content/uploads/2022/12/61dWyCz0-gL.jpg',
    icon: MapPin,
    category: 'truck-tracking',
    color: 'from-orange-400 to-red-500'
  },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-gray-300 text-lg">Browse by category or explore all 110+ products.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="bg-white/10 p-6 rounded-xl border border-white/10 space-y-4 backdrop-blur max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-white">Product Categories</h2>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium w-full text-left transition ${
                      selectedCategory === cat.id
                        ? 'bg-purple-500/30 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                    }`}
                  >
                    <cat.icon className="w-5 h-5 text-cyan-400" />
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.length === 0 ? (
              <p className="text-gray-300 text-lg col-span-full">No products found in this category.</p>
            ) : (
              filteredProducts.map((product, index) => (
                <Link
                to={`/products/${product.id}`}
                key={index}
                className="group bg-white/10 hover:border-cyan-400 border border-white/10 rounded-2xl overflow-hidden transition"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-80 overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20`} />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                  <p className="text-gray-400 text-xs">{product.description}</p>
                </div>
              </Link>
              
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
