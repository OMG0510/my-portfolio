"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  link?: string;
};

type Achievement = {
  id: number;
  title: string;
  date: string;
  description: string;
  type: "academic" | "competition" | "recognition";
};

export default function AchievementsPage() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Project Development using JAVA for Beginners",
      issuer: "Udemy",
      date: "2023",
      description:
        "Comprehensive course covering Java programming fundamentals and OOP concepts with hands-on project development.",
      skills: ["Core Java", "Java OOPs", "Project Development"],
      link: "https://www.udemy.com/certificate/java-projects",
    },
    {
      id: 2,
      title: "Foundations of Cybersecurity",
      issuer: "Coursera & Google",
      date: "2023",
      description:
        "Fundamental concepts of cybersecurity including network security, data protection, and information security practices.",
      skills: [
        "Network Security",
        "Data Security",
        "Information Security",
        "Computer Security",
      ],
      link: "https://www.coursera.org/cybersecurity-foundations",
    },
    {
      id: 3,
      title: "Postman API Fundamentals",
      issuer: "Postman",
      date: "2022",
      description:
        "Essential skills for working with APIs using Postman, including testing, documentation, and automation.",
      skills: ["API Testing", "API Documentation", "REST APIs"],
      link: "https://www.postman.com/certification",
    },
    {
      id: 4,
      title: "Getting Started with Artificial Intelligence",
      issuer: "OpenAI",
      date: "2023",
      description:
        "Introduction to AI concepts, focusing on practical applications of machine learning and prompt engineering.",
      skills: ["AI", "Prompt Engineering", "LLM", "Machine Learning"],
      link: "https://openai.com/learn/ai-fundamentals",
    },
  ];

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Participant at Young Indians National Level Event - Future 4.0",
      date: "2022",
      description:
        "Selected to participate in this prestigious national-level technology event focused on future innovations and emerging technologies.",
      type: "competition",
    },
    {
      id: 2,
      title: "AI-For-India (Guinness World Record)",
      date: "2023",
      description:
        "Contributed to a Guinness World Record event focused on artificial intelligence education and awareness across India.",
      type: "recognition",
    },
    {
      id: 3,
      title: "CodeWiser Coding Competition - Finalist",
      date: "2022",
      description:
        "Reached the finals of the CodeWiser coding competition, demonstrating strong problem-solving and algorithmic skills.",
      type: "competition",
    },
    {
      id: 4,
      title: "Blind C Coding Competition - Top 10",
      date: "2021",
      description:
        "Secured a position in the top 10 participants in the Blind C Coding Competition, showcasing proficiency in C programming without visual aids.",
      type: "competition",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Achievements & Certifications
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Recognitions and certifications I've earned throughout my academic
            and professional journey, highlighting my continuous learning and
            growth.
          </p>
        </div>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2 h-6 w-6 text-primary" />
            Professional Certifications
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificates.map((cert) => (
              <motion.div key={cert.id} variants={item}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <span className="mr-2">{cert.issuer}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {cert.date}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    {cert.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        asChild
                      >
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Certificate
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <CheckCircle2 className="mr-2 h-6 w-6 text-primary" />
            Notable Achievements
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement) => (
              <motion.div key={achievement.id} variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
                      <Badge
                        variant={
                          achievement.type === "recognition"
                            ? "default"
                            : achievement.type === "academic"
                            ? "outline"
                            : "secondary"
                        }
                        className="capitalize"
                      >
                        {achievement.type}
                      </Badge>
                    </div>
                    <CardDescription>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {achievement.date}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Additional Skills & Courses */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">
            Additional Training & Courses
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">
                      Web Development and Python Training
                    </span>
                    <p className="text-muted-foreground">
                      Sumago Infotech (July - August 2022)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Intensive training in HTML, CSS, JavaScript, Bootstrap,
                      PHP, MySQL, SQL, XAMPP, and Python. Developed the
                      PhotoGenic website project and a Python-based hotel
                      management system.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">
                      Microsoft Certified: MS-CIT
                    </span>
                    <p className="text-muted-foreground">Microsoft (2021)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Comprehensive training in Microsoft Office applications
                      and basic computer skills.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <div>
                    <span className="font-medium">
                      AI and Machine Learning Bootcamp
                    </span>
                    <p className="text-muted-foreground">
                      Online Workshop (2023)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Intensive training in AI concepts, machine learning
                      models, and practical applications in computer vision.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
}
