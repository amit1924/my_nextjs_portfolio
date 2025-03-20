import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;
    repoUrl?: string;
    images?: string[];
  };
}

const ProjectModal = ({
  isOpen = false,
  onClose = () => {},
  project = {
    id: "1",
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS",
    longDescription:
      "This is a fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion. It features smooth animations, dark/light mode toggle, and interactive project cards.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/portfolio",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    ],
  },
}: ProjectModalProps) => {
  // Animation variants for the modal content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // Current image index for gallery
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Navigate through project images
  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images!.length - 1 : prev - 1,
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-background max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 space-y-6"
        >
          {/* Project Image Gallery */}
          {project.images && project.images.length > 0 && (
            <div className="relative rounded-lg overflow-hidden aspect-video bg-muted">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-muted-foreground/50"}`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <span className="sr-only">Previous</span>
                    &larr;
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <span className="sr-only">Next</span>
                    &rarr;
                  </Button>
                </>
              )}
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">About this project</h3>
              <p className="text-muted-foreground">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <DialogFooter className="flex justify-between items-center mt-6 sm:mt-0">
          <Button variant="outline" onClick={onClose}>
            <X className="mr-2 h-4 w-4" />
            Close
          </Button>
          <div className="flex gap-2">
            {project.repoUrl && (
              <Button
                as="a"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <Github className="mr-2 h-4 w-4" />
                Repository
              </Button>
            )}
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
