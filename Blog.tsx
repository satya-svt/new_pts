import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Lightbulb, Code, Cpu, Shield } from 'lucide-react';

const Blog = () => {
  const featuredArticles = [
    {
      id: 'future-iot-smart-cities',
      title: 'The Future of IoT in Smart Cities',
      excerpt: 'Explore how IoT technology is revolutionizing urban infrastructure, enhancing sustainability, and improving public services.',
      image: 'https://soracom.io/wp-content/uploads/2022/01/AdobeStock_181088041-scaled.jpeg',
      category: 'Smart Cities',
      readTime: '8 min read',
      icon: TrendingUp,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'white-label-iot-solutions',
      title: 'Building a White-Label IoT Solution: What You Need to Know',
      excerpt: 'Learn the key steps to creating a successful white-label IoT product that you can brand and sell.',
      image: 'https://iotbusinessnews.com/WordPress/wp-content/uploads/IoT-internet-of-things-planet.jpg',
      category: 'Product Development',
      readTime: '12 min read',
      icon: Lightbulb,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'embedded-systems-trends',
      title: 'Top 5 Trends in Embedded Systems',
      excerpt: 'Stay updated on the latest trends in embedded systems and how they impact IoT product development.',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQHqV0fa_1C0UA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1687371323163?e=2147483647&v=beta&t=R_MHS5MgOOa4jcnciSBih0z42Rap-i8UWP3G9jEttvQ',
      category: 'Embedded Systems',
      readTime: '6 min read',
      icon: Cpu,
      color: 'from-purple-400 to-pink-500'
    }
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
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Welcome to the Purple Techno Solutions Blog, your go-to resource for the latest insights, trends, and innovations in IoT, technology, and product development.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${article.color} opacity-20`}></div>
                  <div className={`absolute top-4 left-4 w-10 h-10 bg-gradient-to-r ${article.color} rounded-xl flex items-center justify-center`}>
                    <article.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm">{article.readTime}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${article.color} text-white text-xs font-semibold rounded-full`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link to={`/blog/${article.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${article.color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-6">
            Explore by <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discover articles organized by topic to find exactly what you're looking for.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{category.description}</p>
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
          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/30 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Content Types:</h3>
              <ul className="space-y-2">
                {[
                  'IoT Innovations: Learn about the latest developments in the Internet of Things',
                  'Smart City and Smart Home Solutions: Discover connected urban and residential environments',
                  'Mobile and Web Development: Get tips for developing IoT-integrated applications',
                  'Product Development Tips: Gain insights into prototyping and white-label solutions'
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Our Promise:</h3>
              <ul className="space-y-2">
                {[
                  'Technology Tutorials: Access hands-on guides for various tech stacks',
                  'Expert Insights: Articles written by industry professionals',
                  'Regular Updates: Fresh content published weekly',
                  'Community Focused: Encouraging discussion and knowledge sharing'
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Newsletter and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our blog is regularly updated with new articles, so be sure to check back often or subscribe to our newsletter to receive updates directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
            >
              Subscribe to Newsletter
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-white/20 to-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
            >
              View All Articles
            </motion.button>
          </div>
          
          <p className="text-gray-400">
            Join our community of tech enthusiasts and stay updated on the latest trends!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;