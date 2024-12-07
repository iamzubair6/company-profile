"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Cloud Computing: Trends to Watch",
    excerpt: "Explore the latest trends in cloud computing and how they're shaping the future of business technology.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    author: "John Smith",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Cloud",
    slug: "future-of-cloud-computing"
  },
  {
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how to design and implement scalable applications using microservices architecture.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    author: "Sarah Williams",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "Architecture",
    slug: "scalable-applications-microservices"
  },
  {
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Stay protected with the latest cybersecurity practices and strategies for businesses.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    author: "Michael Chen",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Security",
    slug: "cybersecurity-best-practices-2024"
  },
  {
    title: "The Rise of AI in Software Development",
    excerpt: "Discover how artificial intelligence is transforming the software development landscape.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
    author: "Emily Rodriguez",
    date: "2024-03-01",
    readTime: "7 min read",
    category: "AI",
    slug: "ai-in-software-development"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Blog Header */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Tech Insights & Updates</h1>
            <p className="text-xl text-muted-foreground">
              Stay informed about the latest technology trends, best practices, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{post.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}