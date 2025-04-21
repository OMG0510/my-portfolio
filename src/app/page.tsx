"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-24 md:py-32">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Om Gaikwad
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Aspiring Software Developer
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            Building innovative web applications and ML solutions with expertise
            in Python, Java, and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1DavSnMOipvAWdf6DQALmynNHDDbSHwsn/view?usp=sharing"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/assets/Professional.png"
              alt="Om Gaikwad"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-24 md:mt-32"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Core Skills</h3>
            <p className="text-muted-foreground">
              Python, Java, C++, and modern web technologies with expertise in
              machine learning applications.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">
              B.Tech in Information Technology from JSPM's Rajarshi Shahu
              College of Engineering, Pune.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-muted-foreground">
              Traffic Sign Detection Software, PhotoGenic Website, and various
              mini applications.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
