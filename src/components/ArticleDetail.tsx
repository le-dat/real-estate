"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

interface ArticleDetailProps {
  article: {
    title: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
  };
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative h-[400px] mb-8"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {article.date}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

          <div className="prose prose-lg max-w-none">
            {article.content}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}