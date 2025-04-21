"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  tags: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
  };
  year: string;
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Traffic Sign Detection Software",
      shortDescription:
        "Machine learning project for real-time traffic sign detection with audio assistance",
      fullDescription: [
        "Traffic signs are essential for ensuring road safety by guiding and warning drivers. However, many existing traffic sign classification systems suffer from limitations such as incorrect predictions, high hardware costs, and maintenance issues.",
        "This project aimed to develop an efficient Traffic Sign Recognition (TSR) system using a Convolutional Neural Network (CNN) to accurately detect and classify traffic signs.",
        "The system was integrated with a webcam-based real-time detection feature, allowing drivers to visualize traffic signs on a display screen for quick decision-making, thereby reducing the chances of missing important road instructions.",
        "As a key contributor, I was responsible for dataset preparation & preprocessing, collecting and preprocessing traffic sign datasets to ensure high-quality training data for the CNN model.",
        "I also developed and integrated a real-time traffic sign detection system using OpenCV and a webcam feed.",
        "The project achieved high classification accuracy for multiple traffic sign categories using the CNN model and successfully reduced false predictions compared to traditional classification methods.",
      ],
      tags: ["Python", "Machine Learning", "OpenCV", "Image Processing", "CNN"],
      image: "/assets/project-traffic.jpg",
      links: {
        github: "https://github.com/omgaikwad08/traffic-sign-detection",
      },
      year: "2022-2023",
    },
    {
      id: 2,
      title: "PhotoGenic Website",
      shortDescription:
        "A visually appealing and functional website for professional photographers",
      fullDescription: [
        "PhotoGenic is a visually appealing and functional website designed for professional photographers to showcase their best work in a structured and engaging manner.",
        "The platform categorizes images into various themes such as weddings, portraits, and nature photography, allowing visitors to navigate seamlessly through the portfolio.",
        "The website integrates an easy-to-use booking system, a client testimonial section, and a contact form to enhance client engagement and streamline inquiries.",
        "As a core developer of the project, I customized website templates to align with the photographer's branding and aesthetic preferences.",
        "I designed and optimized the database structure to store image details, client bookings, and testimonials securely.",
        "I implemented interactive UI elements to enhance user experience, such as dynamic galleries, smooth transitions, and form validation.",
        "The project resulted in a visually stunning and responsive website with a user-friendly booking system and secure backend for efficient data handling.",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "SQL", "XAMPP"],
      image: "/assets/project-photogenic.jpg",
      links: {
        github: "https://github.com/omgaikwad08/photogenic",
      },
      year: "2021-2022",
    },
    {
      id: 3,
      title: "Airline Reservation System",
      shortDescription:
        "Java-based application for managing airline reservations",
      fullDescription: [
        "A comprehensive airline reservation system developed in Java that allows users to search, book, and manage flight reservations.",
        "The system includes features for user authentication, flight searching, seat selection, booking confirmation, and ticket management.",
        "The application uses object-oriented programming principles and incorporates proper error handling and data validation.",
        "The user interface is designed to be intuitive and user-friendly, providing a seamless booking experience.",
      ],
      tags: ["Java", "OOP", "GUI", "Database"],
      image: "/assets/project-airline.jpg",
      links: {
        github: "https://github.com/omgaikwad08/airline-reservation",
      },
      year: "2022",
    },
    {
      id: 4,
      title: "Hotel Management System",
      shortDescription: "Python-based hotel management application",
      fullDescription: [
        "A comprehensive hotel management system developed in Python that facilitates room booking, check-in/check-out processes, and billing.",
        "The system includes features for room availability checking, guest information management, service requests, and generating invoices.",
        "The application employs file handling for data persistence and implements a command-line interface for easy operation.",
        "The project focuses on creating an efficient system that streamlines hotel operations and improves guest experience.",
      ],
      tags: ["Python", "File Handling", "CLI"],
      image: "/assets/project-hotel.jpg",
      links: {
        github: "https://github.com/omgaikwad08/hotel-management",
      },
      year: "2021",
    },
    {
      id: 5,
      title: "Cyber Cafe Management System",
      shortDescription: "C++ based management system for cyber cafes",
      fullDescription: [
        "A comprehensive management system designed for cyber cafes to track computer usage, customer information, and billing.",
        "The system includes features for user login/logout, time tracking, service selection, and automated billing based on usage time.",
        "Implements object-oriented programming principles in C++ with efficient data structures for optimal performance.",
        "The application provides reporting features for daily, weekly, and monthly usage statistics to help cafe owners track business performance.",
      ],
      tags: ["C++", "OOP", "Data Structures", "File I/O"],
      image: "/assets/project-cybercafe.jpg",
      links: {
        github: "https://github.com/omgaikwad08/cyber-cafe-management",
      },
      year: "2021",
    },
    {
      id: 6,
      title: "Budget Manager App",
      shortDescription: "Android application for personal budget management",
      fullDescription: [
        "A mobile application developed with Java and Android Studio that helps users track their personal finances and manage budgets.",
        "Features include expense tracking, income recording, budget setting, spending analysis, and financial reporting.",
        "The app implements local data storage using SQLite for managing user data securely on the device.",
        "Incorporates material design principles for a modern, intuitive user interface with smooth navigation and visual feedback.",
      ],
      tags: ["Java", "Android Studio", "XML", "SQLite"],
      image: "/assets/project-budget.jpg",
      links: {
        github: "https://github.com/omgaikwad08/budget-manager",
      },
      year: "2022",
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
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Here are some of the key projects I've worked on throughout my
            academic and personal journey. Each project represents a unique
            challenge and learning experience in my development path.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        {selectedProject && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-base font-medium">
                {selectedProject.year}
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-64 w-full overflow-hidden rounded-md my-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="space-y-2">
                {selectedProject.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              {selectedProject.links.github && (
                <Button variant="outline" asChild>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {selectedProject.links.live && (
                <Button asChild>
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
