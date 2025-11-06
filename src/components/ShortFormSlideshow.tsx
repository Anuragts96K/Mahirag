import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaTimeRange,
} from "media-chrome/react";

interface Video {
  src: string;
  title: string;
  description: string;
  type?: "video" | "youtube" | "drive";
  thumbnail?: string; // Optional custom thumbnail URL
}

interface ShortFormSlideshowProps {
  videos: Video[];
}

export function ShortFormSlideshow({ videos }: ShortFormSlideshowProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // pixels per frame

    const autoScroll = () => {
      if (!isDragging && !isHovering && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 1) {
          // Reset to start for infinite loop
          container.scrollLeft = 0;
        } else {
          // Scroll right
          container.scrollLeft += scrollSpeed;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging, isHovering]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    // Handle infinite loop during drag
    if (newScrollLeft < 0) {
      container.scrollLeft = maxScroll + newScrollLeft;
      setScrollLeft(maxScroll + newScrollLeft);
      setStartX(x);
    } else if (newScrollLeft > maxScroll) {
      container.scrollLeft = newScrollLeft - maxScroll;
      setScrollLeft(newScrollLeft - maxScroll);
      setStartX(x);
    } else {
      container.scrollLeft = newScrollLeft;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <>
      <div 
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative w-full overflow-x-auto px-6 py-6 scrollbar-hide"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="flex gap-6 w-max">
          {videos.map((video, index) => (
            <VideoPreview
              key={index}
              video={video}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <VideoPopOver
            video={selectedVideo}
            setShowVideoPopOver={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

interface VideoPreviewProps {
  video: Video;
  onClick: () => void;
}

function VideoPreview({ video, onClick }: VideoPreviewProps) {
  const SPRING = { mass: 0.1 };
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    opacity.set(1);
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  // Extract YouTube video ID if it's a YouTube URL (including Shorts)
  const getYouTubeId = (url: string) => {
    // Handle YouTube Shorts URLs
    const shortsRegExp = /youtube\.com\/shorts\/([^?&]+)/;
    const shortsMatch = url.match(shortsRegExp);
    if (shortsMatch && shortsMatch[1]) return shortsMatch[1];
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Extract Google Drive file ID
  const getDriveId = (url: string) => {
    const regExp = /\/file\/d\/([^/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const isYouTube = video.type === "youtube" || getYouTubeId(video.src);
  const isDrive = video.type === "drive" || video.src.includes("drive.google.com");
  const youtubeId = isYouTube ? getYouTubeId(video.src) : null;
  const driveId = isDrive ? getDriveId(video.src) : null;

  return (
    <div
      onMouseMove={handlePointerMove}
      onMouseLeave={() => opacity.set(0)}
      onClick={onClick}
      className="relative w-[300px] overflow-hidden rounded-2xl cursor-pointer group bg-black"
      style={{ aspectRatio: '9/16' }}
    >
      <motion.div
        style={{ x, y, opacity }}
        className="absolute z-20 flex w-fit select-none items-center justify-center gap-2 p-2 text-sm text-white mix-blend-exclusion pointer-events-none"
      >
        <Play className="size-4 fill-white" /> Play
      </motion.div>
      {video.thumbnail ? (
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : isYouTube && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
          allow="autoplay; encrypted-media"
          className="h-full w-full object-cover pointer-events-none"
          style={{ border: 'none' }}
        />
      ) : isDrive && driveId ? (
        <div className="h-full w-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">📁</div>
            <div className="text-sm">Google Drive Video</div>
          </div>
        </div>
      ) : (
        <div className="sf-video-container h-full">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          >
            <source src={video.src} />
          </video>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white font-semibold">{video.title}</h3>
        {video.description && (
          <p className="text-white/80 text-sm">{video.description}</p>
        )}
      </div>
    </div>
  );
}

interface VideoPopOverProps {
  video: Video;
  setShowVideoPopOver: (show: boolean) => void;
}

function VideoPopOver({ video, setShowVideoPopOver }: VideoPopOverProps) {
  // Extract YouTube video ID if it's a YouTube URL (including Shorts)
  const getYouTubeId = (url: string) => {
    // Handle YouTube Shorts URLs
    const shortsRegExp = /youtube\.com\/shorts\/([^?&]+)/;
    const shortsMatch = url.match(shortsRegExp);
    if (shortsMatch && shortsMatch[1]) return shortsMatch[1];
    
    // Handle regular YouTube URLs
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Extract Google Drive file ID
  const getDriveId = (url: string) => {
    const regExp = /\/file\/d\/([^/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const isYouTube = video.type === "youtube" || getYouTubeId(video.src);
  const isDrive = video.type === "drive" || video.src.includes("drive.google.com");
  const youtubeId = isYouTube ? getYouTubeId(video.src) : null;
  const driveId = isDrive ? getDriveId(video.src) : null;

  return (
    <div className="fixed left-0 top-0 z-[101] flex h-screen w-screen items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-background/90 absolute left-0 top-0 h-full w-full backdrop-blur-lg"
        onClick={() => setShowVideoPopOver(false)}
      ></motion.div>
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.3,
          opacity: 0,
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative aspect-video w-full max-w-7xl rounded-3xl overflow-hidden"
      >
        {isYouTube && youtubeId ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
            <span
              onClick={() => setShowVideoPopOver(false)}
              className="absolute right-2 top-2 z-10 cursor-pointer rounded-full p-1 transition-colors hover:bg-white/20 bg-black/50"
            >
              <Plus className="size-5 rotate-45 text-white" />
            </span>
          </>
        ) : isDrive && driveId ? (
          <>
            <iframe
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              allow="autoplay"
              allowFullScreen
              className="w-full h-full"
              style={{ width: "100%", height: "100%" }}
            />
            <span
              onClick={() => setShowVideoPopOver(false)}
              className="absolute right-2 top-2 z-10 cursor-pointer rounded-full p-1 transition-colors hover:bg-white/20 bg-black/50"
            >
              <Plus className="size-5 rotate-45 text-white" />
            </span>
          </>
        ) : (
          <MediaController style={{ width: "100%", height: "100%" }}>
            <video
              src={video.src}
              autoPlay
              slot="media"
              className="w-full object-cover"
              style={{ width: "100%", height: "100%" }}
            />
            <span
              onClick={() => setShowVideoPopOver(false)}
              className="absolute right-2 top-2 z-10 cursor-pointer rounded-full p-1 transition-colors hover:bg-white/20"
            >
              <Plus className="size-5 rotate-45 text-white" />
            </span>
            <MediaControlBar className="absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5 mix-blend-exclusion md:px-10 md:py-5">
              <MediaPlayButton className="h-4 bg-transparent" />
              <MediaTimeRange className="bg-transparent [--media-range-thumb-opacity:0] [--media-range-track-height:2px]" />
              <MediaMuteButton className="size-4 bg-transparent" />
            </MediaControlBar>
          </MediaController>
        )}
      </motion.div>
    </div>
  );
}