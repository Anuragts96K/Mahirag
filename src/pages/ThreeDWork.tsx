// import { motion, useInView } from "framer-motion";
// import { Navigation } from "@/components/Navigation";
// import { Loader } from "@/components/Loader";
// import { HorizontalSlideshow } from "@/components/HorizontalSlideshow";
// import { useRef } from "react";

// export default function ThreeDWork() {
//   const workRef = useRef(null);
//   const workInView = useInView(workRef, { once: true, margin: "0px 0px -50px 0px" });

//   const threeDProjects = [
//     { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", title: "Product Visualization", description: "Photorealistic 3D product renders" },
//     { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", title: "Architectural Walkthrough", description: "Immersive 3D architectural tours" },
//     { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", title: "Character Animation", description: "Dynamic 3D character designs" },
//     { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", title: "Motion Graphics", description: "Abstract 3D motion design" },
//     { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", title: "Game Assets", description: "High-quality 3D game models" },
//     { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", title: "VFX Integration", description: "Seamless 3D visual effects" },
//   ];

//   return (
//     <>
//       <Loader />
//       <div className="min-h-screen bg-black text-white">
//         <Navigation />

//         {/* Hero Section */}
//         <section className="hero">
//           <div className="section-header hero">
//             <div className="container-large">
//               <div className="header-wrap-centre">
//                 <div className="heading-wrapper">
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="hero-label"
//                   >
//                     <div className="overline-l white">3D Modeling & Animation</div>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="hero-title"
//                   >
//                     <h1 className="h1-heading">
//                       Bringing Ideas <br />To Life in 3D
//                     </h1>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 3D Work Showcase */}
//         <section ref={workRef} className="f-section-regular">
//           <div className="heading-wrapper services">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={workInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="overline-l white">Our Portfolio</div>
//               <div className="bottom-margin-16">
//                 <h1 className="f-h3-heading section">3D Projects Showcase</h1>
//               </div>
//               <div className="f-paragraph-large">From concept to reality</div>
//             </motion.div>
//           </div>
//           <HorizontalSlideshow videos={threeDProjects} />
//         </section>

//         {/* Capabilities Section */}
//         <section className="f-section-regular">
//           <div className="f-container-regular">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={workInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             >
//               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/90 to-black/70 border border-white/10 p-8">
//                 <h3 className="text-3xl font-bold text-white mb-4">Our Tools</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3">
//                     <div className="text-primary text-xl">✓</div>
//                     <p className="text-white/90">Blender for 3D modeling and animation</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="text-primary text-xl">✓</div>
//                     <p className="text-white/90">Unreal Engine for game development</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="text-primary text-xl">✓</div>
//                     <p className="text-white/90">Cinema 4D for motion graphics</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/90 to-black/70 border border-white/10 p-8">
//                 <h3 className="text-3xl font-bold text-white mb-4">What We Offer</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3">
//                     <div className="text-primary text-xl">✓</div>
//                     <p className="text-white/90">Product visualization and rendering</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="text-primary text-xl">✓</div>
//                     <p className="text-white/90">Character design and rigging</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="text-primary text-xl">✓</div>
//                     <p className="text-white/90">Architectural visualization</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="section-footer">
//           <div className="container-large-6">
//             <div className="footer-wrapper">
//               <img
//                 src="public/images/Mahirag-nav-logo.png"
//                 loading="lazy"
//                 alt="Mahirag Logo"
//                 className="footer-logo"
//               />
//               <div className="footer-link-wrapper">
//                 <a href="/#services" className="footer-link-2">
//                   <div>Our Experties</div>
//                 </a>
//                 <a href="/team" className="footer-link-2">
//                   <div>Our Team</div>
//                 </a>
//                 <a href="/3d-work" className="footer-link-2">
//                   <div>3D Work</div>
//                 </a>
//                 <a href="/#about" className="footer-link-2">
//                   <div>about us</div>
//                 </a>
//               </div>
//               <p className="paragraph-footer">© 2025 Mahirag. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

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