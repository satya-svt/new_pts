import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: string[] = ['All', 'IoT Trends', 'Tutorials', 'Case Studies', 'Industry News', 'Product Updates'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of IoT in Smart Cities',
      excerpt: 'Exploring how IoT technology is revolutionizing urban infrastructure and improving quality of life for city residents.',
      author: 'Priya Sharma',
      date: '2024-01-15',
      category: 'IoT Trends',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      readTime: '5 min read',
      tags: ['Smart Cities', 'Urban Planning', 'IoT'],
    },
    {
      id: 2,
      title: 'Building Your First IoT Device: A Complete Guide',
      excerpt: 'Step-by-step tutorial on creating your first IoT device from concept to deployment, including hardware selection and software development.',
      author: 'Amit Patel',
      date: '2024-01-10',
      category: 'Tutorials',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
      readTime: '12 min read',
      tags: ['Tutorial', 'Hardware', 'Beginner'],
    },
    {
      id: 3,
      title: 'Case Study: Transforming Agriculture with IoT',
      excerpt: 'How we helped a farming cooperative increase crop yields by 30% using IoT sensors and data analytics.',
      author: 'Sneha Reddy',
      date: '2024-01-05',
      category: 'Case Studies',
      image: 'https://images.pexels.com/photos/7594435/pexels-photo-7594435.jpeg',
      readTime: '8 min read',
      tags: ['Agriculture', 'Case Study', 'Success Story'],
    },
    {
      id: 4,
      title: 'IoT Security Best Practices for 2024',
      excerpt: 'Essential security measures every IoT developer should implement to protect devices and user data.',
      author: 'Rajesh Kumar',
      date: '2024-01-01',
      category: 'Industry News',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      readTime: '7 min read',
      tags: ['Security', 'Best Practices', 'Industry'],
    },
    {
      id: 5,
      title: 'Introducing AquaSafe 2.0: Enhanced Water Monitoring',
      excerpt: 'Our latest product update brings advanced features and improved accuracy to water quality monitoring.',
      author: 'Product Team',
      date: '2023-12-28',
      category: 'Product Updates',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
      readTime: '4 min read',
      tags: ['Product Update', 'AquaSafe', 'Water Quality'],
    },
    {
      id: 6,
      title: 'Edge Computing in IoT: Benefits and Implementation',
      excerpt: 'Understanding how edge computing can reduce latency and improve efficiency in IoT applications.',
      author: 'Priya Sharma',
      date: '2023-12-20',
      category: 'IoT Trends',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
      readTime: '9 min read',
      tags: ['Edge Computing', 'Performance', 'Architecture'],
    },
  ];

  const filteredPosts: BlogPost[] = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

                <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <span className="relative z-10 flex items-center">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-lg"></div>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
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
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Blog;