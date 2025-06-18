/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Lightbulb, Code, Cpu, Shield, Users, Award, Globe, Briefcase, GraduationCap } from 'lucide-react';

const App = () => {
  const teamMembers = [
    {
      name: 'KHADAR BABA SHAIK',
      role: 'CEO & Founder',
      description: 'Visionary leader driving innovation in IoT and embedded systems',
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      name: 'MOBINA MD',
      role: 'Managing Director',
      description: 'Strategic operations and business development expert',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      name: 'ABDUL SHAIK',
      role: 'Full Stack Developer',
      description: 'Expert in modern web technologies and system architecture',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      name: 'BAVIRISETTI RESHAMA',
      role: 'PCB Design',
      description: 'Specialized in circuit design and hardware optimization',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      name: 'S RAMAKRISHNA',
      role: 'Backend Developer',
      description: 'Backend systems and database architecture specialist',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      name: 'N MANIKANTA',
      role: 'Full Stack Developer Python Developer',
      description: 'Python development and machine learning integration',
      gradient: 'from-teal-400 to-blue-500'
    },
    {
      name: 'P SUDHKAR',
      role: 'IOT Developer',
      description: 'Internet of Things solutions and device connectivity',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'A REVANTH',
      role: 'AWS Developer & Manager',
      description: 'Cloud infrastructure and DevOps automation expert',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'KHADAR BABA SHAIK',
      role: 'Cloud Developer',
      description: 'Cloud architecture and scalable solutions development',
      gradient: 'from-cyan-400 to-blue-500'
    }
  ];

  const clients = [
    'https://files.oaiusercontent.com/file-SZNuY6XNoyAnLsKbJaaLLS?se=2025-06-17T10%3A48%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcf196e19-50f7-4bcf-b32c-bfc7bb1d4883.png&sig=C3G2O2kLCoqzpjbx45BWVfNpNghKKyLEm47ToPf1LGw%3D',
    'https://files08.oaiusercontent.com/file-38bayaCcoau35sY6ntcPy5?se=2025-06-17T11%3A15%3A22Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc8895dde-2b75-4e8f-b73b-8e37ef515062.png&sig=GmOi/%2BLjjT4YvIXr1NWmh3%2Bxn8pSRx3L%2BcWtoiEpJzs%3D',
    'https://files09.oaiusercontent.com/file-NZfkXHaL1Sbj9XqrJN9Lwa?se=2025-06-17T11%3A21%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd0baf45d-2f55-44ba-8a95-ee8ab3e842c9.png&sig=EYreJsgcAsKIXdTn8eyLYg%2Ba35uVm/JUeBktA%2BffprY%3D',
    'https://files.oaiusercontent.com/file-MdwjebjX2ebGMeGZeqEehZ?se=2025-06-17T11%3A14%3A30Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ddd179c8e-45fe-4df5-a94a-27783467d7cd.png&sig=IlOHCxDUPxzNTO7waaTDv1PrMKaCivmF5IAZ%2BDvUom0%3D'
  ];

  const partners = [
    'https://files.oaiusercontent.com/file-L9tYkDb911oeTqrWZsod57?se=2025-06-17T10%3A44%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6dad1152-f2bc-4bbe-9a3e-e0c000e676db.png&sig=9%2BbGe5a/GDhrae8198eiohOFxqkGdYVqMWlO%2BB5YhnY%3D',
    'https://srmap.edu.in/wp-content/uploads/2019/11/SRMAP-Logo-2.png',
    'https://vit.ac.in/wp-content/uploads/2023/06/VIT-40-logo-Combo-white.png',
    'https://files09.oaiusercontent.com/file-LWUHsQ1mNJJ1WosTzCUaei?se=2025-06-17T10%3A51%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5b8e3af8-a613-4a19-bda6-c547a7fa6283.png&sig=XDJH37wVUUyCxc0%2BtKOSTtGMmd%2B3fHpaA0TA7XrIoxo%3D',
    'https://files09.oaiusercontent.com/file-P2P8cu32s7yXdBnGWkYjLH?se=2025-06-17T10%3A55%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc25b446b-d815-47c5-8433-e939531057b5.png&sig=RqrBwWl63cqabXlEcjKQS2795G3oiGQtRZkKwRp%2BZu4%3D',
    'https://files.oaiusercontent.com/file-FVpJ77aXq1axbxbLhAQBXV?se=2025-06-17T10%3A57%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da8c9f3ab-7da9-4790-83d5-94dcdbc4037e.png&sig=45U4UEAbaLKCL8D086GTVv%2BczUPZ4TKtyIYWXpQT3Mc%3D',
    'https://files.oaiusercontent.com/file-YBxAKi5SwKeAvdg54sS83s?se=2025-06-17T11%3A07%3A56Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D54ef7d34-4337-4e9f-afe0-6acf8c826656.png&sig=s86Z2DMqmRwOPUMJvRyeWEHP50AkUhV%2B/p4nV09r7lc%3D',
    'https://files.oaiusercontent.com/file-GgSRJR55A6y8c382ydExky?se=2025-06-17T11%3A01%3A33Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D99b86c2e-16ac-449c-a876-dd899f69b27b.png&sig=HwNEgZZdCxR43M5CBb0TfKbAbc/oB2WuIqRSI1yRKyU%3D',
    'https://files08.oaiusercontent.com/file-ANhxVvQE2hga7EgQQs7HXq?se=2025-06-17T11%3A02%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dacbf77d5-0643-4277-abdb-95d86a44983c.png&sig=QEJcB4s3dsVu7kl9j05zFAR56IQ6JtYGhuKlfX21QkE%3D',
    'https://files.oaiusercontent.com/file-5bmbaEdQQumBd4hDzXRD9h?se=2025-06-17T11%3A04%3A43Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dabc09167-d619-42a4-8cdd-5eb63f3ca0c1.png&sig=BpIuV8j3xNbVEk4uvs8H4AGG0lVFfcqel6I7/KIPVuQ%3D',
    'https://files.oaiusercontent.com/file-YBqQLjK97GNpaHWhLrZo4a?se=2025-06-17T11%3A05%3A26Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbc6ed4f0-d0ce-437e-9876-c8b7997a0df3.png&sig=S04Fl98NNg8W8oSMIrni1yh/CH59C2A1a6gYjJBDEC4%3D'
  ];

  const educationalClients = [
    'https://files.oaiusercontent.com/file-6Y28VYzZUE75na2vsdeaoA?se=2025-06-17T11%3A09%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9946fe30-9fc1-4c66-a6ef-ae2d63c90a7b.png&sig=zzyFmNei3LI57nldi58GoEbDaqW1FcTfVj4JkUmGZ4g%3D',
    'https://files.oaiusercontent.com/file-J7Rf6ZFWDXNW1Grq59QC9J?se=2025-06-17T11%3A10%3A26Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dcec83f9c-9a13-4da4-91be-f5a5ed937994.png&sig=X4JHvJ2vsTNjlCrcc4aLkuVYW6D9n4k%2BPJym%2BxS1E38%3D',
    'https://files.oaiusercontent.com/file-Md99KhyKCS4X2Hu9UnW2Du?se=2025-06-17T11%3A11%3A37Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db6b1390d-311d-497b-9f78-e93a385742ad.png&sig=5xmjZDFOYYJbvYfrn0Hls8fmYzSIbJJrQb7pCifKVT4%3D',
    'https://files09.oaiusercontent.com/file-LneYRKBJu53M5Y6fjHyMzW?se=2025-06-17T11%3A12%3A34Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D299%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9bfeb51d-c6ff-4f0d-9b64-1a1916676e83.png&sig=Ufck%2Bnh0AJvsvD4VqMI5wtjOhCsbYvogE8Q9Jp89Z5Y%3D'
  ];

  const categories = [
    {
      icon: TrendingUp,
      title: 'IoT Innovations',
      description: 'Latest developments in Internet of Things technology',
      color: 'from-cyan-400 to-blue-500',
      count: '24 articles'
    },
    {
      icon: Lightbulb,
      title: 'Smart Solutions',
      description: 'Smart city and smart home implementation guides',
      color: 'from-green-400 to-emerald-500',
      count: '18 articles'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Mobile and web development best practices',
      color: 'from-purple-400 to-pink-500',
      count: '32 articles'
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Hardware and embedded system tutorials',
      color: 'from-orange-400 to-red-500',
      count: '16 articles'
    },
    {
      icon: Shield,
      title: 'Technology Tutorials',
      description: 'Step-by-step guides for various technologies',
      color: 'from-indigo-400 to-purple-500',
      count: '28 articles'
    },
    {
      icon: BookOpen,
      title: 'Industry Insights',
      description: 'Market trends and industry analysis',
      color: 'from-pink-400 to-red-500',
      count: '12 articles'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        
        {/* Meet the Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl mb-6"
            >
              <Users className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our passionate team of experts dedicated to delivering innovative IoT solutions and cutting-edge technology services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Esteemed Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-2xl mb-6"
            >
              <Award className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Esteemed <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Clients</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Trusted by Industry Leaders Across Sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Global Partners */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-20"
>
  <div className="text-center mb-12">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6"
    >
      <GraduationCap className="h-8 w-8 text-white" />
    </motion.div>
    <h2 className="text-4xl font-bold text-white mb-4">
      Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Global Partners</span>
    </h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Collaborating with Leading Organizations Worldwide
    </p>
  </div>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {educationalClients.map((logo, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
      >
        <img
          src={logo}
          alt="Global Partner Logo"
          className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 filter brightness-0 invert"
        />
      </motion.div>
    ))}
  </div>
</motion.div>


       {/* Our Educational Clients */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-20"
>
  <div className="text-center mb-12">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-6"
    >
      <GraduationCap className="h-8 w-8 text-white" />
    </motion.div>
    <h2 className="text-4xl font-bold text-white mb-4">
      Our Educational <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Clients</span>
    </h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Trusted by Premier Educational Institutions
    </p>
  </div>

  <div className="overflow-hidden bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8">
    <div className="flex space-x-12 animate-scroll-reverse w-max">
      {[...partners, ...partners].map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
        >
          <img
            src={logo}
            alt="Educational Client Logo"
            className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 filter brightness-0 invert"
          />
        </div>
      ))}
    </div>
  </div>
</motion.div>

        {/* Explore by Category */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl mb-6"
            >
              <Briefcase className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Explore by <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our services organized by expertise to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{category.description}</p>
                <span className="text-cyan-400 text-sm font-semibold">{category.count}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3" />
                Our Services:
              </h3>
              <ul className="space-y-4">
                {[
                  'IoT Innovations: Learn about the latest developments in the Internet of Things',
                  'Smart City and Smart Home Solutions: Discover connected urban and residential environments',
                  'Mobile and Web Development: Get tips for developing IoT-integrated applications',
                  'Product Development Tips: Gain insights into prototyping and white-label solutions'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-gray-300 flex items-start group"
                  >
                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-6 flex items-center">
                <Award className="h-6 w-6 mr-3" />
                Our Promise:
              </h3>
              <ul className="space-y-4">
                {[
                  'Technology Tutorials: Access hands-on guides for various tech stacks',
                  'Expert Insights: Solutions delivered by industry professionals',
                  'Regular Updates: Continuous improvement and support',
                  'Community Focused: Encouraging collaboration and knowledge sharing'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-gray-300 flex items-start group"
                  >
                    <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-1.5 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default App;