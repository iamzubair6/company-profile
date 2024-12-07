"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Web", "Mobile", "Enterprise", "Cloud"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "A modern e-commerce solution with real-time inventory management.",
    challenge: "The client needed a scalable e-commerce platform that could handle high traffic and complex inventory management.",
    solution: "We developed a custom platform using Next.js and Node.js, implementing real-time inventory tracking and automated order processing.",
    outcome: "50% increase in sales and 30% reduction in inventory management time.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    technologies: ["Next.js", "Node.js", "MongoDB", "Redis"],
    testimonial: {
      quote: "The new platform transformed our business operations and exceeded our expectations.",
      author: "Jane Smith",
      position: "E-commerce Director"
    }
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile",
    description: "Patient management system with telemedicine capabilities.",
    challenge: "Creating a secure, HIPAA-compliant mobile application for patient-doctor communication.",
    solution: "Developed a React Native app with end-to-end encryption and secure video conferencing.",
    outcome: "Improved patient engagement by 40% and reduced appointment no-shows by 60%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    technologies: ["React Native", "Node.js", "WebRTC", "AWS"],
    testimonial: {
      quote: "This app has revolutionized how we interact with our patients.",
      author: "Dr. Michael Brown",
      position: "Medical Director"
    }
  },
  {
    title: "Enterprise Resource Planning",
    category: "Enterprise",
    description: "Comprehensive ERP solution for manufacturing company.",
    challenge: "Integrating multiple legacy systems into a unified platform.",
    solution: "Built a custom ERP system with modern architecture and API-first approach.",
    outcome: "35% improvement in operational efficiency and 25% cost reduction.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    testimonial: {
      quote: "The new ERP system has streamlined our entire operation.",
      author: "Robert Johnson",
      position: "Operations Manager"
    }
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud",
    description: "Large-scale cloud migration for financial institution.",
    challenge: "Migrating critical financial systems to the cloud while ensuring zero downtime.",
    solution: "Implemented a phased migration strategy using AWS and containerization.",
    outcome: "40% reduction in infrastructure costs and improved system reliability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    testimonial: {
      quote: "The migration was seamless and the results have been outstanding.",
      author: "Sarah Williams",
      position: "CTO"
    }
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Portfolio Header */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              Explore our successful projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="flex justify-center mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 gap-12">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative h-[300px]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover rounded-l-lg"
                          />
                        </div>
                        <div className="p-6">
                          <CardHeader className="p-0">
                            <div className="flex items-center gap-2 mb-4">
                              <Badge>{project.category}</Badge>
                            </div>
                            <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                            <CardDescription className="text-lg">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-0 mt-6">
                            <div className="space-y-4">
                              <div>
                                <h3 className="font-semibold mb-2">Challenge</h3>
                                <p className="text-muted-foreground">{project.challenge}</p>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Solution</h3>
                                <p className="text-muted-foreground">{project.solution}</p>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Outcome</h3>
                                <p className="text-muted-foreground">{project.outcome}</p>
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech) => (
                                    <Badge key={tech} variant="secondary">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="border-t pt-4 mt-4">
                                <blockquote className="italic text-muted-foreground">
                                  "{project.testimonial.quote}"
                                </blockquote>
                                <p className="mt-2 font-semibold">
                                  {project.testimonial.author}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {project.testimonial.position}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}