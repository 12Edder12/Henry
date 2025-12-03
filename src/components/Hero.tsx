import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-primary via-primary to-gray-900 text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Hi, I'm Henry Cortez
          </motion.h2>
          <h3 className="text-2xl sm:text-4xl font-bold text-secondary mt-4 h-20 sm:h-auto">
            <Typewriter
              words={["Full-Stack Software Engineer", "Backend Developer", "Mobile Developer", ".NET Expert"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 py-4 max-w-md text-lg"
          >
            I am a versatile software engineer with hands-on experience across backend development, mobile applications, and server-side architecture. My work spans .NET ecosystems, cross-platform mobile development, and modern JavaScript frameworks. I enjoy building systems that scale, integrate, and provide real business value.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.7, duration: 1 }}
             className="text-gray-400 text-sm mb-4 max-w-md"
          >
             <p>🔭 Currently working on multiple full-stack solutions, automation tools, and service integrations.</p>
             <p>🌱 Expanding expertise in server administration, cloud infrastructure, and AI-driven applications.</p>
             <p className="italic mt-2">“27/04/2025 — remember the date, the date that I lose it all.”</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/HenryCortez?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-cyan-500/50"
            >
              GitHub <FaGithub size={20} className="ml-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/henry-steven-cortez-25804b3a0"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-blue-600/50"
            >
              Contact Me <FaLinkedin size={20} className="ml-2" />
            </a>
             <a
              href="/cv.pdf"
              download
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-secondary cursor-pointer hover:bg-secondary hover:text-primary duration-300"
            >
              CV <FaFileDownload size={20} className="ml-2" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          {/* Placeholder for profile image or 3D element */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-secondary to-accent p-1 animate-pulse">
             <div className="w-full h-full rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img 
                  src="/my.jpeg" 
                  alt="Henry Cortez" 
                  className="w-full h-full object-cover object-center"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;