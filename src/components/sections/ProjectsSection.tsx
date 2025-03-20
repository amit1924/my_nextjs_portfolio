import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  images?: string[];
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "Check out some of my recent work",
  projects = [
    {
      id: "project-1",
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS",
      longDescription:
        "This is a fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion. It features smooth animations, dark/light mode toggle, and interactive project cards.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://netxjs-portfolio-eosin.vercel.app/login"
      repoUrl: "https://github.com/example/portfolio",
      images: [
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      ],
    },
    {
      id: "project-2",
      title: "E-commerce website",
      description:
        "An e-commerce website for managing e-commerce products and orders",
      longDescription:
        "A comprehensive admin dashboard for e-commerce businesses to manage products, track orders, and analyze sales data. Built with React and zustand",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      technologies: ["React", "Redux", "Chart.js", "Material UI"],
      demoUrl: "https://digital-ecommerce-frontend.vercel.app/"
      repoUrl: "https://github.com/example/dashboard",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      ],
    },
    {
      id: "project-3",
      title: "AI Assistant App",
      description: "Ask anything to this ai assistant for generating image ,query ,real time weather updates",
      longDescription:
        "An AI  Assistant that provides real-time interaction for any queries. Features include weather conditions, generating images, and interactive maps. Built with React and used OpenWeather API.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
      technologies: ["React", "OpenWeather API", "Leaflet Maps", "CSS Modules"],
      demoUrl: "https://ai-app-swart-zeta.vercel.app/"
      repoUrl: "https://github.com/example/weather-app",
      images: [
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
        "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=800&q=80",
      ],
    },
  ],
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-background min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
              onClick={handleOpenProject}
            />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={{
            id: selectedProject.id,
            title: selectedProject.title,
            description: selectedProject.description,
            longDescription: selectedProject.longDescription,
            technologies: selectedProject.technologies,
            imageUrl: selectedProject.image,
            liveUrl: selectedProject.demoUrl,
            repoUrl: selectedProject.repoUrl,
            images: selectedProject.images,
          }}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
