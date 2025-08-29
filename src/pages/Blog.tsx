/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'IoT Trends', 'Tutorials', 'Case Studies', 'Industry News', 'Product Updates'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of IoT in Smart Cities',
      excerpt: 'Exploring how IoT technology is revolutionizing urban infrastructure and improving quality of life for city residents.',
      author: '',
      date: '',
      category: '',
      image: 'https://i.pinimg.com/1200x/2a/bc/0d/2abc0d645db6a9485741cc03a81338c3.jpg',
      readTime: '',
      tags: []
    },
    {
      id: 2,
      title: 'AWS & DEVOPS ',
      excerpt: 'At Purple Technologies, we harness the synergy of AWS cloud infrastructure and DevOps practices to deliver scalable solutions that accelerate development cycles, improve deployment reliability.',
      date: '',
      image: 'https://kalyanithub.com/wp-content/uploads/2023/12/Devops-min.jpg',
      tags: []
    },
    {
      id: 3,
       title: 'AI ML',
      excerpt: 'At Purple Technologies, we harness the power of Artificial Intelligence and Machine Learning to help businesses unlock data-driven insights, automate operations, and make intelligent decisions that fuel innovation.',
      date: '',
      image: 'https://i.pinimg.com/736x/de/44/66/de4466bbd8fc8fcf0c1ca3fdfa0cf59d.jpg',
      tags: []
    },
    {
      id: 4,
       title: 'ROBOTICS',
      excerpt: 'Purple Technologies pioneers robotics innovations by designing intelligent robotic systems that automate workflows, boost precision, and accelerate industrial transformation across sectors.',
      date: '',
      image: 'https://i.pinimg.com/736x/29/24/96/292496c37f5a71bc8f7e6c4ced37f172.jpg',
      tags: []
    },
    {
      id: 5,
       title: 'EMBEDDED SYSTEMS ',
      excerpt: 'Purple Technologies specializes in cutting-edge embedded system solutions that power smart devices, enhance performance, and ensure real-time responsiveness across industries from automotive to IoT.',
      date: '',
      image: 'https://i.pinimg.com/1200x/13/20/f0/1320f000d0ea76a69c2bf82262af9d78.jpg',
      tags: []
    },
    {
      id: 6,
       title: 'FULLSTACK',
      excerpt: 'With robust Full Stack development capabilities, Purple Technologies builds scalable web applications from front to back — ensuring seamless user experiences, strong backend performance, and future-ready digital platforms.',
      date: '',
      image: 'https://i.pinimg.com/736x/fa/e8/62/fae862fff4f6100d000a1c01c4030db0.jpg',
      tags: []
    },
    {
      id: 7,
       title: 'JAVA ',
      excerpt: 'At Purple Technologies, our expert Java development team delivers high-performance, secure, and scalable enterprise solutions that meet the dynamic needs of modern businesses and efficiency.',
      date: '',
      image: 'https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp',
      tags: []
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight md:leading-[1.2]">
            IoT Insights Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <br />
            Stay updated with the latest trends, tutorials, and insights from the world of IoT development and innovation.
          </p>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              {/* <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
              {/* <input
                type="text"
                // placeholder="Search articles..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              /> */}
            </div>
            
            {/* <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div> */}
          </div>
        </AnimatedSection>

        {/* Featured Post */}
        <AnimatedSection className="mb-16">
          <div className="relative group cursor-pointer">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                  <span className="mx-2">•</span>
                  <User size={16} className="mr-2" />
                  {featuredPost.author}
                  <span className="mx-2">•</span>
                  {featuredPost.readTime}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      <Tag size={12} className="inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
               <Link
  to={`/blog/${featuredPost.id}`}
  className="group/btn relative inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
>
  <span className="relative z-10 flex items-center">
    Read More
    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-lg"></div>
</Link>

              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other Posts */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="block">
              <AnimatedSection
                key={post.id}
                animation="scale-up"
                delay={index * 100}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-purple-600/80 text-white text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center text-xs text-gray-400 mb-3">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                        <span className="mx-2">•</span>
                        {post.readTime}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="flex items-center text-sm text-gray-400">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        
                        <button className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* Newsletter Signup */}
        
      </div>
    </div>
  );
};

export default Blog;