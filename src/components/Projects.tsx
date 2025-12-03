import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "Panel de administración completo con gráficos y gestión de usuarios.",
      tech: ["React", "Tailwind", "Chart.js"],
      src: "https://via.placeholder.com/400x300?text=E-commerce+Dashboard", // Replace with real image
      demo: "#",
      code: "#",
    },
    {
      id: 2,
      title: "App del Clima",
      description: "Aplicación de clima en tiempo real con geolocalización.",
      tech: ["React", "OpenWeatherMap", "CSS Modules"],
      src: "https://via.placeholder.com/400x300?text=Weather+App", // Replace with real image
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "Gestor de tareas tipo Kanban con drag and drop.",
      tech: ["React", "Redux", "dnd-kit"],
      src: "https://via.placeholder.com/400x300?text=Task+Manager", // Replace with real image
      demo: "#",
      code: "#",
    },
    {
      id: 4,
      title: "Chat en Tiempo Real",
      description: "Aplicación de mensajería instantánea con salas privadas.",
      tech: ["React", "Socket.io", "Node.js"],
      src: "https://via.placeholder.com/400x300?text=Chat+App", // Replace with real image
      demo: "#",
      code: "#",
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
            Proyectos
          </p>
          <p className="py-6">Mira algunos de mis trabajos recientes</p>
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