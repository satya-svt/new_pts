import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Lightbulb, Heart, Phone, Mail } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'End-to-End Solutions',
      description: 'We offer comprehensive IoT solutions, from concept development to deployment and support.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Customized Approach',
      description: 'We understand that every project is unique. Our team collaborates closely with clients to develop tailored solutions.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Commitment to Quality',
      description: 'We prioritize quality in every aspect of our work, ensuring that our products and services exceed client expectations.',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Leadership Team',
      role: 'Visionary Leaders',
      description: 'Our leadership team is dedicated to fostering a culture of innovation and excellence, guiding our talented workforce toward achieving our mission and vision.',
      icon: Target,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      name: 'Development Team',
      role: 'Technical Experts',
      description: 'Our skilled developers and engineers work tirelessly to create and optimize IoT solutions, ensuring high-quality products that meet industry standards.',
      icon: Lightbulb,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Support Team',
      role: 'Customer Champions',
      description: 'Our customer support team is always ready to assist you, providing expert guidance and support for all your inquiries.',
      icon: Heart,
      color: 'from-pink-400 to-red-500'
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
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Welcome to Purple Techno Solutions, your one-stop solution for end-to-end IoT product development. We are a dynamic and innovative company committed to delivering cutting-edge IoT solutions that empower businesses and individuals to thrive in an increasingly connected world.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Purple Techno Solutions, our mission is to simplify the process of developing and implementing IoT technologies, making them accessible to everyone. We strive to be at the forefront of the IoT revolution, providing tailored solutions that meet the unique needs of our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where IoT technology enhances everyday life and business operations, driving efficiency and innovation across various sectors. Our goal is to be the catalyst that transforms innovative ideas into reality.
            </p>
          </motion.div>
        </div>

        {/* Parent Company */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 mb-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Parent Company: <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Purple Technologies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Purple Techno Solutions is a proud subsidiary of Purple Technologies, a leader in technology training and solutions. Our affiliation with Purple Technologies allows us to leverage extensive industry knowledge and expertise, ensuring that we deliver the best possible solutions to our clients.
          </p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Choose Us?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our team comprises passionate professionals with diverse backgrounds in technology, engineering, and business. Together, we bring a wealth of experience and expertise to the table.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-4 font-semibold">{member.role}</p>
                <p className="text-gray-300 text-center leading-relaxed">{member.description}</p>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            As we continue to innovate and expand our offerings, we invite you to join us on our journey toward transforming the IoT landscape. Whether you are a business looking for IoT solutions or an individual eager to learn about the latest technologies, Purple Techno Solutions is here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30"
>
  <h2 className="text-4xl font-bold text-white mb-6">
    Get in Touch
  </h2>
  <p className="text-gray-300 mb-4 flex items-center justify-center gap-2">
    <Phone className="w-5 h-5" /> 9346934699, 9618743699
  </p>
  <p className="text-gray-300 mb-4 flex items-center justify-center gap-2">
    <Mail className="w-5 h-5" /> purpletechnosolutions@gmail.com, support@purpletechnologies.in
  </p>

  {/* PDF Button */}
  <a
    href="public/Copy of Company Profile Presentation.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
  >
    View Company Profile (PDF)
  </a>
</motion.div>

    </div>
  );
};

export default About;