// src/components/home/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm Om Gaikwad
              </h1>
              <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Aspiring software developer specializing in web development and
                machine learning
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 p-1">
              <div className="absolute inset-0 rounded-full bg-background"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-xl font-bold">B.Tech. IT</h2>
                  <p className="text-muted-foreground">JSPM's RSCOE, Pune</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="text-sm font-medium">Skills</div>
                      <div className="text-xs text-muted-foreground">
                        Programming, Web Dev, ML
                      </div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="text-sm font-medium">Experience</div>
                      <div className="text-xs text-muted-foreground">
                        Projects, Internships
                      </div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="text-sm font-medium">Education</div>
                      <div className="text-xs text-muted-foreground">
                        Pursuing B.Tech
                      </div>
                    </div>
                    <div className="rounded-lg bg-secondary p-2">
                      <div className="text-sm font-medium">Interests</div>
                      <div className="text-xs text-muted-foreground">
                        Football, Reading, Hiking
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}