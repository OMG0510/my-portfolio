"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Award, BookOpen, User } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="sticky top-24"
            >
              <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden mb-6">
                <Image
                  src="/assets/Professional.png"
                  alt="Om Gaikwad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <User className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Name</p>
                      <p className="text-muted-foreground">Om Mukund Gaikwad</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Date of Birth</p>
                      <p className="text-muted-foreground">October 5, 2004</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Languages</p>
                      <p className="text-muted-foreground">
                        English, Hindi, Marathi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Current Focus</p>
                      <p className="text-muted-foreground">
                        Machine Learning, Web Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Tabs defaultValue="bio" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="bio">Biography</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="interests">Interests</TabsTrigger>
                </TabsList>
                <TabsContent value="bio" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Biography</CardTitle>
                      <CardDescription>
                        Learn more about my background and journey
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        As an aspiring software developer currently pursuing my
                        B.Tech in Information Technology at JSPM's Rajarshi
                        Shahu College of Engineering in Pune, I am passionate
                        about creating innovative solutions that solve
                        real-world problems.
                      </p>
                      <p>
                        With a strong foundation in Computer Technology from my
                        diploma studies at K.K. Wagh Polytechnic, where I
                        graduated with an impressive 86.80%, I have developed
                        expertise in various programming languages and
                        technologies including C, C++, Java, Python, and web
                        development frameworks.
                      </p>
                      <p>
                        My academic journey began at L.J.T. English Medium
                        School, where I achieved 90.80% in my SSC examinations,
                        demonstrating my commitment to excellence from an early
                        stage.
                      </p>
                      <p>
                        I have a particular interest in machine learning and web
                        development, as demonstrated by my Traffic Sign
                        Detection Software project which achieved an 85%
                        improvement in recognition accuracy using deep learning
                        models. I enjoy tackling complex challenges and creating
                        elegant solutions that enhance user experiences.
                      </p>
                      <p>
                        Currently serving as a Training and Placement Executive,
                        I help bridge the gap between students and industry by
                        organizing training sessions and placement
                        opportunities. This role has enhanced my leadership and
                        communication skills while allowing me to contribute to
                        my peers' career development.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="education" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Educational Background</CardTitle>
                      <CardDescription>
                        My academic journey and achievements
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="border-l-2 border-primary pl-6 py-2 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-3"></div>
                        <h3 className="text-lg font-semibold">
                          Bachelor of Technology in Information Technology
                        </h3>
                        <p className="text-muted-foreground">
                          JSPM's Rajarshi Shahu College of Engineering, Pune
                        </p>
                        <p className="text-sm">
                          September 2023 - July 2026 (Expected)
                        </p>
                        <p className="mt-1">CGPA: 7.88/10</p>
                      </div>
                      <div className="border-l-2 border-primary pl-6 py-2 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-3"></div>
                        <h3 className="text-lg font-semibold">
                          Diploma in Computer Technology
                        </h3>
                        <p className="text-muted-foreground">
                          K.K. Wagh Polytechnic, Nashik
                        </p>
                        <p className="text-sm">November 2020 - May 2023</p>
                        <p className="mt-1">Percentage: 86.80%</p>
                      </div>
                      <div className="border-l-2 border-primary pl-6 py-2 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-3"></div>
                        <h3 className="text-lg font-semibold">
                          Secondary School Certificate (SSC)
                        </h3>
                        <p className="text-muted-foreground">
                          L.J.T. English Medium School, Nashik
                        </p>
                        <p className="text-sm">2011 - 2020</p>
                        <p className="mt-1">Percentage: 90.80%</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="interests" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Interests</CardTitle>
                      <CardDescription>
                        Hobbies and activities I enjoy
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-card/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-lg mb-2">
                            Sports & Physical Activities
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              <span>
                                Playing football - Team member in college
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              <span>Hiking and outdoor adventures</span>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              <span>Chess - Strategic thinking games</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-card/50 p-4 rounded-lg">
                          <h4 className="font-semibold text-lg mb-2">
                            Intellectual Pursuits
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              <span>
                                Reading technical and non-fiction books
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              <span>
                                Coding challenges on platforms like LeetCode
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="mr-2 text-primary">•</span>
                              <span>
                                Participating in tech events and hackathons
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="mt-4">
                        I'm particularly passionate about using technology to
                        solve real-world problems. I enjoy participating in
                        coding competitions and have been involved in
                        national-level events like Young Indians: Future 4.0 and
                        AI-For-India. These experiences have broadened my
                        perspective and strengthened my problem-solving
                        abilities.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
