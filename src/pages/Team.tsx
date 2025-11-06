// import { motion, useInView } from "framer-motion";
// import { Navigation } from "@/components/Navigation";
// import { Loader } from "@/components/Loader";
// import { GlowingCards, GlowingCard } from "@/components/GlowingCard";
// import { useRef } from "react";

// export default function Team() {
//   const teamRef = useRef(null);
//   const teamInView = useInView(teamRef, { once: true, margin: "0px 0px -50px 0px" });

//   const teamMembers = [
//     {
//       name: "Anurag Shinde",
//       role: "Founder - CEO",
//       image: "../vivek.jpg",
//       bio: "Leading creative vision and strategy",
//       number: "_01",
//       glowColor: "#912e7b",
//       socials: {
//         linkedin: "https://www.linkedin.com/in/anuarg-shinde/",
//         github: "#",
//         instagram: "#",
//         youtube: "#"
//       }
//     },
//     {
//       name: "Mahima Mitra",
//       role: "Co-Founder - COO",
//       image: "../girl.jpg",
//       bio: "Expert in long-form content creation",
//       number: "_02",
//       glowColor: "#e91e63",
//       socials: {
//         linkedin: "#",
//         github: "#",
//         instagram: "#",
//         youtube: "#"
//       }
//     },
//     {
//       name: "Vivek Verma",
//       role: "Tech Lead",
//       image: "../vivek.jpg",
//       bio: "Bringing imagination to life in 3D",
//       number: "_03",
//       glowColor: "#3b82f6",
//       socials: {
//         linkedin: "https://www.linkedin.com/in/vivekverma16",
//         github: "https://github.com/vivekisadev",
//         instagram: "https://www.instagram.com/iamvivek1602/",
//         youtube: "#"
//       }
//     },
//     {
//       name: "Gaurav Sapkale",
//       role: "CTO",
//       image: "../vivek.png",
//       bio: "Crafting beautiful digital experiences",
//       number: "_04",
//       glowColor: "#10b981",
//       socials: {
//         linkedin: "#",
//         github: "#",
//         instagram: "#",
//         youtube: "#"
//       }
//     },
//     {
//       name: "Bhumik Tyagi",
//       role: "Team Lead",
//       image: "../vivek.jpg",
//       bio: "Creating stunning visual effects",
//       number: "_05",
//       glowColor: "#f59e0b",
//       socials: {
//         linkedin: "#",
//         github: "#",
//         instagram: "#",
//         youtube: "#"
//       }
//     },
//     {
//       name: "Ayushi Singh",
//       role: "UI/UX Developer",
//       image: "../girl.jpg",
//       bio: "Shaping narratives that resonate",
//       number: "_06",
//       glowColor: "#8b5cf6",
//       socials: {
//         linkedin: "#",
//         github: "#",
//         instagram: "#",
//         youtube: "#"
//       }
//     }
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
//                     <div className="overline-l white">Meet The Team</div>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="hero-title"
//                   >
//                     <h1 className="h1-heading">
//                       The Visionaries <br />Behind Mahirag
//                     </h1>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Grid Section */}
//         <section ref={teamRef} className="f-section-regular">
//           <div className="f-container-regular">
//             <GlowingCards
//               enableGlow={true}
//               glowRadius={20}
//               glowOpacity={0.8}
//               gap="2rem"
//               maxWidth="90rem"
//               className="max-w-7xl mx-auto"
//             >
//               {teamMembers.map((member, index) => (
//                 <GlowingCard
//                   key={index}
//                   glowColor={member.glowColor}
//                   className="group bg-black/50 border border-white/10 hover:border-white/30 rounded-2xl p-6 w-full max-w-[320px] min-w-[320px] mx-auto"
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={teamInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                   >
//                   <div className="h-[280px] overflow-hidden rounded-2xl mb-4 transition-all duration-500 group-hover:rounded-3xl">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
//                     />
//                   </div>
//                   <div className="min-h-[120px]">
//                     <div className="flex justify-between items-center mb-1">
//                       <h3 className="text-xl font-bold text-white transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
//                       <span className="text-xs text-white/40">{member.number}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <p className="text-white/70 text-sm inline-block translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</p>
//                       <div className="flex items-center space-x-3 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//                         {member.socials.linkedin && member.socials.linkedin !== "#" && (
//                           <a 
//                             href={member.socials.linkedin} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             aria-label="LinkedIn Profile"
//                             className="text-white/70 transition-colors hover:text-primary"
//                           >
//                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socials.github && member.socials.github !== "#" && (
//                           <a 
//                             href={member.socials.github} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             aria-label="GitHub Profile"
//                             className="text-white/70 transition-colors hover:text-primary"
//                           >
//                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                               <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socials.instagram && member.socials.instagram !== "#" && (
//                           <a 
//                             href={member.socials.instagram} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             aria-label="Instagram Profile"
//                             className="text-white/70 transition-colors hover:text-primary"
//                           >
//                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.161 0-3.523.012-4.75.068-2.73.123-3.957 1.349-4.08 4.08-.056 1.226-.068 1.588-.068 4.75s.012 3.524.068 4.75c.123 2.73 1.35 3.957 4.08 4.08 1.226.056 1.588.068 4.75.068s3.524-.012 4.75-.068c2.73-.123 3.957-1.349 4.08-4.08.056-1.226.068-1.588.068-4.75s-.012-3.524-.068-4.75c-.123-2.73-1.35-3.957-4.08-4.08-1.226-.056-1.588-.068-4.75-.068z" />
//                               <path d="M12 6.865c-2.837 0-5.135 2.298-5.135 5.135s2.298 5.135 5.135 5.135 5.135-2.298 5.135-5.135S14.837 6.865 12 6.865zm0 8.529c-1.873 0-3.394-1.521-3.394-3.394s1.521-3.394 3.394-3.394 3.394 1.521 3.394 3.394-1.521 3.394-3.394 3.394z" />
//                               <path d="M16.949 6.837c-.727 0-1.316.59-1.316 1.316s.59 1.316 1.316 1.316 1.316-.59 1.316-1.316-.589-1.316-1.316-1.316z" />
//                             </svg>
//                           </a>
//                         )}
//                         {member.socials.youtube && member.socials.youtube !== "#" && (
//                           <a 
//                             href={member.socials.youtube} 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             aria-label="YouTube Channel"
//                             className="text-white/70 transition-colors hover:text-primary"
//                           >
//                             <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                               <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                             </svg>
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   </motion.div>
//                 </GlowingCard>
//               ))}
//             </GlowingCards>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="section-footer">
//           <div className="container-large-6">
//             <div className="footer-wrapper">
//               <img
//                 src="/mahiraglogo.png"
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