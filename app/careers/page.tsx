"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions for our clients.",
    requirements: [
      "7+ years of experience in web development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Understanding of microservices architecture"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Flexible work hours",
      "Remote work options"
    ]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description: "Join our design team to create beautiful and intuitive user experiences for our web and mobile applications.",
    requirements: [
      "5+ years of UX/UI design experience",
      "Proficiency in Figma and design systems",
      "Experience with user research and testing",
      "Strong portfolio demonstrating UI/UX work"
    ],
    benefits: [
      "Health and dental coverage",
      "Unlimited PTO",
      "Professional development budget",
      "Home office stipend",
      "Wellness programs"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110k - $160k",
    description: "We're seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: [
      "5+ years of DevOps experience",
      "Strong knowledge of AWS/Azure services",
      "Experience with Docker and Kubernetes",
      "Expertise in CI/CD pipelines"
    ],
    benefits: [
      "Competitive compensation",
      "Stock options",
      "Health benefits",
      "Flexible schedule",
      "Learning allowance"
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Careers Header */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Build your career with us and be part of a team that's shaping the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job - we provide opportunities for growth, innovation, and making a real impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {["Innovation", "Growth", "Balance"].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{value}</h3>
                    <p className="text-muted-foreground">
                      {value === "Innovation"
                        ? "Work on cutting-edge technologies and shape the future of digital solutions."
                        : value === "Growth"
                        ? "Continuous learning opportunities and clear career progression paths."
                        : "Flexible work arrangements and emphasis on work-life balance."}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current opportunities and find your next role.
            </p>
          </motion.div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <Badge variant="secondary">{position.department}</Badge>
                      <Badge variant="outline">{position.type}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                    <CardDescription className="text-base">
                      {position.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <DollarSign className="w-4 h-4" />
                            {position.salary}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-4">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button size="lg">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
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