"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Globe,
  Cloud,
  Shield,
  Database,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies.",
    benefits: [
      "Responsive design for all devices",
      "SEO-optimized architecture",
      "High-performance solutions",
      "Scalable infrastructure"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    useCases: [
      "E-commerce platforms",
      "Content management systems",
      "Enterprise web applications",
      "Progressive web apps"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    benefits: [
      "Native performance",
      "Cross-platform compatibility",
      "Offline functionality",
      "Push notifications"
    ],
    technologies: ["React Native", "Flutter", "iOS", "Android"],
    useCases: [
      "Business applications",
      "Social networking apps",
      "E-commerce apps",
      "Healthcare solutions"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    benefits: [
      "High availability",
      "Auto-scaling",
      "Cost optimization",
      "Disaster recovery"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
    useCases: [
      "Cloud migration",
      "Infrastructure automation",
      "Serverless applications",
      "DevOps implementation"
    ]
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights.",
    benefits: [
      "Real-time analytics",
      "Predictive modeling",
      "Data visualization",
      "Business intelligence"
    ],
    technologies: ["Python", "TensorFlow", "Power BI", "Tableau"],
    useCases: [
      "Business intelligence",
      "Customer analytics",
      "Predictive maintenance",
      "Market analysis"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with advanced security solutions.",
    benefits: [
      "Threat detection",
      "Security audits",
      "Compliance management",
      "Incident response"
    ],
    technologies: ["SIEM", "Penetration Testing", "Encryption", "IAM"],
    useCases: [
      "Security assessments",
      "Compliance audits",
      "Security monitoring",
      "Identity management"
    ]
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions for your business needs.",
    benefits: [
      "Custom functionality",
      "Integration capabilities",
      "Scalable architecture",
      "Ongoing support"
    ],
    technologies: ["Java", ".NET", "Python", "Go"],
    useCases: [
      "Enterprise solutions",
      "Workflow automation",
      "Legacy modernization",
      "Integration systems"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions tailored to transform your business and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-lg">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Key Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Use Cases</h3>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase) => (
                            <li key={useCase} className="flex items-center gap-2">
                              <ArrowRight className="w-4 h-4 text-primary" />
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <Link href="/contact">
                        <Button size="lg">
                          Get Started with {service.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}