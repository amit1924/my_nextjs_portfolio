import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Eye, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  onClick?: (id: string) => void;
}

const ProjectCard = ({
  id = "project-1",
  title = "Project Title",
  description = "A short description of the project showcasing the main features and technologies used.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  technologies = ["React", "TypeScript", "Tailwind"],
  demoUrl = "https://example.com",
  repoUrl = "https://github.com",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onClick(id)}
            className="flex items-center gap-1"
          >
            <Eye size={16} />
            <span>Details</span>
          </Button>

          <div className="flex gap-2">
            {repoUrl && (
              <Button variant="outline" size="icon" asChild className="h-8 w-8">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </a>
              </Button>
            )}

            {demoUrl && (
              <Button variant="outline" size="icon" asChild className="h-8 w-8">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
