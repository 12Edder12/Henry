import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-primary p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Send the form to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            action="https://formsubmit.co/henrystevencortez4566@gmail.com"
            method="POST"
            className="flex flex-col w-full md:w-1/2 bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm shadow-lg shadow-secondary/20"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-secondary transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-secondary transition-colors"
            />
            <textarea
              name="message"
              rows={10}
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-secondary transition-colors"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-lg shadow-cyan-500/50 font-bold">
              Let's talk
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;