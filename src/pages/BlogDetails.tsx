import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of IoT in Smart Cities',
    excerpt: 'Exploring how IoT technology is revolutionizing urban infrastructure...',
    author: 'Priya Sharma',
    date: '2024-01-15',
    category: 'IoT Trends',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    readTime: '5 min read',
    tags: ['Smart Cities', 'Urban Planning', 'IoT']
  },
  // Same as blog list
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id.toString() === id);

  if (!blog) {
    return (
      <div className="text-center py-32 text-white">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <Link to="/" className="text-purple-400 hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 max-w-4xl mx-auto text-white">
      <Link to="/" className="flex items-center text-purple-400 mb-8 hover:underline">
        <ArrowLeft size={16} className="mr-2" /> Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <User size={16} className="mr-1" /> {blog.author}
        <span className="mx-2">•</span>
        <Calendar size={16} className="mr-1" /> {new Date(blog.date).toLocaleDateString()}
        <span className="mx-2">•</span>
        {blog.readTime}
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-2xl shadow-lg mb-8 object-cover max-h-[400px]"
      />

      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        {blog.excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {blog.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
            <Tag size={12} className="inline mr-1" />
            {tag}
          </span>
        ))}
      </div>

      <div className="text-base text-gray-400">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae sem nec sapien pulvinar sollicitudin.
          Integer at pulvinar justo. Maecenas vel ultricies justo. Nullam suscipit, erat vel porta posuere.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;