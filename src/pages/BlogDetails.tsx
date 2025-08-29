import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || '', 10);
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="text-center mt-10 text-red-500">
        Blog post not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-white">
      <img src={post.image} alt={post.title} className="w-full h-[500px] object-cover rounded-xl mb-10" />
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        {post.title}
      </h1>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-10 py-12 space-y-10 shadow-lg text-lg leading-8">
        {renderContent(post.id)}
      </div>

      <div className="mt-10">
        <Link to="/blog" className="text-cyan-400 hover:underline font-medium text-lg">
          ← Back to all blogs
        </Link>
      </div>
    </div>
  );
};

const Section = ({ title, color }: { title: string; color: string }) => (
  <h2 className={`text-3xl font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text mb-4`}>
    {title}
  </h2>
);

const renderContent = (id: number) => {
  switch (id) {
    case 1:
      return (
        <>
          <Section title="The Future of IoT in Smart Cities" color="from-cyan-400 to-blue-500" />
          <p>Smart cities are evolving with IoT at the core—enabling real-time monitoring of traffic, waste, air quality, and public safety.</p>
          <p>Our platforms empower municipalities to integrate thousands of devices securely and manage data at scale.</p>
          <p>Edge computing and AI-powered sensors offer faster decision-making without overloading the cloud.</p>
          <p>Predictive analytics help city leaders plan for infrastructure needs based on usage patterns.</p>
          <p>We build modular IoT hubs, smart lighting systems, and autonomous surveillance tools compliant with international standards.</p>
        </>
      );
    case 2:
      return (
        <>
          <Section title="AWS & DevOps Integration" color="from-purple-500 to-pink-500" />
          <p>Our DevOps workflows on AWS accelerate time-to-market with CI/CD pipelines, Infrastructure as Code, and real-time monitoring.</p>
          <p>We deploy fault-tolerant, auto-scaling systems that reduce cost and increase availability.</p>
          <p>With CloudFormation, Terraform, and the AWS CDK, we codify your infrastructure for repeatable and secure environments.</p>
          <p>Advanced DevSecOps practices keep your environment compliant and secure from Day 1.</p>
        </>
      );
    case 3:
      return (
        <>
          <Section title="Artificial Intelligence & Machine Learning" color="from-indigo-400 to-blue-600" />
          <p>We leverage AI to automate workflows, detect anomalies, and personalize customer experiences.</p>
          <p>Our ML models are trained with high-accuracy datasets and deployed via scalable APIs and edge devices.</p>
          <p>From computer vision to NLP, we solve complex business problems using state-of-the-art frameworks like TensorFlow, PyTorch, and Scikit-learn.</p>
          <p>We also provide MLOps tools for model versioning, retraining, and continuous improvement.</p>
        </>
      );
    case 4:
      return (
        <>
          <Section title="Robotics & Automation Systems" color="from-red-400 to-pink-500" />
          <p>We design and program intelligent robots for industrial automation, education, and healthcare.</p>
          <p>Our systems use AI for real-time decision-making and are equipped with computer vision and sensor fusion.</p>
          <p>We also develop grading systems that use ML to assess academic responses quickly and fairly.</p>
          <p>Our custom platforms integrate with cloud dashboards and IoT sensors for remote management and diagnostics.</p>
        </>
      );
    case 5:
      return (
        <>
          <Section title="Embedded Systems & Real-Time Computing" color="from-teal-400 to-cyan-500" />
          <p>We build low-power embedded systems using ARM Cortex, AVR, and RISC-V platforms.</p>
          <p>Our firmware is optimized for performance, reliability, and security with support for OTA updates and encryption.</p>
          <p>We specialize in automotive, wearables, healthcare, and industrial control systems with real-time constraints.</p>
          <p>Our edge-AI systems combine local inference with cloud syncing for powerful hybrid solutions.</p>
        </>
      );
    case 6:
      return (
        <>
          <Section title="Full Stack Web Development" color="from-orange-400 to-amber-500" />
          <p>From sleek frontend interfaces to scalable backend APIs, we build full stack solutions with React, Next.js, Node.js, and PostgreSQL.</p>
          <p>We design responsive UIs and ensure seamless UX across all devices using Tailwind CSS and Framer Motion.</p>
          <p>Our systems support real-time collaboration, secure auth, and high-performance analytics.</p>
          <p>We deploy using Docker, CI/CD pipelines, and cloud services like Vercel, Netlify, and AWS.</p>
        </>
      );
    case 7:
      return (
        <>
          <Section title="Java Enterprise Development" color="from-yellow-400 to-red-500" />
          <p>We deliver secure and scalable Java applications using Spring Boot, Hibernate, and RESTful microservices.</p>
          <p>Our systems power enterprise HRMS, CRM, and financial platforms used by thousands of users daily.</p>
          <p>We implement SSO, RBAC, and secure APIs using JWT, OAuth2, and Spring Security.</p>
          <p>Containerized deployments with Docker & Kubernetes ensure smooth scaling and high availability.</p>
        </>
      );
    default:
      return <p>No content available.</p>;
  }
};

export default BlogDetails;
