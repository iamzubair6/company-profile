"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Cloud,
  Code2,
  Smartphone,
  Server,
  Shield,
} from "lucide-react";

const technologies = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vue.js",
    "Angular",
  ],
  Backend: ["Node.js", "Python", "Java", "Go", ".NET Core", "PHP"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
  Cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  Mobile: ["React Native", "Flutter", "iOS", "Android", "Kotlin"],
  DevOps: ["CI/CD", "Jenkins", "GitLab", "Terraform", "Ansible"],
};

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Cloud: Cloud,
  Mobile: Smartphone,
  DevOps: Shield,
};

const TechnologyStack = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable and efficient
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => {
            const Icon = icons[category as keyof typeof icons];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
