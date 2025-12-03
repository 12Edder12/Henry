import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Electronic Billing System",
      description: "A full-stack application that allows you to issue electronic invoices to clients and suppliers.",
      tech: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
      src: "/factura.png", // Replace with real image
      demo: "#",
      code: "https://github.com/HenryCortez/facturacion_servicios",
    },
    {
      id: 2,
      title: "Travel and Parcel System",
      description: "Business logic for Travel and Parcel System.",
      tech: ["NestJs", "Prisma", "TypeScript", "PostgreSQL", "Docker", "Docker Compose"],
      src: "/Viajes.png", // Replace wit|h real image
      demo: "#",
      code: "https://github.com/HenryCortez/Viajes-y-encominedas-github",
    },
    {
      id: 3,
      title: "Water Board System (Private)",
      description: "System for the water board that allows issuing electronic invoices to clients and suppliers.",
      tech: ["NestJs", "Prisma", "TypeScript", "PostgreSQL", "Docker", "Docker Compose"],
      src: "/agua.png", // Replace with real image
      demo: "https://junta-de-agua.vercel.app/login",
      code: "https://github.com/HenryCortez/JuntaAgua",
    },
    {
      id: 4,
      title: "Attendance registration system",
      description: "Employee attendance record with facial recognition.",
      tech: ["Java", "Java Swing", "MySQL"],
      src: "/facial.png", // Replace with real image
      demo: "#",
      code: "https://github.com/HenryCortez/Proyecto_Visuales",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-primary to-gray-900 text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Here are some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description, tech, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:shadow-secondary/50 duration-300"
            >
              <div className="relative group">
                <img
                  src={src}
                  alt={title}
                  className="rounded-t-md duration-200 group-hover:scale-105 w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={demo} target="_blank" rel="noreferrer" className="p-3 bg-secondary rounded-full text-primary hover:bg-white transition-colors">
                        <FaExternalLinkAlt size={20} />
                    </a>
                    <a href={code} target="_blank" rel="noreferrer" className="p-3 bg-gray-700 rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                        <FaGithub size={20} />
                    </a>
                </div>
              </div>
              
              <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                      {tech.map((t, index) => (
                          <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary border border-secondary/30 text-secondary">
                              {t}
                          </span>
                      ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;