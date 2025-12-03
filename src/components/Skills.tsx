import { motion } from "framer-motion";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: "https://camo.githubusercontent.com/15afe50b578130e8070a9b7f934e715ec752f7392693a31c7e267c22c1a91b67/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6963726f736f66745f617a7572652f6d6963726f736f66745f617a7572652d69636f6e2e737667",
      title: "Azure",
      style: "shadow-blue-500",
      href: "https://azure.microsoft.com"
    },
    {
      id: 2,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg",
      title: ".NET",
      style: "shadow-purple-500",
      href: "https://dotnet.microsoft.com"
    },
    {
      id: 3,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      title: "C#",
      style: "shadow-purple-600",
      href: "https://www.w3schools.com/cs/"
    },
    {
      id: 4,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      title: "JavaScript",
      style: "shadow-yellow-500",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      id: 5,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      title: "TypeScript",
      style: "shadow-blue-600",
      href: "https://www.typescriptlang.org/"
    },
    {
      id: 6,
      src: "https://camo.githubusercontent.com/26bbaf1d87a1141e8ff2fb4d2585c4076dd772707b679d3864ba3bc3c719abe8/68747470733a2f2f72656163746e61746976652e6465762f696d672f6865616465725f6c6f676f2e737667",
      title: "React Native",
      style: "shadow-cyan-400",
      href: "https://reactnative.dev/"
    },
    {
      id: 7,
      src: "https://camo.githubusercontent.com/34751aec19b2fc1743ee89e48a8e5eaf4badf063c0172a9137d5838649385439/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e406c61746573742f69636f6e732f6e6573746a732f6e6573746a732d6f726967696e616c2e737667",
      title: "NestJS",
      style: "shadow-red-500",
      href: "https://nestjs.com/"
    },
    {
      id: 8,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      title: "MySQL",
      style: "shadow-blue-400",
      href: "https://www.mysql.com/"
    },
    {
      id: 9,
      src: "https://camo.githubusercontent.com/046a5d6db506e8b1c98aa0d6eea20ea89b581facbe1295cd190d9967ff0fecc7/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3330333232392f6d6963726f736f66742d73716c2d7365727665722d6c6f676f2e737667",
      title: "SQL Server",
      style: "shadow-red-600",
      href: "https://www.microsoft.com/en-us/sql-server"
    },
    {
      id: 10,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      title: "PostgreSQL",
      style: "shadow-blue-300",
      href: "https://www.postgresql.org"
    },
    {
      id: 11,
      src: "https://camo.githubusercontent.com/c9fdfa10dfb2b5d0c3a2e5aa3e402bfc08e14d93f39cce6c3e9e8212e6a8f8f6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f73716c6974652f73716c6974652d69636f6e2e737667",
      title: "SQLite",
      style: "shadow-blue-200",
      href: "https://www.sqlite.org/"
    },
    {
      id: 12,
      src: "https://camo.githubusercontent.com/830ab0a04d79ea91499fd105d265e582bf1e2cdb51a678ba28ee8dfd5031d19b/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      title: "Git",
      style: "shadow-orange-600",
      href: "https://git-scm.com/"
    },
    {
      id: 13,
      src: "https://camo.githubusercontent.com/7e2dc1a7b297b21d35098d994a9236accd52325ce54e6af52213e8f9e3b94e0b/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667",
      title: "Tailwind",
      style: "shadow-sky-400",
      href: "https://tailwindcss.com"
    },
    {
      id: 14,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      title: "Bootstrap",
      style: "shadow-purple-700",
      href: "https://getbootstrap.com"
    },
    {
      id: 15,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      title: "Java",
      style: "shadow-red-400",
      href: "https://www.java.com"
    },
    {
      id: 16,
      src: "https://camo.githubusercontent.com/28abd5ef347f4db16b2f3d39b2e8fd64269f747f987a65b1fa07fcad150a4f6d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f737072696e67696f2f737072696e67696f2d69636f6e2e737667",
      title: "Spring",
      style: "shadow-green-500",
      href: "https://spring.io/"
    },
    {
      id: 17,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      title: "Linux",
      style: "shadow-yellow-200",
      href: "https://www.linux.org/"
    },
    {
      id: 18,
      src: "https://camo.githubusercontent.com/8c088e69ac55dcd5e90e968d47df51efa1c7bec7db5d0a2dee3b7f59adebc237/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      title: "Postman",
      style: "shadow-orange-400",
      href: "https://postman.com"
    },
    {
      id: 19,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      title: "HTML",
      style: "shadow-orange-500",
      href: "https://www.w3.org/html/"
    },
    {
      id: 20,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      title: "CSS",
      style: "shadow-blue-500",
      href: "https://www.w3schools.com/css/"
    },
    {
      id: 21,
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      title: "PHP",
      style: "shadow-purple-400",
      href: "https://www.php.net"
    },
  ];

  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-primary text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies & Tools
          </p>
          <p className="py-6">These are the technologies I work with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, href }) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-gray-800/50 backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer`}
            >
              <img src={src} alt={title} className="w-20 mx-auto py-4" />
              <p className="mt-4 font-bold">{title}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;