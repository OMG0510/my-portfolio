"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  icon: string;
  proficiency: number;
};

export default function SkillsPage() {
  const programmingSkills: Skill[] = [
    { name: "C", icon: "/assets/c.png", proficiency: 85 },
    { name: "C++", icon: "/assets/c++.png", proficiency: 80 },
    { name: "Java", icon: "/assets/Java.png", proficiency: 90 },
    { name: "Python", icon: "/assets/python logo.png", proficiency: 90 },
  ];

  const webSkills: Skill[] = [
    { name: "HTML", icon: "/assets/html5.png", proficiency: 95 },
    { name: "CSS", icon: "/assets/css3.png", proficiency: 90 },
    { name: "JavaScript", icon: "/assets/JS.png", proficiency: 85 },
    { name: "Bootstrap", icon: "/assets/BS.png", proficiency: 85 },
    { name: "PHP", icon: "/assets/PHP.png", proficiency: 75 },
  ];

  const databaseSkills: Skill[] = [
    { name: "MySQL", icon: "/assets/mysql.png", proficiency: 85 },
    { name: "MongoDB", icon: "/assets/MongoDB.png", proficiency: 70 },
  ];

  const otherSkills: Skill[] = [
    { name: "Git", icon: "/assets/Git.png", proficiency: 80 },
    {
      name: "Machine Learning",
      icon: "/assets/python logo.png",
      proficiency: 75,
    },
    {
      name: "Image Processing",
      icon: "/assets/python logo.png",
      proficiency: 70,
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

  const renderSkills = (skills: Skill[]) => (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skill) => (
        <motion.div key={skill.name} variants={item}>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="relative w-10 h-10 mr-4">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Skills & Tech Stack</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I've developed a diverse set of technical skills through my academic
            projects and personal exploration. Here's an overview of my current
            technical capabilities.
          </p>
        </div>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="database">Databases</TabsTrigger>
            <TabsTrigger value="other">Other Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="mt-4">
            {renderSkills(programmingSkills)}
          </TabsContent>

          <TabsContent value="web" className="mt-4">
            {renderSkills(webSkills)}
          </TabsContent>

          <TabsContent value="database" className="mt-4">
            {renderSkills(databaseSkills)}
          </TabsContent>

          <TabsContent value="other" className="mt-4">
            {renderSkills(otherSkills)}
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">Current Focus</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Advanced Machine Learning techniques for computer vision
                      applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Modern web development frameworks like React and Next.js
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cloud computing services and containerization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-4">
                  Future Learning Goals
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Deep learning and neural networks for advanced AI
                      applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Mobile app development with React Native</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>DevOps practices and CI/CD pipelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
