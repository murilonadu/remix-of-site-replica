import { memo } from "react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

// Fixed dimensions to prevent CLS
const PROJECT_IMAGE_WIDTH = 400;
const PROJECT_IMAGE_HEIGHT = 256;

const projects = [
  { image: project1, alt: "Detalhamento de Guarda Roupa" },
  { image: project2, alt: "Projeto Sala de Estar" },
  { image: project3, alt: "Detalhamento de Armário" },
  { image: project4, alt: "Projetos de Móveis" },
  { image: project5, alt: "Cuba Esculpida" },
  { image: project6, alt: "Projeto de Cozinha" },
];

const ProjectsGallery = memo(() => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Um pouco dos nossos projetos <span className="text-primary">👇🏻</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.alt}
                width={PROJECT_IMAGE_WIDTH}
                height={PROJECT_IMAGE_HEIGHT}
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm font-medium text-foreground">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsGallery.displayName = "ProjectsGallery";

export default ProjectsGallery;
