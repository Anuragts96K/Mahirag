import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <div className="max-w-5xl mx-auto relative px-4">
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            {/* Brand Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <img
                src="/mahiragsvg.png"
                alt="Mahirag Logo"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </motion.div>

            {/* 404 Text */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold text-white mb-4"
            >
              404
            </motion.h1>

            {/* Message */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 mb-2"
            >
              Page under construction...
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-white/60 mb-8"
            >
              We'll get back to you soon
            </motion.p>

            {/* Back to Home Button */}
            <motion.a
              href="/"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Return Home
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}