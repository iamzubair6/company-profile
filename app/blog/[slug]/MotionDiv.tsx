"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, CalendarDays, Clock } from "lucide-react";

interface Post {
  image: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

export default function MotionDiv({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      <div className="flex items-center gap-6 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          {post.author}
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {post.readTime}
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
