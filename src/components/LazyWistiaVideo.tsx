import { useEffect, useRef, useState } from "react";

interface LazyWistiaVideoProps {
  mediaId: string;
  aspect?: string;
}

const LazyWistiaVideo = ({ mediaId, aspect = "1.8113207547169812" }: LazyWistiaVideoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Load Wistia scripts only when visible
  useEffect(() => {
    if (!isVisible || scriptsLoaded) return;

    const existingPlayerScript = document.querySelector('script[src="https://fast.wistia.com/player.js"]');
    const existingEmbedScript = document.querySelector(`script[src="https://fast.wistia.com/embed/${mediaId}.js"]`);

    if (!existingPlayerScript) {
      const playerScript = document.createElement("script");
      playerScript.src = "https://fast.wistia.com/player.js";
      playerScript.async = true;
      document.head.appendChild(playerScript);
    }

    if (!existingEmbedScript) {
      const embedScript = document.createElement("script");
      embedScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      embedScript.async = true;
      embedScript.type = "module";
      document.head.appendChild(embedScript);
    }

    setScriptsLoaded(true);
  }, [isVisible, mediaId, scriptsLoaded]);

  return (
    <div ref={containerRef} className="rounded-lg overflow-hidden mb-2">
      {isVisible ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <style>
                wistia-player[media-id='${mediaId}']:not(:defined) {
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
                  display: block;
                  filter: blur(5px);
                  padding-top: 55.21%;
                }
              </style>
              <wistia-player media-id="${mediaId}" aspect="${aspect}"></wistia-player>
            `
          }}
        />
      ) : (
        <div 
          className="bg-muted animate-pulse" 
          style={{ paddingTop: "55.21%" }}
        />
      )}
    </div>
  );
};

export default LazyWistiaVideo;
