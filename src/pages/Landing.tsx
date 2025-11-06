import { motion, useInView, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Loader } from "@/components/Loader";
import { HorizontalSlideshow } from "@/components/HorizontalSlideshow";
import { ShortFormSlideshow } from "@/components/ShortFormSlideshow";
import { GlareHover } from "@/components/GlareHover";
import { StarBorder } from "@/components/StarBorder";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function Landing() {
  const [activeServiceTab, setActiveServiceTab] = useState("longform");
  
  // Refs for intersection observer
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "0px 0px -50px 0px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "0px 0px -50px 0px" });

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const longFormVideos = [
    { src: "https://www.youtube.com/embed/yeilG5tMRk0?autoplay=1&mute=1&loop=1&playlist=yeilG5tMRk0&controls=0&showinfo=0&rel=0&modestbranding=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0", title: "Big Buck Bunny", description: "A large and lovable rabbit deals with three tiny bullies" },
    { src: "https://drive.google.com/file/d/123plqXfUse61H1aCXxTEMXR7EJv_faUz/view?usp=drive_link", title: "Elephants Dream", description: "An experimental short film" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", title: "For Bigger Blazes", description: "High-quality video content" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", title: "For Bigger Escapes", description: "Adventure awaits" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", title: "For Bigger Fun", description: "Entertainment at its finest" },
    { src: "https://www.youtube.com/watch?v=yeilG5tMRk0", title: "Big Buck Bunny", description: "A large and lovable rabbit deals with three tiny bullies" },
    { src: "https://drive.google.com/file/d/123plqXfUse61H1aCXxTEMXR7EJv_faUz/view?usp=drive_link", title: "Elephants Dream", description: "An experimental short film" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", title: "For Bigger Blazes", description: "High-quality video content" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", title: "For Bigger Escapes", description: "Adventure awaits" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", title: "For Bigger Fun", description: "Entertainment at its finest" },
    { src: "https://www.youtube.com/watch?v=yeilG5tMRk0", title: "Big Buck Bunny", description: "A large and lovable rabbit deals with three tiny bullies" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", title: "Elephants Dream", description: "An experimental short film" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", title: "For Bigger Blazes", description: "High-quality video content" },
    { src: "https://drive.google.com/file/d/123plqXfUse61H1aCXxTEMXR7EJv_faUz/view?usp=drive_link", title: "For Bigger Escapes", description: "Adventure awaits" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", title: "For Bigger Fun", description: "Entertainment at its finest" },
  ];

  const shortFormVideos = [
    { src: "https://www.youtube.com/shorts/q81pnRt8T5g", title: "Travel Vlog", description: "Quick adventure highlights" },
    { src: "https://www.youtube.com/shorts/q81pnRt8T5g", title: "Product Review", description: "Fast-paced product showcase" },
    { src: "https://www.youtube.com/shorts/LFeNikbRNMM", title: "Story Time", description: "Engaging short narrative" },
    { src: "https://www.youtube.com/shorts/S1by7aAjPTU", title: "Action Reel", description: "Dynamic movement shots" },
    { src: "https://www.youtube.com/shorts/JY2gVdZs8wQ", title: "Lifestyle Content", description: "Daily routine highlights" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", title: "Tutorial Clip", description: "Quick how-to guide" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", title: "Behind The Scenes", description: "Creative process reveal" },
    { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", title: "Trending Challenge", description: "Viral content recreation" },
  ];
  
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="background-video w-background-video w-background-video-atom">
            
            <iframe
              src="https://www.youtube.com/embed/W6M96l9CVcU?autoplay=1&mute=1&loop=1&playlist=W6M96l9CVcU&controls=0&showinfo=0&rel=0&modestbranding=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&cc_load_policy=0"
              allow="autoplay; encrypted-media"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '177.77777778vh',
                minWidth: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                border: 'none'
              }}
            />
          </div>
          <div className="section-header hero">
            <div className="container-large">
              <div className="header-wrap-centre">
                <div className="heading-wrapper">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-label"
                  >
                    <div className="overline-l white">Multimedia Agency</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-title"
                  >
                    <h1 className="h1-heading">
                      Where visionaries <br />hire visionaries.
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-buttons"
                  >
                    <GlareHover
                      width="auto"
                      height="auto"
                      background="transparent"
                      borderRadius="10em"
                      borderColor="transparent"
                      glareColor="#ffffff"
                      glareOpacity={0.3}
                      glareAngle={-45}
                      glareSize={200}
                      transitionDuration={650}
                      className="inline-block"
                    >
                      <StarBorder color="#912e7b" speed="4s" thickness={4}>
                        <a href="mailto:info@mahirag.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Contact Us
                        </a>
                      </StarBorder>
                    </GlareHover>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" ref={servicesRef} className="tab-section-2">
          <div className="tabs-container">
            <div className="heading-wrapper services">
              <div className="overline-l white">Our Experties</div>
              <div className="bottom-margin-16">
                <h1 className="f-h3-heading section">Your one stop shop</h1>
              </div>
              <div className="f-paragraph-large">Your ideas, our minds.</div>
            </div>

            <motion.div 
              className="flex flex-col md:flex-row gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Expanded Card */}
              <AnimatePresence mode="wait">
                {activeServiceTab && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: -20 }}
                    transition={{ 
                      layout: { duration: 0.5, type: "spring", stiffness: 120, damping: 22 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4, ease: "easeInOut" },
                      x: { duration: 0.4, ease: "easeInOut" }
                    }}
                    className="flex-1 relative overflow-hidden rounded-3xl cursor-pointer min-h-[600px]"
                    onClick={() => setActiveServiceTab("")}
                  >
                  <SpotlightCard spotlightColor="rgba(145, 46, 123, 0.4)">
                    <div className="relative h-full min-h-[500px] bg-gradient-to-br from-black/90 to-black/70 p-8 border border-white/10">
                      {/* Arrow Button */}
                      <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection(activeServiceTab === "longform" ? "lf-form" : activeServiceTab === "shortform" ? "sf-form" : activeServiceTab === "3d" ? "3d-work" : "about");
                        }}
                        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-white"
                        style={{ transform: 'rotate(90deg)' }}
                        whileHover={{ 
                          boxShadow: "0 0 40px rgba(145, 46, 123, 0.9), 0 0 80px rgba(145, 46, 123, 0.5)",
                          scale: 1.2,
                          rotate: 45,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 1.1, rotate: 45 }}
                      >
                        <ArrowUp className="w-5 h-5" />
                      </motion.button>

                      {activeServiceTab === "longform" && (
                        <>
                          <h3 className="text-3xl font-bold text-white mb-6">Long-form Videos</h3>
                          <img
                            src="public/images/lf.png"
                            alt="Long-form Videos"
                            className="w-full h-64 object-cover rounded-xl mb-6"
                          />
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">retention-focused social media content, fast-paced editing, motion graphics, and clean, simple edits.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Skilled in Premiere Pro and After Effects.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">we create engaging video edits using transitions, subtitles, masking, rotoscoping, compositions, animation, and motion graphics.</p>
                            </div>
                          </div>
                        </>
                      )}
                      {activeServiceTab === "shortform" && (
                        <>
                          <h3 className="text-3xl font-bold text-white mb-6">Short-form Videos</h3>
                          <img
                            src="public/images/sf-img/sf.png"
                            alt="Short-form Videos"
                            className="w-full h-64 object-cover rounded-xl mb-6"
                          />
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Skilled in short-form video editing like reels and shorts.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Provide subtitles, color effects, and music tracks.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Provide sample videos with the script.</p>
                            </div>
                          </div>
                        </>
                      )}
                      {activeServiceTab === "3d" && (
                        <>
                          <h3 className="text-3xl font-bold text-white mb-6">3D Modeling</h3>
                          <img
                            src="public/images/3d-img/3d.png"
                            alt="3D Modeling"
                            className="w-full h-64 object-cover rounded-xl mb-6"
                          />
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">3d modeling and animation</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Uses blender for 3d modeling and unreal for game development.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Bring imagination to life in three dimensions.</p>
                            </div>
                          </div>
                        </>
                      )}
                      {activeServiceTab === "web" && (
                        <>
                          <h3 className="text-3xl font-bold text-white mb-6">Website Development</h3>
                          <img
                            src="public/images/wd-img/wd.png"
                            alt="Website Development"
                            className="w-full h-64 object-cover rounded-xl mb-6"
                          />
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Websites made with your preferences.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Effective and faster ui.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="text-primary text-xl mt-1">✓</div>
                              <p className="text-white/90">Tons of animations, transitions, and effects.</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.div>
              )}
              </AnimatePresence>

              {/* Collapsed Cards Column */}
              <motion.div 
                layout
                className={`flex flex-col gap-4 ${activeServiceTab ? 'w-full md:w-80 min-h-[600px]' : 'w-full grid grid-cols-1 md:grid-cols-2 gap-6'}`}
                transition={{ 
                  layout: { duration: 0.5, type: "spring", stiffness: 120, damping: 22 }
                }}
              >
                {/* Long-form Videos */}
                {activeServiceTab !== "longform" && (
                  <motion.div
                    layout
                    initial={activeServiceTab ? { opacity: 0, scale: 0.8 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setActiveServiceTab("longform")}
                    className="relative overflow-hidden rounded-3xl cursor-pointer flex-1"
                    transition={{ 
                      layout: { duration: 0.5, type: "spring", stiffness: 120, damping: 22 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SpotlightCard spotlightColor="rgba(145, 46, 123, 0.4)">
                      <div className={`relative bg-gradient-to-br from-black/90 to-black/70 p-6 border border-white/10 h-full ${activeServiceTab ? 'min-h-[135px]' : 'min-h-[264px]'} flex flex-col justify-center`}>
                        <h3 className="text-xl font-bold text-white mb-2">Long-form Videos</h3>
                        {!activeServiceTab && (
                          <p className="text-white/70 text-sm">Click to see details</p>
                        )}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )}

                {/* Short-form Videos */}
                {activeServiceTab !== "shortform" && (
                  <motion.div
                    layout
                    initial={activeServiceTab ? { opacity: 0, scale: 0.8 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setActiveServiceTab("shortform")}
                    className="relative overflow-hidden rounded-3xl cursor-pointer flex-1"
                    transition={{ 
                      layout: { duration: 0.5, type: "spring", stiffness: 120, damping: 22 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SpotlightCard spotlightColor="rgba(145, 46, 123, 0.4)">
                      <div className={`relative bg-gradient-to-br from-black/90 to-black/70 p-6 border border-white/10 h-full ${activeServiceTab ? 'min-h-[135px]' : 'min-h-[264px]'} flex flex-col justify-center`}>
                        <h3 className="text-xl font-bold text-white mb-2">Short-form Videos</h3>
                        {!activeServiceTab && (
                          <p className="text-white/70 text-sm">Click to see details</p>
                        )}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )}

                {/* 3D Modeling */}
                {activeServiceTab !== "3d" && (
                  <motion.div
                    layout
                    initial={activeServiceTab ? { opacity: 0, scale: 0.8 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setActiveServiceTab("3d")}
                    className="relative overflow-hidden rounded-3xl cursor-pointer flex-1"
                    transition={{ 
                      layout: { duration: 0.5, type: "spring", stiffness: 120, damping: 22 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SpotlightCard spotlightColor="rgba(145, 46, 123, 0.4)">
                      <div className={`relative bg-gradient-to-br from-black/90 to-black/70 p-6 border border-white/10 h-full ${activeServiceTab ? 'min-h-[135px]' : 'min-h-[264px]'} flex flex-col justify-center`}>
                        <h3 className="text-xl font-bold text-white mb-2">3D Modeling</h3>
                        {!activeServiceTab && (
                          <p className="text-white/70 text-sm">Click to see details</p>
                        )}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )}

                {/* Website Development */}
                {activeServiceTab !== "web" && (
                  <motion.div
                    layout
                    initial={activeServiceTab ? { opacity: 0, scale: 0.8 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setActiveServiceTab("web")}
                    className="relative overflow-hidden rounded-3xl cursor-pointer flex-1"
                    transition={{ 
                      layout: { duration: 0.5, type: "spring", stiffness: 120, damping: 22 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.4, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SpotlightCard spotlightColor="rgba(145, 46, 123, 0.4)">
                      <div className={`relative bg-gradient-to-br from-black/90 to-black/70 p-6 border border-white/10 h-full ${activeServiceTab ? 'min-h-[135px]' : 'min-h-[264px]'} flex flex-col justify-center`}>
                        <h3 className="text-xl font-bold text-white mb-2">Website Development</h3>
                        {!activeServiceTab && (
                          <p className="text-white/70 text-sm">Click to see details</p>
                        )}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <br />


        <div className="heading-wrapper services">
          <div className="overline-l white">Video - Editing Content</div>
          <div className="bottom-margin-16">
            <h1 className="f-h3-heading section">Long - Form Videos</h1>
          </div>
          <div className="f-paragraph-large">Your ideas, our minds.</div>
        </div>

        {/* Long-Form Videos Slideshow */}
        <section id="lf-form">
          <HorizontalSlideshow videos={longFormVideos} />
        </section>

        <br />

        {/* Short-Form Videos Section Header */}
        <div className="heading-wrapper services">
          <div className="overline-l white">Video - Editing Content</div>
          <div className="bottom-margin-16">
            <h1 className="f-h3-heading section">Short - Form Videos</h1>
          </div>
          <div className="f-paragraph-large">Your ideas, our minds.</div>
        </div>

        {/* Short-Form Videos Slideshow */}
        <section id="sf-form">
          <ShortFormSlideshow videos={shortFormVideos} />
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="f-section-regular about">
          <div className="f-container-regular">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="w-layout-grid f-grid-two-column about"
            >
              <div className="f-content-image-wrapper">
                <img
                  src="/mahirag-about.png"
                  alt="About Us"
                  className="f-image-cover"
                />
              </div>
              <div className="f-content-text-wrapper">
                <div className="f-margin-bottom-08">
                  <div className="overline-l left white">about us</div>
                </div>
                <div className="f-margin-bottom-16">
                  <h3 className="f-h3-heading section">What's Mahirag? &</h3>
                  <h3 className="f-h3-heading section">What do they do?</h3>
                </div>
                <p className="f-paragraph-large about">
                  At Mahirag, we blend artistry with technology to create experiences that inspire. We are a modern multimedia agency where web developers, graphic designers, video editors, 2D artists, and 3D creators work together to transform ideas into meaningful digital stories.<br /><br />
                  At Mahirag, we don't just create content—we design experiences. By collaborating closely with visionaries, brands, and creators, we craft modern, trend-forward, and human-centered solutions that truly stand out.<br /><br />
                  Your vision is our canvas. Let's create something extraordinary together.
                </p>
                <div className="f-header-button-wrap">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'inline-block' }}
                  >
                    <GlareHover
                    width="auto"
                    height="auto"
                    background="transparent"
                    borderRadius="10em"
                    borderColor="transparent"
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-45}
                    glareSize={200}
                    transitionDuration={650}
                    className="display-flex"
                  >
                    <StarBorder color="#912e7b" speed="4s" thickness={4}>
                      <a href="mailto:info@mahirag.xyz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Let's Connect
                      </a>
                    </StarBorder>
                  </GlareHover>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="section-footer">
          <div className="container-large-6">
            <div className="footer-wrapper">
              <img
                src="/mahiraglogo.png"
                loading="lazy"
                alt="Mahirag Logo"
                className="footer-logo"
              />
              <div className="footer-link-wrapper">
                <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
                  <motion.a 
                    href="#services" 
                    className="footer-link-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div>Our Experties</div>
                  </motion.a>
                </SpotlightCard>
                <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
                  <motion.a 
                    href="/team" 
                    className="footer-link-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div>Our Team</div>
                  </motion.a>
                </SpotlightCard>
                <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
                  <motion.a 
                    href="/3d-work" 
                    className="footer-link-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div>3D Work</div>
                  </motion.a>
                </SpotlightCard>
                <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
                  <motion.a 
                    href="#about" 
                    className="footer-link-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div>about us</div>
                  </motion.a>
                </SpotlightCard>
              </div>
              <p className="paragraph-footer">© 2025 Mahirag. All rights reserved.  Created by Vivek</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}