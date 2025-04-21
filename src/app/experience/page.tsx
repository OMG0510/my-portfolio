"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Calendar, MapPin, School, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Experience & Education</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            My academic journey and professional experience that have shaped my
            skills and knowledge in software development and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div variants={container} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <School className="mr-2 h-6 w-6" />
              Education
            </h2>

            <div className="space-y-6">
              <motion.div variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>B.Tech. in Information Technology</CardTitle>
                      <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-2 rounded-md">
                        Current
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September 2023 - July 2026 (Expected)</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>
                          JSPM's Rajarshi Shahu College of Engineering, Pune
                        </span>
                      </div>
                      <div className="flex items-center font-medium">
                        <BadgeCheck className="mr-2 h-4 w-4 text-primary" />
                        <span>CGPA: 7.88/10</span>
                      </div>
                      <p className="pt-2">
                        Currently pursuing a Bachelor's degree in Information
                        Technology, focusing on advanced programming, web
                        development, and machine learning concepts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>Diploma in Computer Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>November 2020 - May 2023</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>K.K. Wagh Polytechnic, Nashik</span>
                      </div>
                      <div className="flex items-center font-medium">
                        <BadgeCheck className="mr-2 h-4 w-4 text-primary" />
                        <span>Percentage: 86.80%</span>
                      </div>
                      <p className="pt-2">
                        Completed a comprehensive diploma program in Computer
                        Technology, developing a strong foundation in
                        programming languages, database management, and system
                        architecture.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>Secondary School Certificate (SSC)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>2011 - 2020</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>L.J.T. English Medium School, Nashik</span>
                      </div>
                      <div className="flex items-center font-medium">
                        <BadgeCheck className="mr-2 h-4 w-4 text-primary" />
                        <span>Percentage: 90.80%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={container} initial="hidden" animate="show">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6" />
              Experience
            </h2>

            <div className="space-y-6">
              <motion.div variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>Training and Placement Coordinator</CardTitle>
                      <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-2 rounded-md">
                        Current
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September 2023 - Present</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>JSPM's RSCOE, Pune</span>
                      </div>
                      <p className="pt-2">
                        As a Training and Placement Coordinator, I bridge the
                        gap between students and industry by organizing training
                        sessions, internships, and placement opportunities.
                        Working closely with companies, faculty, and students to
                        ensure smooth placement activities and skill development
                        programs, preparing students for successful careers.
                      </p>
                      <ul className="list-disc pl-5 pt-2 space-y-1 text-muted-foreground">
                        <li>
                          Coordinating with companies for campus placements and
                          recruitment drives
                        </li>
                        <li>
                          Organizing skill development workshops and training
                          sessions
                        </li>
                        <li>
                          Assisting students with resume building and interview
                          preparation
                        </li>
                        <li>
                          Maintaining placement records and preparing reports
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>Web Development Internship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>July 2022 - August 2022</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Sumago Infotech</span>
                      </div>
                      <p className="pt-2">
                        Completed a 4-week internship focused on web development
                        and design, gaining hands-on experience with a range of
                        technologies including HTML, CSS, JavaScript, jQuery,
                        and the Bootstrap framework. Also learned PHP and the
                        fundamentals of object-oriented programming with Python.
                      </p>
                      <p className="pt-1">
                        A key highlight was working on a collaborative platform
                        for photographers called PhotoGenic, applying knowledge
                        in web technologies and template editing to create an
                        engaging user experience. Additionally, developed a mini
                        project in Python related to a hotel management system.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>
                      Participant at Young Indians National Level Event
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>2022</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Future 4.0</span>
                      </div>
                      <p className="pt-2">
                        Participated in the Young Indians National Level Event -
                        Future 4.0, engaging with industry experts and fellow
                        technology enthusiasts on emerging tech trends and
                        innovations. The event provided valuable insights into
                        future technology directions and networking
                        opportunities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
