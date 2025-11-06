import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useNavigate } from "react-router";
import { GlareHover } from "@/components/GlareHover";
import { StarBorder } from "@/components/StarBorder";
import { SpotlightCard } from "@/components/SpotlightCard";

function useDockItemSize(
  mouseX: MotionValue<number>,
  baseItemSize: number,
  magnification: number,
  distance: number,
  ref: React.RefObject<HTMLDivElement | null>,
  spring: { mass: number; stiffness: number; damping: number }
) {
  const mouseDistance = useTransform(mouseX, (val) => {
    if (typeof val !== "number" || isNaN(val)) return 0;
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  return useSpring(targetSize, spring);
}

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  mouseX: MotionValue<number>;
  baseItemSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
}

function DockItem({
  icon,
  label,
  onClick,
  mouseX,
  baseItemSize,
  magnification,
  distance,
  spring,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);
  const size = useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring
  );
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (value) =>
      setShowLabel(value === 1)
    );
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className="relative inline-flex items-center justify-center rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg cursor-pointer"
      tabIndex={0}
      role="button"
    >
      <div className="flex items-center justify-center text-white text-xs font-semibold uppercase tracking-wider">
        {icon}
      </div>
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 w-fit whitespace-pre rounded-md border border-white/10 bg-black/90 backdrop-blur-xl px-2 py-1 text-xs text-white"
            style={{ x: "-50%" }}
            role="tooltip"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Mobile Dock
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const spring = { mass: 0.1, stiffness: 150, damping: 12 };
  const magnification = 60;
  const distance = 150;
  const panelHeight = 56;
  const dockHeight = 200;
  const baseItemSize = 44;

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const animatedHeight = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring
  );

  const dockItems = [
    {
      icon: <img src="/mahiraglogo.png" alt="Home" className="w-6 h-6" />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: "SVC",
      label: "Services",
      onClick: () => {
        navigate("/");
        setTimeout(() => scrollToSection("services"), 100);
      },
    },
    {
      icon: "TEAM",
      label: "Team",
      onClick: () => navigate("/team"),
    },
    {
      icon: "3D",
      label: "3D Work",
      onClick: () => navigate("/3d-work"),
    },
    {
      icon: "CNT",
      label: "Contact",
      onClick: () => {
        navigate("/");
        setTimeout(() => scrollToSection("contact"), 100);
      },
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`navigation ${isScrolled ? 'shrunk' : ''} hidden md:flex`}>
        <div className="navigation-container">
          <div 
            className="brand"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ cursor: 'pointer' }}
          >
            <img src="/mahiraglogo.png" alt="Logo" />
          </div>

          <div className="nav-menu-2">
            <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
              <button onClick={() => { navigate("/"); setTimeout(() => scrollToSection("services"), 100); }} className="nav-link">
                Services
              </button>
            </SpotlightCard>
            <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
              <button onClick={() => navigate("/team")} className="nav-link">
                Team
              </button>
            </SpotlightCard>
            <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
              <button onClick={() => navigate("/3d-work")} className="nav-link">
                3D Work
              </button>
            </SpotlightCard>
            <SpotlightCard className="inline-block" spotlightColor="rgba(145, 46, 123, 0.3)">
              <button onClick={() => { navigate("/"); setTimeout(() => scrollToSection("about"), 100); }} className="nav-link">
                About
              </button>
            </SpotlightCard>
          </div>

          <div className="cta-buttons">
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
                className="inline-block"
              >
                <StarBorder color="#912e7b" speed="4s" thickness={4}>
                  <a href="#socials" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Socials
                  </a>
                </StarBorder>
              </GlareHover>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Dock */}
      <motion.div
        style={{ height: animatedHeight }}
        className="fixed top-2 left-1/2 -translate-x-1/2 z-[1000] flex md:hidden"
      >
        <motion.div
          onMouseMove={({ pageX }) => {
            isHovered.set(1);
            mouseX.set(pageX);
          }}
          onMouseLeave={() => {
            isHovered.set(0);
            mouseX.set(Infinity);
          }}
          className="flex items-end gap-3 w-fit rounded-2xl border-2 border-white/10 bg-black/90 backdrop-blur-xl px-3 pb-2 shadow-2xl"
          style={{ height: panelHeight }}
          role="toolbar"
          aria-label="Navigation dock"
        >
          {dockItems.map((item, index) => (
            <DockItem
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
              mouseX={mouseX}
              baseItemSize={baseItemSize}
              magnification={magnification}
              distance={distance}
              spring={spring}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}