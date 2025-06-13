import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen } from 'lucide-react';

const blogData = {
  'future-iot-smart-cities': {
    title: 'The Future of IoT in Smart Cities',
    excerpt: 'Explore how IoT technology is revolutionizing urban infrastructure, enhancing sustainability, and improving public services.',
    content: `
      <p>The Internet of Things (IoT) is transforming the way we think about urban development and city management. As populations continue to grow and urbanization accelerates, cities worldwide are turning to smart technologies to address challenges related to infrastructure, sustainability, and quality of life.</p>
      
      <h2>Current State of Smart Cities</h2>
      <p>Today's smart cities leverage IoT sensors, data analytics, and connected devices to optimize everything from traffic flow to energy consumption. Cities like Barcelona, Singapore, and Amsterdam have become pioneers in implementing comprehensive IoT ecosystems that benefit both residents and administrators.</p>
      
      <h2>Key IoT Applications in Urban Environments</h2>
      <p>Smart cities utilize IoT technology across multiple domains:</p>
      <ul>
        <li><strong>Traffic Management:</strong> Real-time traffic monitoring and adaptive signal control</li>
        <li><strong>Energy Efficiency:</strong> Smart grids and intelligent lighting systems</li>
        <li><strong>Waste Management:</strong> Sensor-equipped bins that optimize collection routes</li>
        <li><strong>Environmental Monitoring:</strong> Air quality sensors and noise level monitoring</li>
        <li><strong>Public Safety:</strong> Connected surveillance systems and emergency response</li>
      </ul>
      
      <h2>Future Trends and Innovations</h2>
      <p>The future of IoT in smart cities promises even more sophisticated solutions. Edge computing will enable faster decision-making, while AI and machine learning will provide predictive analytics for better resource allocation. 5G networks will support more connected devices with lower latency, enabling real-time city-wide coordination.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite the promising future, smart cities face challenges including data privacy concerns, cybersecurity risks, and the need for significant infrastructure investments. Successful implementation requires careful planning, stakeholder engagement, and robust security measures.</p>
      
      <h2>Conclusion</h2>
      <p>IoT technology will continue to play a crucial role in creating more livable, sustainable, and efficient cities. As technology advances and costs decrease, we can expect to see more cities adopting comprehensive IoT solutions to improve urban life.</p>
    `,
    image: 'https://images.pexels.com/photos/374815/pexels-photo-374815.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Purple Techno Solutions Team',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Smart Cities',
    tags: ['IoT', 'Smart Cities', 'Urban Technology', 'Sustainability'],
    color: 'from-blue-400 to-cyan-500'
  },
  'white-label-iot-solutions': {
    title: 'Building a White-Label IoT Solution: What You Need to Know',
    excerpt: 'Learn the key steps to creating a successful white-label IoT product that you can brand and sell.',
    content: `
      <p>White-label IoT solutions offer businesses the opportunity to enter the IoT market quickly without the extensive development costs and time investment typically required. This approach allows companies to focus on their core competencies while leveraging proven IoT technologies.</p>
      
      <h2>Understanding White-Label IoT</h2>
      <p>A white-label IoT solution is a ready-made product developed by one company but sold by another under their own brand. This model is particularly attractive for businesses looking to expand their product portfolio or enter new markets without significant R&D investments.</p>
      
      <h2>Key Components of a White-Label IoT Solution</h2>
      <p>Successful white-label IoT products typically include:</p>
      <ul>
        <li><strong>Hardware Platform:</strong> Reliable, scalable device architecture</li>
        <li><strong>Software Stack:</strong> Firmware, mobile apps, and web dashboards</li>
        <li><strong>Cloud Infrastructure:</strong> Data management and analytics platform</li>
        <li><strong>Customization Options:</strong> Branding, feature configuration, and UI customization</li>
        <li><strong>Support Services:</strong> Technical documentation, training, and ongoing support</li>
      </ul>
      
      <h2>Development Process</h2>
      <p>Creating a white-label IoT solution involves several critical phases:</p>
      <ol>
        <li><strong>Market Research:</strong> Understanding target markets and customer needs</li>
        <li><strong>Architecture Design:</strong> Creating scalable and flexible system architecture</li>
        <li><strong>Prototype Development:</strong> Building and testing initial versions</li>
        <li><strong>Customization Framework:</strong> Developing tools for easy branding and configuration</li>
        <li><strong>Testing and Validation:</strong> Ensuring reliability and performance</li>
        <li><strong>Documentation and Training:</strong> Creating comprehensive support materials</li>
      </ol>
      
      <h2>Benefits for Partners</h2>
      <p>Companies choosing white-label IoT solutions benefit from reduced time-to-market, lower development costs, proven technology, and the ability to focus on sales and customer relationships rather than technical development.</p>
      
      <h2>Best Practices</h2>
      <p>To ensure success with white-label IoT solutions, consider scalability from the start, prioritize security, maintain clear documentation, provide excellent partner support, and continuously gather feedback for improvements.</p>
      
      <h2>Conclusion</h2>
      <p>White-label IoT solutions represent a strategic approach to market entry and expansion. By partnering with experienced IoT developers, businesses can quickly offer innovative products while minimizing risk and investment.</p>
    `,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Purple Techno Solutions Team',
    date: '2025-01-12',
    readTime: '12 min read',
    category: 'Product Development',
    tags: ['White Label', 'IoT Development', 'Business Strategy', 'Product Management'],
    color: 'from-green-400 to-emerald-500'
  },
  'embedded-systems-trends': {
    title: 'Top 5 Trends in Embedded Systems',
    excerpt: 'Stay updated on the latest trends in embedded systems and how they impact IoT product development.',
    content: `
      <p>Embedded systems form the backbone of modern IoT devices, and the field is rapidly evolving with new technologies and methodologies. Understanding current trends is crucial for developers and businesses looking to stay competitive in the IoT market.</p>
      
      <h2>1. Edge Computing Integration</h2>
      <p>Edge computing is revolutionizing embedded systems by bringing processing power closer to data sources. This trend reduces latency, improves real-time decision-making, and reduces bandwidth requirements. Modern embedded systems are increasingly incorporating edge AI capabilities for local data processing and analysis.</p>
      
      <h2>2. AI and Machine Learning at the Edge</h2>
      <p>The integration of AI and ML capabilities directly into embedded systems is becoming more prevalent. Specialized chips like neural processing units (NPUs) and optimized algorithms enable devices to perform complex computations locally, reducing dependence on cloud services and improving response times.</p>
      
      <h2>3. Enhanced Security Features</h2>
      <p>With growing cybersecurity concerns, embedded systems are incorporating advanced security features from the ground up. Hardware-based security modules, secure boot processes, and encrypted communications are becoming standard requirements rather than optional features.</p>
      
      <h2>4. Low-Power and Energy Harvesting</h2>
      <p>Energy efficiency remains a critical concern for embedded systems, especially in IoT applications. New trends include ultra-low-power microcontrollers, energy harvesting technologies, and advanced power management techniques that extend device lifespans and reduce maintenance requirements.</p>
      
      <h2>5. Modular and Scalable Architectures</h2>
      <p>Modern embedded systems are moving toward modular designs that allow for easier customization and scaling. This approach enables faster development cycles, reduces costs, and provides flexibility for different application requirements.</p>
      
      <h2>Impact on IoT Development</h2>
      <p>These trends are significantly impacting IoT product development by enabling more sophisticated devices, improving user experiences, and opening new application possibilities. Developers must stay current with these trends to create competitive products.</p>
      
      <h2>Future Outlook</h2>
      <p>The embedded systems landscape will continue evolving with advances in semiconductor technology, new communication protocols, and emerging application requirements. Staying informed about these trends is essential for successful IoT product development.</p>
      
      <h2>Conclusion</h2>
      <p>The embedded systems field is experiencing rapid innovation across multiple dimensions. By understanding and leveraging these trends, developers can create more capable, efficient, and secure IoT solutions that meet evolving market demands.</p>
    `,
    image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Purple Techno Solutions Team',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Embedded Systems',
    tags: ['Embedded Systems', 'IoT', 'Technology Trends', 'Edge Computing'],
    color: 'from-purple-400 to-pink-500'
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData[id as keyof typeof blogData];

  if (!blog) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-white/20 to-white/10 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Blog</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className={`inline-block px-4 py-2 bg-gradient-to-r ${blog.color} text-white text-sm font-semibold rounded-full mb-4`}>
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{blog.title}</h1>
          <p className="text-xl text-gray-300 mb-8">{blog.excerpt}</p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-3 py-1 bg-gradient-to-r from-white/20 to-white/10 text-white text-sm rounded-full border border-white/20"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${blog.color} opacity-20`}></div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12"
        >
          <div 
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
            style={{
              color: '#e5e7eb',
              lineHeight: '1.8'
            }}
          />
        </motion.div>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 mb-12"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Enjoyed this article?</h3>
              <p className="text-gray-300">Share it with your network and help others stay informed about IoT trends.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${blog.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Continue Reading</h3>
          <p className="text-lg text-gray-300 mb-8">
            Explore more articles about IoT, technology trends, and product development insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${blog.color} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2`}
              >
                <BookOpen className="h-5 w-5" />
                <span>View All Articles</span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-white/20 to-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 border border-white/30"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;