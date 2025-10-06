import {motion} from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-sky-100" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Hello, World!
        </motion.h1>
        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7, delay: 0.1}}
          className="mt-6 max-w-2xl text-lg text-gray-600"
        >
          A minimal landing page starter built with Vite, React, and Tailwind CSS.
        </motion.p>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          className="mt-10 flex items-center gap-3"
        >
          <a
            href="#features"
            className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800"
          >
            Explore Features
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
